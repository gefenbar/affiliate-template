// import BuyingGuide from "./components/BuyingGuide";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import LatestPosts from "./components/LatestPosts";
import Testimonials from "./components/Testimonials";
import WaveEffect from "./components/WaveEffect";
export default function Home() {
  return (
    <>
      <Hero/>
      <WaveEffect color1={'#3498db'} color2={'steelblue'} backgroundColor1={"coral"} backgroundColor2={"thistle"}/>
      <FeaturedProducts/>
      <WaveEffect color1={'coral'} color2={'thistle'} backgroundColor1={"lightgreen"} backgroundColor2={"darkgreen"}/>
      <LatestPosts/>
      <WaveEffect color1={'lightgreen'} color2={'darkgreen'} backgroundColor1={"purple"} backgroundColor2={"pink"}/>
      {/* <BuyingGuide/> */}
      <Testimonials/>
      <WaveEffect color1={'purple'} color2={'pink'} backgroundColor1={"#1f994b"} backgroundColor2={"#dd9a4b"}/>
      <FAQ/>
      <WaveEffect color1={'#1f994b'} color2={'#dd9a4b'} backgroundColor1={"grey"} backgroundColor2={"lightgrey"}/>
      <CallToAction/>    
      {/* <WaveEffect color1={'white'} color2={'black'} backgroundColor1={"red"} backgroundColor2={"orange"}/> */}
    </>
  );
}
