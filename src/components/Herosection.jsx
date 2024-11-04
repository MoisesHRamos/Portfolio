import Botao from "./Botao";
import images from "../assets/images3.png"

function Herosection () {
    return ( 
        <main className="flex justify-center items-center bg-gray-500 h-hvm ">
            <section className="container flex  space-x-2 font-medium w-1/2  ">
                <div className="flex justify-center items-start flex-col ">
                    <h1 className="text-3xl">Olá, Me chamo <span className="text-4xl text-gray-300">Moisés Ramos</span></h1>
                    <p>Desenvolvedor de software</p>
                    <Botao/>
                </div>
            <img src={images} alt="foto" className="w-1/2"/>
            </section>
        </main>
    );
}

export default Herosection;