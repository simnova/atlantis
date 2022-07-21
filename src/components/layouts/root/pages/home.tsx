import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Helmet } from 'react-helmet';

/*

IMAGE COMPRESSOR:
https://imagecompressor.com/

SRCSET GENERATOR:
https://www.responsivebreakpoints.com/

*/

export const Home: React.FC<any> = (_props) => {
  return (<>
    <Helmet>
      <title>Welcome</title>
    </Helmet>
    <h1>Welcome to the Atlantis in Ocean City, MD</h1>
    <article >
        <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 5500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper"
           
        >
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_200.jpg 200w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_573.jpg 573w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_821.jpg 821w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_1036.jpg 1036w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_1208.jpg 1208w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_1376.jpg 1376w,
                /assets/carousel/carousel-1-min_pxphff_c_scale,w_1400.jpg 1400w`}
                src={`/assets/carousel/carousel-1-min_pxphff_c_scale,w_1400.jpg`}
              alt=""/>
            </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_200.jpg 200w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_400.jpg 400w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_570.jpg 570w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_703.jpg 703w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_817.jpg 817w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_917.jpg 917w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1005.jpg 1005w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1099.jpg 1099w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1188.jpg 1188w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1270.jpg 1270w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1355.jpg 1355w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1389.jpg 1389w,
                /assets/carousel/carousel-2-min_oxxtmu_c_scale,w_1400.jpg 1400w"
              src="carousel-2-min_oxxtmu_c_scale,w_1400.jpg"
              alt=""/>
          </picture>

        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_200.jpg 200w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_455.jpg 455w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_627.jpg 627w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_653.jpg 653w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_992.jpg 992w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_964.jpg 964w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_1189.jpg 1189w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_1277.jpg 1277w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_1354.jpg 1354w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_1364.jpg 1364w,
                /assets/carousel/carousel-3-min_u18n1y_c_scale,w_1400.jpg 1400w"
              src="carousel-3-min_u18n1y_c_scale,w_1400.jpg"
              alt=""/>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_200.jpg 200w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_482.jpg 482w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_674.jpg 674w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_842.jpg 842w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_970.jpg 970w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1101.jpg 1101w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1219.jpg 1219w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1396.jpg 1396w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1347.jpg 1347w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1394.jpg 1394w,
                /assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg 1400w"
                src="/assets/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg"
              alt="" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </article>
  </>)
}