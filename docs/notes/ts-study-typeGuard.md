---
prev: /notes/ts-study-declare.md
next: /notes/ts-study-unionType.md
---
# TypeScript-类型守卫

<strong>类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。</strong>换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。目前主要有四种的方式来实现类型保护：

- in 关键字
```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin

function printEmployeeInfomation(emp: UnknownEmployee){
  console.log(`name:${emp.name}`);
  if('privileges' in emp){
    console.log(`privileges:${emp.privileges}`)
  }
  if('startDate' in emp){
    console.log(`startDate:${emp.startDate}`)
  }
}
```

- typeof 关键字
```ts
function padLeft(value: string, padding: string | number){
  if(typeof padding === 'number'){
    return Array(padding + 1).join(" ") + value;
  }
  if(typeof padding === 'string'){
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
```
typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，"typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

- instanceof 关键字
```ts
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}
```

- 自定义类型保护的类型谓词
```ts
function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}
```