---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Progress 进度

通用进度组件

## 示例

### 基础使用

```jsx
import { Progress } from "@any_ui/core";

export default () => (
  <>
    <Progress percent={30}></Progress>
  </>
);
```
