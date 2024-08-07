import { AiOutlineLoading } from "react-icons/ai";

// Functional component for displaying a loading spinner
export const Loading = () => {
  return (
    <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm grid place-items-center">
      <div className="bg-black/30 rounded-2xl size-32 flex flex-col items-center justify-center px-5 pt-5 pb-1">
        <AiOutlineLoading className="text-white size-full animate-spin duration-400" />
        <h1 className="text-xl font-bold tracking-wide text-white animate-pulse">
          Loading
        </h1>
      </div>
    </div>
  );
};
