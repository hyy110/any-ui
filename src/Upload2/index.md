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
const defaultFileList = [];
export default () => (
  <>
    <Upload2
      action="https://my-json-server.typicode.com/typicode/demo/posts"
      defaultFileList={defaultFileList}
      name="filename"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "ai" }}
      // accept=".jpg"
      multiple
      // onRemove={() => {
      //   console.log("delete");
      // }}
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
    >
      Upload file
    </Upload2>

    <h3>可拖拽</h3>
    <Upload2
      action="https://my-json-server.typicode.com/typicode/demo/posts"
      defaultFileList={defaultFileList}
      name="filename"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "ai" }}
      // accept=".jpg"
      multiple
      drag={true}
      // onRemove={() => {
      //   console.log("delete");
      // }}
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
    >
      Upload file
    </Upload2>
  </>
);
```
