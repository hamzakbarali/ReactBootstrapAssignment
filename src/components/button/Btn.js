import Button from 'react-bootstrap/Button';

export default function Btn(props){
	return (
		<Button style={{marginTop: "20px", marginLeft: "20px"}} onClick = {props.onClick} variant={props.variant}>
			{props.text}
		</Button>
	);
}