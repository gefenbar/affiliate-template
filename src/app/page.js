// import BuyingGuide from "./components/BuyingGuide";
import BuyingGuide from "./components/BuyingGuide";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import LatestArticles from "./components/LatestArticles";
import RecommendedProducts from "./components/RecommendedProducts";
// import OnSale from "./components/OnSale";
import Testimonials from "./components/Testimonials";
import WaveEffect from "./components/WaveEffect";
export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <WaveEffect color1={'#3498db'} color2={'steelblue'} backgroundColor1={"coral"} backgroundColor2={"thistle"}/>
      <RecommendedProducts/>
      <WaveEffect color1={'coral'} color2={'thistle'} backgroundColor1={"lightgreen"} backgroundColor2={"darkgreen"}/>
      <LatestArticles/>
      <WaveEffect color1={'lightgreen'} color2={'darkgreen'} backgroundColor1={"crimson"} backgroundColor2={"aquamarine"}/>
      <BuyingGuide/>
      <WaveEffect color1={'crimson'} color2={'aquamarine'} backgroundColor1={"purple"} backgroundColor2={"pink"}/>
      {/* <OnSale/>
      <WaveEffect color1={'brown'} color2={'grey'} backgroundColor1={"purple"} backgroundColor2={"pink"}/> */}
      <Testimonials/>
      <WaveEffect color1={'purple'} color2={'pink'} backgroundColor1={"#1f994b"} backgroundColor2={"#dd9a4b"}/>
      <FAQ/>
      <WaveEffect color1={'#1f994b'} color2={'#dd9a4b'} backgroundColor1={"grey"} backgroundColor2={"lightgrey"}/>
      <CallToAction/>    
      {/* <WaveEffect color1={'white'} color2={'black'} backgroundColor1={"red"} backgroundColor2={"orange"}/> */}
    </div>
  );
}
