import { useState } from "react";
import  axios  from "axios";

function ContactForm() {

const[ cidade, setCidade ]= useState()
const[ cepErro, setCepErro ]= useState(false)
const[ rua, setRua ] = useState()


function verificarCep(e){
  if(e.target.value.length == 8){
    axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`).then(function (response) {
      setCidade(response.data.city)
      setRua(response.data.street)
      setCepErro(false)
    })
    .catch(function(response){
      setCidade("")
      setRua("")
      setCepErro(true)
    })
  }

}

  return (
    <form className="p-6 bg-gray-300 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          required
          onChange={verificarCep}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {cepErro ?
        <p className="text-red-500 ">cep invalido</p>
        :
        <p className="text-green-500">cep valido</p>
      }
      

      <div className="mb-4">
        <label htmlFor="cidade">Cidade</label>
        <input
          type="Cidade"
          id="Cidade"
          name="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rua">Rua</label>
        <input
          type="Rua"
          id="Rua"
          name="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-secondary-500 text-white font-semibold rounded-md p-2 hover:bg-secondary-700">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;