import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { IProps } from "../interface/Interface";

export default function LandingPage({ userSignIn, setUserSignIn }: IProps) {
  return (
    <>
      <Navbar userSignIn={userSignIn} setUserSignIn={setUserSignIn} />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
