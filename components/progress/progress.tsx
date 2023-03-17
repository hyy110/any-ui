import React, { memo } from "react";
import type { FC, ReactNode } from "react";

export interface ProgressProps {
  children?: ReactNode;
}

const Progress: FC<ProgressProps> = () => {
  return <div>Progress</div>;
};

export default memo(Progress);
