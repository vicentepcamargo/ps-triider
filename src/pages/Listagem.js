// import { useEffect, useState } from "react";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';



import f from '../styles/typograph.json'
import c from '../styles/colors.json'

import { ModalPiada } from "../components/Modal";
import { LayoutPaginas } from "../components/Layout";
import Piada from '../components/CardPiada'
import { Index as Main } from "../components/Main";
import { useWidthActiveState } from "../context/Width";

import IconLupa from '../public/components/icones/lupa.png'
import IconSort from '../public/components/icones/ordenar.png'

const Navegacao = styled.div`
  padding: 0 10px 40px 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    font-family: 'AvenirBook';
    font-weight: ${f.paragraph.fontWeight.medium};
    font-size: ${f.paragraph.fontSize};
    line-height: ${f.paragraph.lineHeight};
    
    color: ${c.grey};

    width: 100%;
    min-height: 40px;
    
    background: ${c.grey};
    
    border: 1px solid ${c.lightGrey};
    border-radius: 8px;
    margin-bottom: 15px;

    @media(min-width: 768px) {
      margin-bottom: 0;
      width: 40%;
    }
  }

  button {    
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

    font-family: 'AvenirBook';
    font-weight: ${f.paragraph.fontWeight.medium};
    font-size: ${f.paragraph.fontSize};
    line-height: ${f.paragraph.lineHeight};

    min-height: 44px;
  }

  @media(min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 15px;
    justify-content: space-between;
  }
`

const Pesquisa = styled.input`
  padding-left: 45px;
  background: url(${IconLupa}) 15px center no-repeat ${c.lightGrey}!important;
  /* background-position: 15px center!important; */
  background-size: 20px;

  @media(min-width: 768px) {
    width: 100%;
  }

`

const SortButton = styled.button`
  width: 45%;
  padding-left: 45px;
  
  background: url(${IconSort}) 15px center no-repeat ${c.lightGrey}!important;
  background-size: 20px;
  
  border: 1px solid ${c.lightGrey}!important;
  border-radius: 8px;

  color: ${c.grey};

  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 768px) {
    width: fit-content;
  }

  `

const CadastroButton = styled.button`
  width: 45%;
  color: ${c.white};
  font-family: "AvenirRoman";

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${c.primary};
  border: 1px solid ${c.primary};
  border-radius: 8px;
  @media(min-width: 768px) {
    width: fit-content;
  }

`

const ListaPiadas = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  overflow: scroll;

  padding: 10px;
  gap: 15px;
  
  button {
    padding: 0;
    border: none;
    background-color: ${c.lightBrown};
    width: 100%;
    :hover {
      box-shadow: none;
      filter: brightness(0.95);
      border-radius: 0.25rem;
    }
  }
`

export function Listagem() {
  const [width, setIsWidth] = useWidthActiveState();
  const navigate = useNavigate();

  const [piadas, setPiadas] = useState([])
  const [order, setOrder] = useState(false);

  const [modalPiada, setModalPiada] = useState(false)
  const [indexPiada, setIndex] = useState(0)

  useEffect(() => {
    if (piadas.length == 0)
      fetchData("", "")
  }, [piadas])

  function fetchData(url) {
    fetch(`http://localhost:3001/jokes${url}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPiadas(data);
      });
  }

  function inverterOrdem() {
    let ordenation = order ? "asc" : "desc"
    fetchData(`?_sort=created&_order=${ordenation}`);

    setOrder(!order)
  }

  function buscaPiada(searchString) {
    fetchData(`?q=${searchString}`);
  }

  function abreModalPiada(index) {
    setIndex(index)
    setModalPiada(true);
  }

  function fechaModalPiada() {
    setModalPiada(false);
  }

  return (
    <>
      <Main showBackground={width > 768 ? true : false}>
        <LayoutPaginas isFullSize={width > 768 ? false : true} isLarge={width > 768 ? true : false}>
          <Navegacao>
            <Pesquisa type={'text'} placeholder="Pesquisa" onChange={(event) => buscaPiada(event.target.value)} />
            <SortButton onClick={() => inverterOrdem()}>
              Ordenar
            </SortButton>
            <CadastroButton onClick={() => navigate('/cadastro')}>
              Criar piada
            </CadastroButton>
          </Navegacao>
          <ListaPiadas>
            {
              piadas.map((joke, index) => {
                return (
                  <button type="button" onClick={() => abreModalPiada(index)}>
                    <Piada key={joke.id} content={joke}></Piada>
                  </button>
                )
              })
            }
          </ListaPiadas>
        </LayoutPaginas>
        <ModalPiada isOpen={modalPiada} onRequestClose={fechaModalPiada} content={piadas[indexPiada]} />
      </Main>
    </>
  );
}