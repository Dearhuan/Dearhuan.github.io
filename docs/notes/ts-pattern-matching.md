# TypeScript 套路一之模式匹配

## 模式匹配

我们知道，字符串可以和正则做模式匹配，找到匹配的部分，提取子组，之后可以用 1,1,2 等引用匹配的子组。
```js
'abc'.replace(/a(b)c/,'$1,$1,$1')
// 'b,b,b'
```
Typescript 的类型也同样可以做模式匹配。

比如这样一个 Promise 类型：
```ts
type p = Promise<'hello'>
```
我们想提取 value 的类型，可以这样做：
```ts
// Promise:
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

type GetValueResult = GetValueType<Promise<'hello'>>;
// // type GetValueResult = "hello"
```
通过 extends 对传入的类型参数 P 做模式匹配，其中值的类型是需要提取的，通过 infer 声明一个局部变量 Value 来保存，如果匹配，就返回匹配到的 Value，否则就返回 never 代表没匹配到。

这就是 Typescript 类型的模式匹配：

<strong>Typescript 类型的模式匹配是通过 extends 对类型参数做匹配，结果保存到通过 infer 声明的局部类型变量里，如果匹配就能从该局部变量里拿到提取出的类型。</strong>

## 数组类型

### First

数组类型想提取第一个元素的类型怎么做呢？
```ts
type arr = [1,2,3]
```
用它来匹配一个模式类型，提取第一个元素的类型到通过 infer 声明的局部变量里返回。
```ts
// GetFirst
type GetFirstArrVal<Arr extends unknown[]> = 
  Arr extends [infer First, ...unknown[]] ? First : never

type GetFirstArrValRes = GetFirstArrVal<[1,2,3]>
// type GetFirstArrValRes = 1

type GetFirstArrValRes2 = GetFirstArrVal<[]>
// type GetFirstArrValRes2 = never
```
类型参数 Arr 通过 extends 约束为只能是数组类型，数组元素是 unkown 也就是可以是任何值。

::: tip
<strong>any 和 unknown 的区别：</strong> any 和 unknown 都代表任意类型，但是 unknown 只能接收任意类型的值，而 any 除了可以接收任意类型的值，也可以赋值给任意类型（除了 never）。类型体操中经常用 unknown 接受和匹配任何类型，而很少把任何类型赋值给某个类型变量。
:::

对 Arr 做模式匹配，把我们要提取的第一个元素的类型放到通过 infer 声明的 First 局部变量里，后面的元素可以是任何类型，用 unknown 接收，然后把局部变量 First 返回。

### Last

可以提取第一个元素，当然也可以提取最后一个元素，修改下模式类型就行：
```ts
type GetLastArrVal<Arr extends unknown[]> = 
  Arr extends [...unknown[], infer Last] ? Last : never

type GetLastArrValRes = GetLastArrVal<[1,2,3]>
// type GetLastArrValRes = 3

type GetLastArrValRes2 = GetLastArrVal<[]>
// type GetLastArrValRes2 = never
```

### PopArr

我们分别取了首尾元素，当然也可以取剩余的数组，比如取去掉了最后一个元素的数组：
```ts
type PopArr<Arr extends unknown[]> = 
  Arr extends [] ? []
    : Arr extends [...infer Rest, unknown] ? Rest : never

type PopArrRes = PopArr<[1,2,3]>
// type PopArrRes = [1, 2]

type PopArrRes2 = PopArr<[]>
// type PopArrRes2 = []
```
如果是空数组，就直接返回，否则匹配剩余的元素，放到 infer 声明的局部变量 Rest 里，返回 Rest。

### ShiftArr

```ts
type ShiftArr<Arr extends unknown[]> = 
  Arr extends [] ? []
    : Arr extends [unknown,...infer Rest] ? Rest : never

type ShiftArrRes = ShiftArr<[1,2,3]>
// type ShiftArrRes = [2, 3]
```

## 字符串类型

字符串类型也同样可以做模式匹配，匹配一个模式字符串，把需要提取的部分放到 infer 声明的局部变量里。

### StarsWith
```ts
type StartWith<Str extends string, Prefix extends string> = 
  Str extends `${Prefix}${string}` ? true : false

type StartWithRes = StartWith<'hello123','hello'>
// type StartWithRes = true

type StartWithRes2 = StartWith<'hello','1'>
// type StartWithRes2 = false
```
需要声明字符串 Str、匹配的前缀 Prefix 两个类型参数，它们都是 string。

