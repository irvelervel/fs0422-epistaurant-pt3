// this will be a component capable of fetching live data in its mounting process
// for understanding this, we have to focus once again on the connection
// we have to establish between the interface of the component and its state (its logic)

// STEPS HAPPENING:
// 1) INITIAL RENDER() INVOKATION: this will output to the page the static parts,
// like the <h2> tag or the shell for the empyty ListGroup (empty since the state
// is still empty at this moment, [])
// 2) because we wrote a componentDidMount, that is what happens next, since
// COMPONENTDIDMOUNT FIRES AFTER THE INITIAL RENDER() INVOKATION;
// componentDidMount fetches the data (it's perfect for doing expensive operations),
// and sets the state just once (you're guaranteed of that)
// 3) because a setState just happened in the componentDidMount, RENDER() (who
// is always listening for state changes) detects it and FIRES AGAIN! will now
// leave in place the static parts, since there's no need to rewrite them, but
// when it's time to map the array for generating the list, since now we have
// filled our state with reservations, will generate the new elements of the list.

import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class ReservationList extends Component {
  // very common situation: you want to fill the interface of a component
  // at load time, and show the user the results of your fetch

  // every time you need to fetch data upon component loading, you need
  // a place to store it! you'll use the COMPONENT STATE for this!

  state = {
    reservations: [],
  }

  fetchReservations = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        let data = await response.json()
        // console.log(data)
        // data is the array of reservations we're getting back from the API
        this.setState({
          reservations: data,
        })
      } else {
        console.log('error fetching the reservations :(')
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    console.log('COMPONENTDIDMOUNT FIRED!')
    // componentDidMount is another lifecycle method, but it's guaranteed
    // to be executed JUST ONCE :)
    // it is designed to launch fetches, expensive operations to fill your
    // initial state with dynamic data, and never being called again.
    // ONE-SHOT METHOD.
    this.fetchReservations()
    // COMPONENT DID MOUNT HAPPENS AFTER INITIAL RENDER() INVOKATION!
  }

  // just a test method, if launched from render() crashes the application
  // since setting the state calls render() again --> INFINITE LOOP
  //   thisWillCrash = () => {
  //     this.setState({
  //       reservations: [],
  //     })
  //   }

  // render() is a lifecycle method!
  // render() is in charge of outputting the JSX from the component
  // render() is invoked when the component mounts, and it's invoked AGAIN
  // every time there's a change in the STATE of the component or the PROPS
  // the component is receiving
  render() {
    // this.fetchReservations()
    // PLEASE, DON'T SET YOUR STATE FROM RENDER()!
    // this.thisWillCrash()

    console.log('RENDER FIRED!')

    return (
      <div>
        <h2>CCCRESERVATIONS LIST</h2>
        <ListGroup className="mt-4">
          {/* <ListGroup.Item>Hello World!</ListGroup.Item> */}
          {/* Let's create the connection between the interface and the state! */}
          {/* In this way, for updating the list we won't have to manipulate the DOM, */}
          {/* we'll just have to keep the state up-to-date */}
          {this.state.reservations.map((r) => (
            <ListGroup.Item key={r._id}>
              {r.name} for {r.numberOfPeople} people at {r.dateTime}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default ReservationList
