import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import './cart-dropdown.styles.scss';
import {CartDropDownContainer, CartItemContainer, EmptyMessageContainer,CartDropdownButton} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.components';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropDownContainer>
    <CartItemContainer>
    {
        cartItems.length ?(
        cartItems.map(cartItem=> (
            <CartItem key={cartItem.id} item={cartItem} /> 
            ))
        ):(
            <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
        )
    }
    </CartItemContainer>
    <CartDropdownButton onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden())
    }}>
            GO TO CHECKOUT</CartDropdownButton>
    </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
});


export default withRouter( connect(mapStateToProps)(CartDropdown));
