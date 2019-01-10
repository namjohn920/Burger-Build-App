import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    // componentWillUpdate() {
    //     console.log('[OrderSummary] will update')
    // }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey, index) => {
            return (
                        <li key={igKey + index}> 
                             <span style={{textTransform:"capitalize"}}>{igKey}</span> : 
                             {this.props.ingredients[igKey]}
                        </li>
                );
        })

        return (
            <Aux>
                <h3> YOur Orders</h3>
                <p>A delicous ingreidents</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Continue to CheckOut?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
    }
} 

export default OrderSummary;

