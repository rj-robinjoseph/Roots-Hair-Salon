'use client';


const Block1 = () => (
  <>
    <div className="w-full h-auto bg-blue-300">
          <div className="flex flex-col items-center pt-20">
            <h1 className="sm-heading font-customFont2 text-[35px] mt-24">
              We`re waiting for you!
            </h1>
            <h2 className="lg-heading font-customFont2 font-bold text-[70px] pt-4 pb-14">
              Roots Saloon and Spa
            </h2>
          </div>

          <div className="cta flex flex-row justify-center pb-48">
            <button className="btn1 mx-3 ext-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
              See Our Services
            </button>
            <button className="btn2 mx-3 ext-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
              Our Story
            </button>
          </div>
        </div>
        <div className=" w-full h-[500px] bg-slate-400">
          <p>Hai</p>
          <img src="" alt="" />
          <div className=""></div>
          <img src="" alt="" />
        </div>
  </>
);

export default Block1;

