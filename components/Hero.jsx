import { FaArrowRight, FaFire, FaPlay } from "react-icons/fa"



const Hero = () => {
  return (
    <div className="bg-[#f6f6f6] xl:h-[1064px] bg-[url(/assets/img/hero/bg.png)] bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right">
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
            <div>btns</div>
          </div>

          {/* img */}
          <div className="relative xl:absolute xl:-right-[100px] xl:-top-7">
            <img src="assets/img/hero/running.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero