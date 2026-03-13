import { useState } from 'react'
import {Dialog,DialogPanel, PopoverGroup,} from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import { Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import p1 from "../../public/images/1.png";


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <section id="navbar">
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
                    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                                <div className="h-10 w-10 bg-gradient-to-br from-customColor to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-customColor to-indigo-600 bg-clip-text text-transparent">
                                    Trackify
                                </span>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-700 hover:text-customColor transition-colors duration-200">
                                Home
                            </a>
                            <a href="#trackstep" className="text-sm font-semibold leading-6 text-gray-700 hover:text-customColor transition-colors duration-200">
                                Job Tracker
                            </a>
                            <a href="#feature" className="text-sm font-semibold leading-6 text-gray-700 hover:text-customColor transition-colors duration-200">
                                Features
                            </a>
                            <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-700 hover:text-customColor transition-colors duration-200">
                                Pricing
                            </a>
                        </PopoverGroup>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
                            <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-700 hover:text-customColor transition-colors duration-200">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link to="/signup" className="text-sm font-semibold leading-6 rounded-lg px-4 py-2 bg-gradient-to-r from-customColor to-indigo-600 text-white hover:from-indigo-600 hover:to-customColor transform transition-all duration-200 hover:scale-105 shadow-md">
                                Sign up for free
                            </Link>

                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-10" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Job Tracker
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Feature
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Pricing
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="/signin"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                        <a
                                            href="/signup"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 inline-block rounded-lg p-2  bg-customColor text-white "
                                        >
                                            Sign up for free
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>
                <Box sx={{ flexGrow: 1 }} className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 pt-12 pb-20">
                    <Grid container spacing={4} className="items-center">
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="p-6 sm:p-12 lg:p-20">
                                <div className="inline-block px-4 py-2 bg-lightbg rounded-full mb-6">
                                    <span className="text-sm font-semibold text-customColor">🚀 Your Career Journey Starts Here</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                    <span className="bg-gradient-to-r from-customColor to-indigo-600 bg-clip-text text-transparent">Less Hassle,</span>
                                    <br />
                                    <span className="text-color2">More Interviews</span>
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                                    Manage your job search in one place—log applications, check their status, and get reminders for interviews. Simplify your career journey today!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/signup" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-customColor to-indigo-600 text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-customColor transform transition-all duration-200 hover:scale-105">
                                        Get Started Free
                                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                    <a href="#trackstep" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-customColor hover:text-customColor transition-all duration-200">
                                        Learn More
                                    </a>
                                </div>
                                <div className="mt-12 flex items-center gap-8">
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">1000+</div>
                                        <div className="text-sm text-gray-600">Active Users</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">5000+</div>
                                        <div className="text-sm text-gray-600">Jobs Tracked</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">98%</div>
                                        <div className="text-sm text-gray-600">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="p-6 sm:p-12 lg:p-20 relative">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-customColor/20 to-indigo-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
                                    <img src={p1} className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" alt="Job Search Dashboard" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}