import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';

export default function Welcome() {
  const user = useRecoilValue(userAtom);
  return (
    <>
    <div className='p-4 border-3 border-customColor rounded-lg   grid grid-cols-1 md:grid-cols-2 lg:m-[120px]'>
   
      <div>
      <div className='p-3'>
      <p className='text-t1 text-2xl'>Welcome</p>
       <p className='text-color2 text-4xl my-2'>{user.name}</p>
       <p className='text-t1 text-lg'>Stay organized and in control of your job search with Trackify. Effortlessly manage applications, store important documents, and track your progress—all in one place. Upgrade to premium for unlimited access and powerful insights to land your dream job faster.</p>
      
      </div>
      </div>
      <div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Save and Manage Recruiter Contacts</p>
          <p className='text-t1'>Store recruiter details, including names, email addresses, phone numbers, and company information.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Organize Your Job-Related Documents</p>
          <p className='text-t1'>Upload, store, and manage important documents like resumes, cover letters, and certificates.

</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Securely Store Your Resume</p>
          <p className='text-t1'>Save your resume to the cloud and access it anytime, anywhere. Easily attach it to applications with one click.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Keep Your Profile Updated</p>
          <p className='text-t1'>Edit your personal details, update work experience, and add new skills to ensure you stand out to recruiters.

</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Stay on Top of Your Applications</p>
          <p className='text-t1'>Save job postings, track application progress, set reminders for follow-ups, and never miss an opportunity.</p>
        </div>
      </div>
    </div>
    </>
  )
}
