import "@lottiefiles/lottie-player";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsPageLoading } from "../redux/features/generalSlice";

const PageLoading = () => {
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   if(isLoading) {
  //     dispatch(setIsPageLoading(true))
  //   }
  // },[])
  return (
    <div className=" fixed inset-0 h-screen overflow-y-hidden flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-[2px]">
      <div className=" w-[200px] md:w-[300px]">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_a2chheio.json"
          style={{ width: "100%" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default PageLoading;
