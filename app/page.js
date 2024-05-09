import Image from "next/image";
import { Footer, Navbar } from "../components";
import { Block1, Block2, Block3, Block4 } from "../sections";

const Page = () => (
  <>
    {/* Navbar */}
    <nav className="w-full h-24 bg-white flex justify-between items-center">
      <img src="/logo-w.png" alt="#" className="mx-8 w-[250px] h-[48px] mt-2" />
      <div className="w-[500px] flex flex-column justify-between items-center mx-16">
        <a href="#about" className="underline decoration-red-200">
          Home
        </a>
        <a href="#services" className="">
          Services
        </a>
        <a href="#aboutUs" className="">
          About Us
        </a>
        <a href="#contact" className="">
          Contact Us
        </a>
        <a
          href="tel:+8075776696"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Call to Book
        </a>
      </div>
    </nav>

    {/* Block 1 */}
    <section id="home">
      <div className="w-full h-auto bg-hero-bg1 bg-cover bg-no-repeat relative">
        <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 cursor-pointer z-10"></div>
        <img
          src="/bgStyle.png"
          className="absolute top-0 left-0 object-cover z-50"
        />
        <div className="flex flex-col items-center pt-20">
          <h1 className="sm-heading font-customFont2 text-[35px] mt-24 z-20 text-white drop-shadow-2xl">
            We`re waiting for you!
          </h1>
          <h2 className="lg-heading font-customFont2 font-bold text-[70px] pt-4 pb-14 z-20 text-white drop-shadow-2xl">
            Roots Salon and Spa
          </h2>
        </div>

        <div className="cta flex flex-row justify-center pb-48">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded z-50">
            See Our Services
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded z-50">
            Our Story
          </button>
        </div>
      </div>
      <div className=" w-full h-[500px] bg-white flex justify-between object-fill relative">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <img
          src="/vector1.png"
          className=" w-auto h-full absolute left-[130px] z-30"
          alt=""
        />
        <div className=" w-[850px] h-[400px] bg-white absolute top-1/3 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col items-center z-10">
          <h2 className="lg-heading font-customFont2 font-bold text-[40px] pt-4 pb-8 text-center mt-20">
            Welcome to <br></br> Roots Saloon and Spa
          </h2>
          <span className="text-center text-[20px] text-pink-400 font-semibold">
            Take time for yourself
          </span>
          <p className="text-center text-[16px] text-black px-32 z-30 mt-8">
            Welcome to the home of R Salon & Spa, a luxurious day spa & hair
            salon located in Myrtle Beach, South Carolina. Relax & Rejuvenate at
            R Salon & Spa your refuge to catch up on a little personal R&R! R
            Salon & Spa is the Myrtle Beach area salon and spa of choice when
            looking to enhance your look, style and inner beauty
          </p>
        </div>
        <img
          src="/vector2.png"
          className=" w-auto h-full absolute right-[130px] z-10"
          alt=""
        />
      </div>
    </section>

    {/* Block 2 Section 1*/}
    <main id="services" className="bg-block-bg bg-cover bg-no-repeat relative">
      <img
        src="/flowers.png"
        className="absolute top-[-30px] object-cover z-30"
      />
      <div className=" w-full h-auto z-50">
        <h2 className="lg-heading font-customFont2 font-bold text-[40px] pt-14 pb-8 text-center">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Explore Your Natural Beauty Spa Services
            </h1>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-30">
              Get Pricing
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon1.png"
                alt="Classic Pedicure"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Classic Pedicure
              </h2>
              <p className="mt-2 text-gray-600">
                A relaxing treatment that includes soaking, nail shaping,
                cuticle care, exfoliation, massage, and polish application for
                well-groomed feet.
              </p>
            </div>
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon2.png"
                alt="Gel Manicure"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Gel Manicure
              </h2>
              <p className="mt-2 text-gray-600">
                Delivers a long-lasting, durable polish application that
                maintains a high-gloss finish, requiring no drying time and
                lasting for weeks.
              </p>
            </div>
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon3.png"
                alt="Hybrid Lash Extensions"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Hybrid Lash Extensions
              </h2>
              <p className="mt-2 text-gray-600">
                A blend of volume and classic techniques, these lash extensions
                provide a fuller, more textured look while maintaining natural
                beauty.
              </p>
            </div>
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon4.png"
                alt="Eyelash Tint"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Eyelash Tint
              </h2>
              <p className="mt-2 text-gray-600">
                A semi-permanent dye is applied to enhance the color, shape, and
                thickness of the lashes, creating a fuller, more dramatic look
                without makeup.
              </p>
            </div>
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon5.png"
                alt="Eyebrow Waxing and Threading"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Eyebrow Waxing and Threading
              </h2>
              <p className="mt-2 text-gray-600">
                This service shapes and defines the eyebrows through either
                waxing or threading, providing precise control over hair removal
                for a clean look.
              </p>
            </div>
            <div className="bg-block2s1 p-11 shadow-sm rounded-lg text-center">
              <img
                src="/icon1.png"
                alt="String Hair Wraps"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                String Hair Wraps
              </h2>
              <p className="mt-2 text-gray-600">
                This is a specific treatment to exfoliate and deep cleanse
                problematic skin in the back area.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 px-56" />
      {/* Block 2 Section 2*/}
      <div className=" w-full h-auto pb-60 relative">
        <img src="/flowers2.png" className="absolute bottom-0 object-cover" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Explore Our Salon Services
            </h1>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Pricing
            </button>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon1.png"
                alt="Haircut"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Haircut
              </h2>
              <p className="mt-2 text-gray-600">
                A personalized haircut designed to enhance your individual style
                and preferences, ranging from classic cuts to modern styles.
              </p>
            </div>
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon2.png"
                alt="Regrowth Retouch"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Regrowth Retouch
              </h2>
              <p className="mt-2 text-gray-600">
                Specifically targets new hair growth at the roots, ensuring a
                uniform color and flawless blend with previously dyed hair.
              </p>
            </div>
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon3.png"
                alt="Corrective Color / Transformation"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Corrective Color / Transformation
              </h2>
              <p className="mt-2 text-gray-600">
                This service addresses color mistakes or significant changes,
                aiming to correct and transform your hair color to achieve the
                desired result.
              </p>
            </div>
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon4.png"
                alt="Blowouts"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Blowouts
              </h2>
              <p className="mt-2 text-gray-600">
                Achieve a polished, smooth, and styled look with a professional
                blowout that adds volume and shine to your hair.
              </p>
            </div>
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon5.png"
                alt="Vivid and Specialty Colors"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Vivid and Specialty Colors
              </h2>
              <p className="mt-2 text-gray-600">
                For those seeking a bold change, this service offers vibrant,
                rich colors in a variety of shades for a unique and expressive
                hairstyle.
              </p>
            </div>
            <div className="bg-block2s2 p-11 shadow-sm rounded-lg text-center">
              <img
                src="icon1.png"
                alt="String Hair Wraps"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-4 font-semibold text-lg text-gray-800">
                Scalp Treatments
              </h2>
              <p className="mt-2 text-gray-600">
                Focuses on the health of the scalp, treating issues like dryness
                or dandruff, promoting hair growth and enhancing hair health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* Block 3*/}
    <section id="aboutUs" className="">
      <div className="flex h-[440px] relative">
        <img
          src="/bgStyle2.png"
          className="absolute top-[-40px] left-0 object-cover z-50"
        />
        <div className="flex-1 flex flex-col justify-center items-center bg-block3 text-white px-8">
          <div>
            <h2 className="lg-heading font-customFont2 font-bold text-[40px] pb-8">
              About Us
            </h2>
            <h1 className="text-2xl font-bold mb-3">
              Welcome to the Roots Salon & Spa,
            </h1>
            <p className="text-xl mb-5">a luxurious day</p>
            <button className="bg-white text-purple-800 font-semibold py-2 px-4 rounded shadow">
              Spa Services
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center bg-block3 p-8 relative">
          <div className="p-10 py-24 bg-pink-200 rounded-lg shadow-lg absolute top-[-100px] right-[200px]">
            <h2 className="text-2xl text-block3 font-bold mb-4">Visit Us</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Hours</h3>
              <p>Monday: 10:30am-3pm</p>
              <p>Tuesday-Saturday: 9am-5pm</p>
              <p>Closed on Sundays for the season</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Find Us</h3>
              <p>142 Centennial Square, Thunder Bay, ON P7E 1H3</p>
              <p>Tel: +1 (807) 577-6696</p>
              <p>Email: rootssalon@tbaytel.net</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Block 4*/}
    <section id="contact" className="bg-white">
      <div className="py-32 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 font-bold text-[40px] tracking-tight font-customFont2 text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Need to book an appointment? Want to send feedback about our services?
          Need details about our Business? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Email
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500    -500 -500 "
              placeholder="_________@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500    -500 -500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 bg-blue-500 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>

    {/* Footer */}

    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <img src="/logo-w.png" className="h-8 me-3" alt="Roots Logo" />
            </a>
            <span>Location</span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#home" className="hover:underline">
                    Roots Salon
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/h8SzjciLKzwjnbDS6
"
                    className="hover:underline"
                  >
                    Location
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/RootsSalonThunderBay/
                    "
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/RootsSalonThunderBay/
                    "
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#home" className="hover:underline">
              Roots Salon
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Page;
