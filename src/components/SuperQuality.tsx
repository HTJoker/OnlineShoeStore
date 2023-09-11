import Button from "./Button";
import { shoe8 } from "../assets/images/";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className=" flex flex-1 flex-col">
        <h2 className=" mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className=" text-coral-red">Super</span>{" "}
          <span className=" text-coral-red">Quality</span> Shoes
        </h2>
        <p className=" info-text mt-4 lg:max-w-lg">
          Ensuring premium quality and comfort for all our customers is our top
          priority. We are committed to providing you with the best quality
          shoes that will last you a lifetime.
        </p>
        <p className=" info-text mt-6 lg:max-w-lg">
          Our dedication to quality is what sets us apart from other shoe brands
          and we are proud to say that we have the best quality shoes in the
          market.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconUrl={undefined} />
        </div>
      </div>
      <div className=" flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
