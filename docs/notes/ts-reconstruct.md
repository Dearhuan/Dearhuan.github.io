# TypeScript 套路二之重新构造做变换

类型编程主要的目的就是对类型做各种转换，那么如何对类型做修改呢？

TypeScript 类型系统支持 3 种可以声明任意类型的变量： type、infer、类型参数。

type 叫做类型别名，其实就是声明一个变量存储某个类型：

infer 用于类型的提取，然后存到一个变量里，相当于局部变量：

类型参数用于接受具体的类型，在类型运算中也相当于局部变量：

但是，严格来说这三种也都不叫变量，因为它们不能被重新赋值。

TypeScript 设计可以做类型编程的类型系统的目的就是为了产生各种复杂的类型，那不能修改怎么产生新类型呢？

答案是重新构造。

这就涉及到了第二个类型体操套路：重新构造做变换。

## 重新构造

<strong>TypeScript 的 type、infer、类型参数声明的变量都不能修改，想对类型做各种变换产生新的类型就需要重新构造。</strong>

## 数组类型的重新构造

### Push
有这样一个元组类型：
```ts
type tuple = [1,2,3]
```
我想给这个元组类型再添加一些类型，怎么做呢？

TypeScript 类型变量不支持修改，我们可以构造一个新的元组类型：
```ts
type Push<Arr extends unknown[], Ele> = [...Arr, Ele] 

type PushResult = Push<[1,2,3],4>
// type PushResult = [1, 2, 3, 4]
```
类型参数 Arr 是要修改的数组/元组类型，元素的类型任意，也就是 unknown。

类型参数 Ele 是添加的元素的类型。

返回的是用 Arr 已有的元素加上 Ele 构造的新的元组类型。

### Unshift
可以在后面添加，同样也可以在前面添加：
```ts
type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]

type UnshiftResult = Unshift<[1,2,3],0>
// type UnshiftResult = [0, 1, 2, 3]
```

### Zip
有这样两个元组：
```ts
type tuple1 = [1,2]
type tuple2 = ['ts','js']
```
我们想把它们合并成这样的元组：
```ts
type tuple = [[1,'ts'],[2,'js']]
```
思路很容易想到，提取元组中的两个元素，构造成新的元组：
```ts
type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> = 
  One extends [infer OneFirst, infer OneSecond] 
    ? Other extends [infer OtherFirst, infer OtherSecond]
      ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
        : []
          : []

type ZipResult = Zip<[1, 2], ['ts', 'js']>
// type ZipResult = [[1, "ts"], [2, "js"]]
```
两个类型参数 One、Other 是两个元组，类型是 [unknown, unknown]，代表 2
个任意类型的元素构成的元组。

通过 infer 分别提取 One 和 Other 的元素到 infer 声明的局部变量 OneFirst、OneSecond、OtherFirst、OtherSecond 里。

用提取的元素构造成新的元组返回即可

处理任意个数元祖的合并：
```ts
type Zip2<One extends unknown[], Other extends unknown[]> = 
  One extends [infer OneFirst, ...infer OneRest]
    ? Other extends [infer OtherFirst, ...infer OtherRest]
      ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
        : []
          : []

type Zip2Result = Zip2<[1,2,3],['ts','js','es']>
// type Zip2Result = [[1, "ts"], [2, "js"], [3, "es"]]
```

## 字符串类型的重新构造

### CapitalizeStr
我们想把一个字符串字面量类型的 'guang' 转为首字母大写的 'Guang'。
需要用到字符串类型的提取和重新构造：
```ts
type CapitalizeStr<Str extends string> = 
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}` : Str

type CapitalizeStrResult = CapitalizeStr<'hello'>
// type CapitalizeStrResult = "Hello"
```
我们声明了类型参数 Str 是要处理的字符串类型，通过 extends 约束为 string。

通过 infer 提取出首个字符到局部变量 First，提取后面的字符到局部变量 Rest。

然后使用 TypeScript 提供的内置高级类型 Uppercase 把首字母转为大写，加上
Rest，构造成新的字符串类型返回。

这就是字符串类型的重新构造：<strong>从已有的字符串类型中提取出一些部分字符串，经过一系列变换，构造成新的字符串类型。</strong>

### CamelCase

我们再来实现 dong_dong_dong 到 dongDongDong 的变换。

同样是提取和重新构造：
```ts
type CamelCase<Str extends string> = 
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
      : Str

