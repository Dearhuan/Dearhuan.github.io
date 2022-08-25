# TypeScript-接口

在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

- 对象的形状
```ts
interface Person {
  name: string;
  age: number;
}

let james: Person = {
  name: 'james',
  age: 18
}
```
- 可选 & 只读属性
```ts
interface Person {
  readonly name: string;
  age?: number;
}
```
只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 ReadonlyArray&lt;T&gt; 类型，它与 Array&lt;T&gt; 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
```ts
let a: Array<number> = [1,2,3,4];
let arr: ReadonlyArray<number> = a;
arr.push(5); // error
arr[0] = 6; // error
arr.length = 10; // error
a = arr; // error
```

- 任意属性

有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用<strong>索引签名</strong>的形式来满足上述要求。
```ts{4,9}
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

const p1 = { name: 'james' };
const p2 = { name: 'james', age: 5 };
const p3 = { name: 'james', sex: 'male' };
```

- 接口与类型别名的区别

1.Objects/Functions

接口和类型别名都可以用来描述对象的形状或函数签名：
```ts
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number; y: number): void;
}
```
```ts
type Point = {
  x: number;
  y: number;
}

type SetPoint = (x: number; y: number) => void;
```

2.Other Types

与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组：
```ts{2,9,12}
// primitive
type Name = string;

// object
type PointX = { x: number };
type PointY = { y: number };

// union
type Point = PointX | PointY

// tuple
type Data = [number, string]
```

3.Extend

接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。

Interface extends interface
```ts
interface PartialPointX { x: number; }
interface Point extends PartialPointX { 
  y: number; 
}
```
Type alias extends type alias
```ts
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };
```
Interface extends type alias
```ts
type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }
```
Type alias extends interface
```ts
interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
```

4.Implements

类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型：
```ts
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; };

// A class can only implement an object type or 
// intersection of object types with statically known members.
class SomePartialPoint implements PartialPoint { // Error
  x = 1;
  y = 2;
}
```

5.Declaration merging

与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
```ts
interface Point {
  x: number;
}
interface Point {
  y: number;
}

const p: Point = {
  x: 1,
  y: 2
}
```