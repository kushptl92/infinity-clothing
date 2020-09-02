import React from 'react';
// import './collection-item.styles.scss';
import { CollectionItemContainer, ImageContainer, AddButtonContainer, FotterContainer, NameContainer, PriceContainer  } from './collection-item.styles';
// import CustomButton from '../custom-button/custom-button.components';
import { connect } from 'react-redux';
import { addItem} from '../../redux/cart/cart.actions';
const CollectionItem = ({ item, addItem }) => {
    const{ name, price, imageUrl} = item;
    return(
    <CollectionItemContainer>
        <ImageContainer
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <FotterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </FotterContainer>
        <AddButtonContainer onClick={() => addItem(item)} inverted>
         ADD TO CART
         </AddButtonContainer>
    </CollectionItemContainer>
)};

const mapDispatchToProps= dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect( null, mapDispatchToProps )( CollectionItem );