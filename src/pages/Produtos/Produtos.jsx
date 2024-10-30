import React, { useEffect, useState } from 'react'
import Produto from '../../components/Produto/Produto'
import styles from './produtos.module.css'
import { todosProdutos } from '../../services/todosProdutos'
import Formulario from '../../components/Formulario/Formulario'
import { Helmet } from 'react-helmet';
import { useUtag } from '../../context/utag'

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

    const utag = useUtag();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        // Explicitly handle page views
        utag.view({ page_name: "Mobilidade | Produtos", page_language: "pt", page_identifier: "product page", page_category: "produtos", });
        setTimeout(() => {setLoading(true)}, 3000)
    }, [utag]);

    return (
        <>
            <Helmet>
                <title>Mobilidade | Produtos</title>

            </Helmet>


            <div className={styles.introducaoFiltros}>
                <p>Conheça as soluções BASF para a indústria da mobilidade. Aqui você terá acesso a informações como aplicação e dados técnicos dos produtos. Alguns dos nossos materiais estão disponível para compra online e você poderá acessar a página através dos links que disponibilizamos. </p>
                <p>Ficou interessado em algum produto e quer obter maiores informações clique no botão <b>“Tenho Interesse”</b>. </p>
                <p>Os itens selecionados aparecerão na sua <b>"Lista de Interesse"</b> que estará disponível no final desta página. Basta preencher seus dados, revisar os produtos selecionados e clicar no botão <b>“Enviar”</b>. A nossa equipe entrará em contato para fornecer mais detalhes</p>
            </div>

            <div className={styles.filtros}>
                <div>
                    <button onClick={() => filtro('Todos')} className={styles.btnFiltros}>Todos</button>
                </div>
                <div>
                    <button onClick={() => filtro('Polímeros')} className={styles.btnFiltros}>Polímeros</button>
                </div>
                <div>
                    <button onClick={() => filtro('Fluídos')} className={styles.btnFiltros}>Fluídos</button>
                </div>
                <div>
                    <button onClick={() => filtro('Sistema-de-exaustão')} className={styles.btnFiltros}>Sistema de Exaustão</button>
                </div>
                <div>
                    <button onClick={() => filtro('Processos-de-pintura')} className={styles.btnFiltros}>Processos de Pintura</button>
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
