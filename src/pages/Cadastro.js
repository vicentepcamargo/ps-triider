// import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import f from '../styles/typograph.json'
import c from '../styles/colors.json'

import { LayoutPaginas } from "../components/Layout";
import { Index as Main } from "../components/Main";
import { useWidthActiveState } from "../context/Width";

const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
      flex-direction: row;
      gap: 20px;
    }
  }

  input, label, textarea {
    width: 100%;
    border-radius: 8px;
    border: 0;
  }

  input, textarea {
    resize: none;
    background: ${c.lightGrey};
    border-radius: 8px;
    
    padding-left: 0;
    font-weight: ${f.paragraph.fontWeight.medium};
    font-size: ${f.paragraph.fontSize};
    line-height: ${f.paragraph.lineHeight};
  }
  

`;

const Title = styled.h2`
  font-family: 'AvenirBlack';

  font-weight: ${f.h2.fontWeight.medium};
  font-size: ${f.h2.fontSize};
  line-height: ${f.h2.lineHeight};

  margin: 40px 0; 

  color: ${c.primary};
`;

const Label = styled.label`
  font-family: 'AvenirBlack';

  font-weight: ${f.paragraph.fontWeight.medium};
  font-size: ${f.paragraph.fontSize};
  line-height: ${f.paragraph.lineHeight};

  color: ${c.lightGrey};
  
  p {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  margin-bottom: 30px;
  min-height: 50px;
`;

const Textarea = styled.textarea`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  button {
    width: 100%;
    min-height: 45px;

    border-radius: 8px;

    font-family: 'AvenirBlack';

    font-weight: ${f.paragraph.fontWeight.medium};
    font-size: ${f.paragraph.fontSize};
    line-height: ${f.paragraph.lineHeight};
    
    @media(min-width: 768px) {
      width: 70%;
    }
  }
  
  @media(min-width: 768px) {
    width: 100%;
  }
`

const CancelButton = styled.button`
  background: ${c.white};
  border: 1px solid ${c.primary};
  color: ${c.primary};
`

const SubmitButton = styled.button`
  background: ${c.primary};
  border: 1px solid ${c.primary};
  color: ${c.white};
`

export function Cadastro() {
  const [width, setIsWidth] = useWidthActiveState();
  const navigate = useNavigate();

  function realizaCadsatro(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const piada = {
      "user": {
        "name": data.get('nome'),
        "email": data.get('email')
      },
      "description": data.get('descricao'),
      "likes": 0,
      "dislike": 0,
      "created": new Date()
    }

    let request = {
      method: "POST",
      headers: header,
      body: JSON.stringify(piada)
    }

    fetch('http://localhost:3001/jokes', request)

    navigate('/listagem');
  }

  return (
    <>
      <Main showBackground={width > 768 ? true : false}>
        <LayoutPaginas isFullSize={width > 768 ? false : true} isLarge={width > 768 ? true : false}>
          <FormCadastro method="POST" onSubmit={(event) => realizaCadsatro(event)}>
            <Title>Nova piada</Title>
            <div>
              <Label for={'#nome'}>
                <p>
                  Nome:
                </p>
                <Input required id={'nome'} type={'text'} name={"nome"} />
              </Label>
              <Label for={'#email'}>
                <p>
                  Email:
                </p>
                <Input required id={'email'} type={'email'} name={"email"} />
              </Label>
            </div>
            <Label for={'#descricao'}>
              <p>
                Piada:
              </p>
              <Textarea required id={'descricao'} rows={5} name={"descricao"}></Textarea>
            </Label>
            <ButtonContainer>
              <CancelButton type={'button'} onClick={() => navigate('/listagem')}>Cancelar</CancelButton>
              <SubmitButton type={'submit'}>Enviar</SubmitButton>
            </ButtonContainer>
          </FormCadastro>
        </LayoutPaginas>
      </Main>
    </>
  );
}