import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/Card";
import Activity1 from '../../assets/activity1.jpeg'
import Activity2 from '../../assets/activity2.jpeg'
import Activity3 from '../../assets/activity3.jpeg'
import Activity4 from '../../assets/activity4.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import PropTypes from "prop-types";

const availableSportsData = {
  tennis: [
    { id: 1, title: "Tennis Match 1", actnum: '2', meter: '30', description: "Exciting match details for tennis.", image: Activity1, date: "Sep 15 - Dec 31 -", price: 'Free',},
    { id: 2, title: "Tennis Match 2", actnum: '2', meter: '30', description: "Another thrilling tennis match.", image: Activity2,date: "Sep 15 - Dec 31 -", price: 'Free', },
    { id: 3, title: "Tennis Match 3", actnum: '2', meter: '30', description: "Another thrilling tennis match.", image: Activity3,date: "Sep 15 - Dec 31 -", price: 'Free', },
    { id: 4, title: "Tennis Match 4", actnum: '2', meter: '30', description: "Another thrilling tennis match.", image: Activity4,date: "Sep 15 - Dec 31 -", price: 'Free', },
],
  squash: [
    { id: 1, title: "Squash Match 1", actnum: '2', meter: '30', description: "Exciting match details for squash.",image: Activity1, date: "Sep 15 - Dec 31 -", price: '$ 8,50',},
    { id: 2, title: "Squash Match 2", actnum: '2', meter: '30', description: "Another thrilling squash match.",image: Activity2,date: "Sep 15 - Dec 31 -", price: '$ 8,50',},
    { id: 3, title: "Squash Match 3", actnum: '2', meter: '30', description: "Another thrilling squash match.",image: Activity3,date: "Sep 15 - Dec 31 -", price: '$ 8,50',},
    { id: 4, title: "Squash Match 4", actnum: '2', meter: '30', description: "Another thrilling squash match.",image: Activity4,date: "Sep 15 - Dec 31 -", price: '$ 8,50',},
  ],
  padel: [
    { id: 1, title: 'My PadelClub Heerhugowaard', actnum: '2', meter: '30', description: 'Exciting match details for padel.', image: Activity1, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 2, title: 'Weijver Padel', actnum: '2', meter: '30', description: 'Another thrilling padel match.', image: Activity2, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 3, title: 'Padel Club Hem', actnum: '2', meter: '30', description: 'Another thrilling padel match.', image: Activity3, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 4, title: 'Padel Next', actnum: '2', meter: '30', description: 'Another thrilling padel match.', image: Activity4, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
  ],
  pickleball: [
    { id: 1, title: 'Pickleball Match 1', actnum: '2', meter: '30', description: 'Exciting match details for Pickleball.', image: Activity1, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 2, title: 'Pickleball Match 2', actnum: '2', meter: '30', description: 'Another thrilling Pickleball match.', image: Activity2, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 3, title: 'Pickleball Match 3', actnum: '2', meter: '30', description: 'Another thrilling Pickleball match.', image: Activity3, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 4, title: 'Pickleball Match 4', actnum: '2', meter: '30', description: 'Another thrilling Pickleball match.', image: Activity4, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
  ],
  indoor: [
    { id: 1, title: 'Indoor Match 1', actnum: '2', meter: '30', description: 'Exciting match details for Indoor.', image: Activity1, date: 'Sep 15 -Dec 31 -', price: 'Free'  },
    { id: 2, title: 'Indoor Match 2', actnum: '2', meter: '30', description: 'Another thrilling Indoor match.', image: Activity2, date: 'Sep 15 -Dec 31 -', price: 'Free'  },
    { id: 3, title: 'Indoor Match 3', actnum: '2', meter: '30', description: 'Another thrilling Indoor match.', image: Activity3, date: 'Sep 15 -Dec 31 -', price: 'Free'  },
    { id: 4, title: 'Indoor Match 4', actnum: '2', meter: '30', description: 'Another thrilling Indoor match.', image: Activity4, date: 'Sep 15 -Dec 31 -', price: 'Free'  },
  ],
  outdoor: [
    { id: 1, title: 'Outdoor Match 1', actnum: '2', meter: '30', description: 'Exciting match details for Outdoor.', image: Activity1, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 2, title: 'Outdoor Match 2', actnum: '2', meter: '30', description: 'Another thrilling Outdoor match.', image: Activity2, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 3, title: 'Outdoor Match 3', actnum: '2', meter: '30', description: 'Another thrilling Outdoor match.', image: Activity3, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
    { id: 4, title: 'Outdoor Match 4', actnum: '2', meter: '30', description: 'Another thrilling Outdoor match.', image: Activity4, date: 'Sep 15 -Dec 31 -', price: '$10,00'  },
  ],
}

export const SportsCarousel = ({ selectedSport }) => {
  // const { id } = useParams();
  // console.log(id);
  
  const carouselData = availableSportsData[selectedSport] || [];
  const [visibleSlides, setVisibleSlides] = useState(4);

  const calculateVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    setVisibleSlides(calculateVisibleSlides());
    const handleResize = () => setVisibleSlides(calculateVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Carousel visibleSlides={visibleSlides} opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {carouselData.map(({ id, title, description, image, date, meter, price }) => (
            <CarouselItem key={id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="relative bg-white lg:h-[380px]">
                <div className="absolute right-0 top-0 bg-orange-600 px-4 py-2 rounded-bl-md">
                  <p className="text-white text-[1.5rem] font-[500]">{meter}</p>
                  <p className="text-[#fdfdfd] text-[.9rem] font-[500]">KM</p>
                </div>
                <div className="h-[200px]">
                  <img className="w-full h-full object-cover" src={image || "Placeholder"} alt={title} />
                </div>
                <CardContent className="flex flex-col justify-between h-[180px] relative">
                  <p className="absolute -top-10 text-white text-[1.4rem] font-[600]">{title}</p>
                  <div>
                    <p className="text-[1rem] font-[500] mt-4">{description}</p>
                    <p className="text-[#777] text-[.85rem]">{date} {price}</p>
                  </div>
                  <div className="flex items-center justify-end mb-4">
                    <Link
                      to={`/clubs/${id}/reserve`}
                      // state={{ title, image }} // Passing the state here
                      className="text-[white] text-[.85rem] bg-orange-500 font-[500] rounded-[100px] px-2 py-1"
                    >
                      Reserve
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

SportsCarousel.propTypes = {
  selectedSport: PropTypes.string.isRequired,
};
