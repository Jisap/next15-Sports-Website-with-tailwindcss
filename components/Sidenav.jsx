
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md"



const Sidenav = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer flex items-center justify-center">
        <MdOutlineMenu className="text-3xl text-primary" />
      </SheetTrigger>
      <SheetContent>
        <div>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image 
                  src={"/assets/logo-white.svg"}
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidenav