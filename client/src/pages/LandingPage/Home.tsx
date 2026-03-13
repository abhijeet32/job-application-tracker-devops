'use client'
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import TrackStep from './TrackStep';
import Review from './Review';
import Features from './Features';
import Pricing from './Pricing';
import Questions from './Questions';

export default function Home() {
    
    return (
        <>
        <div className='bg-white'>
        <Header />
           <TrackStep />
           <Features />
           <Pricing />
           <Questions />                        
            <Footer />
        </div>
           
        </>
    )
};

// function JobTracksection(){
//     return(
//         <>
//  <section>
//             <Box sx={{ flexGrow: 1 }} className="mx-auto flex max-w-7xl p-6 lg:px-8">
//     <Grid container spacing={4} className="items-center">
//         {/* Image Section */}
//         <Grid item xs={12} sm={12} md={6}>
//             <div className="p-4 md:p-0">
//                 <img src={p1} className="w-full h-auto rounded-lg shadow-lg" alt="Job Search" />
//             </div>
//         </Grid>

//         {/* Text Section */}
//         <Grid item xs={12} sm={12} md={6}>
//             <div className="p-8 md:p-20">
//                 <p className="text-3xl md:text-4xl text-[#190445CC] mb-2">Job Tracker</p>
//                 <p className="text-5xl md:text-7xl text-color2 font-extrabold leading-tight mb-4">Keeps Your Job Search Organized</p>
//                 <p className="text-lg md:text-2xl mb-6 text-[#190445CC]">
//                   No more messy spreadsheets. Huntr keeps track of every detail about your job opportunities-notes,tasks,job descriptions, salaries, locations,company data and more.
//                     </p>
//                 <button className="rounded-lg p-3 bg-customColor text-white hover:bg-customColor-dark transition-colors">
//                     Explore Job Tracker
//                 </button>
//             </div>
//         </Grid>
//     </Grid>
// </Box>

//             </section>
//         </>
//     )
// }
