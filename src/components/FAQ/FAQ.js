import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqPageContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={ faqPageContents.title } photo={ faqPageContents.image }/>
    <p>{ faqPageContents.content }</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  content: PropTypes.node,
};

export default FAQ;