type CamelCaseResult = CamelCase<'dong_dong_dong'>
// type CamelCaseResult = "dongDongDong"
```
类型参数 Str 是待处理的字符串类型，约束为 string。

提取 _ 之前和之后的两个字符到 infer 声明的局部变量 Left 和 Right，剩下的字符
放到 Rest 里。

然后把右边的字符 Right 大写，和 Left 构造成新的字符串，剩余的字符 Rest 要继
续递归的处理。

这样就完成了从下划线到驼峰形式的转换

### DropSubStr

可以修改自然也可以删除，我们再来做一个删除一段字符串的案例：删除字符串中
的某个子串
```ts
type DropSubStr<Str extends string, SubStr extends string> = 
  Str extends `${infer Prefix}${SubStr}${infer Suffix}`
    ? DropSubStr<`${Prefix}${Suffix}`, SubStr> : Str

type DropSubStrResult = DropSubStr<'hi!!!','!'>
// type DropSubStrResult = "hi"
```
类型参数 Str 是待处理的字符串， SubStr 是要删除的字符串，都通过 extends 约
束为 string 类型。
通过模式匹配提取 SubStr 之前和之后的字符串到 infer 声明的局部变量 Prefix、Suffix 中。

如果不匹配就直接返回 Str。

如果匹配，那就用 Prefix、Suffix 构造成新的字符串，然后继续递归删除 SubStr。直到不再匹配，也就是没有 SubStr 了。

## 函数类型的重新构造

### AppendArgument

之前我们分别实现了参数和返回值的提取，那么重新构造就是用这些提取出的类型
做下修改，构造一个新的类型即可。

比如在已有的函数类型上添加一个参数：
```ts
type AppendArgument<Func extends Function, Arg> = 
  Func extends (...args: infer Args) => infer ReturnType
    ? (...args: [...Args, Arg]) => ReturnType : never

