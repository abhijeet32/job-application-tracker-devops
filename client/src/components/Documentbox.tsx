import React, { useEffect, useState } from 'react';
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import Documentexport from './Documentexport';
import axios from 'axios';

export default function Documentbox(props) {
  const[option, setoption] = useState(false);
  const[ismodalopen, setModalopen] = useState(false);

  function onpress(){
    setModalopen(false);
    setoption(!option);
    
  }
 function handleclick(){
  setModalopen(false);
 }

 function opendocfile(){
  setModalopen(true);
  setoption(!option);
 }
 

  function deletedoc(){  
    setoption(!option);
    props.ondeonDelete();
 }
 

  return (
    <>
    <div className=' inline-block m-2 w-48 h-64 gap-4 border-2 rounded-lg shadow-xl hover:border-2 hover:border-customColor hover:rounded-lg cursor-pointer'>
      <div className='p-[25px] justify-center h-[13rem]'>
           {props.title}
      </div> 
      <hr />
      <div className='p-2 grid grid-cols-2 relative align-bottom'>
        <div>{props.category}</div>
        <button className='absolute right-2 top-3' onClick={onpress}><IoEllipsisVerticalOutline  /> </button>
        {option && (
  <div className="w-42 border border-gray-300 shadow-lg absolute left-2 top-8 bg-white z-50 rounded-md">
    <div className="border-b px-4 py-2 hover:bg-gray-100 cursor-pointer"  onClick={opendocfile}>Edit Document</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={deletedoc}>Delete Document</div>
  </div>
)}

      </div>
    </div>

    <Documentexport ismodal={ismodalopen} onClose={handleclick} id={props.id} initialtitle={props.title} initialdescription={props.description} initialcategory={props.category}/>
    </>
  )
}
