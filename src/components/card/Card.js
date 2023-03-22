import Card from 'react-bootstrap/Card';

export default function DisplayCard(props){
	return (
		<>
			<Card style={{ width: '18rem' }}>
		      <Card.Img style={{height: "250px", objectFit: "cover"}} variant="top" src={props.src} />
		      <Card.Body>
		        <Card.Title>{props.title}</Card.Title>
		        <Card.Text>
		         {props.text}
		        </Card.Text>
		      </Card.Body>
		    </Card>
		</>
	);
}