用 Str 去匹配一个模式类型，模式类型的前缀是 Prefix，后面是任意的 string，如果匹配返回 true，否则返回 false。

### Replace

字符串可以匹配一个模式类型，提取想要的部分，自然也可以用这些再构成一个新的类型。

比如实现字符串替换：
```ts
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
      ? `${Prefix}${To}${Suffix}` : Str

type ReplaceStrRes = ReplaceStr<'he is xxx', 'xxx', 'james'>
// type ReplaceStrRes = "he is james"

type ReplaceStrRes2 = ReplaceStr<'abc', '?', '123'>
// type ReplaceStrRes2 = "abc"
```
声明要替换的字符串 Str、待替换的字符串 From、替换成的字符串 3 个类型参数，通过 extends 约束为都是 string 类型。

用 Str 去匹配模式串，模式串由 From 和之前之后的字符串构成，把之前之后的字符串放到通过 infer 声明的局部变量 Prefix、Suffix 里。

用 Prefix、Suffix 加上替换到的字符串 To 构造成新的字符串类型返回。

### Trim

能够匹配和替换字符串，那也就能实现去掉空白字符的 Trim：

不过因为我们不知道有多少个空白字符，所以只能一个个匹配和去掉，需要递归。

先实现 TrimRight:
```ts
type TrimStrRight<Str extends string> = 
  Str extends `${infer Rest}${' ' | '\n' | '\t'}`
    ? TrimStrRight<Rest> : Str

type TrimStrRightRes = TrimStrRight<'hello  \n  \t'>
// type TrimStrRightRes = "hello"
```
类型参数 Str 是要 Trim 的字符串。

如果 Str 匹配字符串 + 空白字符 (空格、换行、制表符)，那就把字符串放到 infer 声明的局部变量 Rest 里。

把 Rest 作为类型参数递归 TrimRight，直到不匹配，这时的类型参数 Str 就是处理结果。

同理可得 TrimLeft：
```ts
type TrimStrLeft<Str extends string> = 
  Str extends `${' ' | '\n' | '\t'}${infer Rest}`
    ? TrimStrLeft<Rest> : Str

type TrimStrLeftRes = TrimStrLeft<' \n \t hello'>
// type TrimStrLeftRes = "hello"
```
TrimRight 和 TrimLeft 结合就是 Trim：
```ts
type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>

type TrimStrRes = TrimStr<' \n\thello\n \t'>
// type TrimStrRes = "hello"
```

## 函数

函数同样也可以做类型匹配，比如提取参数、返回值的类型。

### GetParamsType

函数类型可以通过模式匹配来提取参数的类型：
```ts
type GetParamsType<Func extends Function> = 
  Func extends (...args: infer Args) => unknown ? Args : never

type GetParamsTypeRes = GetParamsType<(name: string, age: number) => string>
// type GetParamsTypeRes = [name: string, age: number]
```
类型参数 Func 是要匹配的函数类型，通过 extends 约束为 Function。

Func 和模式类型做匹配，参数类型放到用 infer 声明的局部变量 Args 里，返回值可以是任何类型，用 unknown。

返回提取到的参数类型 Args。

### GetReturnType

```ts
type GetReturnType<Func extends Function> = 
  Func extends (...args: any[]) => infer ReturnType
    ? ReturnType : never

type GetReturnTypeRes = GetReturnType<()=>'hello'>
// type GetReturnTypeRes = "hello"
```
Func 和模式类型做匹配，提取返回值到通过 infer 声明的局部变量 ReturnType 里返回。

参数类型可以是任意类型，也就是 any[]（注意，这里不能用 unknown，这里的解释涉及到参数的逆变性质，具体原因逆变那一节会解释）。

## 总结

就像字符串可以匹配一个模式串提取子组一样，TypeScript 类型也可以匹配一个模式类型提取某个部分的类型。

<strong>TypeScript 类型的模式匹配是通过类型 extends 一个模式类型，把需要提取的部分放到通过 infer 声明的局部变量里，后面可以从这个局部变量拿到类型做各种后续处理。</strong>