import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      img: "/images/thumbs/blog-two-thumb11.jpg",
      img2: "/images/thumbs/blog-two-thumb1.jpg",
      title: "What Makes a Great Landing Page? A Designer’s Guide",
      author: "John Smith",
      authorImg: "/images/thumbs/blog-two-img1.png",
      date: "12 hours ago",
    },
    {
      img: "/images/thumbs/blog-two-thumb22.jpg",
      img2: "/images/thumbs/blog-two-thumb2.jpg",
      title: "How to Choose the Right Color Palette for Your Website",
      author: "John Smith",
      authorImg: "/images/thumbs/blog-two-img1.png",
      date: "12 hours ago",
    },
    {
      img: "/images/thumbs/blog-two-thumb33.jpg",
      img2: "/images/thumbs/blog-two-thumb3.jpg",
      title: "From Sketch to Screen: My Web Design Workflow Explained",
      author: "John Smith",
      authorImg: "/images/thumbs/blog-two-img1.png",
      date: "12 hours ago",
    },
  ];

  return (
    <section className="blog-two-area py-20 lg:py-[140px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10 lg:mb-[72px]">
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12">
            <div className="section-two-wrapper pt-10 lg:mr-10">
              <h2 className="section-two-title uppercase text-[3.5rem] md:text-[5rem] lg:text-[7.5rem] leading-[0.98] text-white font-heading font-semibold">
                Read Our Articles and News
              </h2>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-5/12">
            <div className="blog-two-top-wrap xl:ml-10">
              <div className="mb-10">
                <p className="text-white font-medium">
                  Innovators dedicated to crafting unique digital experiences –
                  With a focus on creativity and a commitment to excellence.
                </p>
              </div>
              <div>
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
                    View All News
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
        <div className="flex flex-wrap">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full md:w-6/12 xl:w-4/12 mb-7 xl:mb-0">
              <div className="blog-wrapper blog-two-wrapper rounded-xl px-6 py-[42px] mb-7 bg-white/5 mr-6 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={blog.authorImg} alt="img" />
                    </div>
                    <div>
                      <h6 className="text-[1.5rem] font-medium text-white">
                        {blog.author}
                      </h6>
                      <p className="text-white text-sm font-medium">Blogger</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-0 inline-flex items-center gap-1">
                      <span className="text-lg text-main-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
                          />
                        </svg>
                      </span>{" "}
                      {blog.date}
                    </p>
                  </div>
                </div>
                <div className="blog-main-thumb relative overflow-hidden rounded-xl mb-9">
                  <img
                    className="w-full rounded-xl transition-all duration-500 group-hover:translate-x-full group-hover:scale-100 group-hover:opacity-0 group-hover:blur-sm"
                    src={blog.img}
                    alt="blog"
                  />
                  <img
                    className="w-full rounded-xl transition-all duration-500 absolute top-0 left-0 h-full object-cover translate-x-1/2 scale-150 opacity-0 blur-md group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0"
                    src={blog.img2}
                    alt="blog"
                  />
                  <Link
                    className="blog-card-image-link flex items-center justify-center w-full h-full absolute z-1 top-0 left-0 bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    href="#"
                  ></Link>
                </div>
                <div>
                  <h4 className="text-[2.25rem] text-white font-heading font-semibold leading-[1.2]">
                    <Link
                      className="hover:text-main-two-600 transition-colors"
                      href="#"
                    >
                      {blog.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
