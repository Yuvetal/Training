import fork from "../assets/fork.png";
import "./Card.css";
const Card=()=>{
    return(
    <div class="card">
        <img src={fork}></img>
        <hr></hr>
        <h1>This is fork. Signatue weapon for Escoffier</h1>
    </div>);
};
export default Card