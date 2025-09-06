import Image from "next/image"
import Link from "next/link"





const Category = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[72px]">
          <h4 className="h4 w-max border-b-2">Shop by Category</h4>
          <Link 
            href="/" 
            className="link-primary text-accent2 hover:text-primary"
          >
            View All
          </Link>
        </div>

        {/* img grid */}
        <div className="grid grid-cols-3 gap-4 xl:gap-10 mb-10">
        {/* img 1 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]">
            <Image 
              src="/assets/img/category/1.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"   
            />
          </div>
        {/* img 2 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]">
            <Image 
              src="/assets/img/category/2.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"   
            />
          </div>
        {/* img 3 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]">
            <Image 
              src="/assets/img/category/3.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"   
            />
          </div>
        </div>

        {/* category */}
        <div>
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Inspiration</h6>
            <ul>
              <li>
                <a href="#" className="link-secondary">
                  Summer Clothes
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Outfits
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Tops
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Hots
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Dresses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category