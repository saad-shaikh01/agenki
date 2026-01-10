import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-two-area pb-20 lg:pb-[140px]">
      <div className="container-fluid mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-6/12">
            <div className="cta-two-thumb one mb-5 relative z-1 h-full">
              <img
                className="rounded-xl w-full h-full object-cover"
                src="/images/thumbs/cta-two-thumb1.jpg"
                alt="thumb"
              />
              <div className="cta-two-content absolute bottom-12 left-10 md:bottom-12 md:left-12 xl:bottom-[50px] xl:left-[50px] lg:bottom-10 lg:left-10 mr-0 md:mr-[29px] mt-8 md:mt-0 xl:mr-[116px]">
                <div className="cta-two-arrow mb-9 hidden lg:block">
                  <img
                    className="animate-bounce-y"
                    src="/images/shapes/cta-two-arrow.png"
                    alt="arrow"
                  />
                </div>
                <div>
                  <h4 className="cta-two-title text-heading text-[3.1rem] lg:text-[4rem] xl:text-[5rem] leading-none mb-8 font-heading font-semibold text-white md:text-heading">
                    Dedicated to Transforming Your Ideas Into Impactful Digital
                  </h4>
                  <p className="pb-10 font-medium text-white md:text-heading">
                    We’re a passionate team of designers, strategists, and
                    innovators dedicated to crafting unique digital experiences
                    – With a focus on creativity and a commitment to excellence.
                  </p>
                  <div className="cta-two-button">
                    <Link
                      className="theme-btn-main inline-flex items-center relative transition-all group"
                      href="#"
                    >
                      <span className="theme-btn-arrow-left w-14 h-14 leading-none inline-flex justify-center items-center bg-main-two-600 text-white rounded-full absolute transition-all duration-300 scale-0 group-hover:scale-100 left-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                          />
                        </svg>
                      </span>
                      <span className="theme-btn bg-main-two-600 text-white py-4 px-10 font-medium inline-flex items-center gap-8 capitalize rounded-[3rem] transition-all duration-300 z-2 group-hover:translate-x-14">
                        Explore More
                      </span>
                      <span className="theme-btn-arrow-right w-14 h-14 leading-none inline-flex justify-center items-center bg-main-two-600 text-white rounded-full transition-all duration-300 group-hover:scale-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-6/12">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-12/12">
                <div className="cta-two-thumb two mb-5 relative z-1">
                  <img
                    className="rounded-xl w-full"
                    src="/images/thumbs/cta-two-thumb2.jpg"
                    alt="thumb"
                  />
                  <div className="cta-two-counter absolute left-[50px] top-[50px]">
                    <div className="counter-wrapper flex items-center gap-4">
                      <h2 className="counter-title text-[4.5rem] sm:text-[7.5rem] font-semibold font-heading text-main-two-600 mb-0 leading-none">
                        <span className="font-heading">7940</span>+
                      </h2>
                      <p className="text-base font-medium text-heading uppercase">
                        Visited <br />
                        Conferences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 xl:w-6/12 mb-5 md:mb-0">
                <div className="cta-two-thumb three">
                  <img
                    className="rounded-xl w-full"
                    src="/images/thumbs/cta-two-thumb3.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 xl:w-6/12">
                <div className="cta-two-thumb four relative z-1">
                  <img
                    className="rounded-xl w-full"
                    src="/images/thumbs/cta-two-thumb4.jpg"
                    alt="thumb"
                  />
                  <div className="cta-two-content absolute bottom-12 left-12 lg:bottom-10 lg:left-10 xl:bottom-[50px] xl:left-[50px] mr-10">
                    <div className="cta-two-icon mb-4 xl:mb-[56px] hidden lg:block">
                      <span>
                        <img src="/images/icons/cta-two-light.svg" alt="light" />
                      </span>
                    </div>
                    <div>
                      <h4 className="cta-two-sm-title text-heading text-[2.25rem] xl:text-[3.25rem] text-white md:text-heading font-heading font-semibold">
                        SOX compliance
                      </h4>
                      <p className="font-medium text-white md:text-heading">
                        We specialize in creating, developing, and managing a
                        brand’s identity to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
