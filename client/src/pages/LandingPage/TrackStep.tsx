import { Link } from "react-router-dom";
import photo1 from "../../../public/images/1.png";
import josbsave from "../../../public/images/jobsave.png";
import cloud from "../../../public/images/cloud-storage.png";
import dashboard from "../../../public/images/dashboard.jpeg";
import monitorprogress from "../../../public/images/monitorProgress.png";

export default function TrackStep() {
    const features = [
        {
            title: "Save & Track Applications",
            description: "Manually log and manage your job applications in one place. Keep track of job titles, company details, application status, deadlines, and follow-ups effortlessly.",
            image: josbsave,
            span: "md:row-span-2",
            icon: "📋"
        },
        {
            title: "Store Important Documents",
            description: "Securely upload and manage your resumes, cover letters, and other job-related documents, ensuring quick access whenever needed.",
            image: cloud,
            span: "",
            icon: "☁️"
        },
        {
            title: "Keep Key Job Details Handy",
            description: "Save essential job-related information, including recruiter contact details, company notes, interview schedules, and follow-up dates—all in a structured dashboard.",
            image: dashboard,
            span: "md:row-span-2",
            icon: "📊"
        },
        {
            title: "Monitor Progress & Stay on Track",
            description: "Get a clear overview of your job search progress, track multiple applications, and set reminders for follow-ups to stay proactive and never miss an opportunity.",
            image: monitorprogress,
            span: "",
            icon: "📈"
        }
    ];

    return (
        <>
            <section id="trackstep" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-lightbg rounded-full mb-4">
                        <span className="text-sm font-semibold text-customColor">🎯 Job Application Tracker</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Everything You Need to Track Your Job Search
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Trackify keeps your job search organized by managing applications, storing documents, and tracking contacts—all in one place. Stay ahead effortlessly! 🚀
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className={`bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-customColor hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${feature.span}`}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span className="text-3xl">{feature.icon}</span>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="flex justify-center items-center">
                                <img 
                                    src={feature.image} 
                                    className="max-w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                                    alt={feature.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link 
                        to="/signup" 
                        className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-customColor to-indigo-600 text-white font-semibold text-lg shadow-lg hover:from-indigo-600 hover:to-customColor transform transition-all duration-200 hover:scale-105"
                    >
                        Start Tracking Your Applications
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    )
}