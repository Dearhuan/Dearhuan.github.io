---
prev: /notes/ts-reconstruct.md
next: 
  text: '海外疫情数据'
  link: /others/othersNcovCategory.html
---
# TypeScript 套路二之递归复用做循环

## 递归复用

<strong>递归是把问题分解为一系列相似的小问题，通过函数不断调用自身来解决这一个个小问题，直到满足结束条件，就完成了问题的求解。</strong>

TypeScript 的高级类型支持类型参数，可以做各种类型运算逻辑，返回新的类型，和函数调用是对应的，自然也支持递归。

<strong>TypeScript 类型系统不支持循环，但支持递归。当处理数量（个数、长度、层数）不固定的类型的时候，可以只处理一个类型，然后递归的调用自身处理下一个类型，直到结束条件也就是所有的类型都处理完了，就完成了不确定数量的类型编程，达到循环的效果。</strong>

## Promise的递归复用

### DeepPromiseValueType

```ts
type ttt = Promise<Promise<Promise<Record<string, any>>>>
```
这里是 3 层 Promise，value 类型是索引类型。
数量不确定，一涉及到这个就要想到用递归来做，每次只处理一层的提取，然后剩下的到下次递归做，直到结束条件。
```ts
type DeepPromiseValueType<P extends Promise<unknown>> = 
  P extends Promise<infer ValueType>
    ? ValueType extends Promise<unknown>
      ? DeepPromiseValueType<ValueType>
      : ValueType
    : never

type DeepPromiseRes = DeepPromiseValueType<ttt>
// type DeepPromiseRes = {
//   [x: string]: any;
// }
```
类型参数 P 是待处理的 Promise，通过 extends 约束为 Promise 类型，value 类型不确定，设为 unknown。

每次只处理一个类型的提取，也就是通过模式匹配提取出 value 的类型到 infer 声明的局部变量 ValueType 中。

然后判断如果 ValueType 依然是 Promise类型，就递归处理。

结束条件就是 ValueType 不为 Promise 类型，那就处理完了所有的层数，返回这时的 ValueType。

简化(不再约束类型参数必须是Promise)：
```ts
type DeepPromiseValueType2<T> = 
  T extends Promise<infer ValueType>
    ? DeepPromiseValueType2<ValueType>
    : T

type DeepPromiseRes2 = DeepPromiseValueType2<ttt>
// type DeepPromiseRes2 = {
//   [x: string]: any;
// }
```

## 数组类型的递归

### ReverseArr

设想一个元祖类型：
```ts
type arr = [1,2,3]
```
将其反转过来：
```ts
type arr = [3,2,1]
```

```ts
type ReverseArr<Arr extends unknown[]> = 
  Arr extends [infer One, infer Two, infer Three]
    ? [Three, Two, One]
    : never

type ReverseArrRes = ReverseArr<[1,2,3]>
// type ReverseArrRes = [3, 2, 1]
```

数组长度不确定？
```ts
type ReverseArr2<Arr extends unknown[]> = 
  Arr extends [infer First, ...infer Rest]
    ? [...ReverseArr2<Rest>, First]
    : Arr

type ReverseArrRes2 = ReverseArr2<[1,2,3]>
// type ReverseArrRes2 = [3, 2, 1]
```

### Includes

既然递归可以做循环用，那么像查找元素这种自然也就可以实现。

比如查找 [1, 2, 3, 4, 5] 中是否存在 4，是就返回 true，否则返回false。

从长度不固定的数组中查找某个元素，数量不确定，这时候就应该想到递归。

```ts
//  A 是 B 的子类型并且 B 也是 A 的子类型
type isEqual<A, B> = 
  (A extends B ? true : false) & (B extends A ? true : false)

type Includes<Arr extends unknown[], FindItem> = 
  Arr extends [infer First, ...infer Rest]
    ? isEqual<First, FindItem> extends true
      ? true
      : Includes<Rest, FindItem>
    : false

type IncludesRes = Includes<[1,2,3],3>
// type IncludesRes = true
```

### RemoveItem

删除元素

```ts
type RemoveItem<
  Arr extends unknown[],
  Item,
  Result extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? isEqual<First, Item> extends true
    ? RemoveItem<Rest, Item, Result>
    : RemoveItem<Rest, Item, [...Result, First]>
  : Result

type RemoveItemRes = RemoveItem<[1,2,2,3],2>
// type RemoveItemRes = [1, 3]
```
类型参数 Arr 是待处理的数组，元素类型任意，也就是 unknown[]。类型参数Item 为待查找的元素类型。类型参数 Result 是构造出的新数组，默认值是 []。

通过模式匹配提取数组中的一个元素的类型，如果是 Item 类型的话就删除，也就是不放入构造的新数组，直接返回之前的 Result。

否则放入构造的新数组，也就是再构造一个新的数组 [...Result, First]。

直到模式匹配不再满足，也就是处理完了所有的元素，返回这时候的 Result。

### BuildArray

