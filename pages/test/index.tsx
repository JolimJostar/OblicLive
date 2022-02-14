import Image from "next/image";
import TestButton from '@components/TestButton';
import React, { useState, useEffect} from 'react';
import { domAnimation, LazyMotion, m } from "framer-motion";
import { AnimatePresence } from "framer-motion";


export default function Index({item}:any) {

  const handleClick = (text:any) => {
    const temp = (item.pictures.data.filter((pic:any) => pic.attributes.caption === text))
    setUrl(temp[0].attributes.url)
  }

  const myLoader = ({src}:any) => {
    return `${src}`
  }

  const [url, setUrl] = useState(item.cover.data.attributes.url)

  return (
    <div className="flex flex-row">
      <TestButton data={item.cover.data.attributes.url} />
      <div className="flex flex-col p-20px gap-[20px] text-white">
          <button onClick={() => setUrl(item.cover.data.attributes.url)}>
            Cover
          </button>
          <button onClick={() => handleClick('Лазурит')}>
            Lazurit
          </button>
          <button onClick={() => handleClick('Malahit')}>
            Malahit
          </button>
      </div>
            <AnimatePresence exitBeforeEnter>
                <m.div 
                  key={Math.random()}
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0}}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <Image 
                      width={500}
                      height={500} 
                      src={url}
                      loader={myLoader}
                    />
                  </div>
                </m.div>
            </AnimatePresence>
    </div>
  );
}

export async function getServerSideProps() {

  const data = await fetch(`http://localhost:1337/api/rings?filters[slug][$eq]=ring-2&populate=*`).then(res => res.json())


  return {
    props: {
      item: data.data[0].attributes
    },
  }
}