import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]); // Updates when 'title' changes
};

export default useDocumentTitle;
