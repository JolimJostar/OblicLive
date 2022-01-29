import Menu from "@components/MenuComponent/Menu";
import {StoreProvider} from "@components/GlobalState/store"
import type { AppProps } from "next/app";
import "styles/main.scss";
import "tailwindcss/tailwind.css";
import Cursor from "@components/Cursor";
import { useEffect, useRef } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }: any) => <div >{children}</div>

function MyApp({ Component, pageProps }: AppProps) {

  const dot = useRef<any>(null)
  const outline = useRef<any>(null)

  const delay = 1
  const scaleDot = useRef(1)
  const cursorVisible = useRef(true)
  const cursorHover = useRef(false)
  const cursorEnlar = useRef(false)

  const getXY = (what:String) => {
    if (typeof window !== 'undefined'){
      if (what === 'Height'){
        return window.innerHeight / 2
      } else if (what === 'Width'){
        return window.innerWidth / 2
      } else {
        return null
      }
    }
  }

  const endX = useRef<any>(getXY("Height")) 
  const endY = useRef<any>(getXY("Width")) 

  const _x = useRef(0)
  const _y = useRef(0)

  const requestRef = useRef<any>(null)

  const toggleCursorVisibility = () => {
      if (cursorVisible.current){
          dot.current.style.opacity = 1
          outline.current.style.opacity = 1
      } else {
          dot.current.style.opacity = 0
          outline.current.style.opacity = 0
      }
  }

  const toggleCursorOpacity = () => {
    if (cursorHover.current) {
      dot.current.style.opacity = 0.6
      outline.current.style.opacity = 0.6
    } else {
      dot.current.style.opacity = 1
      outline.current.style.opacity = 1
    }
  }

  const toggleCursonSize = (scaleDotTo:number, scaleOutTo:number) => {
      if (cursorEnlar.current) {
          dot.current.style.transform = `translate(-50%, -50%) scale(${scaleDot.current + scaleDotTo})`
          outline.current.style.transform = `translate(-50%, -50%) scale(${scaleOutTo})`
      } else {
          dot.current.style.transform = `translate(-50%, -50%) scale(${scaleDot.current})`
          outline.current.style.transform = `translate(-50%, -50%) scale(1)`
      }
  }

  const mouseClickEvent = () => {
    cursorEnlar.current = true
    toggleCursonSize(0.3, 1.3)
    setTimeout(()=>{cursorEnlar.current = false; toggleCursonSize(0, 1)}, 310)
  }

  const mouseOverEvent = () => {
    cursorEnlar.current = true
    scaleDot.current = 1.625
    toggleCursonSize(0, 1)
    cursorHover.current = true
    toggleCursorOpacity()
  }

  const mouseOutEvent = () => {
    cursorEnlar.current = false
    scaleDot.current = 1
    toggleCursonSize(1,1)
    cursorHover.current = false
    toggleCursorOpacity()
  }

  const mouseFirstMoveEvent = () => {
    cursorVisible.current = true
    toggleCursorVisibility()
    document.removeEventListener('mousemove', mouseFirstMoveEvent)
  }

  const mouseMoveEvent = (e:any) => {

    endX.current = e.pageX
    endY.current = e.pageY

    dot.current.style.top = endY.current + 'px'
    dot.current.style.left = endX.current + 'px'
  }

  const animateOutline = () => {
      _x.current += (endX.current - _x.current) / delay
      _y.current += (endY.current - _y.current) / delay

      outline.current.style.top = _y.current + 'px'
      outline.current.style.left = _x.current + 'px'

      requestRef.current = requestAnimationFrame(animateOutline)
  }


  useEffect(() => {
      document.addEventListener('mousedown', mouseClickEvent)
      document.addEventListener('mousemove', mouseMoveEvent)
      document.addEventListener('mousemove', mouseFirstMoveEvent)
      document.addEventListener('mouseenter', mouseOverEvent)
      document.addEventListener('mouseleave', mouseOutEvent)

      animateOutline()

      return () => {
          document.removeEventListener('mousedown', mouseClickEvent)
          document.removeEventListener('mousemove', mouseMoveEvent)
          document.removeEventListener('mouseenter', mouseOverEvent)
          document.removeEventListener('mouseleave', mouseOutEvent)

          cancelAnimationFrame(requestRef.current)
      }
  }, [])


  return ( 
      <StoreProvider>
        <Layout>

          <Cursor outline={outline} dot={dot}/>
          <Menu mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} />
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
                <m.div 
                  key={Math.random()}
                  initial={{ opacity: 1}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 1}}
                  transition={{ duration: 0.5 }}
                >
                  <Component 
                    mouseOverEvent={mouseOverEvent} 
                    mouseOutEvent={mouseOutEvent} 
                    {...pageProps} 
                  />
                </m.div>
                <m.div
                  key={Math.random()}
                  className="w-screen h-screen bg-[#161A16] absolute left-0 top-0 z-50 flex justify-center items-center"
                  initial={{ opacity: 1}}
                  animate={{ opacity: 0, transitionEnd: {display:'none'}}}
                  exit={{ opacity: 1, display:'flex'}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-row items-start space-x-[30px]">
                    <svg width="48" height="61" viewBox="0 0 48 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.848633 30.7083L24.3302 0.220703L47.567 30.7083L24.3302 60.7795L0.848633 30.7083Z" fill="white"/>
                    </svg>
                    <svg width="141" height="48" viewBox="0 0 141 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6861 47.1457C13.2975 47.1457 10.3586 46.3835 7.86941 44.8591C5.38024 43.3347 3.45584 41.236 2.09621 38.563C0.757491 35.8692 0.0881348 32.7682 0.0881348 29.26C0.0881348 25.7308 0.778405 22.6298 2.15896 19.9569C3.53951 17.2631 5.47437 15.1748 7.96355 13.6922C10.4527 12.1886 13.3602 11.4369 16.6861 11.4369C20.0747 11.4369 23.0136 12.1991 25.5028 13.7235C27.992 15.2479 29.9164 17.3466 31.276 20.0195C32.6357 22.6925 33.3155 25.7726 33.3155 29.26C33.3155 32.7891 32.6252 35.9005 31.2446 38.5944C29.885 41.2673 27.9606 43.366 25.4714 44.8904C22.9823 46.3939 20.0538 47.1457 16.6861 47.1457ZM16.6861 40.975C19.9283 40.975 22.3443 39.8891 23.934 37.7173C25.5446 35.5247 26.35 32.7056 26.35 29.26C26.35 25.7308 25.5342 22.9117 23.9026 20.8026C22.292 18.6726 19.8865 17.6076 16.6861 17.6076C14.4898 17.6076 12.6804 18.1088 11.258 19.1111C9.83566 20.0926 8.77933 21.4604 8.08905 23.2145C7.39878 24.9478 7.05363 26.9629 7.05363 29.26C7.05363 32.81 7.86942 35.65 9.50098 37.78C11.1325 39.91 13.5276 40.975 16.6861 40.975ZM56.1182 47.1457C52.876 47.1457 50.1567 46.3626 47.9604 44.7964C45.7641 43.2094 44.1011 41.0689 42.9716 38.3751C41.842 35.6813 41.2773 32.6429 41.2773 29.26C41.2773 25.877 41.8316 22.8386 42.9402 20.1448C44.0697 17.451 45.7222 15.3314 47.8976 13.7861C50.094 12.22 52.7923 11.4369 55.9927 11.4369C59.1721 11.4369 61.9123 12.22 64.2132 13.7861C66.5351 15.3314 68.3235 17.451 69.5786 20.1448C70.8336 22.8178 71.4611 25.8561 71.4611 29.26C71.4611 32.6429 70.8336 35.6917 69.5786 38.4064C68.3444 41.1003 66.5769 43.2303 64.276 44.7964C61.996 46.3626 59.2767 47.1457 56.1182 47.1457ZM40.1791 46.206V1.10011H46.7681V21.8676H46.0151V46.206H40.1791ZM55.2083 41.2255C57.3 41.2255 59.0257 40.693 60.3853 39.628C61.7659 38.563 62.7908 37.1326 63.4602 35.3367C64.1505 33.52 64.4956 31.4944 64.4956 29.26C64.4956 27.0464 64.1505 25.0417 63.4602 23.2458C62.7908 21.45 61.7554 20.0195 60.354 18.9545C58.9525 17.8895 57.1641 17.357 54.9886 17.357C52.9387 17.357 51.2444 17.8582 49.9057 18.8605C48.5879 19.8629 47.6048 21.262 46.9564 23.0579C46.3288 24.8538 46.0151 26.9211 46.0151 29.26C46.0151 31.5988 46.3288 33.6661 46.9564 35.462C47.5839 37.2579 48.5775 38.6675 49.9371 39.6907C51.2967 40.7139 53.0538 41.2255 55.2083 41.2255ZM79.0163 46.206V0.1604H85.5739V46.206H79.0163ZM95.6237 6.83231V0.473635H102.181V6.83231H95.6237ZM95.6237 46.206V12.3766H102.181V46.206H95.6237ZM126.099 47.1457C122.627 47.1457 119.677 46.373 117.251 44.8278C114.825 43.2825 112.963 41.1629 111.666 38.4691C110.39 35.7753 109.742 32.716 109.721 29.2913C109.742 25.8039 110.411 22.7238 111.729 20.0508C113.047 17.357 114.929 15.2479 117.377 13.7235C119.824 12.1991 122.763 11.4369 126.193 11.4369C129.895 11.4369 133.054 12.3557 135.669 14.1933C138.304 16.031 140.04 18.5473 140.877 21.7423L134.351 23.6217C133.702 21.7214 132.636 20.2492 131.15 19.2051C129.686 18.1401 128.002 17.6076 126.099 17.6076C123.945 17.6076 122.177 18.1192 120.797 19.1425C119.416 20.1448 118.391 21.5231 117.722 23.2772C117.052 25.0313 116.707 27.036 116.686 29.2913C116.707 32.7786 117.502 35.5978 119.071 37.7486C120.661 39.8995 123.003 40.975 126.099 40.975C128.212 40.975 129.916 40.4947 131.213 39.5341C132.531 38.5526 133.535 37.1535 134.225 35.3367L140.877 36.9029C139.768 40.2023 137.938 42.7395 135.386 44.5145C132.834 46.2686 129.739 47.1457 126.099 47.1457Z" fill="white"/>
                  </svg>
                  </div>
                </m.div>
            </AnimatePresence>
          </LazyMotion>

        </Layout>
      </StoreProvider>
  )
}

export default MyApp;
