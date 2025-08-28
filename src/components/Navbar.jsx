import { useNavigate } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-fit">
        <li className="flex flex-row gap-60 pt-6 text-3xl">
            <button  className="cursor-pointer" onClick={useNavigate("/")}>Home</button>
            <button  className="cursor-pointer" onClick={useNavigate("/#events")}>Events</button>
            <button className="cursor-pointer" onClick={useNavigate("/#about")}>About Us</button>
            <button className="cursor-pointer" onClick={useNavigate("/register")}>Register</button>
        </li>
    </nav>
  )
}

export default Navbar
