import Image from "next/image";
import Headersection from "./components/Headersection";
import Preloadersec from "./components/Preloadersec";
import Aboutus from "./components/Aboutus";
import Choosesec from "./components/Choosesec";
import Contactus from "./components/Contactus";
import Accordionsec from "./components/Accordionsec";
import Mailsec from "./components/Mailsec";
import Footersec from "./components/Footersec";
import Backtop from "./components/Backtop";

export default function Home() {
  return (
    <div>
      <Preloadersec/>
      <Headersection/>
      <Aboutus/>
      <Choosesec/>
      <Contactus/>
      <Accordionsec/>
      <Mailsec/>
      <Footersec/>
      <Backtop/>
    </div>
  );
}
