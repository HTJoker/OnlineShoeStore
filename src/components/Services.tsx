import { services } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className=" max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} />
      ))}
    </section>
  );
};

export default Services;
