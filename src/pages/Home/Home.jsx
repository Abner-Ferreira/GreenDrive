import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';

export default function Home() {



    return (
        <>
            <Helmet>
                <title>GreenDrive | Home</title>
            </Helmet>
            <main className={styles.containerHome}>

                <h1 className={styles.homeTitle}>MOBILIDADE EM EVOLUÇÃO.</h1>
                <h2 className={styles.homeSubtitle}>SUSTENTÁVEL. CONECTADA. INTELIGENTE.</h2>

                <h3 className={styles.homeTextSubtitle}>Juntos, podemos transformar o futuro da mobilidade com inovação, responsabilidade e eficiência.</h3>

                <div className={styles.homeInfosContainer}>

                    <p>A mobilidade está passando por uma revolução. O compromisso com tecnologias sustentáveis e soluções inteligentes é o que move nossa atuação, contribuindo para um ecossistema automotivo mais limpo, seguro e eficiente.</p>

                    <p>Oferecemos um portfólio completo de soluções que atendem às mais diversas demandas da indústria automotiva. Entre elas, destacam-se: materiais de alta performance, sistemas para revestimento e proteção, componentes leves e duráveis, tecnologias para eletromobilidade, fluidos funcionais e soluções para eficiência energética e redução de emissões.</p>

                    <p>Com o objetivo de facilitar o acesso à informação e apoiar a transformação do setor, desenvolvemos esta plataforma. Nela, você encontrará dados técnicos, especificações de produtos, solicitações de amostras e cotações, além de conteúdos exclusivos sobre inovação, sustentabilidade e tendências da mobilidade.</p>

                    <p>Explore a aba de Produtos e descubra como nossas soluções podem contribuir com o avanço da mobilidade moderna. Acompanhe também os projetos voltados à circularidade e eficiência que impulsionam essa jornada.</p>

                    <p>Vamos juntos rumo a uma nova mobilidade.</p>


                    <div className={styles.containerVideos}>

                        <h1>VIDEOCast GreenDrive</h1>
                        <h2>Nesta série de vídeos, abordamos os principais temas ligados à sustentabilidade no setor automotivo, explorando desde novas tecnologias até o uso de componentes e materiais verdes que estão transformando a forma como produzimos e utilizamos os veículos. <br/><br/>
                        <b>Assista e entenda como a inovação está impulsionando uma mobilidade mais limpa, eficiente e responsável.</b>
                        </h2>

                        <div className={styles.gridVideos}>

                            <div className={styles.videos}>
                                <iframe src="https://www.youtube.com/embed/QG8EBQQNzQI?si=EckxJ29c0cni_NZ-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>
                                <iframe src="https://www.youtube.com/embed/30NwNwK05vk?si=VhUh6uTh5pgTyRYI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>                                 
                                <iframe src="https://www.youtube.com/embed/sKoi6m78s0E?si=bIgzaijckCiTGTro" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                            <div className={styles.videos}>
                                <iframe src="https://www.youtube.com/embed/KatHKjwEHDI?si=dOwJDmScP-982YqY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.videosMobility}></iframe>
                            </div>
                        </div>

                    </div>

                    <p className={styles.paragrafoTasa}>Para mais informações, dúvidas ou sugestões, <span className={styles.spanAzul}>entre em contato com a gente pelo e-mail: </span><a href='mailto: contato@greendrive.com' className={styles.automotiveEmail}>contato@greendrive.com.</a> </p>

                

                </div>

            </main >

        </>
    )
}
