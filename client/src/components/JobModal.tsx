/// <reference types="vite/client" />
'use client';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
// import { API_URL } from '../API_URL';
import axios from 'axios';


export default function JobModal({ isModalopen, onClose }: { isModalopen: boolean, onClose: () => void }) {
  const[jobtitle, setJobtitle] = useState<string>("");
  const[company, setCompany] = useState<string>("");
  const[joburl, setJoburl] = useState<string>("");
  const[location, setLocation] = useState<string>("");
  const[workmode, setWorkmode] = useState<string>("");
  const[status, setStatus] = useState<string>("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
  const saveData = async(e)=>{
    e.preventDefault(); 
    try{
      const response = await axios({
        method:'post',
        url:`${API_BASE_URL}/api/job/addjob`,
        data:{
         title:jobtitle,
         company:company,
         urlAddress:joburl,
         location:location,
         workMode:workmode,
         status:status
        },
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      const data = response.data;
      console.log(data);
      onClose();
      console.log("job has been submitted to backend successfully")
    }catch(error){
      console.log("some error has occured",error);
    }
  }

  return (
    <Dialog open={isModalopen} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className='border-2 rounded p-2'>
              <center className='text-color1 font-semibold'>
                Add new job
              </center>
              <hr />
              <form action="#" method="POST" className="space-y-6">
                <div className='inline-block'>
                  <label className='font-semibold text-t1'>
                    Job title:
                  </label>
                  <div>
                    <input
                      type="text"
                      id='jobtitle'
                      placeholder='i.e: Software Engineer'
                      className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                      onChange={(e)=>setJobtitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className='sm:ml-4 inline-block'>
                  <label className='font-semibold text-t1'>
                    Company:
                  </label>
                  <div className=''>
                    <input
                      type="text"
                      id='company'
                      placeholder='i.e: Google'
                      className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                      onChange={(e)=>setCompany(e.target.value)}
                      />
                  </div>
                </div>
                <div>
                  <label className='font-semibold text-t1'>
                    Job url:
                  </label>
                  <div className=''>
                    <input
                      type="text"
                      id='joburl'
                      placeholder='i.e: naukari.com/google/software_engineer'
                      className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700" 
                      onChange={(e)=>setJoburl(e.target.value)}
                      />
                  </div>
                </div>
                <div>
                  <label className='font-semibold text-t1'>
                    Location:
                  </label>
                  <div className=''>
                    <input
                      type="text"
                      id='location'
                      placeholder='i.e:New Delhi'
                      className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                      onChange={(e)=>setLocation(e.target.value)}
                      />
                  </div>
                </div>
                <div>
                  <label className='font-semibold text-t1'>
                    Work Mode:
                  </label>
                  <div className=''>
                    <select className='p-1 border-2 rounded w-full' value={workmode} onChange={(e)=>setWorkmode(e.target.value)}>
                      <option value="onSite">onSite</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className='font-semibold text-t1'>
                    Status
                  </label>
                  <div className=''>
                    <select className='w-full p-1 border-2 rounded' value={status} onChange={(e)=>setStatus(e.target.value)}>
                      <option value="wishlist">wishlist</option>
                      <option value="applied">applied</option>
                      <option value="interview">interview</option>
                      <option value="offer">offer</option>
                      <option value="rejected">rejected</option>

                    </select>
                  </div>
                </div>
                <hr />
                <center>
                  <div className='m-2'>
                    <button className="rounded-lg p-2 bg-customColor px-4 text-white" onClick={onClose}>
                      Discard
                    </button>

                    <button className="rounded-lg p-2 ml-3 bg-customColor px-4 text-white" onClick={saveData}>
                      Add Job
                    </button>
                  </div>

                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
