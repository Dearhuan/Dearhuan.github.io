---
prev: 
  text: 'TypeScript笔记'
  link: /notes/ts-category-notes.html
next: /notes/ts-study-base.md
---
# Typescript使用示例

```ts
const string: string = "hello";
const number: number = 123;
const bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

enum Color {
  RED,
  PINK,
  BLUE,
}
const pink: Color = Color.PINK;
console.log(pink);

enum Country {
  CHINA = "China",
  JAPAN = "Japan",
  AMERICA = "America",
}
const japan: Country = Country.JAPAN;
console.log(japan);

const enum Color2 {
  RED,
  PINK,
  BLUE,
}

const color2: Color2[] = [Color2.RED, Color2.PINK, Color2.BLUE];
console.log(color2);

const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: Array<string> = ["1"];
const arr4: Array<string | number> = [1, "2", 3];
const arr5: Array<any> = [
  1,
  "1",
  NaN,
  {},
  /dd/,
  true,
  undefined,
  null,
  () => {},
];
const arr6: any[] = [1, "2", {}, []];

const tuple1: [string, number] = ["1", 1];

// const ele: any = document.getElementById("app");

let value: unknown;

value = true;
value = 1;
value = "1";
value = [];
value = {};

let v1: unknown = value;
let v2: any = value;
// let v3: boolean = value; // Type 'unknown' is not assignable to type 'boolean'
// let v4: string = value; // Type 'unknown' is not assignable to type 'string'
// let v5: number = value; // Type 'unknown' is not assignable to type 'number'
// let v6: object = value; // Type 'unknown' is not assignable to type 'object'

const func = (name: string): void => {
  console.log("hello" + name);
};
const funb = (name: string): string => {
  return "hello" + name;
};
const funa = (name: string, age: number, isAdult: boolean): object => {
  const obj = {
    name,
    age,
    isAdult,
  };
  return obj;
};

const neverFuc = (): never => {
  throw new Error("error");
};

let object1: object;
// object1 = 1 //Type 'number' is not assignable to type 'object'
// object1 = "1"; //Type 'string' is not assignable to type 'object'
// object1 = true //Type 'boolean' is not assignable to type 'object'
// object1 = null; //Type 'null' is not assignable to type 'object'
// object1 = undefined //Type 'undefined' is not assignable to type 'object'
object1 = [];
object1 = {};

let object2: Object;
object2 = 1;
object2 = "1";
object2 = true;
// object2 = undefined//Type 'undefined' is not assignable to type 'Object'
// object2 = null; //Type 'null' is not assignable to type 'Object'
object2 = [];
object2 = {};

let name1: string | number;
name1 = 1;
console.log(name1.toFixed());
name1 = "hello";
console.log(name1.length);

let str: any = "string";
let strLength: number = (<string>str).length;

let str1: any = "string";
let strLength1: number = (str as string).length;

let flag1: undefined | null | string;
flag1!.toString();
flag1?.toString();
// flag1.toString() // Object is possibly 'null' or 'undefined'
let flag2: "1" = "1";
let flag3: 1 = 1;
let flag4: true = true;

type flag = string | number;
function hello(name: flag) {
  return name;
}

type Type1 = { x: number };
type Type2 = Type1 & { y: string };

let type1: Type2 = {
  x: 1,
  y: "1",
};

const doubleFunc = (input: number | string | boolean): any => {
  if (typeof input == "number") {
    return input * 2;
  } else if (typeof input == "string") {
    return input + "";
  } else {
    return !input;
  }
};

interface Boy {
  like: string;
}
interface Gril {
  love: string;
}

const emo = (action: Boy | Gril) => {
  if ("love" in action) {
    return action.love;
  }
  return action.like;
};
type FuncA = (x: number, y: number) => number;
const sumFuncA: FuncA = (a, b) => {
  return a + b;
};

const funcB = (name: string, age?: number): void => {
  console.log(name, age);
};

const funcD = (name: string, like: string = "apple") => {
  console.log(name, like);
};

class User {
  myname: string;
  constructor(myname: string) {
    this.myname = myname;
  }
  get name() {
    return this.myname;
  }
  set name(value) {
    this.myname = value;
  }
}

interface People {
  readonly name: string;
  age: number;
  address?: string;
  likes?: any[];
}

const funcP = (man: People): People => {
  return man;
};
console.log(
  funcP({
    name: "helo",
    age: 18,
    address: "xxx",
    likes: [],
  })
);

const createArray = <T>(length: number, value: T): Array<T> => {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray<string>(3, "x"); // ['x', 'x', 'x']

const swap = <U, T>(tuple: [U, T]): [T, U] => {
  return [tuple[1], tuple[0]];
};
swap([1, "2"]);
```