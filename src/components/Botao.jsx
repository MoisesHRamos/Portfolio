

function Botao({content, link, target}) {
    return ( 
       <a href={link} 
       
       className="
       border-2 
       rounded-lg 
       hover:border-t-4 
       px-4 
       border-gray-800
      text-gray-300 
        shadow-xl
      bg-gray-800 "

      target={target}
      >
        {content}
      </a>
     )
}

export default Botao;