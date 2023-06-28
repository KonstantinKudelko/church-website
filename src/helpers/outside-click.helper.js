import { useEffect } from "react";

export function useOutsideClick(ref, setTagListOpen) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTagListOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
      return () => {

        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}