import Header from "~/Components/Layout/Header";
import Hero from "~/Components/Home/Hero";
import Features from "~/Components/Home/Features";
import FeatureCard from "~/Components/Home/FeatureCard";
import CropSection from "~/Components/Home/CropSection";
import CropCard from "~/Components/Home/CropCard";
import HowItWorks from "~/Components/Home/HowItWorks";
import Footer from "~/Components/Layout/Footer";
import FAQ from "~/Components/Home/FAQ";
import FAQCard from "~/Components/Home/FAQCard";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div id="features" className="py-20 container mx-auto">
        <Features />
        <div className="grid grid-cols-1 gap-6 mx-3 md:grid-cols-2 lg:grid-cols-3 ">
          <FeatureCard />
        </div>
      </div>
      <div id="cropsection" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <CropSection />
          <div className="grid grid-cols-1 gap-6 mx-3 md:grid-cols-2 lg:grid-cols-3 ">
            <CropCard />
          </div>
        </div>
      </div>
      <div id="howitworks" className="py-20">
        <HowItWorks />
      </div>
      <div id="faqsection" className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] mx-3 ">
            <FAQ />
            <FAQCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
