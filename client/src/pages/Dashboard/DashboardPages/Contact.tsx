import React, { useEffect, useState } from 'react'
import ContactModal from '../../../components/ContactModal';
import axios from 'axios';
import Contactbox from '../../../components/Contactbox';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function useContact(n: number) {
  const [contactdetail, setContactdetail] = useState<any[]>([]);



  useEffect(() => {
    const data = setInterval(() => {
      axios.get(`${API_BASE_URL}/api/contact/getcontact`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
        .then(res => {
          setContactdetail(res.data);
          console.log("till now code has ran successfully");
        })
        .catch(err => console.log(err))
    }, n * 1000);

    axios.get(`${API_BASE_URL}/api/contact/getcontact`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }
    )
      .then(res => {
        setContactdetail(res.data);
        console.log("till now code has ran successfully");
      })
      .catch(err => console.log(err))

    return () => {
      clearInterval(data);
    }

  }, []);
  return contactdetail;
}

export default function Contact() {
  const [isModalOpen, setModalopen] = useState(false);
  const condata = useContact(3);
  const [contactdetails, setContactdetails] = useState<any[]>([]);

  useEffect(() => {
    if (condata) {
      setContactdetails(condata)
    }
  }, [condata])


  function onPressC() {
    setModalopen(true);
  }

  function handleclick() {
    setModalopen(false);
  }

  async function handlecontactdel(id: string) {
    try {
      setContactdetails(prevcont => prevcont.filter(contact => contact._id !== id));

      const response = await axios({
        method: 'delete',
        url: `${API_BASE_URL}/api/contact/deletecontact/${id}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      console.log(response.data);
      console.log("item get delted");



    } catch (error) {
      console.log("some invalid error has occured", error);
      setContactdetails([...contactdetails])
    }
  }

  return (
    <>
      <div className='m-1 flex flex-row justify-between'>
        <div className='text-color2 font-semibold text-center'>Contacts</div>
        <div className='last-order'>
          <button className='p-1 rounded bg-customColor text-white' onClick={onPressC}>
            +contacts
          </button>
        </div>
      </div>

      <hr />

      <div className='m-3'>
        {contactdetails.map((item) => (
          <Contactbox
            key={item._id}
            id={item._id}
            name={item.name}
            jobtitle={item.jobtitle}
            companies={item.companies}
            location={item.location}
            email={item.email}
            phoneno={item.phonenumber}
            ondeleteContact={() => handlecontactdel(item._id)}
          />
        )

        )}
      </div>

      <ContactModal 
        isModalOpen={isModalOpen} 
        onClose={handleclick} 
        id={""} 
        initialname={""}
        initialjobtitle={""}
        initialcompanies={""}
        initiallocation={""}
        initialemail={""}
        initialphone={""} 
      />


    </>
  )
}
