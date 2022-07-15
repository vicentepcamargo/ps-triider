import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import CardPiada from '../CardPiada';

import f from '../../styles/typograph.json'
import c from '../../styles/colors.json'

import HappyFace from "../../public/components/icones/happy-face.png"
import NotCoolFace from "../../public/components/icones/not-cool-face.png"

import { useWidthActiveState } from "../../context/Width";

const ButtonContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 60px;

  display: flex;
  justify-content: center;
  gap: 15px;

  button {
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    
    border: 0;
    border-radius: 4px;

    color: #FFFFFF;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
     font-family: 'AvenirBook';
  }

  button:first-child {
    background: ${c.green};
  }

  button:last-child{ 
    background: rgba(200, 5, 27, 0.9);
  }
`

function adicionaLike(id, likes) {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let request = {
    method: "PATCH",
    headers: header,
    body: JSON.stringify({
      "likes": likes + 1,
    })
  }

  fetch(`http://localhost:3001/jokes/${id}`, request)
}

function adicionaDislike(id, dislikes) {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let request = {
    method: "PATCH",
    headers: header,
    body: JSON.stringify({
      "dislike": dislikes + 1,
    })
  }

  fetch(`http://localhost:3001/jokes/${id}`, request)
}

export function ModalPiada({ isOpen, onRequestClose, content }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
      >
        <CardPiada content={content} />

        <ButtonContainer>
          <button type={'button'} onClick={() => adicionaLike(content.id, content.likes)}>
            <img src={HappyFace} />
            Chorei
          </button>
          <button type={'button'} onClick={() => adicionaDislike(content.id, content.dislike)}>
            <img src={NotCoolFace} />
            Nem ri
          </button>
        </ButtonContainer>
      </Modal>
    </>
  );
}