import Header from "@/sections/Header";
import Landing from "@/sections/landing";
import Companies from "@/sections/companies";
import ServicesSec from "@/sections/ServiceSec";
import Happy from "@/sections/Happy";
import Studios from "@/sections/Studios";
import WorkProcess from "@/sections/WorkProcess";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Companies />
        <ServicesSec />
        <Happy />
        <Studios />
        <WorkProcess />
      </main>
    </>
  );
}
