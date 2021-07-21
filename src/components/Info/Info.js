import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoPageContents} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={ infoPageContents.title } photo={ infoPageContents.image }/>
    <p>{ infoPageContents.content }</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node.isRequired,
  photo: PropTypes.string,
  content: PropTypes.node,
};

export default Info;