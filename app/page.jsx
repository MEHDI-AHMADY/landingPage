import Header from "@/sections/Header";
import Landing from "@/sections/landing";
import Companies from "@/sections/companies";
import ServicesSec from "@/sections/ServiceSec";
import Happy from "@/sections/Happy";
import Studios from "@/sections/Studios";

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
      </main>
    </>
  );
}
