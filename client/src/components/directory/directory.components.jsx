import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.components';
// import './directory.styles.scss';
import { DirectoryMenu } from './directory.styles';


const Directory =({ sections }) =>(
      <DirectoryMenu>
        {sections.map(({ id, ...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps} />
           ))}
        </DirectoryMenu>
);

const mapStateToProps= createStructuredSelector({
  sections: selectDirectorySections
});

        export default connect(mapStateToProps)(Directory);