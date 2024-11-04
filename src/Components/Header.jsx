import logo from "../assets/logo.jpg"

function Header(){
    return(
        <header className="bg-gray-500  ">
            <div className=" flex  justify-between items-center text-white ">
                <img src={logo} alt="m" width="100" height="100 " className="bg-clip-border p-3" />

                <nav className="font-normal text-2xl ">
                    <a href="#sobre" className="p-4 hover:text-gray-700"> Sobre</a>
                    <a href="#portfolio" className="p-4 hover:text-gray-700"> portfolio</a>
                    <a href="#contato" className="p-4 hover:text-gray-700"> contato</a>
                </nav>
            </div>
        </header>
    )
}
export default Header; 


