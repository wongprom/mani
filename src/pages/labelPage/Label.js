import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { herosInfo } from '../../assets/mockData/mockData';
import CarouselGrid from '../../components/carouselGrid/CarouselGrid';
import imgGirlHeadphone from '../../assets/images/girl_headphone.png';
import imgMice from '../../assets/images/mice.png';
import imgRedLogo from '../../assets/images/img_logo_red_200.png';

const Label = () => {
  const [releasesData, setReleasesData] = useState(null);

  // useEffect(() => {
  //   getUser(imageReleases);
  // }, [imageReleases]);

  // const getUser = async (imageReleases) => {
  //   try {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users'
  //     );
  //     const tepData = response.data.map((person, index) => {
  //       return {
  //         firstName: person.name.split(' ')[0],
  //         lastName: person.name.split(' ')[1],
  //         img: imageReleases[index],
  //       };
  //     });
  //     setReleasesData(tepData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // console.log('releasesData ==> ', releasesData);

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1.5, showArrows: false },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2, showArrows: false },
  //   { width: 850, itemsToShow: 3, showArrows: false },
  //   { width: 1150, itemsToShow: 4, itemsToScroll: 2, showArrows: true },
  // ];

  return (
    <div className="max-w-mani m-auto">
      <section>
        <Carousel
          // itemPadding={[0]}
          // outerSpacing={0}
          showArrows={false}
          itemsToShow={1}
          // className="imakzv rec rec-pagination"
        >
          {herosInfo.map(({ id, img, title, subTitle, btnText, ...rest }) => (
            <div className="relative" key={id}>
              <div className="-mt-20">
                <img
                  src={img}
                  className="h-full object-none"

                  // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2  w-full text-maniWhite px-4 flex flex-col text-center space-y-4 max-w-md ">
                <p className="text-3xl ">{title}</p>
                <p className="text-xs">{subTitle}</p>
                <div>
                  <button className="border-2 border-red-500 rounded-full py-2 px-10">
                    {btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section>
        <div className="my-16">
          <p className="w-full text-2xl  border-b-2 border-maniGraydark leading-zero  my-5 xl:text-center xl:text-4xl xl:leading-zero">
            <span className="bg-white px-2.5 ">New Releases</span>
          </p>
        </div>
        <CarouselGrid />
        {/* <div className="h-20">
          <Carousel
            renderArrow={myArrow}
            itemsToShow={1.5}
            pagination={false}
            // itemPadding={[0, 10, 0, 0]}
            breakPoints={breakPoints}
          >
            {releasesData?.map((release) => (
              <div className="flex flex-col">
                <div className="rounded-lg">
                  <img src={release.img} alt="" />
                </div>
                <div className="flex flex-col">
                  <strong>{release.firstName}</strong>
                  <p className="text-maniGraydark">{release.lastName}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}
      </section>
      <section className="bg-maniRed mt-12">
        <div className="">
          <div className="CARDS_CONTAINER  w-full flex flex-wrap justify-evenly  mobile-425:p-12 lg:flex-nowrap ">
            {/* kort 1 */}
            <div className="CARD  max-w-425 mobile-375:rounded-lg lg:max-w-1/2">
              <div className="w-full">
                <img
                  className="w-full object-contain mobile-375:rounded-lg mobile-425:border mobile-425:border-maniWhite lg:border-none"
                  src={imgGirlHeadphone}
                  alt="girl on podcost"
                />
              </div>
              <div className="flex flex-col items-center p-4  text-maniWhite font-thin lg:flex-row lg:p-0 lg:mt-4">
                <p className="text-center lg:text-left">
                  Agnihicient qui con et poreped expedig enistio beritis mil
                  inulliciam volum quunt, ipistius ut et voluptatur am essum
                </p>
                <div className="mt-4 lg:mt-0">
                  <button className="border rounded-full py-2 px-10 border-maniWhite font-extralight whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* kort 1  slut*/}
            {/* kort 2 */}
            <div className="max-w-425 mobile-375:rounded-lg lg:max-w-1/2">
              <div className="relative w-full">
                <img
                  className="w-full object-contain mobile-375:rounded-lg mobile-425:border mobile-425:border-maniWhite lg:border-none  "
                  src={imgMice}
                  alt="mic"
                />
                <div className="absolute flex flex-col items-center bottom-5 left-1/2 transform -translate-x-1/2 text-maniWhite text-center">
                  <div className="w-32 h-6">
                    <img src={imgRedLogo} alt="" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">PODCAST</h2>
                    <p className="font-thin w-56 pt-2">
                      {' '}
                      Itat assequia voluption rest re rati to et pe a sit,
                      consequi
                    </p>
                  </div>
                </div>
              </div>
              {/*own component */}
              <div className="flex flex-col items-center p-4  text-maniWhite font-thin lg:flex-row lg:p-0 lg:mt-4">
                <p className="text-center lg:text-left">
                  Agnihicient qui con et poreped expedig enistio beritis mil
                  inulliciam volum quunt, ipistius ut et voluptatur am essum
                </p>
                <div className="mt-4 lg:mt-0">
                  <button className="border rounded-full py-2 px-10 border-maniWhite font-extralight whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* kort 2 slut */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Label;
