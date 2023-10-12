import Logo from "./logo.jsx"

function Navbar() {
    return (
        <nav className="w-full flex relative justify-between items-center mx-auto px-8 h-14 bg-slate-200">
           <Logo />
        </nav>
    )
}

export default Navbar