import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const topSectionHeight = window.innerHeight // TopSection height
      const scrollPosition = window.scrollY
      
      // Show navbar only when scrolled past TopSection
      if (scrollPosition > topSectionHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="molde" className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-fit z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
        <li className="flex flex-row gap-60 pt-6 text-3xl">
            <a  className="cursor-pointer" onClick={useNavigate("/")}>Home</a>
            <a  className="cursor-pointer" onClick={useNavigate("/#events")}>Events</a>
            <a className="cursor-pointer whitespace-nowrap" onClick={useNavigate("/#about")}>About Us</a>
            <a className="cursor-pointer" onClick={useNavigate("/register")}>Register</a>
        </li>
    </nav>
  )
}

export default Navbar
