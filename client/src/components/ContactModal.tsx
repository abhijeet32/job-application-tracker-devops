/// <reference types="vite/client" />
import { Dialog } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
// import { API_URL } from '../API_URL';
import axios from 'axios';
import { faGetPocket } from '@fortawesome/free-brands-svg-icons';

export default function ContactModal({ isModalOpen, onClose, id, initialname, initialjobtitle, initialcompanies, initiallocation, initialemail, initialphone }) {
  const [name, getName] = useState("");
  const [jobtitle, getJobtitle] = useState("");
  const [companies, getCompanie] = useState("");
  const [location, getLocation] = useState("");
  const [email, getEmail] = useState("");
  const [phonenumber, getPhonenumber] = useState("");
  const [updateoption, setupdateoption] = useState(false);

  useEffect(() => {
    if (initialname) {
      setupdateoption(true);
      getName(initialname);
      getJobtitle(initialjobtitle);
      getCompanie(initialcompanies);
      getLocation(initiallocation);
      getEmail(initialemail);
      getPhonenumber(initialphone);

    } else {
      setupdateoption(false);
      getName("");
      getJobtitle("");
      getCompanie("");
      getLocation("");
      getEmail("");
      getPhonenumber("");
    }
  }, [initialname])

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url: `${API_BASE_URL}/api/contact/addcontact`,
        data: {
          name: name,
          jobtitle: jobtitle,
          companies: companies,
          location: location,
          email: email,
          phonenumber: phonenumber
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      getName("");
      getJobtitle("");
      getCompanie("")
      getEmail("");
      getLocation("");
      getPhonenumber("");
      onClose();
      setupdateoption(false);
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'put',
        url: `${API_BASE_URL}/api/contact/udpatecontact/${id}`,
        data: {
          name: name,
          jobtitle: jobtitle,
          companies: companies,
          location: location,
          email: email,
          phonenumber: phonenumber
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      onClose();

    } catch (error) {
      console.log("some invalid error has occure", error);
      onClose();
    }
  }


  return (
    <>
      <Dialog open={isModalOpen} onClose={onClose} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex  justify-center p-4  sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className='border-2 rounded p-2'>
                <center className='text-color1 font-semibold'>
                  Save New Contacts
                </center>
                <hr />
                <form action="#" method="POST" className="space-y-6">
                  <div className='inline-block'>
                    <label className='font-semibold text-t1'>
                      Name:
                    </label>
                    <div>
                      <input
                        type="text"
                        id='name'
                        value={name}
                        placeholder='i.e:Ankur Kumar'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getName(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className='sm:ml-4 inline-block'>
                    <label className='font-semibold text-t1'>
                      Job title:
                    </label>
                    <div className=''>
                      <input
                        type="text"
                        id='jobtitle'
                        value={jobtitle}
                        placeholder='i.e:Software Engineer'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getJobtitle(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='font-semibold text-t1'>
                      Companie:
                    </label>
                    <div className=''>
                      <input
                        type="text"
                        id='companies'
                        value={companies}
                        placeholder='i.e:Microsoft'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getCompanie(e.target.value)
                        }}
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
                        value={location}
                        placeholder='i.e:New Delhi'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getLocation(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='font-semibold text-t1'>
                      Emails:
                    </label>
                    <div className=''>
                      <input
                        type="text"
                        id='email'
                        value={email}
                        placeholder='i.e:example@gmail.com'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getEmail(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='font-semibold text-t1'>
                      Phone no:
                    </label>
                    <div className=''>
                      <input
                        type="text"
                        id='phoneno'
                        value={phonenumber}
                        placeholder='i.e: +913456789837'
                        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
                        onChange={(e) => {
                          getPhonenumber(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                  <center>
                    <div className='m-2'>
                      <button className="rounded p-1 px-2 bg-customColor text-white" onClick={onClose}>
                        Discard
                      </button>
                      {updateoption ?
                        <button className="rounded p-1 px-2 ml-3 bg-customColor text-white" onClick={updateData}>
                          Update Contact
                        </button>
                        :
                        <button className="rounded p-1 px-2 ml-3 bg-customColor text-white" onClick={sendData}>
                          Save Contact
                        </button>}


                    </div>

                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>

      </Dialog>
    </>
  )
}