数组类型的构造，如果构造的数组类型元素个数不确定
```ts
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends Length
  ? Arr
  : BuildArray<Length, Ele, [...Arr, Ele]>

type BuildArrayRes = BuildArray<5, 'x'>
// type BuildArrayRes = ["x", "x", "x", "x", "x"]
```
类型参数 Length 为数组长度，约束为 number。类型参数 Ele 为元素类型，默认值为 unknown。类型参数 Arr 为构造出的数组，默认值是 []。

每次判断下 Arr 的长度是否到了 Length，是的话就返回 Arr，否则在 Arr 上加一个元素，然后递归构造。

## 字符串类型的递归

### ReplaceAll

把一个字符串中的某个字符替换成另一个:
```ts
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
      ? `${Prefix}${To}${Suffix}` : Str

type ReplaceStrRes = ReplaceStr<'he is xxx', 'xxx', 'james'>
// type ReplaceStrRes = "he is james"
```

如果不确定From的个数？

<strong>在类型体操里，遇到数量不确定的问题，就要条件反射的想到递归。</strong>

```ts
type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : Str

type ReplaceAllRes = ReplaceAll<'he is ???', '?', 'xyz'>
// type ReplaceAllRes = "he is xyzxyzxyz"
```
类型参数 Str 是待处理的字符串类型，From 是待替换的字符，To 是替换到的字
符。

通过模式匹配提取 From 左右的字符串到 infer 声明的局部变量 Left 和 Right 里。

用 Left 和 To 构造新的字符串，剩余的 Right 部分继续递归的替换。

结束条件是不再满足模式匹配，也就是没有要替换的元素，这时就直接返回字符串
Str。

### StringToUnion

设想将字符串的每个字符提取出来组成联合类型
```ts
type StringToUnion<Str extends string> = 
  Str extends `${infer One}${infer Two}${infer Three}`
    ? One | Two |Three
    : never

type StringToUnionRes = StringToUnion<'xyz'>
// type StringToUnionRes = "x" | "y" | "z"
```

如果字符串长度不固定？
```ts
type StringToUnion2<Str extends string> = 
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion2<Rest>
    : never

type StringToUnion2Res = StringToUnion2<'abcxyz'>
// type StringToUnion2Res = "a" | "b" | "c" | "x" | "y" | "z"
```

### ReverseStr
```ts
type ReverseStr<
  Str extends string,
  Result extends string = ''
> = Str extends `${infer First}${infer Rest}`
      ? ReverseStr<Rest, `${First}${Result}`>
      : Result

type ReverseStrRes = ReverseStr<'xyz'>
// type ReverseStrRes = "zyx"
```
```ts
type ReverseStr2<Str extends string> = 
  Str extends `${infer First}${infer Rest}`
    ? `${ReverseStr2<Rest>}${First}`
    : Str

type ReverseStr2Res = ReverseStr2<'xyz'> 
// type ReverseStr2Res = "zyx"
```

## 对象类型的递归

### DeepReadonly

对象类型的递归，也可以叫做索引类型的递归。

之前实现了索引类型的映射，给索引加上了 readonly 的修饰：
```ts
type ToReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
type ToReadonlyRes = ToReadonly<{a: string, b: number}>
// type ToReadonlyRes = {
//   readonly a: string;
//   readonly b: number;
// }
```

如果索引类型层数不确定？
```ts
type obj = {
  a: {
    b: {
      c: {
        f: () => 'dong',
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}
```
```ts
type DeepReadonly<Obj extends Record<string, any>> = {
  readonly [Key in keyof Obj]:
    Obj[Key] extends object
      ? Obj[Key] extends Function
        ? Obj[Key]
        : DeepReadonly<Obj[Key]>
      : Obj[Key]
}

type DeepReadonlyRes = DeepReadonly<obj>
// type DeepReadonlyRes = {
//   readonly a: DeepReadonly<{
//       b: {
//           c: {
//               f: () => 'dong';
//               d: {
//                   e: {
//                       guang: string;
//                   };
//               };
//           };
//       };
//   }>;
```
为啥这里没有计算？

因为 ts 只有类型被用到的时候才会做类型计算。

所以可以在前面加上一段 Obj extends never ? never 或者 Obj extends any 等，让它触发计算：
```ts
type DeepReadonly2<Obj extends Record<string, any>> = 
  Obj extends any
    ? {
      readonly [Key in keyof Obj]:
        Obj[Key] extends object
          ? Obj[Key] extends Function
            ? Obj[Key]
            : DeepReadonly2<Obj[Key]>
          : Obj[Key]
    }
    : never

type DeepReadonly2Res = DeepReadonly2<obj>
// type DeepReadonly2Res = {
//   readonly a: {
//       readonly b: {
//           readonly c: {
//               readonly f: () => 'dong';
//               readonly d: {
//                   readonly e: {
//                       readonly guang: string;
//                   };
//               };
//           };
//       };
//   };
```

## 总结

递归是把问题分解成一个个子问题，通过解决一个个子问题来解决整个问题。形式
是不断的调用函数自身，直到满足结束条件。

在 TypeScript 类型系统中的高级类型也同样支持递归，<strong>在类型体操中，遇到数量不确定的问题，要条件反射的想到递归。</strong> 比如数组长度不确定、字符串长度不确定、
索引类型层数不确定等。











