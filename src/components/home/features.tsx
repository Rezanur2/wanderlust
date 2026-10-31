import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    alt: "Shield with checkmark icon",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    alt: "Map trifold icon",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    alt: "Headset icon",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#EAF8FB] py-12 md:py-16 px-6 sm:px-10 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2 sm:mb-3">
          Why Choose Wanderlust
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Your trusted partner for exceptional travel experiences
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm transition-all hover:shadow-md"
          >
            {/* Icon */}
            <div className="mb-4 sm:mb-5">
              <Image
                src={feature.icon}
                alt={feature.alt}
                width={38}
                height={38}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-foreground mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
