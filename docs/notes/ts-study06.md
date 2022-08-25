# TypeScript-函数

- TypeScript 函数与 JavaScript 函数的区别

|TypeScript|JavaScript|
|:--:|---:|
|含有类型|无类型|
|箭头函数|箭头函数（ES2015）|
|函数类型|无函数类型|
|必填和可选参数|所有参数都是可选的|
|默认参数|默认参数|
|剩余参数|剩余参数|
|函数重载|无函数重载|

- 箭头函数

1.常见语法
```ts
list.forEach(() => console.log('hello'));

list.forEach(title => console.log(title));

list.forEach((item, i, arr) => 
  console.log(`${i}-${item}`)
);

list.forEach((item, i, arr) => {
  console.log(`${i}-${item}`)
});
```

2.使用示例
```ts
// 未使用箭头函数
function Book() {
  let self = this;
  self.publishDate = 2016;
  setInterval(function () {
    console.log(self.publishDate);
  }, 1000);
}

// 使用箭头函数
function Book() {
  this.publishDate = 2016;
  setInterval(() => {
    console.log(this.publishDate);
  }, 1000);
}
```

3.参数类型和返回类型
```ts
const createUserId = (name:string, id: number): string => {
  return name + id
}
```

4.函数类型
```ts
let IdGenerator: (chars: string, nums: number) => string

const createUserId = (name:string, id: number): string => {
  return name + id
}

IdGenerator = createUserId;
```

5.可选参数和默认参数
::: warning
在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
:::
```ts
// 可选参数
const createUserId = (name:string, id: number, age?: number): string => {
  return name + id
}

// 默认参数
const createUserId = (name:string = 'hello', id: number, age?: number): string => {
  return name + id
}
```
在声明函数时，可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。