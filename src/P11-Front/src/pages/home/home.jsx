import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import FeatureItem from "../../components/features/features";
import Footer from "../../components/footer/footer";
import chat_icon from "./icon-chat.png";
import money_icon from "./icon-money.png";
import security_icon from "./icon-security.png";

export default function Home() {
  sessionStorage.removeItem("token");

  return (
    <>
      <section>
        <Header />
        <main>
          <Hero />
          <section className="features">
            <FeatureItem
              imageSrc={chat_icon}
              Title={"You are our 1# priority"}
              Description={
                "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
              }
            />
            <FeatureItem
              imageSrc={money_icon}
              Title={"More savings means higher rates"}
              Description={
                "The more you save with us, the higher your interest rate will be!"
              }
            />
            <FeatureItem
              imageSrc={security_icon}
              Title={"Security you can trust"}
              Description={
                "We use top of the line encryption to make sure your data and money is always safe."
              }
            />
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
