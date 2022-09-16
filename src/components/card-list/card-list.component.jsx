import {Component} from 'react';
import './card-list.styles.css';


class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {

                    // *1_Destructuring assignment of objects
                    const { name, email, id } = monster;
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
                })}
            </div>
        )
    }
}

export default CardList;

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