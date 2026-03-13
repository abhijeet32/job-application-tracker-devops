/// <reference types="vite/client" />
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
// import { API_URL } from '../API_URL';
import axios from 'axios';

export default function DocumentModal({modalopen,onClose}: {modalopen: boolean, onClose: () => void}) {
      const[title, setTitle] = useState<string>("");
      const[description, setDescription]=  useState<string>("");
      const[category, setCategory] = useState<string>("");

      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function saveDoc(){
      const response = await axios({
        method:'post',
        url:`${API_BASE_URL}/api/document/writedocument`,
        data:{
          title,
          description,
          category
        },
        headers:{
          "Content-Type":"application/json",
          "Authorization":"bearer " + localStorage.getItem("token")
        }
      });
        console.log(response.data);
        console.log("doc uploaded succesfully");
        onClose();      
    }

  return (
   <>
    <Dialog open={modalopen} onClose={onClose}className="relative z-10">
       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
   
   {/* Modal Panel */}
   <div className="fixed inset-0 z-10 overflow-y-auto">
     <div className="flex  justify-center p-4  sm:p-0">
   <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
   <center className=' p-2 text-color1 font-semibold'>
      Add Documents
    </center>
    <hr />
   <div className='p-4 grid grid-cols-3 gap-4'>
  
    <div className='col-span-2'>
      
    <div>
      <label>
        Description:
      </label>
      <textarea
      id="description"
      placeholder='Cover letter for Microsoft'
      className='p-2 w-full h-64 border-2 rounded'
      onChange={e=> setDescription(e.target.value)}
       />
    </div>
    
    </div>
    <div>
      <div>
      <label >
        Title:
      </label>
      <input
      id="title"
      type="text"
      placeholder="i.e, Microsoft"
      className='p-2 w-full border-2 rounded' 
      onChange={e=> setTitle(e.target.value)}
      />
       
    </div>
    <div>
                  <label className='font-semibold text-t1'>
                   Category
                  </label>
                  <div className=''>
                    <select className='p-1 border-2 rounded w-full'  onChange={(e)=>setCategory(e.target.value)}>
                      <option value="Resume">Resume</option>
                      <option value="Cover Letter">Cover Letter</option>
                      <option value="Transcript">Transcript</option>
                    </select>
                  </div>
                </div>
      </div>
     
    
   </div>
   <hr />
      <div>
      <center className='p-2'>
    <button onClick={onClose} className='border-2 rounded p-1 px-4'>
    cancel</button>
    <button className='border-2 p-1 px-4 rounded ml-2 hover:bg-customColor hover:text-white' onClick={saveDoc}>save Document</button>
    </center>
      </div>
   
       </div>
       </div>
       </div>
       </Dialog>
   </>
  )
}
