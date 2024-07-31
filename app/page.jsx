import Header from "@/sections/Header";
import Landing from "@/sections/landing";
import Companies from "@/sections/companies";
import ServicesSec from "@/sections/ServiceSec";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Companies />
        <ServicesSec />
      </main>
    </>
  );
}
