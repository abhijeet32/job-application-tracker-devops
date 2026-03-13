import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <>
            <section className="mx-auto max-w-7xl p-3 md:pb-[250px] lg:px-8">
            <hr className='mx-auto flex  items-center justify-between p-6' />
            <div className="mx-auto flex items-center justify-between pb-6">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                    <div>
                        <p className='text-[#190445]-700 text-xl font-semibold mb-2.5'>Trackify</p>
                        <p className='text-[#190445b3] text-[16px] text-[400] leading-6'>Manage your job search in one place—log applications, check their status, and get reminders for interviews. Simplify your career journey today!
                        </p>
                        <FontAwesomeIcon icon={faFacebookF} size="xl" className='p-2' />
                        <FontAwesomeIcon icon={faLinkedinIn} size="xl" className='p-2' />
                        <FontAwesomeIcon icon={faInstagram} size="xl" className='p-2'/>
                        <FontAwesomeIcon icon={faTwitter} size="xl" className='p-2'/>
                        <FontAwesomeIcon icon={faYoutube} size="xl" className='p-2'/>
                    </div>
                    <div>
                        <h4 className='text-[#190445]-700 text-xl font-semibold mb-2.5'>Quick Links</h4>
                        <ul className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                            {/* <li> <Link className='no-underline' href="#home">home</Link></li> */}
                            <li><a className='no-underline' href="#home">Home</a> </li>
                            <li className="mt-2"> <a className='no-underline' href="#team">Job tracker</a></li>
                            <li className="mt-2"> <a className='no-underline' href="#achieve">Feature</a></li>                            
                            <li className="mt-2"><a className='no-underline' href="#home"></a>Pricing</li>
                            <li className="mt-2"> <a className='no-underline' href="#contact">Q&A</a></li>
                        </ul>
                    </div>
                    <div >
                        <p className='text-[#190445]-700 text-xl font-semibold mb-2.5'>Product</p>
                        <ul className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                            <li className="mt-2" > <a className='no-underline' href="#home">Skill tracker</a></li>
                            <li className="mt-2"><a className='no-underline' href="#home">Task scheduler</a></li>
                            <li className="mt-2"> <a className='no-underline' href="#team">Profile</a></li>
                            <li className="mt-2"> <a className='no-underline' href="#achieve">Contacts</a></li>
                            <li className="mt-2"> <a className='no-underline' href="#contact">FAQS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-[#190445]-700 text-xl font-semibold mb-2.5'>Contact us</p>
                        <div className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                            <p>DO you have any queries of suggestions?</p>
                            <p>jobquestinfo@gmail.com</p>

                            <p>If you need support? Just give us</p>
                            <p>+55 111 222 333 44</p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
        </>
       
    )
}
export default Footer;