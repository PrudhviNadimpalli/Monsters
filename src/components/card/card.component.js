import { Component } from "react";
import './../card/card.style.css'



class Card extends Component {
    render(){
        const { monster } = this.props;
         return (
            <div key ={monster.id}className="card-container">
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2`}
              />
              <h2>NAME :{monster.name}</h2>
              <h3>AGE : {monster.age}</h3>
            </div> 
         )
    }
}


export default Card;