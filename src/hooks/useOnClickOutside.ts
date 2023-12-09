import { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = (
  callback: () => void,
  excludeRefs: RefObject<HTMLElement>[]
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let isClickInsideExcludedRef = false;

      for (const excludeRef of excludeRefs) {
        if (
          excludeRef.current &&
          excludeRef.current.contains(event.target as Node)
        ) {
          isClickInsideExcludedRef = true;
          break;
        }
      }

      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !isClickInsideExcludedRef
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, excludeRefs]);

  return ref;
};
