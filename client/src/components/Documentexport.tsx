/// <reference types="vite/client" />
import { Dialog } from '@headlessui/react'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../pages/store/atom';

export default function Documentexport({ismodal, onClose,id , initialtitle, initialdescription, initialcategory }) {
   const[title, setTitle] = useState("");
   const[description, setDescription] = useState("");
   const[category, setCategory] = useState("");
   const[name, setName] = useState("");
   const[email, setEmail] = useState("");

   useEffect(()=>{
       setTitle(initialtitle);
       setDescription(initialdescription);
       setCategory(initialcategory);
       console.log("this is initial title", initialtitle);
       console.log("this is initial description", initialdescription);
       console.log("this is initial category", initialcategory)
   }, [initialtitle, initialdescription, initialcategory]);
  
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
   const user = useRecoilValue(userAtom);

   useEffect(()=>{
         setName(user.name);
         setEmail(user.email)
   }, [])

  async function update(){
    const response = await axios({
        method:'put',
        url:`${API_BASE_URL}/api/document/updatedocument/${id}`,
        data:{
            title,
            description,
            category
        },
        headers:{
           "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });
    console.log(response.data);
    onClose();
   }
    
  return (
    <>
   <Dialog open={ismodal} onClose={onClose}className="relative z-10">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
<div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex  justify-center p-4  sm:p-0">
<div className="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl text-[#180045] transition-all sm:my-8 sm:w-full sm:max-w-max">
<div className= 'p-2 grid grid-cols-2 gap-4'>
    
    <div className=''>
    <div className='inline-block relative'>
       <div className='inline-block'>Cover letter</div>
       <button className='border-2 p-1 rounded'>Export to PDF</button>
    </div>
    <div>
      <label>
        Description:
      </label>
      <textarea
      id="description"
      value={description}
      className='p-2 w-full h-80 border-2 rounded'
      onChange={e=> setDescription(e.target.value)}
       />
    </div>
    
    </div>
    <div>
        <div>
            <div className='inline-block'>Edit Document</div>
            <button className='border-2 rounded bg-customColor px-2 text-white' onClick={update}>Update</button>
        </div>
      <div>
      <label >
        Title:
      </label>
      <input
      id="title"
      type="text"
      value={title}
      className='p-1 w-full border-2 rounded' 
      onChange={e=> setTitle(e.target.value)}
      />
       
    </div>
    <div>
                  <label className='font-semibold text-t1'>
                   Category
                  </label>
                  <div className=''>
                    <select className='p-1 border-2 rounded w-full' value={category}  onChange={(e)=>setCategory(e.target.value)}>
                      <option value="Resume">Resume</option>
                      <option value="Cover Letter">Cover Letter</option>
                      <option value="Transcript">Transcript</option>
                    </select>
                  </div>
                </div>
                <div className=''>
       <p className=' font-semibold mt-2'> PDF Export Settings</p>
       <p className='inline-block text-[#190445CC] text-sm mb-3'>select what info you,d like in your PDF document header.Then click 'Export to PDF',</p>
      </div>
      <div>
      <label >
       Full Name
      </label>
      <input
      id="firstname"
      type="text"
      value={name}
      placeholder="Alok thakur"
      className='p-1 mt-1 w-full border-2 rounded' 
      onChange={e=> setName(e.target.value)}
      />
       
    </div>
    <div>
      <label >
        Email
      </label>
      <input
      id="email"
      type="text"
      value={email}
      placeholder="i.e, Microsoft"
      className='p-1 mt-1 w-full border-2 rounded' 
      onChange={e=> setEmail(e.target.value)}
      />
       
    </div>
     
      </div>
      
    
   </div>
   <hr />
   <center>
   <button onClick={onClose} className='px-2 border-2 m-2 rounded px-2'>cancel</button>
   </center>

 </div>
 </div>
 </div>
 </Dialog>
    </>
  )
}
