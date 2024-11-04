import Botao from "./Botao";


function portfolios({title, description, link}) {
    return ( 
        <div className=" flex flex-col items-center w-1/3 p-4">
            <div className=" rounded-2xl text-white text-center flex flex-col items-center w-full" >
                <h2>{title}</h2>
                <p>{description}</p>
                <Botao content="veja mais" link={link} target="_blank"/>
            </div>
        </div>
     );
}

export default portfolios;