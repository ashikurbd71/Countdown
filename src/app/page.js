import Image from "next/image";
import Header from "./header/page";
import HeroSection from "./hero/page";
import BenefitsSection from "./benefit/page";
import FAQSection from "./fqa/page";
import Footer from "./footer/footer";
import ReviewPage from "./review/page";
import FeaturePage from "./feature/page";
import LoadingScreen from "./loading/page";

export default function Home() {
  return (
    <div>
      <LoadingScreen />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturePage />
      <FAQSection />
      <Footer />
    </div>
  );
}
