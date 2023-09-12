import Button from "./Button";

const Subscribe = () => {
  return (
    <section className="max-container flex items-center justify-between gap-10 max-lg:flex-col">
      <h3 className="text-center font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up To Our <span className="text-coral-red">Newsletter</span> Here
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input type="email" placeholder="Subscribe Here" className="input" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button
            label="Sign Up"
            iconUrl={undefined}
            backgroundColor={undefined}
            textColor={undefined}
            borderColor={undefined}
            fullWidth={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
