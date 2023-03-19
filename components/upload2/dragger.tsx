import React, { memo, useState, DragEvent } from "react";
import type { FC, ReactNode } from "react";
import classNames from "classnames";
import "./style/dragger.scss";

interface DraggerProps {
  onFile: (files: FileList) => void;
  children?: ReactNode;
}

const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;

  const [dragOver, setdragOver] = useState(false);
  const draggerClass = classNames("ai-upload-dragger", {
    isDragover: dragOver,
  });
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setdragOver(over);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setdragOver(false);
    onFile(e.dataTransfer.files);
  };
  return (
    <div
      className={draggerClass}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={(e) => {
        handleDrop(e);
      }}
    >
      {children}
    </div>
  );
};

Dragger.defaultProps = {
  children: "Drag file over to upload",
};

export default memo(Dragger);
