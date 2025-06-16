import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";

import NoordHolland from '../../assets/Noordholland.webp'
import Limburg from '../../assets/Limburg.webp'
import Gelderland from '../../assets/Gelderland.webp'
import Overijssel from '../../assets/Overijssel.webp'
import Drenthe from '../../assets/Drenthe.webp'
import Groningen from '../../assets/Groningen.webp'
import Friesland from '../../assets/Friesland.webp'
import Flevoland from '../../assets/Flevoland.webp'
import Utrecht from '../../assets/Utrecht.webp'
import NoordBrabant from '../../assets/NoordBrabant.webp'
import Zeeland from '../../assets/Zeeland.webp'

import { IoArrowForward } from "react-icons/io5";


export function CarouselSize() {
  const jobData = [
    { id: 1, image: NoordHolland, number: "36", name: "Noord-Holland" },
    { id: 2, image: Flevoland, number: "45", name: "Zuld-Holland" },
    { id: 3, image: Zeeland, number: "11", name: "Zeeland" },
    { id: 4, image: NoordBrabant, number: "65", name: "Noord-Brabant" },
    { id: 5, image: Utrecht, number: "16", name: "Utrecht" },
    { id: 6, image: Flevoland, number: "04", name: "Flevoland" },
    { id: 7, image: Friesland, number: "16", name: "Friesland" },
    { id: 8, image: Groningen, number: "02", name: "Groningen" },
    { id: 9, image: Drenthe, number: "17", name: "Drenthe" },
    { id: 10, image: Overijssel, number: "16", name: "Overijssel" },
    { id: 11, image: Gelderland, number: "35", name: "Gelderland" },
    { id: 12, image: Limburg, number: "30", name: "Limburg" },
  ];

  const [visibleSlides, setVisibleSlides] = useState(4); // Default number of visible slides

  // Function to calculate visible slides based on window width
  const calculateVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 3; // Medium screens
    if (window.innerWidth >= 640) return 2; // Small screens
    return 1; // Extra small screens
  };

  useEffect(() => {
    // Set initial visible slides
    setVisibleSlides(calculateVisibleSlides());

    // Update visible slides on window resize
    const handleResize = () => {
      setVisibleSlides(calculateVisibleSlides());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      visibleSlides={visibleSlides} // Dynamically set visible slides
      opts={{ align: "start" }}
      className="w-full"
    >
      <CarouselContent>
        {jobData.map(({ id, image, number, name }) => (
          <CarouselItem key={id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Link>
                <Card className="relative bg-white">
                    <div className="absolute right-0 top-0 bg-orange-600 px-4 py-2 rounded-bl-md">
                        <p className="text-white text-[2rem] font-[500]">{number}</p>
                        <p className="text-[#fdfdfd] text-[.9rem] font-[500]">CLUBS</p>
                    </div>
                    <img
                        className="w-full h-40 lg:h-[11rem] object-cover"
                        src={image}
                        alt={name}
                    />
                    <CardContent className='p-6'>
                        <p className="text-[1.4rem] lg:text-[1.7rem] text-white absolute left-3 bottom-[5.5rem] font-[500]">{name}</p>
                        <div className="flex items-start"><Link to='/clubs' className='text-[white] text-[1rem] bg-orange-500 font-[500] rounded-[100px] p-2 flex items-center gap-1'>View offer <IoIosArrowRoundForward className='text-[1.4rem] font-[600]'/></Link></div>
                    </CardContent>
                </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Jobs = () => {
  return (
    <div className="flex items-center justify-center min-h bg-[#f5f5f5] px-8 md:px-14 py-6 overflow-x-hidden">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center justify-between flex-wrap mb-6">
          <p className="font-[600] text-[1.3rem] text-left md:text-[2rem]">
            Find and book a job in your province
          </p>
          <div className="flex items-center gap-3">
            <Link to='/clubs' className="text-orange-500 font-[500]">Show on map</Link>
            <Link to='/clubs' className="text-white rounded-[100px] bg-orange-500 p-2 px-4 font-[500] flex items-center gap-1">Show all clubs <IoArrowForward /></Link>
          </div>
        </div>
        <CarouselSize />
      </div>
    </div>
  );
}
export default Jobs;
