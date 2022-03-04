
import { useRef, useEffect, useState} from "react";
import { useRouter } from 'next/router'

export function useHorizontalScroll({active, setActive}:any) {
  const elRef = useRef(); 
  const router = useRouter()
  const [able, setAble] = useState(true)

  useEffect(() => {
    const el:any = elRef.current;
    if (el) {
      const onWheel = (e:any) => {
        if (e.deltaY == 0 || !able) {};
        e.preventDefault();
        if (e.deltaY > 0 && !active && able){
          setAble(false)
          setActive(true)
          setTimeout(()=>setAble(true), 700)
        } else if (e.deltaY < 0 && active && able){   
          setAble(false)
          setActive(false)
          setTimeout(()=>setAble(true), 700)
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
  }, [active, able]);
  return elRef;
}
