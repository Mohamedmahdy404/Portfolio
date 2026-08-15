import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-3 xs:gap-4 px-4 xs:px-5 md:px-0 md:flex md:flex-wrap md:gap-10 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
}

export default Services;
