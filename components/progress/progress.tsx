import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "./style/index.scss";

interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles } = props;

  return (
    <div className="ai-progress-bar" style={styles}>
      <div
        className="ai-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div className="ai-progress-bar-inner" style={{ width: `${percent}%` }}>
          {showText && <span className="inner-Text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
};

export default memo(Progress);
