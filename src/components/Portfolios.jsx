import Portfoliomain from "./Portfoliomain"

function Portfolios() {
    return ( 
        <section id="portfolio" className="flex flex-col items-center bg-secondary-500">
            <div className="container py-8">
                <h1 className="text-4xl pb-4 text-white">Portfolio</h1>
                <div className="flex flex-wrap">
                    <Portfoliomain title="Javascript" description="Este projeto é o meu aprendizado em Javascript" link="https://github.com/MoisesHRamos/JavaScript" />
                    <Portfoliomain title="Python" description="Este projeto é o meu aprendizado em Python" link="https://github.com/MoisesHRamos/Aula-Python-" />
                    <Portfoliomain title="Portfolio" description="Este projeto é o meu pportfolio" link="https://github.com/MoisesHRamos/Portfolio" />
                </div>
            </div>
        </section>
     );
}

export default Portfolios ;