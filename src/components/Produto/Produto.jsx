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
        {filtro.map(produto => (
          <div className={styles.containerProduto} key={produto.id} id={produto.id} style={produto.id === produtoAtivo ? { boxShadow: '5px 5px 10px 3px #004b9686' } : {} } ref={prod => (productRefs.current[produto.id] = prod)}
          >
            <img src={produto.imagem} alt='Imagem dos produtos' />
            <h1> {produto.nome} </h1>
            <p> {produto.descBreve} </p>
            <p className={styles.verMais} onClick={() => {   setProduto(produto);   setModalShow(true) }}>
              Ver mais
            </p>
            <button onClick={() => {   tenhoInteresse(produto); ativarForm() }}>
              TENHO INTERESSE
            </button>
          </div>
        ))}
      </div>

      <ModalProduto
        show={modalShow}
        onHide={() => setModalShow(false)}
        produtos={produto}
      />
    </>
  )
}
