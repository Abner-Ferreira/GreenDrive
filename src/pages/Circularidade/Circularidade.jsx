import React, { useEffect } from 'react'
import styles from './circularidade.module.css'

// import das imagens utilizadas nesta pagina
import globo from '../../assets/Imagem_globo.png'
import ciclo from '../../assets/Ciclo.png'
import economiaCircular from '../../assets/Circulo_da_Economia_Circular.png'
import ultramid from '../../assets/Ultramid.png'
import imagem1 from '../../assets/imagem-1.png'
import imagem2 from '../../assets/imagem-2.png'
import imagem3 from '../../assets/imagem-3.png'
import imagem4 from '../../assets/imagem-4.png'
import imagem5 from '../../assets/imagem-5.png'
import imagem11 from '../../assets/imagem-11.png'
import imagem22 from '../../assets/imagem-22.png'
import { Helmet } from 'react-helmet'
import { useUtag } from '../../context/utag'

export default function Circularidade() {

    const utag = useUtag();

    useEffect(() => {
        // Explicitly handle page views
        utag.view({ page_name: "Mobilidade | Circularidade", page_language: "pt", page_identifier: "circularidade page", page_category: "circularidade",});
    }, [utag]);

    return (
        <>
            <Helmet>
                <title>Mobilidade | Circularidade</title>
            </Helmet>
            <main id={styles.homepage} className={styles.conteudo}>


                {/* INTRODUCAO CIRCULAI */}
                <div id={styles.introCirculai}>
                    <div id={styles.circulai}>
                        <img src={globo} alt="imagem globo sustentabilidade" />
                        <div>
                            <h1 style={{ textAlign: "center", fontWeight: "bolder", margin: "50px 0 0 -190px " }}>CIRCUL<span>AÍ</span></h1>
                            <p style={{ fontWeight: "bold", margin: "10px 0 0 40px", fontSize: "16px", width: "400px", textAlign: "left" }}>
                                Programa de Economia Circular para coleta <br />e ressignificação do refugo de poliamida 6 e 66
                            </p>
                        </div>

                    </div>

                </div>
                <div className={styles.economiaCircularResumo}>
                    <h1 style={{ textAlign: "justify", color: "#000000", paddingLeft: "20px", fontSize: "24px" }}>O que é Economia
                        Circular?
                    </h1>
                    <p style={{ padding: "10px" }}>Até 2022, apenas 14%* do plástico mundial é reciclado, com 8 milhões de toneladas
                        de plástico terminando nos oceanos anualmente. Nesse sentido, a Economia Circular é um modelo que
                        minimiza o desperdício final de processos, para que se alcance maior eficiência, reduzindo ao mesmo
                        tempo o impacto no meio ambiente.</p>
                </div>
                <div id={styles.economiaCircular}>
                    <div className={styles.principaisDesafios}>
                        <h1 style={{ textAlign: "justify", color: "#00793A", fontSize: "22px", fontWeight: "bold" }}>Um dos principais
                            desafios dos executivos atualmente é como tornar o seu negócio mais sustentável. <br /><br />Para
                            promover a economia circular, a BASF é a sua parceira.</h1>
                        <p>O pensamento de economia circular não pode estar restrito apenas a operação da empresa. Pensando
                            nisso, o time de Materiais de Performance lançou o CIRCULAÍ: programa de economia circular para
                            coleta e ressignificação do refugo de poliamida 6 e 66 em clientes e parceiros.</p>
                    </div>
                </div>


                {/* ECONOMIA CIRCULAR */}


                {/* COMO FUNCIONA O CIRCULAÍ */}
                <div id={styles.comoFunciona}>
                    <div className={styles.conteudoUltramid}>
                        <div>
                            <h1 style={{ textAlign: "justify", color: "#000000", fontWeight: "bolder", fontSize: "26px" }}>Como funciona
                                o <strong style={{ color: "#000000" }}>CIRCUL<span>AÍ</span></strong>?</h1>
                            <p style={{ textAlign: "justify" }}>O Circulaí é um programa que <span
                            >tem como objetivo ressignificar o refugo de
                                poliamida
                                6 e 66</span>, fomentando a utilização de materiais com conteúdo reciclado, favorecendo a
                                rastreabilidade e retorno em aplicações de vida longa.
                                Com um time de especialistas em reutilização de recurso, resgate de sobras e melhoria
                                de processo, o programa prepara os clientes e parceiros para a vivência da economia
                                circular e reciclagem na prática</p>
                            <iframe width="500" height="300" class="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/jGJMLXHVUmk"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen id={styles.videoCirculai}></iframe>
                        </div>
                        <img src={ciclo} alt="Imagem Ciclo Ultramid" />
                    </div>
                </div>


                {/*  COMO FAZER PARTE DO CIRCULAÍ */}
                <div id={styles.containerTopicosCirculai}>
                    <div className={styles.divTopicosCirculai}>
                        <h1 style={{ textAlign: "justify", color: "#000000", fontSize: "26px", fontWeight: "bold" }}> Como fazer parte do
                            <strong style={{ color: "#000000", fontWeight: "bolder" }}>CIRCUL<span>AÍ</span>?</strong>
                        </h1>
                        <div className={styles.topicos}>
                            <p className={styles.numeroTopico}>1</p>
                            <p id={styles.tituloTopico} style={{ color: "#00793A", padding: "18px", fontWeight: "bold" }}>Fornecer refugo</p>
                        </div>

                        <div className={styles.assuntoPrincipal}>

                            <p style={{ fontWeight: "lighter", overflowWrap: "break-word", width: "80%" }}>O parceiro passará pela fase de qualificação e treinamento e,
                                mediante
                                aprovação, será integrado ao programa. Juntos vamos entender onde o resíduo é gerado no
                                processo
                                de injeção. </p>
                            <ul id={styles.listaCirculai}>
                                <li>Quais materiais serão recolhidos:</li>
                                <p style={{ fontWeight: "100" }}>somente as sobras de poliamida (podem ser PA 6 e PA 66, com ou
                                    sem
                                    carga), podendo estar embaladas em big bags ou sacos de 25kg. </p>
                                <li>Como os materiais serão recolhidos:</li>
                                <p style={{ fontWeight: "100" }}>após alinhamento com responsável da sua unidade, realizaremos a
                                    compra do refugo e disponibilizaremos um transporte para retirada. Será necessária pelo
                                    menos 1ton de material para que a retirada ocorra. </p>
                            </ul>
                        </div>
                        <div className={styles.topicos2}>
                            <p className={styles.numeroTopico}>2</p>
                            <p id={styles.tituloTopico2}>Comprar material reciclado
                                mecanicamente </p>
                        </div>
                        <div className={styles.assuntoPrincipal}>

                            <p id={styles.assunto2} style={{ fontWeight: "lighter", marginTop: "260px", textAlign: "left", marginLeft: "-5px", overflowWrap: "break-word", width: "90%" }}>Para conhecer nosso
                                portfólio de produtos reciclados mecanicamente entre
                                em contato conosco através do e-mail <a href="mailto: materiaisdeperformance@basf.com"
                                    style={{ textDecoration: "underline", fontSize: "18px", color: "#000000" }}>materiaisdeperformance@basf.com</a>.
                            </p>
                        </div>
                    </div>

                </div>


                {/* Circularidade e reciclagem */}
                <div id={styles.circularidadeReciclagem}>
                    <div className={styles.conteudoCircularidade}>
                        <div>
                            <h1>
                                Circularidade <br />e reciclagem ?</h1>
                            <p><strong style={{ color: "#00793A" }}>Um dos principais desafios dos executivos atualmente é como tornar o seu negócio mais sustentável.</strong> <br /> <br />Para promover a economia circular, a <strong>BASF é a sua parceira.</strong> </p>
                            <img src={economiaCircular} alt="Imagem da economia circular" />
                        </div>

                    </div>
                </div>


                <div id={styles.ultramid} style={{ position: "relative" }}>
                    <h1 >Ultramid®</h1>
                    <br />

                    <p id={styles.poliamida}>Poliamida</p>
                    <p className={styles.conteudoUltramidBox}> <span >Ultramid®</span> é a marca de compostos de poliamida 6 e 66 fornecidas pela BASF
                        para moldagem por injeção e extrusão. A linha de produtos inclui PA6 <strong >(Ultramid® B)</strong> e de PA66 <strong>(Ultramid® A)</strong>
                    </p>
                    <p className={styles.conteudoUltramidBox}>Graças às numerosas características do Ultramid®, são possíveis muitas
                        aplicações, especialmente em automóveis, componentes elétricos e eletrônicos
                        bens de consumo, entre outros</p>
                    <p className={styles.conteudoUltramidBox} style={{ paddingBottom: "20px" }}>Em linha com seu propósito de criar a química para um futuro sustentável, a BASF agora apresenta um portfólio de poliamidas com conteúdo reciclado, contribuindo para a economia circular no mundo dos plásticos.</p>
                </div>
                <img src={ultramid} alt="imagem Ultramid®" id={styles.imagemUltramid} />

                {/* <!-- DETALHES ULTRAMID--> */}
                <div id={styles.detalhesUltramid} >
                    <div id={styles.ultramidA3}>
                        <div className={styles.detalhesProduto}>

                            <h1 >Ultramid® A3WG6 RC</h1>
                            <p>Poliamida 66 virgem com poliamida reciclada mecanicamente a partir de refugos
                                coletados no programa <strong>CIRCUL</strong><span >AÍ</span>:</p>
                            <ul>
                                <li>Material com menor uso de fonte fóssil.</li>
                                <li>Alta performance e circular.</li>
                                <li>Estabilidade confiável de lote a lote.</li>
                                <li>Contribui para reinserção dos refugos em aplicações de vida longa.</li>
                                <li>Poliamida 66 reforçada com 30% de fibra de vidro, termoestabilizada.</li>
                            </ul>
                            <p style={{ marginTop: "20px" }}><span >Aplicações:</span> componentes eletrônicos, móveis, componentes de base de cadeiras, peças automotivas estruturais, componentes de sistema de ventilação,
                                componentes de eletrodomésticos, componenetes de máquinas e peças de
                                jardinagem</p>
                        </div>
                        <div className={styles.imagensUltramid}>
                            <img src={imagem1} alt="imagem Poliamida 6" />
                            <img src={imagem2} alt="imagem propriedades mecânicas" />
                            <img src={imagem3} alt="imagem material fornecido" />
                            <img src={imagem4} alt="imagem modulo de tração" />
                            <img src={imagem5} alt="imagem resistência ao Impacto Charpy" />
                        </div>
                    </div>
                    <div id={styles.ultramidB3}>
                        <div className={styles.imagensUltramid}>
                            <img src={imagem11} alt="imagem Poliamida 66" />
                            <img src={imagem2} alt="imagem propriedades mecânicas" />
                            <img src={imagem3} alt="imagem material fornecido" />
                            <img src={imagem4} alt="imagem modulo de tração" />
                            <img src={imagem22} alt="imagem resistência ao Impacto Charpy" />
                        </div>
                        <div className={styles.detalhesProduto}>

                            <h1 >Ultramid® B3WG6 RC</h1>
                            <p>Poliamida 6 + 66 reforçada com 30% de fibra de vidro,
                                termoestabilizada</p>
                            <p style={{ marginTop: "20px" }}><span >Aplicações:</span> filtros automotivos de combustível, componentes do sistema
                                de arrefecimento (defletor de veículo), peças estruturais de cadeiras,
                                conectores elétricos (não automotivos), caixas de componentes elétricos,
                                válvulas industriais.</p>
                        </div>

                    </div>
                    <a href="https://promo.basf.com/campaign/tasa/Arquivo_Ultramid_-_Circulai.pdf" target='_blank' rel='noreferrer' id={styles.brochuraUltramidDownload}>Baixar Brochura Ultramid®</a>
                </div>


            </main >
        </>
    )
}