type AppendArgumentResult = AppendArgument<(name: string) => boolean, number>
// type AppendArgumentResult = (args_0: string, args_1: number) => boolean
```
类型参数 Func 是待处理的函数类型，通过 extends 约束为 Function，Arg 是要添加的参数类型。

通过模式匹配提取参数到 infer 声明的局部变量 Args 中，提取返回值到局部变量ReturnType 中。

用 Args 数组添加 Arg 构造成新的参数类型，结合 ReturnType 构造成新的函数类型返回。

## 索引类型的重新构造

索引类型是聚合多个元素的类型，class、对象等都是索引类型，比如这就是一个索引类型(可以添加修饰符 readonly（只读）、?（可选）)：
```ts
type obj = {
  readonly name: string;
  age?: number;
  gender: boolean;
}
```
对它的修改和构造新类型涉及到了映射类型的语法：
```ts
type Mapping<Obj extends object> = {
  [key in keyof Obj]: Obj[key]
}
```
### Mapping

映射的过程中可以对 value 做下修改，比如：
```ts
type Mapping2<Obj extends object> = {
  [key in keyof Obj]: [Obj[key],Obj[key],Obj[key]]
}
type Mapping2Res = Mapping2<{a: 1, b: 2}>
// type Mapping2Res = {
//   a: [1, 1, 1];
//   b: [2, 2, 2];
// }
```
类型参数 Obj 是待处理的索引类型，通过 extends 约束为 object。

用 keyof 取出 Obj 的索引，作为新的索引类型的索引，也就是 Key in keyof Obj。

值的类型可以做变换，这里我们用之前索引类型的值 Obj[Key] 构造成了三个元素的元组类型 [Obj[Key], Obj[Key], Obj[Key]]

### UppercaseKey

除了可以对 Value 做修改，也可以对 Key 做修改，使用 as，这叫做 重映射 ：

比如把索引类型的 Key 变为大写。
```ts
type UppercaseKey<Obj extends object> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key]
}
type UppercaseKeyRes = UppercaseKey<{a: 1, b: 2}>
// type UppercaseKeyRes = {
//   A: 1;
//   B: 2;
// }
```
类型参数 Obj 是待处理的索引类型，通过 extends 约束为 object。

新的索引类型的索引为 Obj 中的索引，也就是 Key in keyof Obj，但要做一些变
换，也就是 as 之后的。

通过 Uppercase 把索引 Key 转为大写，因为索引可能为 string、number、
symbol 类型，而这里只能接受 string 类型，所以要 & string，也就是取索引中
string 的部分。

value 保持不变，也就是之前的索引 Key 对应的值的类型 Obj[Key]。

这样构造出的新的索引类型，就把原来索引类型的索引转为了大写

### Record

TypeScript 提供了内置的高级类型 Record 来创建索引类型：
```ts
type Record<K extends string | number | symbol, T> = { [P in K]: T }
```
指定索引和值的类型分别为 K 和 T，就可以创建一个对应的索引类型。

上面的索引类型的约束我们用的 object，其实更语义化一点我推荐用
Record<string, any>：
```ts
type UppercaseKeyWithRecord<Obj extends Record<string, any>> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key]
}
```
也就是约束类型参数 Obj 的 key 为 string，值为任意类型的索引类型。

### ToReadonly

索引类型的索引可以添加 readonly 的修饰符，代表只读。

那我们就可以实现给索引类型添加 readonly 修饰的高级类型：
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
通过映射类型构造了新的索引类型，给索引加上了 readonly 的修饰，其余的保持不变，索引依然为原来的索引 Key in keyof T，值依然为原来的值 T[Key]。

### ToPartial

同理，索引类型还可以添加可选修饰符：
```ts
type ToPartial<T> = {
  [K in keyof T]?: T[K]
}
type ToPartialRes = ToPartial<{a: string, b: number}>
// type ToPartialRes = {
//   a?: string | undefined;
//   b?: number | undefined;
// }
```

### ToMutable

可以添加 readonly 修饰，当然也可以去掉：
```ts
type ToMutable<T> = {
  -readonly [K in keyof T]: T[K]
}
type ToMutableRes = ToMutable<{readonly a: string, b: number}>
// type ToMutableRes = {
//   a: string;
//   b: number;
// }
```

### ToRequired

同理，也可以去掉可选修饰符：
```ts
type ToRequired<T> = {
  [K in keyof T]-?: T[K]
}
type ToRequiredRes = ToRequired<{a?: string, b: number}>
// type ToRequiredRes = {
//   a: string;
//   b: number;
// }
```

### FilterByValueType

可以在构造新索引类型的时候根据值的类型做下过滤：
```ts
type FilterByValueType<
  Obj extends Record<string, any>,
  ValueType
> = {
  [Key in keyof Obj
    as Obj[Key] extends ValueType ? Key : never]
      : Obj[Key]
}
interface Person {
  name: string,
  age: number,
  hobby: string[]
}
type FilterRes = FilterByValueType<Person, string | number>
// type FilterRes = {
//   name: string;
//   age: number;
// }
```
类型参数 Obj 为要处理的索引类型，通过 extends 约束为索引为 string，值为任意类型的索引类型 Record<string, any>。

类型参数 ValueType 为要过滤出的值的类型。

构造新的索引类型，索引为 Obj 的索引，也就是 Key in keyof Obj，但要做一些变换，也就是 as 之后的部分。

如果原来索引的值 Obj[Key] 是 ValueType 类型，索引依然为之前的索引 Key，否则索引设置为 never，never 的索引会在生成新的索引类型时被去掉。

值保持不变，依然为原来索引的值，也就是 Obj[Key]。

这样就达到了过滤索引类型的索引，产生新的索引类型的目的

## 总结

TypeScript 支持 type、infer、类型参数来保存任意类型，相当于变量的作用。

但其实也不能叫变量，因为它们是不可变的。<strong>想要变化就需要重新构造新的类型，并且可以在构造新类型的过程中对原类型做一些过滤和变换。</strong>

数组、字符串、函数、索引类型等都可以用这种方式对原类型做变换产生新的类
型。其中索引类型有专门的语法叫做映射类型，对索引做修改的 as 叫做重映射。