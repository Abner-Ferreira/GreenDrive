import React, { createContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const FormContext = createContext({})

export default function FormContextProvider({ children }) {

    // Criando a variável para verificar se a API foi um sucesso ou não
    const [success, setSuccess] = useState(false)

    // Utilizando o axios para fazer as configurações da API
    const url = axios.create({
        baseURL: 'https://sheetdb.io/api/v1/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer 6vhv0gsgqtwfkao1yaf3askc61fystwon5n9yrgz`
        }
    })

    // Criando variaveis de navegação
    const navigate = useNavigate()
    const urlAgradecimento = "/mobilidade/form/thank-you"

    // Função para enviar o formulário
    function enviarForm(nome, email, tel, nomeEmp, produtos, termos) {

        // Se o e-mail ou o nome estiver vazios, retorna um erro
        if (nome === '' || email === '') {
            return toast.error("Os campos com * são obrigatórios")
        } else {

            // Se a quantidade de produtos for menor ou 0, retorna um erro
            if (produtos.length <= 0) return toast.error("Você deve selecionar pelo menos 1 produto") 
           
            // ForEach para pegar todos os produtos selecionados
            let todosProdutos = []
            for (let i = 0; i < produtos.length; i++) {
                todosProdutos.push(produtos[i].nome)
            }

            // Pegando a data e verificando se é maior que 12 
            var data = new Date()
            data = `${data.getDate()}/${data.getMonth() >= 11 ? 12 : data.getMonth() + 1}/${data.getFullYear()}`


            // Fazendo uma requisição POST com os dados dos clientes
            url.post(`tax2nqr8cpt16`, {
                "Nome Completo": nome,
                "Email": email,
                "Telefone": tel,
                "Nome da Empresa": nomeEmp,
                "Produtos de Interesse": todosProdutos,
                "Aceito o termos e condições": termos ? "Aceito" : "Não Aceito",
                "Data de Envio": data
            })

                .then(() => {
                    setSuccess(true)
                    setTimeout(() => toast.success('Formulário enviado com sucesso!'), 2000)
                })
                .then(() => setTimeout(() => {
                    navigate(`${urlAgradecimento}`)
                    setSuccess(false)
                    setProdutosSelecionados([])
                }, 5000))

                .catch((err) => {
                    toast.error("Erro ao enviar o formulário: " + err)
                    setSuccess(false)
                })
            
        }
    }

    // Criando variável para armazenar os produtos selecionados
    const [produtosSelecionados, setProdutosSelecionados] = useState([])

    // Criando uma função para verificar quais produtos o cliente tem interesse
    const tenhoInteresse = (prod) => {
        for (let i = 0; i < produtosSelecionados.length; i++) {

            // Verifica se o produto já foi adicionado no formulário
            if (prod === produtosSelecionados[i]) {
                return toast.error(`${prod.nome} \njá foi adicionado ao formulário de interesse`)
            }
            
        }

        // Adiciona o produto selecionado em uma variável
        setProdutosSelecionados(produtos => [...produtos, prod])
        toast.success(`${prod.nome} \nadicionado ao formulário de interesse`)
    }

    // Função para remover um produto selecionado
    const removerSelecionado = (id, nome) => {
        setProdutosSelecionados(produtos => produtos.filter(prdRemovido => prdRemovido.id !== id))
        toast.error(`${nome} removido do formulário de interesse`)
    }

    // Função para ativar e desativa-lo o formulário
    function ativarForm() {
        const formulario = document.getElementById('formulario')
        let ativo = formulario.getAttribute("data-formAtivo")
        if (ativo === "false") {
            return formulario.click()
        }

    }

    return (
        <FormContext.Provider value={{ enviarForm, tenhoInteresse, produtosSelecionados, removerSelecionado, success, ativarForm }}>
            {children}
            <Toaster
                position="top-center"
                reverseOrder={false}
                duration={9000}
                toastOptions={{
                    success: {
                        style: {
                            border: '1px #004a96 solid',
                            color: '#004a96',
                        }
                    },
                    error: {
                        style: {
                            border: '1px #f00 solid',
                            color: "#f00"
                        }
                    },
                }}
            />

        </FormContext.Provider>
    )
}
