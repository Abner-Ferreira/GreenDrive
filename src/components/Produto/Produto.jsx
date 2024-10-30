import React, { useContext, useState, useRef, useEffect } from 'react'
import { FormContext } from '../../context/formContext'
import styles from './produto.module.css'
import ModalProduto from '../Modal/ModalProduto'
import { useLocation } from 'react-router-dom'



export default function Produto({ filtro }) {

    // Pegando as variaveis do UseContext 
    const { tenhoInteresse, ativarForm } = useContext(FormContext)

    // Criando variaveis para utilizar no modal
    const [modalShow, setModalShow] = useState(false)
    const [produto, setProduto] = useState([])
    const [produtoAtivo, setProdutoAtivo] = useState('')

    // Utilizando o hook useLocation
    const location = useLocation()

    // Utilizando o hook useRef
    const productRefs = useRef({})

    // Criando um useEffect para fazer o scroll até o produto
    useEffect(() => {
        const productId = location.hash.replace('#', '')
        if (productId && productRefs.current[productId]) {
            productRefs.current[productId].scrollIntoView({ behavior: 'smooth' })
            setProdutoAtivo(Number(productId))
        }
    }, [location])


    return (
        <>

            <div className={styles.containerTodosProdutos}>
                {
                    filtro.map((produto) => (

                        produto.nome === produto.nome === "Ultramid A3WG6 RC" || produto.nome === "Ultramid B3WG6 RC" ?
                            <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: "5px 5px 10px 3px #004b9686" } : {}} ref={prod => productRefs.current[produto.id] = prod}>
                                <img src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.descBreve} </p>
                                <p className={styles.verMais} onClick={() => {
                                    setProduto(produto)
                                    setModalShow(true)
                                }}> Ver mais </p>
                                <button> <a href={produto.url} target='_blank' rel='noreferrer'> COMPRAR PRODUTO </a></button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações do produto </a>
                            </div>


                            : produto.nome === "Baslac 60-20 Diluente Normal 5L" || produto.nome === "Baslac 40-40 Verniz Alto Sólido 1L" || produto.nome === "Baslac 20-24 Primer de Enchimento 1L" || produto.nome === "Baslac 50-20 Endurecedor 0,5L" ?
                            <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: "5px 5px 10px 3px #004b9686" } : {}} ref={prod => productRefs.current[produto.id] = prod}>
                                <img src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.descBreve} </p>
                                <p className={styles.verMais} onClick={() => {
                                    setProduto(produto)
                                    setModalShow(true)
                                }}> Ver mais </p>
                                <button> <a href={produto.url} target='_blank' rel='noreferrer'> COMPRAR PRODUTO </a></button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações do produto </a>
                            </div>


                                : produto.nome === "Acronal" ?

                                    <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: "5px 5px 10px 3px #004b9686" } : {}} ref={prod => (productRefs.current[produto.id] = prod)}>
                                        <img src={produto.imagem} alt="Imagem dos produtos" />
                                        <h1> {produto.nome} </h1>
                                        <p> {produto.descBreve} </p>
                                        <p className={styles.verMais} onClick={() => {
                                            setProduto(produto)
                                            setModalShow(true)
                                        }}> Ver mais </p>
                                        <button onClick={() => tenhoInteresse(produto)}> TENHO INTERESSE </button>
                                        <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações dos produtos </a>
                                    </div>
                                    : produto.nome === "Elastofoam® I (PU)" || produto.nome === "Elastoflex® E (PU)" || produto.nome === "Catalisadores Automotivos" ?
                                        <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: "5px 5px 10px 3px #004b9686" } : {}} ref={prod => (productRefs.current[produto.id] = prod)}>
                                            <img src={produto.imagem} alt="Imagem dos produtos" />
                                            <h1> {produto.nome} </h1>
                                            <p> {produto.descBreve} </p>
                                            <p className={styles.verMais} onClick={() => {
                                                setProduto(produto)
                                                setModalShow(true)
                                            }}> Ver mais </p>
                                            <button onClick={() => tenhoInteresse(produto)}> TENHO INTERESSE </button>
                                            <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="action">Informações do produto </a>
                                        </div>
                                        :
                                        <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: "5px 5px 10px 3px #004b9686" } : {}} ref={prod => (productRefs.current[produto.id] = prod)}>
                                            <img src={produto.imagem} alt="Imagem dos produtos" />
                                            <h1> {produto.nome} </h1>
                                            <p> {produto.descBreve} </p>
                                            <p className={styles.verMais} onClick={() => {
                                                setProduto(produto)
                                                setModalShow(true)
                                            }}> Ver mais </p>
                                            <button onClick={() => {
                                                tenhoInteresse(produto)
                                                ativarForm()
                                            }}> TENHO INTERESSE </button>
                                            <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações do produto </a>
                                        </div>
                    ))
                }
            </div>

            <ModalProduto
                show={modalShow}
                onHide={() => setModalShow(false)}
                produtos={produto}
            />
        </>
    )
}
