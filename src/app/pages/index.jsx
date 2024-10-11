import Grid from '@mui/material/Grid2'
import NavBar from './layouts/navbar'
import BannerSlider from './components/banner'
import HowItWorks from './components/aboutUs'
import CouplesSpecial from './components/special'
import WhatsNew from './components/whatsNew'
import HomeSalonServices from './components/services'
import DiscountOffers from './components/discount'
import BeautyServices from './components/beautyServices'
import TicketComponent from './components/deal'
import GiftCardComponent from './components/gift'
import FeaturedPost from './components/posts'
import TestimonialSlider from './components/testimonials'
import Footer from './layouts/footer'

const HomePage = () => {
  return (
    <>
    <NavBar />
    <BannerSlider />  
    <HowItWorks />
    <CouplesSpecial />
    <WhatsNew />
    <HomeSalonServices />
    <DiscountOffers />
    <BeautyServices />
    <TicketComponent />
    <GiftCardComponent />
    <FeaturedPost />
    <TestimonialSlider />
    <Footer />
    </>
  );
};

export default HomePage; 
