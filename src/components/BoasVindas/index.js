import * as React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import f from '../../styles/typograph.json'
import c from '../../styles/colors.json'

import Haha from '../../public/components/icones/haha.png';

const ContainerImage = styled.div`
  padding-bottom: 50px;
  img {
    width: 200px;
  }
`

const ContainerContent = styled.div`
  button {
    width: 100%;
    min-height: 44px;
    
    color: ${c.white};
    font-family: 'AvenirBlack';
    font-weight: ${f.paragraph.fontWeight.medium};
    font-size: ${f.paragraph.fontSize};
    line-height: ${f.paragraph.lineHeight};
    
    
    background: ${c.primary};
    border: 1px solid ${c.primary};
    border-radius: 8px;

    :hover {
      box-shadow: 4px 3px 3px ${c.grey};
      transition: all 0.1s;
    }
  
    :focus {
      border-radius: 0.25rem;
      border: none;
      outline: 2px solid ${c.primary};
      outline-offset: 3px;
    }
  }
`

const Title = styled.h1`
  font-family: 'AvenirBlack';
  font-weight: ${f.displayMedium.fontWeight.medium};
  font-size: ${f.displayMedium.fontSize};
  line-height: ${f.displayMedium.lineHeight};
  text-align: center;
  color: ${c.grey};

  padding: 15px 0;
  
  span {
    font-family: 'AvenirBlack';
    color: ${c.primary};
  }

  @media(min-width: 768px) {
    font-size: ${f.displayLarge.fontSize};
    line-height: ${f.displayLarge.lineHeight};
  }

`

const Descricao = styled.p`
  font-family: 'AvenirBook';
  font-weight: ${f.paragraph.fontWeight.medium};
  font-size: ${f.paragraph.fontSize};
  line-height: ${f.paragraph.lineHeight};
  
  color: ${c.grey};
  text-align: center;
  
  padding-bottom: 50px;
  
  b {
    font-family: 'AvenirBlack';
    font-weight: ${f.paragraph.fontWeight.bold};
  }
`

const SubDescricao = styled.p`
  font-family: 'AvenirBlack';
  font-weight: ${f.paragraph.fontWeight.medium};
  font-size: ${f.paragraph.fontSize};
  line-height: ${f.paragraph.lineHeight};
  
  color: ${c.secondary};
  text-align: center;
  
  padding-bottom: 50px;
`

const Button = styled.button`
`

export default function BoasVindas() {
  const navigate = useNavigate();

  return (
    <>
      <ContainerImage>
        <img src={`${Haha}`} />
      </ContainerImage>
      <ContainerContent>
        <Title>SÓ <span>PIADA</span> BOA</Title>
        <Descricao>
          Participe da maior comunidade de piadistas do <b>Brasil</b>. Vote nas piadas de outros usuários e cadastre suas as suas próprias.
        </Descricao>
        <SubDescricao>
          Só não vá morrer de rir! kkk
        </SubDescricao>
        <Button onClick={() => navigate('/listagem')}>
          Começar
        </Button>
      </ContainerContent>
    </>
  );
}
