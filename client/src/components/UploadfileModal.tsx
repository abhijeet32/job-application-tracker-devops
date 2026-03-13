/// <reference types="vite/client" />
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
// import { API_URL } from '../API_URL';
import axios from 'axios';

export default function UploadfileModal({fileuploadmodal, onClose}: {fileuploadmodal: boolean, onClose: () => void}) {
  const[doc, getDoc] = useState<File | null>(null);
 
   async function getFile(event: any){
    getDoc(event.target.files[0]);
  }

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async function uploadfile(){
    
    const response =  await axios({
      method:'post',
      url:`${API_BASE_URL}/api/document/uploaddocument`,
      data:{
        file:doc
      },
      headers:{
        "Content-Type":"application/json",
        "Authorization":"bearer " + localStorage.getItem("token")
      }
    }).then(res=>{
      console.log(res.data);
      console.log("data uploaded succesfully")
    });
    console.log(response)
    onClose();

  }

  return (
   
    <>
        <Dialog open={fileuploadmodal} onClose={onClose}className="relative z-10">
           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
       
       {/* Modal Panel */}
       <div className="fixed inset-0 z-10 overflow-y-auto">
         <div className="flex  justify-center p-4  sm:p-0">
       <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        
        <div className='p-2'>
        <form action="/stats" encType="multipart/form-data" method="post">
  <div className="form-group">
    <input type="file" className="form-control-file" name="uploaded_file" onChange={getFile} />
  
  </div>
</form>
        </div>
        <center className='p-2'>
        <button onClick={onClose} className='border-2 rounded p-1'>
        cancel</button>
        <button className='border-2 p-1 rounded ml-2 hover:bg-customColor hover:text-white px-4' onClick={uploadfile}>Upload</button>
        </center>
       

        {/* <div>
          <p>this is file {doc.name}</p>
        </div> */}
           </div>
           </div>
           </div>
           </Dialog>
    </>
)
}
