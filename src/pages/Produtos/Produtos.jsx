import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Formulario from '../../components/Formulario/Formulario'
import Produto from '../../components/Produto/Produto'
import { todosProdutos } from '../../services/todosProdutos'
import styles from './produtos.module.css'

export default function Produtos() {

    // Criando variável para o filtro
    const [produtoFiltrado, setProdutoFiltrado] = useState(todosProdutos)

    // Função de filtro dos produtos
    const filtro = (tipos) => {
        if (tipos !== 'Todos') {
            setProdutoFiltrado(todosProdutos.filter((produto) => produto.filtro.includes(tipos)))
        } else {
            setProdutoFiltrado(todosProdutos)
        }
    }

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 3000)
    }, []);

    return (
        <>
            <Helmet>
                <title>GreenDrive | Produtos</title>

            </Helmet>


            <div className={styles.introducaoFiltros}>
                <p>Aqui você encontra informações detalhadas sobre aplicações e especificações técnicas de diversos produtos voltados para o setor automotivo sustentável. Alguns dos materiais estão disponíveis para compra online e você pode acessar suas páginas diretamente pelos links fornecidos. </p>
                <p>Se tiver interesse em algum produto e quiser saber mais, clique no botão <b>“Tenho Interesse”</b>. </p>
                <p>Todos os itens selecionados serão adicionados à sua <b>"Lista de Interesse"</b> disponível ao final da página. Basta preencher seus dados, revisar os produtos escolhidos e clicar em <b>“Enviar”</b>. Nossa equipe entrará em contato para fornecer mais detalhes e tirar suas dúvidas.</p>
            </div>

            <div className={styles.filtros}>
                <div>
                    <button onClick={() => filtro('Todos')} className={styles.btnFiltros}>Todos</button>
                </div>
                <div>
                    <button onClick={() => filtro('Materiais')} className={styles.btnFiltros}>Materiais</button>
                </div>
                <div>
                    <button onClick={() => filtro('Fluídos')} className={styles.btnFiltros}>Fluídos</button>
                </div>
                <div>
                    <button onClick={() => filtro('Eletromobilidade')} className={styles.btnFiltros}>Eletromobilidade</button>
                </div>
                <div>
                    <button onClick={() => filtro('EcoPerformance')} className={styles.btnFiltros}>EcoPerformance</button>
                </div>
            </div>
            {loading ? <Produto filtro={produtoFiltrado} />
                :
                <div className={styles.containerLoading}>
                    <div id={styles.loadingProduct}></div>
                    <p>Carregando produtos</p>
                </div>
            }
            <Formulario />
        </>
    )
}
