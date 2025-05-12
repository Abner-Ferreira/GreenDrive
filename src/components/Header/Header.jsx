import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './hamburger.css';
import styles from './header.module.css';


export default function Header() {

    // Criando uma variável que verifica se o header foi clicado ou não
    const [clicado, setClicado] = useState(false)

    // Função para fazer a verificação se o header foi clicado
    function clicouHeader() {
        setClicado(!clicado)
    }

    return (
        <>
            <header className={styles.containerHeader}>

                <div className={styles.navMobile}>

                    <div className={styles.bannerHeaderMobile}></div>
                    <Navbar expand={false} className="bg-body-tertiary mb-3" expanded={clicado} onClick={clicouHeader}  >
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                            <Navbar.Brand href="#" >Soluções para greendrive</Navbar.Brand>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${false}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                                placement="start"
                            >

                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} dir='left'>
                                        Soluções para greendrive
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3" onClick={clicouHeader}>
                                        <Nav.Link>
                                            <NavLink to="/" end>
                                                {({ isActive }) => (
                                                    <span className={isActive ? "ativado" : "desativado"}>HOME</span>
                                                )}
                                            </NavLink>
                                        </Nav.Link>

                                        <Nav.Link>
                                            <NavLink to="/produtos" onClick={clicouHeader}>
                                                {({ isActive }) => (
                                                    <span className={isActive ? "ativado" : "desativado"}>PRODUTOS</span>
                                                )}
                                            </NavLink>
                                        </Nav.Link>

                                        <Nav.Link>
                                            <NavLink to="/conteudos" onClick={clicouHeader}>
                                                {({ isActive }) => (
                                                    <span className={isActive ? "ativado" : "desativado"}>CONTEÚDOS</span>
                                                )}
                                            </NavLink>
                                        </Nav.Link>

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                </div>

                <nav className={styles.navDesktop}>
                    <div className={styles.bannerHeader}></div>
                    <ul className={styles.destkopMenuList}>

                        {/* Menu da HOME */}
                        <li>
                            <NavLink to="/" end>
                                {({ isActive }) => (
                                    <span className={isActive ? "ativado" : "desativado"}>HOME</span>
                                )}
                            </NavLink>
                        </li>

                        {/* Menu da PRODUTOS */}
                        <li>
                            <NavLink to="/produtos" >
                                {({ isActive }) => (
                                    <span className={isActive ? "ativado" : "desativado"}>PRODUTOS</span>
                                )}
                            </NavLink>
                        </li>

                        {/* Menu da CONTEÚDOS */}
                        <li>
                            <NavLink to="/conteudos">
                                {({ isActive }) => (
                                    <span className={isActive ? "ativado" : "desativado"}>CONTEÚDOS</span>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
