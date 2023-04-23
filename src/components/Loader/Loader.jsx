import { ThreeDots } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled.jsx";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="7"
        color="#ae7be3"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
