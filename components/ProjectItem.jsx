import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl py-8 group hover:bg-gradient-to-r from-blue-600 to-blue-900'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="/" width="200"/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
              <p className='pb-4 pt-2 text-white text-center'>React Js</p>
              <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 cursor-pointer text-lg font-bold'>More Info</p>
              </Link>
            </div>
          </div>
  )
}

export default ProjectItem