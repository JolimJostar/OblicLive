
import { useRef, useEffect} from "react";

export function useHorizontalScroll({active, setActive}:any) {
  const elRef = useRef(); 

  useEffect(() => {
    const el:any = elRef.current;
    if (el) {
      const onWheel = (e:any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        if (e.deltaY > 0 && !active){
          setActive(true)
          return;
        } else if (e.deltaY < 0 && active){   
          setActive(false)
          return
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [active]);
  return elRef;
}
