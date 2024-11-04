import Techology from "./Technology";
import Portfolios from "./Portfolios";

function About () {
    return(
        <section id="sobre" className=" flex flex-col items-center bg-gray-500 text-gray-300    ">
                <div className="tracking-wider font-medium container py-8">
                    <h1 className="text-3xl pb-4">Sobre mim</h1>
                    <p className=" pb-4 text-xl">Sou estudante de Sistemas de Informação, onde estou aprofundando meus conhecimentos na área de tecnologia. Atualmente, estou focado no aprendizado de JavaScript, uma linguagem essencial para o desenvolvimento web. </p>
                    <p className="pb-4 text-xl">Além disso, já concluí um curso de Python no SENAI, o que me proporcionou uma base sólida em programação e resolução de problemas. Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e expandir meu conhecimento na área de desenvolvimento de software.</p>
                </div>
                <div className="container py-4">
                    <h1 className=" text-3xl pb-4">Tecnologias</h1>
                    <div className="flex flex-wrap">
                        <Techology img="devicon-python-plain colored" name="Python"/>
                        <Techology img="devicon-javascript-plain colored" name="Javascript"/>
                        <Techology img="devicon-html5-plain colored" name="HTML"/>
                        <Techology img="devicon-css3-plain colored" name="CSS"/>
                        <Techology img="devicon-react-original colored" name="React"/>
                        <Techology img="devicon-mysql-original colored" name="MYSQL"/>
                        <Techology img="devicon-vitejs-plain colored" name="Vitejs"/>
                    </div>
                    <div className="container py-8">
                        <h1 className="text-3xl pb-4">Portfólios</h1>
                        <Portfolios img="devicon-gitbook-original"  />
                    </div>
                </div>
                
        </section>
    )
}

export default About;