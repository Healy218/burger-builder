import React from 'react';
import classes from './Order.module.css';

const order = (props) => {

    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        });
    }

    let ingredientOutput = ingredients.map(ig => {
        return <span className={classes.Ingredients} key={ig.name}>{ig.name}({ig.amount})</span>
    })

    return(
        <div className={classes.Order}>
            <p>ingredints: {ingredientOutput}</p>
            <p>price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;