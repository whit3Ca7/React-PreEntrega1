import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Guitarras">Guitarras</Nav.Link>
                        <Nav.Link href="#Bajos">Bajos</Nav.Link>
                    </Nav>
                    <Nav>
               {/*          <Nav.Link href="#deets">🛒</Nav.Link> */}
                     {/*    <Nav.Link eventKey={2} href="#memes">
                        </Nav.Link> */}
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar