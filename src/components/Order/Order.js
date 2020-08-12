import React from 'react';
import classes from './Order.module.css';

const order = (props) => (
        <div className={classes.Order}>
            <p>ingredints: salad (1)</p>
            <p>price: <strong>USD TOTAL</strong></p>
        </div>
);

export default order;