import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-scroll"

//react-icons
import { FaXmark, FaBars } from "react-icons/fa6"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)

  //set toggle Menu

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  })

  //navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ]

  return (
    <header className="w-full bg-white md:bg-white fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="logo" className="w-10 inline-block items-center" /><span className="text-[#263238]">NEXCENT</span></a>

          {/* nav items for large decives */}
          <ul className="md:flex space-x-12 hidden">
            {
              navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-neutralPrimary fist:font-medium">{link}</Link>)
            }
          </ul>
          {/* btn for large decives */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="" className="hidden lg:flex items-center text-neutralPrimary hover:text-gray-900">Login</a>
            <button className="bg-neutralPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sing up</button>
          </div>

          {/* menu btn for only mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {
                isMenuOpen ? (<FaXmark className="h-6 w-6 " />) : (<FaBars className="h-6 w-6 " />)
              }
            </button>
          </div>
        </div>

        {/* nav items for mobile decives*/}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-neutralPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white hover:text-neutralDGrey fist:font-medium">{link}</Link>)
          }
        </div>

      </nav>
    </header>
  )
}

export default Navbar