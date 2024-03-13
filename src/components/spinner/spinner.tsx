import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

type Props = {};

export const Spinner: FC<Props> = (props) => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#5fbf77"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
