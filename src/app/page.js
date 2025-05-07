import Image from "next/image";
import Header from "./header/page";
import HeroSection from "./hero/page";
import BenefitsSection from "./benefit/page";
import FAQSection from "./fqa/page";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FAQSection />
    </div>
  );
}
