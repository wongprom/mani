import { useState, useEffect } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import instance from '../../assets/axios/httpRequest';
import { imageReleases } from '../../assets/mockData/mockData';
import iconArrowRight from '../../assets/icons/arrow_left_64.png';
import iconArrowLeft from '../../assets/icons/arrow_right_64.png';

const customArrow = ({ type, onClick, isEdge }) => {
  return (
    <div
      onClick={onClick}
      disabled={isEdge}
      className="h-full flex flex-col justify-center items-center"
    >
      <img
        className="h-24"
        src={type === consts.PREV ? iconArrowRight : iconArrowLeft}
      />
    </div>
  );
};

const breakPoints = [
  { width: 1, itemsToShow: 1.5 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2, showArrows: true },
];

const CarouselGrid = () => {
  const [releasesData, setReleasesData] = useState(null);

  useEffect(() => {
    const getAllNewReleases = async () => {
      try {
        const response = await instance.get('/users');
        const newReleases = response.data.map((releasesData, index) => {
          return {
            firstName: releasesData.name.split(' ')[0],
            lastName: releasesData.name.split(' ')[1],
            img: imageReleases[index],
          };
        });
        setReleasesData(newReleases);
        return newReleases;
      } catch (error) {
        console.error(error);
      }
    };
    getAllNewReleases();
  }, [imageReleases]);

  return (
    <div>
      <Carousel
        showArrows={false}
        renderArrow={customArrow}
        itemsToShow={1.5}
        pagination={false}
        breakPoints={breakPoints}
      >
        {releasesData?.map((release) => (
          <div key={release.firstName} className="flex flex-col">
            <div className="rounded-lg">
              <img src={release.img} alt={release.firstName} />
            </div>
            <div className="flex flex-col mt-5 ">
              <strong className="text-xl">{release.firstName}</strong>
              <p className="text-maniGraydark text-lg">{release.lastName}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselGrid;
