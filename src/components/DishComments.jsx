import { ListGroup } from 'react-bootstrap'

const DishComments = ({ selectedPasta }) => (
  <ListGroup>
    {selectedPasta?.comments.map((c) => (
      <ListGroup.Item key={c.id}>
        {c.rating} | {c.comment}
      </ListGroup.Item>
    ))}
  </ListGroup>
)

export default DishComments
