import React from 'react';

// import './cart-icon.styles.scss';
import {CartIconContainer, ShopIconContainer, ItemCountContainer} from './cart-icon.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js';



const CartIcon = ( {toggleCartHidden, itemCount} ) => (
 <CartIconContainer onClick ={ toggleCartHidden} >
 <ShopIconContainer />
 <ItemCountContainer>{itemCount}</ItemCountContainer>
 </CartIconContainer>   
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CartIcon);