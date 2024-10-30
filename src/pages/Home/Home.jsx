import React, { useEffect } from 'react'
import styles from './home.module.css'
import { Helmet } from 'react-helmet'
import { useUtag } from '../../context/utag';

export default function Home() {

    const utag = useUtag();

    useEffect(() => {
        // Explicitly handle page views
        utag.view({ page_name: "Mobilidade | Home", page_language: "pt", page_identifier: "home page", page_category: "main" });
    }, [utag]);

    return (
        <>
            <Helmet>
                <title>Mobilidade | Home</title>
            </Helmet>
            <main className={styles.containerHome}>

                <h1 className={styles.homeTitle}>DRIVE FORWARD.</h1>
                <h2 className={styles.homeSubtitle}>TOGETHER</h2>

                <h3 className={styles.homeTextSubtitle}>Juntos, podemos tornar a mobilidade mais sustentável, segura e confortável</h3>

                <div className={styles.homeInfosContainer}>

                    <p>Inovar em produtos químicos de alto desempenho e sustentáveis é a missão da Divisão Automotiva da BASF, desempenhando um papel importante na criação de novas soluções e atendendo às demandas de nossos clientes.</p>

                    <p>A BASF oferece uma ampla gama de produtos, proporcionando maior qualidade, segurança e eficiência. Isso inclui o desenvolvimento de produtos para Pintura, Repintura, Plásticos de Engenharia, Espumas de Poliuretano e Especialidades, Revestimentos, Pigmentos, Catalisadores, Tratamento de Metais, Aditivos para Combustível, Lubrificantes de Eixo e de Transmissão, Fluidos Refrigerantes e de Freio, Além de Materiais para Bateria e carregamento.</p>

                    <p>E para trazer maior transparência de quais produtos podem atender a indústria da mobilidade, lançamos esta plataforma onde o usuário poderá acessar as informações comerciais, fichas técnicas dos produtos, solicitar cotações e amostras, enviar perguntas e sugestões além de acessar conteúdos exclusivos sobre tendências e desafios do futuro da mobilidade.</p>

                    <p>Conheça nossas soluções na Aba Produtos e fique por dentro dos conteúdos e projetos de circularidade direcionados ao ecossistema da mobilidade.</p>

                    <p>Vamos juntos em direção a um novo futuro!</p>


                    <div className={styles.containerVideos}>

                        <h1>BASF 4 MOBILITY</h1>
                        <h2>A vida sempre pede mudanças e, para isso, a maneira como nos movemos também precisa mudar. A partir desta premissa, surge o VideoCast BASF 4Mobility. Um programa de 4 episódios com convidados especiais e formadores de opinião, no qual provocamos conversas sobre os desafios e tendências que impactam o ecossistema da mobilidade e como a conexão pode desenhar o futuro. <b>Confira os episódios:</b></h2>

                        <div className={styles.gridVideos}>

                            <div className={styles.videos}>
                                <iframe class="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/JXrxVbdiX30?si=1OwWn2kf5N6gAv4m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>
                                <iframe class="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/ebw5eSnSgD8?si=7SyBZdTLXq5eGGZy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>                                 
                                <iframe class="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/aEuhsaEFOUQ?si=YT2Rw21cGjWa3UQ7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>
                                <iframe class="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/YDKE202NbhI?si=RlNyse2qBn8FrNMC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                        </div>

                    </div>

                    <p className={styles.paragrafoTasa}>Para maiores informações, dúvidas ou sugestões <span className={styles.spanAzul}>entre em contato com a gente através do e-mail: </span><a href='mailto: mobilidadesa@basf.com' className={styles.automotiveEmail}>mobilidadesa@basf.com </a> </p>

                    <div className={styles.carroVirtual}>
                        <div className={styles.descCarroVirtual}>
                            <h1>
                                Conheça o <a href="https://basf-vcar.com/" target="_blank" rel='noreferrer'>
                                    <strong>carro virtual</strong>
                                </a>
                                : o portfólio completo de soluções automotivas.
                            </h1>
                        </div>
                    </div>

                </div>

            </main >

        </>
    )
}
