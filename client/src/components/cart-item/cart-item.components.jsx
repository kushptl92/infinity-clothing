import React from 'react';
// import './cart-item.styles.scss';
import  {CartItemContainer,ImageContainer,ItemDetailsContainer,NamePriceContainer} from './cart-item.styles';


const CartItem = ({ item:{ imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NamePriceContainer> {name}</NamePriceContainer>
            <NamePriceContainer>{quantity} x ${price}</NamePriceContainer>
        </ItemDetailsContainer>
    
    </CartItemContainer>
);


export default React.memo(CartItem);