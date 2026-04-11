export default function Hero() {
  return (
    <section className="relative h-screen flex items-end bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Large Typography */}
      <div className="relative z-10 w-full pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-white/20 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading font-bold leading-[0.85] tracking-tight uppercase select-none">
            Finding Homes
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-white/10 text-7xl sm:text-9xl md:text-[10rem] lg:text-[13rem] xl:text-[16rem] font-heading font-bold leading-[0.85] tracking-tight uppercase select-none">
            Today
          </h1>
        </div>

        {/* Values Grid overlapping bottom */}
        <div className="relative mt-8">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="bg-black/80">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Excellence",
                    text: "We are committed to delivering the highest quality in every transaction, exceeding expectations and setting new standards.",
                  },
                  {
                    title: "Innovation",
                    text: "We embrace creativity and advanced technologies to stay ahead of market trends, seeking new solutions for our clients.",
                  },
                  {
                    title: "Integrity",
                    text: "We uphold transparency and ethical practices in all business operations, building trust with clients and communities.",
                  },
                  {
                    title: "Sustainability",
                    text: "We ensure our recommendations contribute positively to the community, creating lasting value for generations to come.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="px-8 py-10 lg:py-14 border-l border-white/5 first:border-l-0"
                  >
                    <h3 className="text-white text-xl font-heading font-semibold italic mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
