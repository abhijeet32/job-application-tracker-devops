import React from 'react'

export default function JobBox(props: { title: string, company: string, isDragging: boolean }) {

  // const handleclick = (e)=>{
  //   e.target.style.opacity = "0.5"
  // }

  // const onpress = (e)=>{
  //   e.target.style.opacity = "1";
  // }

  return (
   <>
   <div  className='border-2 rounded mt-2 cursor-pointer p-2'>
     <p className='font-semibold'>{props.title} </p>
     <p>{props.company} </p>
   </div>
   </>
  )
}
