import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { IUserSignIn } from "../interface/Interface";

export default function LandingPage(props: any) {
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
