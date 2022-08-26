# TypeScript-工具泛型

```ts{11}
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
// -表示逻辑取反，-?表示 非可选
type Required<T> = {
    [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

### Partial

该工具类型能够构造一个新类型，并将实际类型参数T中的所有属性变成可选属性
```ts
interface User {
  id: number,
  name: string,
  age: number,
  role: string,
}

const user: User = {
  id: 123,
  name: 'hello',
  age: 18,
  role: 'admin',
}

// 使用内置工具类型Partial将接口中的属性全部变成可选
type OptionalPartial = Partial<User>

const optionalUser: OptionalPartial = {
  name: 'xxx'
}
// 等价于
type OptionalPartial = {
    id?: number | undefined;
    name?: string | undefined;
    age?: number | undefined;
    role?: string | undefined;
}
```

### Required

该工具类型能够构造一个新类型，并将实际类型参数T中的所有属性变为必选(与partial的作用相反)
```ts
// 使用内置工具类型Required将接口中的属性全部变成必选
type UserRequired = Required<User>
// 等价于
type UserRequired = {
    id: number;
    name: string;
    age: number;
    role: string;
}

const userRequired: UserRequired = {
  id: 123,
  name: 'hello',
  age: 18,
  role: 'admin'
}
```

### Record

Record&lt;Keys,Type&gt;构造一个对象类型，Keys 表示对象的属性键 、Type 表示对象的属性值，用于将一种类型属性映射到另一种类型
- 简单的限定键和值的类型
- 基于其他类型生成新的类型
```ts
type FruitTypes = 'apple' | 'orange' | 'banana'
type FruitWeight = Partial<Record<FruitTypes,number>>
// 等价于
type FruitWeight = {
    apple?: number | undefined;
    orange?: number | undefined;
    banana?: number | undefined;
}

const fruits: FruitWeight = {
  apple: 1,
  orange: 2,
  banana: 3,
}
```

### Pick

- 选择想要的属性

该工具类型能够从已有对象类型中选取给定的属性及其类型，然后构建出一个新的对象类型，Pick&lt;T, K&gt;工具类型中的类型参数T表示源对象类型，类型参数K提供了待选取的属性名类型，它必须为对象类型T中存在的属性。相比起遇到细粒度的类型重复去新建interface，使用Pick维护简单，而且不需要管理诸多的Interface。
```ts
type AppleWeight = Pick<FruitWeight,'apple'>

const apple: AppleWeight = {
  apple: 1
}

interface UserInfo  {
  name: string;
  age: number;
  height: number;
  weight: number;
  father: string;
  mother: string;
}

const userBodyInfo: Pick<UserInfo, 'height' | 'weight'> = {
  height: 180,
  weight: 120
}

const userParentsInfo: Pick<UserInfo, 'father' | 'mother'> = {
  father: 'father',
  mother: 'mother'
}
```

### Omit

- 跟Pick相反，把选出的排除掉(在T中删除对应的K)
```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type UnPickTypes = Omit<UserInfo, 'height' | 'weight'>
// 等价于
type UnPickTypes = {
    name: string;
    age: number;
    father: string;
    mother: string;
}

const unPickProps: UnPickTypes = {
  name: 'hello',
  age: 18,
  father: 'father',
  mother: 'mother'
}
```
- Exclude&lt;keyof T, K&gt; 排除掉属于K的子集
- Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt; 选出被排除掉的剩下的props


### Exclude

从一个联合类型中排除属于另一个联合类型的子集
```ts
type UnionType1 = 'name' | 'id'
type UnionType2 = 'name' | 'age'
type Prop = Exclude<UnionType1, UnionType2>
// 等价于
type Prop = "id"
```

### Extract

跟Exclude相反，从一个联合类型中取出属于另一个联合类型的子集
```ts
type Prop2 = Extract<UnionType1, UnionType2>
// 等价于
type Prop2 = "name"
```

### NonNullable

排除null/undefined类型
```ts
// string
type UserName = NonNullable<string | null | undefined>
```

### ReturnType

该工具类型能够获取函数类型T的返回值类型
```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// string
type ResType = ReturnType<(arg: { name: string }) => string>

// { a: string, b: number }
type ResType2 = ReturnType<() => { a: string, b: number }>
```
这里一个新字眼infer，作用是命名变量，这里可以理解成把返回结果类型通过infer命名成R