import React from 'react';
import CollectionItem from'../../components/collection-item/collection-item.components';
import { connect } from 'react-redux';
import { selectCollection }  from '../../redux/shop/shop.selector';
// import './collection.styles.scss';
import { CollectionPageContainer, TitleContainer, ItemContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemContainer>
      </CollectionPageContainer>
    );
  };

const mapStateToProps =(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);