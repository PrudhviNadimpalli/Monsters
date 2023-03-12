
import './../card/card.style.css'


const Card = ({monster})=>(
  <div key ={monster.id}className="card-container">
    <img
      alt={`monster ${monster.name}`}
      src={`https://robohash.org/${monster.id}?set=set2`}
    />
    <h2>NAME :{monster.name}</h2>
    <h3>EMAIL : {monster.email}</h3>
  </div> 
)


export default Card;