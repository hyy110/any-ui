---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据录入：
---

# Upload2 上传

文件选择上传控件。

```jsx
import { Upload2 } from "@any_ui/core";

export default () => (
  <>
    <Upload2
      action="https://my-json-server.typicode.com/typicode/demo/posts"
      onSuccess={() => {
        console.log("success");
      }}
      onError={() => {
        console.log("error");
      }}
    ></Upload2>
  </>
);
```
