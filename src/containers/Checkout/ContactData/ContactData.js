import React, { Component } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP CODE'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: ''
                },
            },
            deliveryMethod: {
                elementType: 'input',
                elementConfig: {
                    options: [{value: 'fastest', displayValue: 'Fastest'},
                              {value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: ''
            },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }
    
    render () {
        let form = (
            <form>
                    <Input inputype = "input" type="text" name="name" placeholder="Your name" />
                    <Input inputtype = "input" type="text" name="email" placeholder="Your email" />
                    <Input inputtype = "input" type="text" name="street" placeholder="Your street" />
                    <Input inputtype = "input" type="text" name="postal" placeholder="Your postal code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;