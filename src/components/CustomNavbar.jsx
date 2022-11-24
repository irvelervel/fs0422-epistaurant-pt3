import { Navbar, Nav } from 'react-bootstrap'
// let's create a React Component for just the Navbar!
// I'm going to choose the simplest way for creating this component,
// since it does not need any special ability!
// --> a function returning JSX

const CustomNavbar = ({subtitle}) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Epistaurant - {subtitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#menu">Menu</Nav.Link>
        <Nav.Link href="#reservation">Reservation</Nav.Link>
        <Nav.Link href="#findus">Find us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// this is an alternative way: allows you to open the body of the
// functional component to do stuff in it (like a console.log())
// before returning the JSX; REMEMBER TO PUT AN EXPLICIT RETURN!

// const CustomNavbar = (props) => {
//   console.log('Hello, this is CustomNavbar speaking!')
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand href="#home">
//         Epistaurant - {props.subtitle}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link href="#menu">Menu</Nav.Link>
//           <Nav.Link href="#reservation">Reservation</Nav.Link>
//           <Nav.Link href="#findus">Find us</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

export default CustomNavbar
