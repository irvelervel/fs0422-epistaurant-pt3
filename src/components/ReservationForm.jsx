import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// a reservation object is made like this:
// {
// name: // string, required
// phone: // string || number, required
// numberOfPeople: // string || number, required
// smoking: // boolean, required
// dateTime: // string, required
// specialRequests: // string
// }

// a controlled input field in React is built by a TWO-WAY DATA BINDING
// we need to set the value of the input field to a property of the state
// and we need to change that property in the state upon every character set into
// the input field

// const stefanoObj = {
//     country: 'Italy'
// }

// stefanoObj['country']

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      reservation: {
        ...this.state.reservation, // this creates a copy of reservation!
        [fieldToSet]: value,
      },
    })
  }

  // https://striveschool-api.herokuapp.com/api/reservation

  // FORM SUBMISSION WITH CHAINED THENS METHOD
  //   onSubmitHandler = (e) => {
  //     // why do we need the event of the form submission?
  //     e.preventDefault() // this will prevent the page from refreshing
  //     fetch('https://striveschool-api.herokuapp.com/api/reservation', {
  //       method: 'POST',
  //       body: JSON.stringify(this.state.reservation),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((response) => {
  //         console.log(response)
  //         if (response.ok) {
  //           alert('Reservation saved!')
  //           this.setState({
  //             reservation: {
  //               name: '',
  //               phone: '',
  //               numberOfPeople: 1,
  //               smoking: false,
  //               dateTime: '',
  //               specialRequests: '',
  //             },
  //           })
  //         } else {
  //           alert('Something went wrong :(')
  //         }
  //       })
  //       .catch((e) => console.log(e))
  //   }

  // FORM SUBMISSION WITH ASYNC/AWAIT TECHNIQUE
  onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      // await waits for the promise to complete before moving on
      // (it pauses the execution of your function)
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reservation),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        alert('Reservation saved!')
        this.setState({
          reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: '',
          },
        })
      } else {
        console.log('something went wrong :(')
        // you'll fall here if the server had a problem handling your request
      }
    } catch (error) {
      console.log(error)
      // you'll fall here instead if you have let's say an internet problem
      // or you were never able to contact the server in the first place
    }
  }

  render() {
    return (
      <div>
        <h2>Book your table NOW!</h2>
        <p>Seats are limited ;)</p>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="The name of the res. holder"
              required
              value={this.state.reservation.name}
              onChange={(e) => this.onChangeHandler(e.target.value, 'name')}
              // this is the "conventional" way, more verbose; it still works :)
              //   onChange={(e) => {
              //     this.setState({
              //       reservation: {
              //         ...this.state.reservation,
              //         name: e.target.value,
              //       },
              //     })
              //   }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="The phone of the res. holder"
              required
              value={this.state.reservation.phone}
              onChange={(e) => this.onChangeHandler(e.target.value, 'phone')}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>How many are you?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={(e) =>
                this.onChangeHandler(e.target.value, 'numberOfPeople')
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              checked={this.state.reservation.smoking}
              // checked is useful just for checkboxes; it will store true/false
              // instead, the value property stores "on" / "off"
              onChange={(e) =>
                this.onChangeHandler(e.target.checked, 'smoking')
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date and time of your res.</Form.Label>
            <Form.Control
              type="datetime-local"
              required
              value={this.state.reservation.dateTime}
              onChange={(e) => this.onChangeHandler(e.target.value, 'dateTime')}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={this.state.reservation.specialRequests}
              onChange={(e) =>
                this.onChangeHandler(e.target.value, 'specialRequests')
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send reservation
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
