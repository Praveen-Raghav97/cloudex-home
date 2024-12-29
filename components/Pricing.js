import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    { name: "Personal", price: "$18/month", features: ["Free trial", "Secure data", "Free backups"], btntxt: "Start Free Trial", desc: "Highly efficient for your personal." },
    { name: "Team", price: "$23/month", features: ["Team accounts", "High-speed access", "Free daily backups"], btntxt: "Get Started", desc: "Simple and easy management for your team." },
    { name: "Scale", price: "Custom Pricing", features: ["Advanced tools", "Priority support", "Customize your processor"], btntxt: "Contact Sales Team", desc: "Highly efficient for your department." },
  ];

  return (
    <section className="py-20 bg-lightGray flex items-center flex-col">
      <Button className="border text-primary border-primary bg-transparent py-3 px-6 rounded-3xl mb-10 hover:bg-primary-dark">
        Transparent Pricing
      </Button>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-black mb-4 md:mb- animate-bounce" style={{ wordSpacing: "0.5rem" }} >
        Better Prices <span className="text-secondary">No Worries.</span>
      </h1>
      <p className="text-md md:text-lg text-gray-600 w-full max-w-3xl text-center px-4 md:px-0">
        From Simple Tool and Predictable Pricing To Support and Designed For Growing Businesses.
      </p>
      <p className="text-sm md:text-md text-gray-600 mb-12 w-full max-w-2xl text-center px-4 md:px-0">
        DigitalOcean is Built To Serve The Unique Needs Of Startups And SMBs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 md:px-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white h-[350px] shadow-md rounded-xl p-6 text-start transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
            <p className="text-2xl font-semibold text-darkText mt-4">{plan.price}</p>
            <p className="text-sm font-medium text-gray-500 mt-4">{plan.desc}</p>
            <Button className="border text-primary w-full border-primary bg-transparent py-3 px-6 rounded-3xl mt-6 mb-2 hover:bg-primary-dark">
              {plan.btntxt}
            </Button>
            <ul className="mt-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="#8B5CF6" />
                    <path
                      d="M10 8L14 12L10 16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
