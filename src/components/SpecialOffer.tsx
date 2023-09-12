import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "./Button";
const SpecialOffer = () => {
  return (
    <section className=" justify-wrap max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="the offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className=" mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className=" text-coral-red">Special</span> Offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Shop Now"
            iconUrl={arrowRight}
            backgroundColor={undefined}
            textColor={undefined}
            borderColor={undefined}
          />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconUrl={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
