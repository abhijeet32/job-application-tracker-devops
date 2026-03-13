import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import ContactModal from './ContactModal';

export default function Contactbox(props) {
    const[option, setOption] = useState(false);
    const[isModalOpen, setModal]  = useState(false);

    function onpress(){
        setOption(!option);
    }
    function editcontact(){
        setModal(true);
        setOption(!option);
    }
    function handleclick(){
        setModal(false);
    }
    function deletecon(){
        setOption(!option);
       props.ondeleteContact();
       
    }


    return (
        <>
            <div className='inline-block m-2 w-full max-w-80 border-2 rounded shadow-xl'>
                <div className='relative grid grid-cols-3 gap-2 p-2'>
                    <div>
                       <FaRegUserCircle size={80} />
                    </div>
                    <div>
                        <p className="text-[#180045] font-semibold leading-[21px]">{props.name}</p>
                        <p className="text-[#190445b3] text-sm text-400 leading-[21px]">{props.jobtitle}</p>
                        <p className="text-[#19044566] text-400 text-[13px] leading-[21px]">{props.companies}</p>
                    </div>
                    <button className='absolute right-2 top-6' onClick={onpress}><IoEllipsisVerticalOutline  /> </button>
                            {option && (
                      <div className="w-42 border border-gray-300 shadow-lg absolute right-3 top-8 bg-white z-50 rounded-md">
                        <div className="border-b px-4 py-2 hover:bg-gray-100 cursor-pointer"  onClick={editcontact}>update Contact</div>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={deletecon}>Delete Contact</div>
                      </div>
                      )}
                </div>
                

                <hr />
                <div className='p-2 '>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]"><IoLocationOutline className='inline-block' /> {props.location}</p>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]" ><CiMail className='inline-block' /> {props.email}</p>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]"><MdOutlineLocalPhone className='inline-block' /> {props.phoneno}</p>
                </div>
            </div>
            <ContactModal isModalOpen={isModalOpen} onClose={handleclick} id={props.id} initialname={props.name} initialjobtitle={props.jobtitle} initialcompanies={props.companies} initiallocation={props.location} initialemail={props.email} initialphone={props.phoneno} /> 
 

        </>
    )
}
