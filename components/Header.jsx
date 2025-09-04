import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import Sidenav from "./Sidenav"




const Header = () => {
  return (
    <div className="xl:absolute max-w-[1440px] mx-auto left-0 right-0 bg-pink-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          {/* logo & sidenav */}
          <div>logo & sidenav</div>

          {/* nav.(desktop) */}
          <nav>nav</nav>

          {/* search, favorites, cart */}
          <div>search, favorites, cart</div>
        </div>
      </div>
    </div>
  )
}

export default Header