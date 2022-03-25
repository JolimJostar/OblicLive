
import { useRef, useEffect} from "react";
import { useRouter } from 'next/router'

let able = true;

export function useHorizontalScroll({active, setActive}:any) {
  const elRef = useRef(); 
  const router = useRouter()

  useEffect(() => {
    const el:any = elRef.current;
    if (el) {
      const onWheel = (e:any) => {
        if (e.deltaY == 0 || !able) {};
        e.preventDefault();
        if (e.deltaY > 0 && !active && able){
          able = false
          setActive(true)
          setTimeout(()=>able = true, 700)
        } else if (e.deltaY < 0 && active && able){   
          able = false
          setActive(false)
          setTimeout(()=>able = true, 700)
        } else if (e.deltaY > 0 && active && able){
          router.push({
            pathname: '/about',
            query: { scrolable: true }
          })
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [active, router, setActive]);
  return elRef;
}
