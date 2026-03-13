import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import DocumentModal from './DocumentModal';;
import UploadfileModal from './UploadfileModal';

export default function Documentoption({isModalOpen, onClose}) {
  const[modalopen, setModalopen] = useState(false);
  const[fileuploadmodal, setUploadfile] = useState(false);

  function writeDocument(){
    setModalopen(true);
    onClose();
  }
function handleclickdocument(){
  setModalopen(false);
}
function uploadfilef(){
  setUploadfile(true);
  onClose();
}

function handleclickupload(){
  setUploadfile(false);
}


  function saveDocument(){
    console.log("documt saved")
    onClose();
  }

  // function uploadfilef(){
  //   console.log("file has been uploaded successfully")
  // }

  
  return (
    <>
     <Dialog open={isModalOpen} onClose={onClose}className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    
   
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex  justify-center p-4  sm:p-0">
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
       <div>
       <div className='font-semibold text-color2 text-center p-2'> New Document</div>
       <hr />
       <div className='p-3 cursor-pointer'>
       <div className=' p-2 border-2 rounded hover:border-customColor' onClick={uploadfilef}>
        <p className='font-semibold text-color2'>Upload File</p>
        <p>Upload an existing file from your computer.Allowed file type:.pdf,.doc,.docx,.png,.jpg</p>
       </div>
       <div className=' mt-3 p-2 border-2 rounded hover:border-customColor' onClick={writeDocument}>
        <p className='font-semibold text-color2'>Create Text Document</p>
        <p>Create a new text document using the inline text editor.</p>
       </div>
       </div>
       <hr  className='my-2'/>
<center  className='m-2'>
<button onClick={onClose} className='border-2 rounded p-1'>cancel</button>
       <button className='border-2 p-1 rounded ml-2 hover:bg-customColor hover:text-white px-2' onClick={saveDocument}>Create</button>
       
</center>
</div>
       
       
        </div>
        </div>
        </div>
        </Dialog>

        <DocumentModal modalopen={modalopen} onClose={handleclickdocument} />
        <UploadfileModal fileuploadmodal={fileuploadmodal} onClose={handleclickupload} />
    </>
  )
}
