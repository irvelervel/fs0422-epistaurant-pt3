// this will be a component capable of fetching live data in its mounting process
// for understanding this, we have to focus once again on the connection
// we have to establish between the interface of the component and its state (its logic)

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

  render() {
    return (
      <div>
        <h2>RESERVATIONS LIST</h2>
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
