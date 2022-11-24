// Home will be the component hosting the main features of the homepage
import { Component } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import menu from '../data/menu.json'
import DishComments from './DishComments'
import ReservationForm from './ReservationForm'
import ReservationList from './ReservationList'

// every component written as a CLASS can hold an internal STATE.
// a state is an object, and you want to use it for REMEMBERING THINGS!
// basically an internal memory.
// a STATE OBJECT is a feature just belonging to CLASS COMPONENTS.
// the state keeps its memory from the moment the Home component reaches the DOM
// until the Home component disappears

class Home extends Component {
  // Component is the MAIN CLASS COMPONENT from the React Library
  // render() is the only MANDATORY METHOD in a Class Component!
  // its job is just to RETURN the JSX

  state = {
    selectedPasta: null, // this is the INITIAL VALUE of selectedPasta in the State
  }
  // state is a reserved keyword; you cannot call your state object "stefano" :(

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} className="text-center">
            <ReservationList />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} className="text-center">
            <ReservationForm />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          {/* this is the same thing as writing <div className="col col-xs-12 col-md-6"> */}
          <Col xs={12} md={6} className="text-center">
            <h1>Welcome to Epistaurant!</h1>
            <h3>Check out our amazing pastas!</h3>
            <Carousel interval={9999999}>
              {menu.map((pasta) => (
                <Carousel.Item key={pasta.id}>
                  <img
                    className="d-block w-100"
                    src={pasta.image}
                    alt={pasta.name}
                    onClick={() => {
                      console.log('CLICKED!', pasta)
                      // let's use the current pasta and set it
                      // as the new value of selectedPasta in the state
                      // this.setState CHANGES the values of the state
                      this.setState({
                        selectedPasta: pasta,
                      })
                      // you pass to setState a NEW STATE OBJECT: it will
                      // be MERGED into your current one
                      // every time you set the state, render() fires again!
                    }}
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} className="text-center">
            <DishComments selectedPasta={this.state.selectedPasta} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
