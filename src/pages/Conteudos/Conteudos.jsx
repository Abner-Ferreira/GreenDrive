import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
// import client from '../../client'
import styles from './conteudos.module.css'
import logo from '../../assets/logo-transparente.png'

export default function Conteudos() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    return (
        <>
            <Helmet>
                <title>GreenDrive | Conteúdos</title>
            </Helmet>
            <section className={styles.conteudosContainer}>

                <div className={styles.containerEmbreve}>
                    <img src={logo} alt="logo greendrive" />
                    <h1>Em breve...</h1>
                </div>
                {/* <h3>Aproveite os conteúdos do <b>GreenDrive!</b></h3>
                <h5>Fique por dentro das soluções sustentáveis e das tendências que estão transformando o futuro da mobilidade.</h5>

                {loading ?
                    <div className={styles.postContainer}>
                        {posts.map((post) => (
                            <>


                                <article key={post.slug.current} className={styles.post}>
                                    <div className={styles.imgContainer}>
                                        <img src={post.mainImage.asset.url} alt={post.title} />
                                    </div>
                                    <div className={styles.conteudoPost}>
                                        <h5>{post.title}</h5>
                                        <div className={styles.textoPost}>
                                            <BlockContent blocks={post.body} projectId="ef4zn5h2" dataset="production" />

                                        </div>
                                    </div>
                                    <button className={styles.btnArtigo}><a href={`https://promo.basf.com/campaign/tasa/${post.slug.current}.pdf`} target='_blank' rel='noreferrer'>Saiba mais</a></button>
                                </article>
                            </>
                        ))}
                    </div>
                    :
                    <div className={styles.containerLoading}>
                        <div id={styles.loadingProduct}></div>
                        <p>Carregando conteúdos</p>
                    </div>
                } */}
            </section>
        </>
    )
}
