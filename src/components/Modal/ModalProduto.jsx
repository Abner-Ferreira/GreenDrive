import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormContext } from '../../context/formContext';
import "./modal.css";

export default function ModalProduto({ produtos, ...props }) {

  // Pegando as variaveis do UseContext 
  const { tenhoInteresse, ativarForm } = useContext(FormContext)
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className='container-modal'>
          <div className='infos-container'>
            <div className='img-produto'>
              <img src={produtos.imagem} alt="" />
            </div>
            <div className='infos-produtos'>
              <h1>{produtos.nome}</h1>
              <button onClick={() => {
                tenhoInteresse(produtos)
                ativarForm()
                props.onHide()
              }}>Tenho interesse</button>
            </div>
          </div>
          <div className='descricao-produto'>
            <p>{produtos.desc}</p>
          </div>

        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer> */}
    </Modal>
  )
}
