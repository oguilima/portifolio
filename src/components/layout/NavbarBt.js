import styles from './NavbarBt.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

function NavbarBt() {
    return (
        <Navbar collapseOnSelect className={styles.barra} expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.navItens}>
                    <Nav>
                        <Nav.Link ><Link to="/" className={styles.itens}>Sobre mim</Link></Nav.Link>
                        <Nav.Link ><Link to="/projetos" className={styles.itens}>Projetos</Link></Nav.Link>
                        <Nav.Link ><Link to="/carreira" className={styles.itens}>Carreira</Link></Nav.Link>
                        <Nav.Link ><Link to="/contato" className={styles.itens}>Contato</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBt