import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';
import { 
  DocumentTextIcon, 
  UserGroupIcon, 
  CloudArrowUpIcon, 
  UserCircleIcon, 
  BriefcaseIcon 
} from '@heroicons/react/24/outline';

export default function Welcome() {
  const user = useRecoilValue(userAtom);

  const features = [
    {
      title: 'Stay on Top of Your Applications',
      description: 'Save job postings, track application progress, set reminders for follow-ups, and never miss an opportunity.',
      icon: <BriefcaseIcon className="w-6 h-6 text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Manage Recruiter Contacts',
      description: 'Store recruiter details, including names, email addresses, phone numbers, and company information securely.',
      icon: <UserGroupIcon className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Organize Important Documents',
      description: 'Upload, store, and manage important documents like resumes, cover letters, and certificates.',
      icon: <DocumentTextIcon className="w-6 h-6 text-green-600" />,
      color: 'bg-green-50 border-green-100',
    },
    {
      title: 'Securely Store Your Resume',
      description: 'Save your resume to the cloud and access it anytime, anywhere. Easily attach it to applications with one click.',
      icon: <CloudArrowUpIcon className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-100',
    },
    {
      title: 'Keep Your Profile Updated',
      description: 'Edit your personal details, update work experience, and add new skills to ensure you stand out to recruiters.',
      icon: <UserCircleIcon className="w-6 h-6 text-pink-600" />,
      color: 'bg-pink-50 border-pink-100',
    }
  ];

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-customColor to-indigo-600 p-8 sm:p-10 shadow-xl text-white">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Welcome back, {user?.name || 'Explorer'}! 👋
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Stay organized and in control of your job search with Trackify. Effortlessly manage applications, store important documents, and track your progress—all in one place.
            </p>
          </div>
          <div className="hidden md:flex flex-shrink-0 items-center justify-center p-4 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            <BriefcaseIcon className="w-20 h-20 text-indigo-100 opacity-90" />
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Quick Actions / Features Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${feature.color}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
