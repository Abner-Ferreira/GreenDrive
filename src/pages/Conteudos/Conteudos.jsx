import React, { useState, useEffect } from 'react'
import client from '../../client'
import BlockContent from "@sanity/block-content-to-react"
import styles from './conteudos.module.css'
import { Helmet } from 'react-helmet'
import { useUtag } from '../../context/utag'

export default function Conteudos() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const utag = useUtag();
    useEffect(() => {

        utag.view({ page_name: "Mobilidade | Conteúdos", page_language: "pt", page_identifier: "content page", page_category: "conteúdos", });

        // Faz uma requisão para a API do Sanity
        client.fetch(
            `*[_type == "post"] | order(publishedAt) [0...100]{
                
                title,
                slug,
                body,
                author,
                publishedAt,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        )
            .then(data => setPosts(data))
            .catch(e => console.error(e))

        setTimeout(() => { setLoading(true) }, 3000)
    }, [utag])


    return (
        <>
            <Helmet>
                <title>Mobilidade | Conteúdos</title>
            </Helmet>
            <section className={styles.conteudosContainer}>
                <h3>Aproveite os nossos <b>conteúdos!</b></h3>
                <h5>Fique por dentro de conteúdos com as soluções e tendências do ecossistema da mobilidade</h5>

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
                }
            </section>
        </>
    )
}
