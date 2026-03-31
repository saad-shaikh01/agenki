import Link from "next/link";

export default function Banner() {
  return (
    <section className="banner-two-area relative z-1 py-[135px] pb-0">
      <div>
        <img
          className="banner-two-bg-shape-1 absolute z-[-1] top-[295px] left-0 hidden xl:block animate-moving"
          src="/images/shapes/banner-bg-shape1.png"
          alt="shape"
        />
        <img
          className="banner-two-bg-shape-2 absolute z-2 top-[520px] left-[55px] hidden xl:block animate-bounce-y"
          src="/images/shapes/banner-bg-shape2.png"
          alt="shape"
        />
      </div>
      <div className="container tw-container-1470-px mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 lg:w-3/12 xl:w-3/12">
            <div className="banner-two-cercal w-[207px] h-[207px] leading-none inline-flex items-center justify-center rounded-full mt-5 bg-white/10 hidden md:inline-flex">
              <div className="text-center">
                <div className="mb-4">
                  <span>
                    <img src="/images/logo/banner-two-logo.png" alt="logo" />
                  </span>
                </div>
                <h6 className="font-body text-sm font-medium text-white">
                  Based on 67k reviews
                </h6>
                <div>
                  <p className="text-4xl font-bold text-white flex items-center justify-center gap-1">
                    4.9 <span className="text-xl text-main-two-600">★</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12">
            <div className="text-center">
              <h1 className="banner-two-title text-main-three-600 font-heading font-semibold text-[100px] sm:text-[150px] lg:text-[200px] xl:text-[260px] leading-[0.8]">
                DIGITAL <span className="text-[120px] sm:text-[180px] lg:text-[240px] xl:text-[318px]">SOLUTION</span>
              </h1>
            </div>
          </div>
          <div className="w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-3/12 mx-auto xl:mx-0">
            <div>
              <div className="banner-two-wrap mb-9 xl:mb-0">
                <div className="banner-bottom-wrap banner-two-bottom-wrap mt-7 xl:-mb-24">
                  <p className="font-medium text-white mb-10">
                    Glaebam ipsam nunc at hic reponat nam dicta lius te est
                    iriure in aut stante inceptos
                  </p>
                  <div className="banner-button">
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
              <div className="banner-two-img text-right -mr-[30px] sm:-mr-[40px] md:-mr-[200px] lg:-mr-[400px] xl:-mr-[30px]">
                <img src="/images/thumbs/banner-two-img.png" alt="img" className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-two-bg relative z-[-1] -mt-[115px]">
        <img src="/images/thumbs/banner-two-bg.png" alt="bg" className="w-full object-cover" />
      </div>
    </section>
  );
}
