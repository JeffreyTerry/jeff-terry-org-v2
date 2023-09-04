import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from '../styled/components';
import { graphql, useStaticQuery } from 'gatsby';
import Book from './bookshelf/Book';

const BookshelfRow = styled(Row)`
  padding-bottom: 60px;
`;

function Bookshelf() {
  // Get all of the book cover images.
  const bookImageData = useStaticQuery(graphql`{
  tolstoy: file(relativePath: {eq: "books/Tolstoy.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  hemingway: file(relativePath: {eq: "books/Hemingway.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  wells: file(relativePath: {eq: "books/Wells.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
}`);

  return (
    <BookshelfRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            <SectionHeader>Bookshelf</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Book coverImage={bookImageData.tolstoy.childImageSharp.gatsbyImageData} name='Anna Karenina' />
          <Book
            coverImage={bookImageData.hemingway.childImageSharp.gatsbyImageData}
            name='A Moveable Feast'
          />
          <Book
            coverImage={bookImageData.wells.childImageSharp.gatsbyImageData}
            name='The Island of Dr. Moreau'
          />
          {/* https://www.goodreads.com/user/show/43070334-jeffrey-terry */}
        </Row>
      </Col>
    </BookshelfRow>
  );
}

export default Bookshelf;
