import './Backdrop.css';

const Backdrop = (props) => {
    return props.show ? <div onClick={props.clicked} className="Backdrop" /> : null;
}   

export default Backdrop
