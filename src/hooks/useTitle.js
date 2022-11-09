import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Farid Kitchen- ${title}`;
  }, [title]);
};

export default useTitle;
