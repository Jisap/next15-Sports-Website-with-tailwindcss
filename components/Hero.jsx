import { FaArrowRight, FaFire, FaPlay } from "react-icons/fa"



const Hero = () => {
  return (
    <section className="bg-[#f6f6f6] xl:h-[1064px] bg-[url(/assets/img/hero/bg.png)] bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right">
      <div className="container mx-auto flex items-center h-full">
        <div className="relative flex flex-col xl:flex-row items-center w-full">
          
          {/* text */}
          <div className="w-full max-w-[760px] mb-24 md:mb-0">
            {/* badge & text */}
            <div>
              badge & text
            </div>
            {/* h1 */}
            <h1 className="h1 mb-[40px]">
              Unleash <br /> Your Inner <br/> Athlete
            </h1>
            {/* btns */}
            <div className="flex flex-col xl:flex-row gap-10 mb-32 md:mb-0">
              <button className="btn btn-accent">
                <div className="flex items-center gap-2">
                  <span>Explore Collection</span>
                  <FaArrowRight className="" />
                </div>
              </button>
              <button className="h-[56px] font-medium text-primary flex items-center justify-center cursor-pointer">
                <div className="flex items-center gap-2">
                  <span>Watch Video</span>
                  <div className="bg-white text-primary rounded-full border-10 border-grey-200 p-4">
                    <FaPlay />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* img */}
          <div className="relative xl:absolute xl:-right-[100px] xl:-top-7" >
            <img src="assets/img/hero/running.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero