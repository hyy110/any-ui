import React, { memo, useRef } from "react";
import type { FC, ReactNode } from "react";
import axios from "axios";
import Button from "./../button/index";
import { ChangeEvent } from "react";

interface UploadProps {
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const Upload2: FC<UploadProps> = (props) => {
  const { action, onProgress, onSuccess, onError } = props;

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      const formData = new FormData();
      formData.append(file.name, file);
      axios
        .post(action, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (e: any) => {
            let percentage = Math.round((e.loaded * 100) / e.total) || 0;
            if (percentage < 100) {
              if (onProgress) {
                onProgress(percentage, file);
              }
            }
          },
        })
        .then((resp: any) => {
          console.log(resp);
          if (onSuccess) {
            onSuccess(resp.data, file);
          }
        })
        .catch((err: any) => {
          console.log(err);
          if (onError) {
            onError();
          }
        });
    });
  };

  return (
    <div className="ai-upload-component">
      <Button type="primary" onClick={handleClick}>
        upload2
      </Button>
      <input
        type="file"
        className="ai-file-input"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default memo(Upload2);
