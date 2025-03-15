"use client";
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

const activities = [
  {
    image: "/Get the list of needs.svg",
    title: "Get the list of needs",
  },
  {
    image: "/Help with the iftar.svg",
    title: "Help with the iftar organazation",
  },
  {
    image: "/image 102.svg",
    title: "Donate and support",
  },{
    image: "/Get the list of needs.svg",
    title: "Get the list of needs",
  },
  {
    image: "/Help with the iftar.svg",
    title: "Help with the iftar organazation",
  },
  {
    image: "/image 102.svg",
    title: "Donate and support",
  },
  {
    image: "/Get the list of needs.svg",
    title: "Get the list of needs",
  },
];

const feedbacks = [
  {
    image: "/feedback.svg",
  },
  {
    image: "/feedback.svg",
  },
  {
    image: "/feedback.svg",
  },
  {
    image: "/feedback.svg",
  },
  {
    image: "/feedback.svg",
  },
];
export default function Home() {
  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <nav className="flex flex-row justify-end items-center mr-32 gap-20">
        <Link href="/" className="text-[#37539A] font-semibold">Home</Link>
        <select
          name="Activities"
          className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-4"
          defaultValue=""
        >
          <option value="" disabled>Activities</option>
          <option value="education">Activities</option>
          <option value="santé">Activities</option>
          <option value="environnement">Activities</option>
          <option value="social">Activities</option>
        </select>
        <Link href="/about" className="font-semibold">About-us</Link>
        <Link href="/about" className="font-semibold">Community</Link>
        <Link href="/assossiationRegister" className="font-semibold bg-[#962728] text-[#ffff] rounded-xl p-2 w-20 text-center">Sign Up</Link>
      </nav>

      <div className="relative w-full h-[800px]">
        <img 
            src="./LandingPage.svg" 
            className="object-cover w-full h-[850px]" 
            alt="Landing page" 
          />
          <div className="flex flex-col justify-center items-center absolute top-1/4 left-5 w-[450px] h-[500px] space-y-5 pr-8
            bg-[#D9D9D9]/10 backdrop-blur-lg rounded-xl border border-[#D9D9D9]/20 shadow-lg">
            <h1 className="text-5xl text-left font-bold text-black">
              Make a Big <br/>
              Diffirence by<br/>
              <span className={`${poppins.className} text-[#9E090F] text-3xl font-semibold`}>Small efforts</span>
            </h1>
            <p className="text-[#484D53] text-md mt-4">
              The Ramadan Djezzy community for gaining more <br />
              good deeds and platforms to facilitate the help.
            </p>
            <div className="flex flex-row justify-center items-center gap-x-4 mt-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md">
                Get started
              </button>
              <button className="bg-[#ffff] border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold shadow-md">
                Donate Now
              </button>
            </div>
          </div>  
          <img src="./Ramadan Karim.svg" alt="Djezzy ramadan karim" className="absolute top-6/7 right-[10px] h-36"/>
      </div>

      <div className="flex flex-row justify-between items-center mt-20 mb-10 p-10">
        <div className="flex flex-row justify-center items-center gap-3">
          <img src="./Wilaya.svg" alt="Wilaya Djezzy"/>
          <div className={`${poppins.className} flex flex-col justify-center items-center`}>
            <h3 className="text-4xl font-medium">40</h3>
            <span className="text-xl">Wilaya</span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <img src="./People.svg" alt="Helped people Djezzy"/>
          <div className={`${poppins.className} flex flex-col justify-center items-center`}>
            <h3 className="text-4xl font-medium">12,900</h3>
            <span className="text-xl">Helped people</span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <img src="./Donation.svg" alt="Donation Djezzy"/>
          <div className={`${poppins.className} flex flex-col justify-center items-center`}>
            <h4 className="text-4xl font-medium">1,000</h4>
            <span className="text-xl">Donation</span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <img src="./Wilaya.svg" alt="Wilaya Djezzy"/>
          <div className={`${poppins.className} flex flex-col justify-center items-center`}>
            <h3 className="text-4xl font-medium">19,900</h3>
            <span className="text-xl">Volunteers</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] p-5 mb-24 pb-20">
        <h3 className={`${poppins.className} text-4xl font-semibold p-5 mt-10 mb-5`}>
          Our <span className="text-[#E2AE29]">Activities</span>
        </h3>

        <div className="relative w-full px-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-red-500" />
            </motion.button>

            <div
              ref={carouselRef}
              className="flex overflow-x-hidden space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] snap-centershadow-lg rounded-xl overflow-hidden"
                >
                  <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                  <p className="text-center text-xl font-semibold mt-5">{activity.title}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 z-10"
            >
              <ChevronRight className="w-6 h-6 text-red-500" />
            </motion.button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-16 mb-20">
        <img src="./DjezzyLogo.svg" alt="Djezzy Logo"/>
        <div className="flex flex-col justify-center items-center gap-y-10">
          <h3 className={`${poppins.className} text-6xl font-semibold`}>Our goal ?</h3>
          <p className={`${poppins.className} text-xl w-[800px] text-[#7D838B]`}>
            creating a seamless and engaging way to 
            volunteers with meaningful <br/> opportunities while
            enabling organizations to manage resources 
            effectively. By leveraging digital tools that enhance <br/>
            collaboration <br/>simplify recruitment, and provide
            insights into community needs <br/>volunteerism 
            can become more accessible, impactful, and
            engaging <br/> particularly for younger generations.
          </p>
          <div className="w-[700px]">
            <span className={`${poppins.className} flex flex-row items-center text-[#2F7B2B]`}><img src="./check.svg"/>Creating a seamless and engaging way to volunteers with opportunities.</span>
            <span className={`${poppins.className} flex flex-row items-center text-[#2F7B2B]`}><img src="./check.svg"/>Enabling organizations to manage resources effectively.</span>
            <span className={`${poppins.className} flex flex-row items-center text-[#2F7B2B]`}><img src="./check.svg"/>Leveraging digital tools that enhance collaboration, simplify recruitment, and provide insights into community needs, volunteerism.</span>
          </div>
          <div>
            <h3 className={`${poppins.className} font-bold text-xl`}>About Us</h3>
            <h4 className={`${poppins.className} flex flex-row items-center text-lg gap-1`}><img src="./AboutUs.svg" alt="Djezzy aboutUs"/><span className="text-[#E2AE29]">Non profitable organization </span>in collab with djezzy.</h4>
          </div>
        </div>
      </div>

      <div>
        <img src="./Annonce.svg" className="w-full" alt="Djezzy Annonce"/>
      </div>

      <div className="p-5 mb-24 pb-20">
        <h3 className={`${poppins.className} text-4xl font-semibold p-5 mt-10 mb-5`}>
          Read our <span className="text-[#E2AE29]">Latest Blog &Feedbacks</span>
        </h3>

        <div className="relative w-full px-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-red-500" />
            </motion.button>

            <div
              ref={carouselRef}
              className="flex overflow-x-hidden space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[500px] snap-centershadow-lg rounded-xl overflow-hidden"
                >
                  <img src={feedback.image} />
                </div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-3 z-10"
            >
              <ChevronRight className="w-6 h-6 text-red-500" />
            </motion.button>
        </div>
      </div>

        <div className={`${poppins.className} flex flex-row justify-evenly items-center border-t-1 border-b-1 p-10`}>
          <div className="flex flex-col justify-start gap-3">
              <h4 className="text-2xl font-semibold">Mobadaraty</h4>
              <span className="text-lg text-[#D0D6E2]">
               A non profitable platform to help in <br/>
               mata3im ra7ma logitics and managemnet and <br/> assign volunteers
              </span>
          </div>
          <div className="flex flex-col justify-start gap-3">
              <h4 className="text-2xl font-semibold">Products</h4>
              <span className="text-lg text-[#D0D6E2]">
               Volunteer application <br/>
               Association web page
              </span>
          </div>
          <div className="flex flex-col justify-start gap-3">
              <h4 className="text-2xl font-semibold">Useful Links</h4>
              <span className="text-lg text-[#587CD5]">
                your account<br/>
                Become an assiosiator <br/>
                Download Volunteer app
              </span>
          </div>
          <div className="flex flex-col justify-start gap-3">
              <h4 className="text-2xl font-semibold">Contact</h4>
              <span className="text-lg text-[#00000]">
                Alger,16000, Algerie <br/>
                mobadaraty@gmail.com <br/>
                +213771334455 <br/>
                +01771334455
              </span>
          </div>
        </div>

        <footer className={`${poppins.className} flex flex-row justify-center items-center gap-2 text-[#7D838B] mt-10 mb-5`}>
          <img src="./C.svg" alt="Copyright Djezzy"/>
          <h3 className="text-3xl">Mobadaraty2025. All rights served</h3>
        </footer>

    </div>
  );
}
