import { NAV_LINKS } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container  max-container relative z-30 py-5">
        <Link href="/">
        <Image src={"/hilink-logo.svg"} 
          alt="logo"
         width={74} 
         height={29} />
          </Link>
         <ul className="hidden h-full gap-12 lg:flex ">
         {NAV_LINKS.map((link)=>
            (
                <Link key={link.href} href={link.href} 
                className="regular-16 text-gray-50 flexCenter cursor-pointer 
                pb-1.5 transition-all hover:font-bold
                "
                >
                    {link.label}
                </Link>
            )
         )}
         </ul>
         <div className=" hidden lg:flexCenter ">
            <Button
            type="button"
            label="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
</div>
            <Image 
            className="lg:hidden inline-block cursor-pointer"
            src="/menu.svg"
            alt="menu"
            width={20}
            height={20}
            />
         
       
    </nav>
  )
}

export default Navbar