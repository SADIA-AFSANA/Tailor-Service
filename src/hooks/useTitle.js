import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tailor Service`;
    }, [title])
};
export default useTitle;