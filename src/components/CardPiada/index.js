import * as React from "react";
import styled from "styled-components";

import iconLike from '../../public/components/icones/like.png'
import iconDislike from '../../public/components/icones/dislike.png'

import f from '../../styles/typograph.json'
import c from '../../styles/colors.json'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${c.white};
  
  padding: 20px 30px;
  border-radius: 8px;
`

const Title = styled.h2`
  order: 1;
  font-family: 'AvenirBlack';
  font-weight: ${f.paragraphLarge.fontWeight.medium};
  font-size: ${f.paragraphLarge.fontSize};
  line-height: ${f.paragraphLarge.lineHeight};
  
  text-align: start;

  color: ${c.primary};
  padding-bottom: 10px;
  width: 30%;
  
  @media(min-width: 768px) {
    width: 100%;
  }
`

const Description = styled.p`
  order: 3;
  width: 100%;
  font-family: 'AvenirRoman';

  font-weight: ${f.paragraph.fontWeight.medium};
  font-size: ${f.paragraph.fontSize};
  line-height: ${f.paragraph.lineHeight};
  text-align: start;
  
  color: ${c.grey};
  padding-bottom: 10px;
  @media(min-width: 768px) {
    order: 2;
  }
`;

const Autor = styled.p`
  order: 4;
  text-align: start;
  
  font-family: 'AvenirBlack';
  font-weight: ${f.paragraphSmall.fontWeight.medium};
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
  
  color: ${c.secondary};
  width: 30%;
`

const DataCriacao = styled.p`
  width: 70%;
  font-family: 'AvenirRoman';
  align-content: center;
  text-align: end;

  font-weight: ${f.paragraphSmall.fontWeight.medium};
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};

  color: ${c.lightGrey};
  order: 2;
  @media(min-width: 768px) {
    order: 5;
    width: 40%;
  }
`

const IconContainer = styled.div`
  width: 30%;
  order: 4;
  display: flex;
  justify-content: space-evenly;

  @media(min-width: 768px) {
    order: 4;
    width: 30%;
  }

  p {
    font-family: 'AvenirBlack';
    font-weight: ${f.paragraphSmall.fontWeight.medium};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
  }
`

const Likes = styled.p`
  color: ${c.green};
`

const Dislikes = styled.p`
  color: ${c.primary};
`

export default function Piada({ content }) {

  var newDate = new Date(content.created);
  var formattedDate = newDate.getDay() + '/' + newDate.getMonth() + '/' + newDate.getFullYear();

  return (
    <Container>
      <Title>Piada {content.id}</Title>
      <Description>{content.description}</Description>
      <Autor>{content.user.name}</Autor>
      <IconContainer>
        <img src={iconLike} />
        <Likes>{content.likes}</Likes>
        <img src={iconDislike} />
        <Dislikes>{content.dislike}</Dislikes>
      </IconContainer>
      <DataCriacao>Publicada em {formattedDate}</DataCriacao>
    </Container>
  )
}