import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { GatsbyImage } from "gatsby-plugin-image";
import BookImageIcon from "./BookImageIcon";

const BookCol = styled(Col)`
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const BookContainer = styled.div`
  width: 100%;
  text-align: center;
`;

function Book({ coverImage, name }: { coverImage: GatsbyImage; name: string }) {
  return (
    <BookCol xs={6} md={4} lg={3} xl={2}>
      <BookContainer>
        <BookImageIcon fluid={coverImage} name={name} />
      </BookContainer>
    </BookCol>
  );
}

export default Book;
