import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
    render() {
         // *1_Destructuring assignment of objects
        const {id, name, email} = this.props.monster;

        return(
            <div className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set4&size180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        )
    }
}

export default Card;

/*
*1_Destructuring assignment of objects_オブジェクトの分割代入

const monster = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
    },
  }

>From ES6 we can use Destructuring assignment!
>How to decompose object properties into variables is bellow.
let { id, name, username, email, address } = monster;

*/