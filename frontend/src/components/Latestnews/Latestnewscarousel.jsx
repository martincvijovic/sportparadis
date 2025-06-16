import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/Card";
import Activity1 from '../../assets/activity1.jpeg'
import Activity2 from '../../assets/activity2.jpeg'
import Activity3 from '../../assets/activity3.jpeg'
import Activity4 from '../../assets/activity4.png'
import './latestnews.css'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";

const lastestNewsdata = {
  tennis: [
    { id: 1, title: "Tennis Match 1", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you?", image: Activity1, date: "Friday 6 December",},
    { id: 2, title: "Tennis Match 2", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity2,date: "Friday 6 December", },
    { id: 3, title: "Tennis Match 3", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity3,date: "Friday 6 December", },
    { id: 4, title: "Tennis Match 4", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity4,date: "Friday 6 December", },
],
  padel: [
    { id: 1, title: 'My PadelClub Heerhugowaard', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity1, date: 'Friday 6 December',},
    { id: 2, title: 'Weijver Padel', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity2, date: 'Friday 6 December',},
    { id: 3, title: 'Padel Club Hem', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity3, date: 'Friday 6 December',},
    { id: 4, title: 'Padel Next', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity4, date: 'Friday 6 December',},
  ]
}

export const Latestnewscarousel = ({ selectedLatestNews }) => {
  const carouselNewsData = lastestNewsdata[selectedLatestNews];
  // console.log(carouselNewsData);
  
  const [ articleModal, setarticleModal ] = useState(null)
  const [visibleSlides, setVisibleSlides] = useState(4); // Default visible slides

  // Function to calculate visible slides based on window width
  const calculateVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
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

  const handleShowArticle = (article) => {
    setarticleModal(article);
  };

  const closeModal = () => {
    setarticleModal(null);
  };

  return (
    <div>
      <Carousel
        visibleSlides={visibleSlides} // Dynamically set visible slides
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent>
        {carouselNewsData.map((article) => (
        <CarouselItem key={article.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <Card className="relative bg-white lg:h-[430px]">
            <div className="h-[200px]">
              <img
                className="w-full h-full object-cover"
                src={article.image || 'Placeholder'}
                alt={article.title}
              />
            </div>
            <CardContent className="flex flex-col h-[230px]">
              <div className="h-[148px] overflow-y-hidden">
                <p className="text-[.8rem] text-[#999] mt-2">{article.date}</p>
                <p className="text-[1.2rem] lg:text-[1.2rem] font-[500]">{article.title}</p>
                <p className="text-[.9rem]">{article.description}</p>
              </div>
              <div
                onClick={() => handleShowArticle(article)}
                className="flex justify-end mt-6 mb-4 absolute bottom-0 right-2"
              >
                <button className="font-[700] text-orange-500 text-[1.05rem] flex items-center">
                  Show article <IoIosArrowRoundForward className="text-[1.5rem] font-[600]" />
                </button>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {
        articleModal && (
          <>
            <div className="fixed top-8 inset-0 z-50 flex items-center justify-center bg-opacity-50 h-[80vh]">
            <div className={articleModal ? 'overlays' : ''}
              onClick={closeModal}
              ></div>
              <div className="bg-white rounded-lg max-w-lg w-full p-6 relative explore">
                <button
                  className="absolute text-[2rem] top-3 right-3 text-gray-500 hover:text-black"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{articleModal.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{articleModal.date}</p>
                </div>
                <div className="flex flex-col items-center overflow-y-auto">
                  <img
                    src={articleModal.image}
                    alt={articleModal.title}
                    className="w-full h-64 object-cover mb-4"
                  />
                  <p>{articleModal.description}</p>
                </div>
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};


// PropTypes validation for selectedLatestNews prop
Latestnewscarousel.propTypes = {
  selectedLatestNews: PropTypes.string.isRequired,
};