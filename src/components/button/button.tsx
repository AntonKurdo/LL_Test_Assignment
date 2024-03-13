import { FC, memo } from "react";

import "./styles.scss";

type Props = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export const Button: FC<Props> = memo(({ isActive, title, onPress }) => {
  return (
    <div
      onClick={onPress}
      className={isActive ? "containerActive" : "containerNonActive"}
    >
      <label>{title}</label>
    </div>
  );
});
