---
prev: /notes/ts-study-function.md
next: /notes/ts-study-interface.md
---
# TypeScript-数组和对象

- 数组解构
```ts
let x: number; let y: number; let z: number;
let arr = [0,1,2,3,4];
[x,y,z] = arr;
```

- 数组展开运算符
```ts
let arr = [0,1];
let list = [...arr, 2,3,4];
```

- 数组遍历
```ts
let colors: string[] = ['red','green','blue'];
// let colors: Array<string> = ['red','green','blue'];
for(let i in colors){
  console.log(i);
}
```

- 对象解构
```ts
let person = {
  name: 'hello',
  sex: 'male'
}

let { name, sex } = person;
```

- 对象展开运算符
```ts
let person = {
  name: 'hello',
  sex: 'male',
  address: 'China',
}

// 组装对象
let personA = { ...person, age: 18 };

// 获取除了某些项外的其他项
let { name, ...rest } = person;
```
