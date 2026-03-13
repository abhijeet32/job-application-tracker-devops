import feature from "../../../public/images/features.png";
import { MdCloudUpload } from "react-icons/md";
import { MdPushPin } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { MdDescription } from "react-icons/md";

export default function Features() {
  const features = [
    {
      icon: <MdPushPin className="text-customColor" size={32} />,
      title: "Track Your Job Applications",
      description: "Keep a detailed record of your job applications, including statuses, deadlines, and follow-up dates. Never lose track of where you've applied."
    },
    {
      icon: <MdCloudUpload className="text-customColor" size={32} />,
      title: "Upload Resume to Cloud",
      description: "Securely store and manage multiple versions of your resume, making it easy to apply for different job roles with the right document."
    },
    {
      icon: <MdDescription className="text-customColor" size={32} />,
      title: "Store Important Documents",
      description: "Keep all your job-related documents organized—resumes, cover letters, certificates, and more—all in one secure place."
    },
    {
      icon: <IoMdSave className="text-customColor" size={32} />,
      title: "Save Recruiter Contacts",
      description: "Store and organize recruiter contact information, making it easy to follow up and stay connected with hiring managers."
    },
    {
      icon: <IoNotifications className="text-customColor" size={32} />,
      title: "Get Interview Reminders",
      description: "Receive timely reminders before your scheduled interviews so you can prepare and never miss an opportunity."
    },
    {
      icon: <FaUser className="text-customColor" size={32} />,
      title: "Manage Your Profile",
      description: "Update your professional details, job preferences, and portfolio to attract the right opportunities."
    }
  ];

  return (
    <>
      <section id="feature" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-lightbg rounded-full mb-4">
            <span className="text-sm font-semibold text-customColor">✨ Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            A Better Job Tracking Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay organized, track your progress, and never miss an opportunity with our smart job application management tools. Effortlessly manage your applications, prepare for interviews, and stay connected with recruiters—all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-customColor hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-lightbg rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-customColor/20 to-indigo-600/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <img src={feature} className="relative w-full h-auto rounded-2xl shadow-2xl" alt="Features Dashboard"/>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need in One Dashboard
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our intuitive dashboard gives you a complete overview of your job search. See all your applications at a glance, track your progress, and manage everything from one central location.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-customColor rounded-full">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time application status tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-customColor rounded-full">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Drag-and-drop job board organization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-customColor rounded-full">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Cloud-based document storage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-customColor rounded-full">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Contact management system</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}