import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  IdentificationIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

export default function Profile() {
  const user = useRecoilValue(userAtom);

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-1">Manage your personal information and account settings.</p>
        </div>
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <PencilSquareIcon className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-customColor to-indigo-600 h-40 relative">
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        </div>

        <div className="px-8 pb-10">
          <div className="relative flex justify-between items-center -mt-10 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 bg-white rounded-full p-1.5 shadow-lg border border-gray-100 relative group cursor-pointer mb-2">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-50 rounded-full flex items-center justify-center text-indigo-600 text-5xl font-bold uppercase shadow-inner">
                  {user?.name ? user.name.charAt(0) : 'U'}
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <PencilSquareIcon className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{user?.name || 'Unknown User'}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  <p className="text-gray-600 font-medium text-sm">Active Member</p>
                </div>
              </div>
            </div>
            <button className="sm:hidden mb-4 p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
              <PencilSquareIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <UserCircleIcon className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Full Name</span>
                    </div>
                    <p className="text-base font-medium text-gray-900">{user?.name || 'N/A'}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <EnvelopeIcon className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Email Address</span>
                    </div>
                    <p className="text-base font-medium text-gray-900">{user?.email || 'N/A'}</p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <IdentificationIcon className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Account ID</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-mono text-gray-600 bg-gray-200/50 px-3 py-1.5 rounded-md border border-gray-200">
                        {user?._id || 'Not Assigned'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-2">Plan Details</h3>
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">Free Tier</p>
                <p className="text-indigo-800/70 text-sm mb-4">You are currently on the free plan.</p>
                <button className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm transition-colors shadow-md shadow-indigo-200">
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

