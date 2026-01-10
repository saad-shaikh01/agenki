import Link from "next/link";

export default function Service() {
  const services = [
    {
      id: "01",
      tag: "BRANDING",
      bg: "/images/thumbs/service-two-thumb1.jpg",
    },
    {
      id: "02",
      tag: "DIGITAL MARKETING",
      bg: "/images/thumbs/service-two-thumb2.jpg",
    },
    {
      id: "03",
      tag: "WEB DEVELOPMENT",
      bg: "/images/thumbs/service-two-thumb3.jpg",
    },
    {
      id: "04",
      tag: "PRODUCTION",
      bg: "/images/thumbs/service-two-thumb4.jpg",
    },
  ];

  return (
    <section className="service-two-area py-[240px] pb-[140px]">
      <div className="container mx-auto px-4">
        <div className="w-full xl:w-4/12">
          <div className="mb-20">
            <span className="border border-main-three-600 text-main-three-600 rounded-[3rem] py-2 px-6">
              Our Services
            </span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-12/12">
            <div className="service-two-widgets hover__widget relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-two-item wt-widget__item hover__reveal-item relative border-b border-white/10 group ${index === 0 ? 'current' : ''}`}
                >
                  <Link href="#" className="block">
                    <div className="service-two-content flex items-center justify-between p-[26px_28px] transition-all duration-300">
                      <h3 className="service-two-title text-stroke-white text-[3.5rem] md:text-[7.5rem] font-heading font-semibold leading-none group-hover:text-white transition-colors duration-300">
                        /{service.id}
                      </h3>
                      <h3 className="service-two-tag text-[3rem] md:text-[5rem] lg:text-[7.5rem] text-white font-heading font-semibold leading-none group-hover:text-main-600 transition-colors duration-300">
                        {service.tag}
                      </h3>
                      <div className="service-two-action">
                        <span className="text-main-three-600 text-3xl group-hover:-rotate-45 transition-transform duration-300 inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m200 64l-8.05 5.57l-5.6 8.06a8 8 0 0 1-13.16-9.19l9.38-13.51l-13.51-9.38a8 8 0 0 1 9.19-13.16l8.06 5.6L192 32a8 8 0 0 1 8 8Z"
                              opacity=".2"
                            />
                            <path
                              fill="currentColor"
                              d="M197.66 122.34a8 8 0 0 1-11.32 11.32L136 83.31V216a8 8 0 0 1-16 0V83.31l-50.34 50.35a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0Zm34.34-58.34a8 8 0 0 0-8-8h-48a8 8 0 0 0 0 16h28.69l-34.35 34.34a8 8 0 0 0 11.32 11.32L216 83.31v28.69a8 8 0 0 0 16 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div
                    className="hover__reveal-bg absolute top-0 left-0 w-[346px] h-[406px] opacity-0 -mt-[150px] -ml-[150px] overflow-hidden pointer-events-none bg-center bg-cover bg-no-repeat transition-all duration-500 z-5 rounded-lg hidden lg:block group-hover:opacity-100"
                    style={{ backgroundImage: `url(${service.bg})` }}
                  ></div>
                </div>
              ))}
              <span className="active-bg"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
