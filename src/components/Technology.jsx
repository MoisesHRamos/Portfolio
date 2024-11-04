function Techology({img, name}) {
    return ( 
        <div className=" flex flex-col items-center w-1/4 p-4">
            <div className="bg-gray-400 rounded-2xl text-white text-center flex flex-col items-center w-full hover:bg-gray-700">
                <i className={img + " text-9xl"}></i>
                <h2 className="text-2xl mt-4">{name}</h2>
            </div>
        </div>
     );
}

export default Techology;