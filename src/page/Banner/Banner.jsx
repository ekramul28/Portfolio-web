import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">
                    <div className=' w-full h-full'>
                        <img className='fixed' src="https://i.ibb.co/mcXZRm9/successful-medical-team-removebg.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2"><img className='w-full' src="https://i.ibb.co/VLf7zbH/smiling-doctor-with-strethoscope-isolated-grey.jpg" alt="" /></SwiperSlide>
                <SwiperSlide data-hash="slide3"><img className='w-full' src="https://i.ibb.co/GxRF2DG/i-love-my-job-so-much.jpg" alt="" /></SwiperSlide>
                <SwiperSlide data-hash="slide4"><img className='w-full' src="https://i.ibb.co/F6vtJSJ/handsome-young-doctor-with-lab-coat-stethoscope-using-tablet-computer-check-patient-s-history.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;