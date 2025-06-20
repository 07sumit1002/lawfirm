// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Rights from '../assets/rights.jpg';
// import Mission from '../assets/mission.jpg';
// import Fair from '../assets/fairness.jpg';
// import Integrity from '../assets/integrity.jpg';

// const slides = [
//   {
//     image: 'https://tse1.mm.bing.net/th?id=OIP.UwXaHQL-q65InbX_Ls9dSAHaEw&pid=Api&P=0&h=180',
    
    // title: <motion.h1
    //           className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
    //           initial={{ scale: 0.95 }}
    //           animate={{ scale: 1 }}
    //           transition={{ duration: 0.8, delay: 0.4 }}
    //         >Upholding Justice with Integrity
    //         </motion.h1>,

//     subtitle: <motion.p
//               className="text-xl mb-8 text-white font-bold font-mont"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Empowering the voice of law through digital innovation.
//             </motion.p>,
//   },
//   {
//     image: 'https://srb.co.uk/wp-content/uploads/2021/12/cyber-laws-2021-e1639764056507-1024x682.jpg',

//     title: <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >Fairness in Every Verdict
//             </motion.h1>,

//     subtitle: <motion.p
//               className="text-xl mb-8 text-white font-mont font-bold"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Driven by values, led by experience.
//             </motion.p>,
//   },
//   {
//     image: 'https://tse1.mm.bing.net/th?id=OIP.O_OPH5MS7GVMOIZ5l9ZGXwHaEY&pid=Api&P=0&h=180',

//     title: <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >Protecting Constitutional Rights
//             </motion.h1>,

//     subtitle: <motion.p
//               className="text-xl mb-8 text-white font-bold font-mont"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Defending justice, empowering people.
//             </motion.p>,
//   },
//   {
//     image: Mission,

//     title: <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >Your Justice, Our Mission
//             </motion.h1>,

//     subtitle: <motion.p
//               className="text-xl mb-8 text-white font-bold font-mont"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Advocating with heart and mind.
//             </motion.p>,
//   },
// ];


// function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden font-mont">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${slides[current].image})` }}
//           initial={{ scale: 1.1, opacity: 0.3 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ opacity: 0.2 }}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//         >
//           <div className="absolute inset-0 bg-blue-400/30"></div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             className="text-white max-w-2xl"
//             key={current + '-text'}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
//           >
//             {slides[current].title}
//             {slides[current].subtitle}

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <Link
//                 to="/contact"
//                 className="px-8 py-3 border-2 border-white hover:border-primary hover:text-primary text-white font-medium rounded-md transition-all"
//               >
//                 Free Consultation
//               </Link>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="hidden md:flex flex-col items-center gap-3 absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 current === index ? 'bg-white' : 'bg-white/50 hover:bg-primary'
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Mission from '../assets/Legal advice online.jpg'; // You can replace with your preferred static image

function Hero() {
  return (
        <section
      className="relative h-screen w-full overflow-hidden font-mont"
      style={{ backgroundImage: `url(${Mission})`, backgroundSize: 'cover',  backgroundPosition: 'center',  backgroundRepeat: 'no-repeat'}}
    >
      <div className="absolute inset-0 bg-deepRoyal/30"></div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          className="text-white max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }} 
            >Your Case, Our Priority
            </motion.h1>

          <motion.p
            className="text-xl mb-8 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering the voice of law through digital innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white hover:border-primary hover:text-primary text-white font-medium rounded-md transition-all"
            >
              Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
