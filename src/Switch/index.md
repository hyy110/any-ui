---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 基础组件：
---

# Switch 开关

通用开关组件

## 示例

### 基础使用

```jsx
import { Switch } from "@any_ui/core";

const onClick = (ischecked: boolean) => {
  console.log(ischecked);
};

export default () => (
  <>
    <h3>基本使用</h3>
    <Switch onClick={onClick}></Switch>
    <h3>禁用状态</h3>
    <Switch disabled={true}></Switch>
    <h3>设置主题</h3>
    <Switch activeColor={"green"} inactiveColor={"red"}></Switch>
    <h3>设置宽度</h3>
    <Switch width={80}></Switch>
    <h3>加入文本</h3>
    <Switch activeValue={"开启"} inactiveValue={"关闭"}></Switch>
  </>
);
```

## Switch API

|      参数      |       说明       |              类型               | 默认值 |
| :------------: | :--------------: | :-----------------------------: | :----: |
|   ischecked    | 指定当前是否选中 |            `boolean`            | false  |
|   className    | Switch 容器类名  |            `string`             |   --   |
| defaultChecked |   初始是否选中   |            `boolean`            |  true  |
|    disabled    |     是否禁用     |            `boolean`            | false  |
|     width      |     开关大小     |            `string`             |  40px  |
|  activeColor   |     开启颜色     |            `string`             |   --   |
| inactiveColor  |     关闭颜色     |            `string`             |   --   |
|  activeValue   |     开启文本     |            `string`             |   --   |
| inactiveValue  |     关闭文本     |            `string`             |   --   |
|    onClick     |     点击回调     | `(ischecked?: boolean) => void` |   --   |
