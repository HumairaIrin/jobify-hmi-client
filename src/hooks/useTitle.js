import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Jobify HMI`;
    }, [title])
};

export default useTitle;