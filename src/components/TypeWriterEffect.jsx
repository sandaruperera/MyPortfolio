import React from 'react'
import TypeWriter from "typewriter-effect";
const TypeWriterEffect = () => {

    const strings = ['Full Stack Developer']
  return (
    <div className=' text-fluid-2 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black whitespace-nowrap'>
        <TypeWriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
          }}
          />
    </div>
  )
}

export default TypeWriterEffect