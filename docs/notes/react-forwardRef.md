# React下父组件如何调用函数组件形式的子组件的方法

## 子组件
```tsx
import { forwardRef, useImperativeHandle } from 'react';

export type SubComponentProps = {
  onClick: () => void;
};
const SubComponent = forwardRef((props: SubComponentProps, ref) => {
  const onClick = props.onClick;

  const log = () => console.log('onClick');
  useImperativeHandle(ref, () => ({
    log: log,
  }));

  return (
    <div
      style={{
        backgroundColor: 'blue',
        position: 'relative',
        width: '100%',
        aspectRatio: '1',
      }}
      onClick={onClick}
    />
  );
});
```

## 父组件
```tsx
import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const ParentComponent: React.FC = () => {
  const ref = useRef<any>(null);

  const onClick = () => {
    ref.current.log();
  };

  return (
    <PageContainer
      ghost
      title={false}
      subTitle="父组件"
      header={{
        breadcrumb: {},
      }}
    >
      <SubComponent ref={ref} onClick={onClick} />
    </PageContainer>
  );
};

export default ParentComponent;
```