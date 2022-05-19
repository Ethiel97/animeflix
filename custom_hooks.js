import { useEffect } from "react";
const useDebounce = (
    effect,
    delay,
    deps,
) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay);

        return () => clearTimeout(handler);
        // using || operator because 
        // if its optional then it can be undefined.
        // eslint-disable-next-line react-hooks/exhaustive-depss
    }, [...(deps || []), delay]);
};
export { useDebounce };