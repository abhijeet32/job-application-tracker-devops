import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';

export default function Profile() {
  const user = useRecoilValue(userAtom);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">My Profile</h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32"></div>

        <div className="px-8 pb-8">
          <div className="relative flex items-end -mt-12 mb-6">
            <div className="w-24 h-24 bg-white rounded-full p-1 shadow-md">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl font-bold uppercase border-2 border-white">
                {user?.name ? user.name.charAt(0) : 'U'}
              </div>
            </div>
            <div className="ml-4 mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
              <p className="text-gray-600 bg-gray-100 px-2 py-0.5 rounded text-sm inline-block mt-1">{user?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
              <p className="text-lg font-medium text-gray-900">{user?.name || 'N/A'}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
              <p className="text-lg font-medium text-gray-900">{user?.email || 'N/A'}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">User ID</label>
              <p className="text-sm font-mono text-gray-600">{user?._id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

