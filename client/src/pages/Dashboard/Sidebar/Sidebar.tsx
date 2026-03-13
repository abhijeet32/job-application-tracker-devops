import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ActiveAtom, userAtom } from '../../store/atom';


export default function Sidebar() {

  const setActiveSegment = useSetRecoilState(ActiveAtom);
  const user = useRecoilValue(userAtom);


  function loginout() {
    localStorage.removeItem("token");
    window.open("/", "_self")
  }

  return (
    <>
      <div className=' relative border-r-2 flex flex-col  min-h-screen'>
        <div className='p-3'>
          <p
            className="mt-1  text-t1 hover:rounded hover:bg-transparent" onClick={() => setActiveSegment("welcome")}
          >
            <span className="material-symbols-outlined align-bottom">home</span>
            <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Home</span>
          </p>
          <p
            className="mt-3 text-t1 hover:bg-gray-100 p-1 rounded cursor-pointer" onClick={() => setActiveSegment("skilltracker")}
          >
            <span className="material-symbols-outlined align-bottom">description</span>
            <span className="pl-1 align-bottom text-base font-[600]">Skill Tracker</span>
          </p>
          <p
            className="mt-3 text-t1 hover:bg-gray-100 p-1 rounded cursor-pointer" onClick={() => setActiveSegment("taskscheduler")}
          >
            <span className="material-symbols-outlined align-bottom">hotel_class</span>
            <span className="pl-1 align-bottom text-base font-[600]">Task Scheduler</span>
          </p>

          <p
            className="mt-3 text-t1" onClick={() => setActiveSegment("profile")}
          >
            <span className="material-symbols-outlined align-bottom">person</span>
            <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Profile</span>
          </p>
          <p
            className="mt-3 text-t1" onClick={() => setActiveSegment("contact")}
          >
            <span className="material-symbols-outlined align-bottom">contacts</span>
            <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Contacts</span>
          </p>
          <p
            className="mt-3 text-t1" onClick={() => setActiveSegment("document")}
          >
            <span className="material-symbols-outlined align-bottom">folder</span>
            <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Documents</span>
          </p>

          <div className="flex justify-between mt-3 text-t2 text-xs">
            My Job Trackers?
          </div>
          <p
            className="mt-3 text-t1" onClick={() => setActiveSegment("jobtracker")}
          >
            <span className="material-symbols-outlined align-bottom">folder</span>
            <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Job Tracker</span>
          </p>

        </div>
        <div className='absolute bottom-0 left-0'>
          <div className='rounded border-1 border-dashed border-t1 m-2  p-1'>
            <p className='text-t1 font-semibold'>Trackify Pro</p>
            <p className='text-gray-400'>Level Up Your job search</p>
            <button className="rounded-lg p-1 mt-2 bg-[#ffdd7e] border-[#ffc21d] text-black w-full">
              Upgrade Now
            </button>
          </div>
          <div className='p-3'>

            <p className="mt-1  text-t1 border p-2 rounded flex flex-row justify-between">
              <div className=''>
                <span className="material-symbols-outlined align-bottom">account_circle</span>
                <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">{user.name} </span>
              </div>
              <div className='inline-block'>
                <button className="" aria-label="Settings" onClick={loginout}>
                  <span className="material-symbols-outlined  align-bottom">logout</span>
                </button>


              </div>



            </p>
          </div>
        </div>
      </div>
    </>
  )
}
