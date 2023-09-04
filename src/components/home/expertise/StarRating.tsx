import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const StarRatingContainer = styled.div``;
const Star = styled.div`
  color: ${(props) => props.theme.primaryColor};
  display: inline-block;
  margin-right: 0.2rem;
`;

function StarRating({ stars }: { stars: number }) {
  // An array of <stars> length.
  // Each value is either `true`, indicating a solid star,
  //  or `false`, indicating an empty star.
  const starsArray: boolean[] = useMemo(() => {
    return [...Array(5)].map((_, i) => (i < stars ? true : false));
  }, [stars]);

  return (
    <StarRatingContainer aria-label={`${stars} out of 5 stars`}>
      {starsArray.map((solid, i) => (
        <Star key={`star-${i}`}>
          {solid ? (
            <FontAwesomeIcon icon={faStarSolid} data-testid='star-rating-solid-star' />
          ) : (
            <FontAwesomeIcon icon={faStarRegular} data-testid='star-rating-regular-star' />
          )}
        </Star>
      ))}
    </StarRatingContainer>
  );
}

export default StarRating;
