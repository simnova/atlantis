import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';



//@ts-ignore 
/*

IMAGE COMPRESSOR:
https://imagecompressor.com/

SRCSET GENERATOR:
https://www.responsivebreakpoints.com/

*/

export const Home: React.FC<any> = (_props) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
  }

  return (<>
    <Helmet>
      <title>Welcome</title>
    </Helmet>
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
                /img/carousel/carousel-1-min_pxphff_c_scale,w_200.jpg 200w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_573.jpg 573w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_821.jpg 821w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_1036.jpg 1036w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_1208.jpg 1208w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_1376.jpg 1376w,
                /img/carousel/carousel-1-min_pxphff_c_scale,w_1400.jpg 1400w`}
                src={`/img/carousel/carousel-1-min_pxphff_c_scale,w_1400.jpg`}
              alt=""/>
            </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_200.jpg 200w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_400.jpg 400w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_570.jpg 570w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_703.jpg 703w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_817.jpg 817w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_917.jpg 917w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1005.jpg 1005w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1099.jpg 1099w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1188.jpg 1188w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1270.jpg 1270w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1355.jpg 1355w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1389.jpg 1389w,
                /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1400.jpg 1400w"
              src="carousel-2-min_oxxtmu_c_scale,w_1400.jpg"
              alt=""/>
          </picture>

        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_200.jpg 200w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_455.jpg 455w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_627.jpg 627w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_653.jpg 653w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_992.jpg 992w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_964.jpg 964w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_1189.jpg 1189w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_1277.jpg 1277w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_1354.jpg 1354w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_1364.jpg 1364w,
                /img/carousel/carousel-3-min_u18n1y_c_scale,w_1400.jpg 1400w"
              src="carousel-3-min_u18n1y_c_scale,w_1400.jpg"
              alt=""/>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_200.jpg 200w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_482.jpg 482w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_674.jpg 674w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_842.jpg 842w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_970.jpg 970w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1101.jpg 1101w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1219.jpg 1219w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1396.jpg 1396w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1347.jpg 1347w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1394.jpg 1394w,
                /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg 1400w"
                src="/img/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg"
              alt="" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </article>

    <article className='space-y-9 mt-12'>
      <div className='relative'>
        <motion.div
          
          variants={boxVariant}
          animate={{x:-100, opacity: 0 }}
          whileInView={{x:0, opacity: 1 }}
          viewport={{ once: false }}
          className="md:absolute"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="p-8 bg-spicy-mix-50/90 w-100 md:w-[350px]" style={{height:'40vh', minHeight:'400px', minWidth:'300px'}}>
            <div className='flex flex-row items-center'>
              <div style={{fontFamily: 'Black Chancery',fontSize:'80px'}} className="text-blue-900/10">A</div>
              <div className='-ml-8 text-blue-900 font-light text-4xl'>AMENITIES</div>
            </div>
            Pool / Beach / Proximity to Golfing <br/>
            Learn all about what Atlantis has to Offer.

            <div className='py-4 mt-5 space-x-2'>
              <Link className="py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/visiting/amenities#'>Learn More</Link>
            </div>
          </div>
        </motion.div>
      
        <picture>
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_200.jpg 200w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_455.jpg 455w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_627.jpg 627w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_653.jpg 653w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_992.jpg 992w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_964.jpg 964w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_1189.jpg 1189w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_1277.jpg 1277w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_1354.jpg 1354w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_1364.jpg 1364w,
              /img/carousel/carousel-3-min_u18n1y_c_scale,w_1400.jpg 1400w"
            src="carousel-3-min_u18n1y_c_scale,w_1400.jpg"
            alt=""/>
          </picture>

      </div>
      <div className='relative'>
        <motion.div
          
          variants={boxVariant}
          animate={{x:-100, opacity: 0 }}
          whileInView={{x:0, opacity: 1 }}
          viewport={{ once: false }}
          className="md:absolute"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="p-8 bg-spicy-mix-100/90 h-100 w-100 md:w-[350px]"  style={{   minWidth:'300px'}}>
            <div className='flex flex-row items-center'>
              <div style={{fontFamily: 'Black Chancery',fontSize:'80px'}} className="text-blue-900/10">E</div>
              <div className='-ml-8  text-blue-900 font-light text-4xl'>EXPLORE</div>
            </div>
            Atlantis is located directly on the beach and close to everything you need to enjoy your stay.<br/>
            <div className="grid mt-5" style={{ gridTemplateColumns:'repeat(auto-fill,120px)', gap:'5px'}}>
              <div className='inline-block'><Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/explore/dining#'>Dining</Link></div>
              <div className='inline-block'><Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/explore/activities#'>Activities</Link></div>
              <div className='inline-block'><Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/explore/attractions#'>Attractions</Link></div>
              <div className='inline-block'><Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/explore/events#'>Events</Link></div>
            </div>
          </div>
        </motion.div>
        <picture>
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_200.jpg 200w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_482.jpg 482w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_674.jpg 674w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_842.jpg 842w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_970.jpg 970w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1101.jpg 1101w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1219.jpg 1219w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1396.jpg 1396w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1347.jpg 1347w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1394.jpg 1394w,
              /img/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg 1400w"
              src="/img/carousel/carousel-4-min_gk4c7m_c_scale,w_1400.jpg"
            alt="" />
          </picture>
      </div>
      <div className='relative'>

        <motion.div
          
          variants={boxVariant}
          animate={{x:-100, opacity: 0 }}
          whileInView={{x:0, opacity: 1 }}
          viewport={{ once: false }}
          className="md:absolute"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="p-8 bg-spicy-mix-200/90 w-100 md:w-[350px]"  style={{height:'40vh',minHeight:'400px',  minWidth:'300px'}}>
          <div className='flex flex-row items-center'>
              <div style={{fontFamily: 'Black Chancery',fontSize:'80px'}} className="text-blue-900/10">O</div>
              <div className='-ml-8  text-blue-900 font-light text-4xl'>OWNERSHIP</div>
            </div>
            Get to know the benefits of ownership at the Atlantis.<br/>

            <div className='py-4 mt-5 space-x-2'>
              <Link className="py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to='/about/ownership#'>Learn More</Link>
            </div>
          </div>
        </motion.div>
        <picture>
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_200.jpg 200w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_400.jpg 400w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_570.jpg 570w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_703.jpg 703w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_817.jpg 817w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_917.jpg 917w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1005.jpg 1005w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1099.jpg 1099w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1188.jpg 1188w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1270.jpg 1270w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1355.jpg 1355w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1389.jpg 1389w,
              /img/carousel/carousel-2-min_oxxtmu_c_scale,w_1400.jpg 1400w"
            src="carousel-2-min_oxxtmu_c_scale,w_1400.jpg"
            alt=""/>
        </picture>
      </div>

    </article>
    

  </>)
}