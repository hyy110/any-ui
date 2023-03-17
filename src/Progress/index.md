---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据录入：
---

# Progress 进度

进度控件。

```jsx
import { Upload2 } from "@any_ui/core";
const defaultFileList: UploadFile[] = [
  { uid: "12", size: 1234, name: "ux.txt", status: "success", percentage: 30 },
  { uid: "123", size: 1234, name: "ux.txt", status: "error", percentage: 30 },
];
export default () => (
  <>
    <Upload2
      action="https://my-json-server.typicode.com/typicode/demo/posts"
      defaultFileList={defaultFileList}
      onRemove={() => {
        console.log("delete");
      }}
      // onProgress={(percentage, file) => {
      //   console.log("progress", percentage);
      // }}
      // onSuccess={(data, file) => {
      //   console.log("success", data);
      // }}
      // onError={(err, file) => {
      //   console.log("error", err);
      // }}
      // onChange={() => {
      //   console.log("change");
      // }}
    ></Upload2>
  </>
);
```
