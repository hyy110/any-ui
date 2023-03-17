import React, { memo } from "react";
import { UploadFile } from "./upload2";
import type { FC } from "react";
import "./style/index.scss";
import file from "../../public/assets/Icon/uploading-file.svg";
import uploadingfile from "../../public/assets/Icon/uploading-file.svg";
import errorfile from "../../public/assets/Icon/error-file.svg";
import success from "../../public/assets/Icon/success.svg";
import uploading from "../../public/assets/Icon/uploading.svg";
import error from "../../public/assets/Icon/error.svg";
import remove from "../../public/assets/Icon/remove.svg";

interface uploadList2Props {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

const uploadList2: FC<uploadList2Props> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="ai-upload-list">
      {fileList.map((item) => {
        return (
          <li
            className="ai-upload-list-item"
            key={item.uid}
            onClick={() => onRemove(item)}
          >
            <span className={`file-name file-name-${item.status}`}>
              {item.status === "success" ? (
                <img className="image" src={file} />
              ) : item.status === "ready" ? (
                <img className="image" src={uploadingfile} />
              ) : (
                <img className="image" src={errorfile} />
              )}
              {item.name}
            </span>
            {item.status === "success" ? (
              <img className="image-s" src={success} />
            ) : item.status === "ready" ? (
              <img className="image-s" src={uploading} />
            ) : (
              <img className="image-s" src={error} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(uploadList2);
