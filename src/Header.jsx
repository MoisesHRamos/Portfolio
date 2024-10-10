function Header(){
    return(
        <header className="bg-gray-400 flex justify-center py-3 ">
            <div className="container flex  justify-between items-center text-gray-700">
                <img src="logo.jpg" alt="m" width="100" height="100" />

                <nav className="font-normal text-2xl ">
                    <a href="#sobre" className="p-4 hover:text-white"> Sobre</a>
                    <a href="#portfolio" className="p-4 hover:text-white"> portfolio</a>
                    <a href="#contato" className="p-4 hover:text-white"> contato</a>
                </nav>
            </div>
        </header>
        
    )
}
export default Header;