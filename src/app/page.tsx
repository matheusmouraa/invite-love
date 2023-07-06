'use client'
import { useState } from 'react'

import Lottie from 'lottie-react'
import loverPeopleSitting from '../assets/lover-people-sitting-on-garden-banch.json'
import heart from '../assets/hearts-feedback.json'
import Modal from 'react-modal'
import {
  ButtonsContainer,
  Container,
  Button,
  Title,
  ModalContainer
} from './styles'

const modalStyle: any = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    height: '400px',
    margin: 'auto',
    padding: '0'
  }
}

export default function Home() {
  const [style, setStyle] = useState({} as any)
  const [modal, setModal] = useState(false)

  const changeLocation = () => {
    setStyle({
      position: 'absolute',
      bottom: getRandomLocation(10, 90),
      left: getRandomLocation(10, 90)
    })
  }

  const getRandomLocation = (min: any, max: any) => {
    return Math.random() * (max - min) + min + '%'
  }

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <Container>
      <Title>Bo na Cidade da Criança?</Title>

      <Lottie
        style={{ width: '90%', height: '200px' }}
        animationData={loverPeopleSitting}
        loop={true}
      />

      <ButtonsContainer>
        <Button onClick={openModal}>Sim</Button>
        <Button style={style} onClick={changeLocation}>
          Não
        </Button>
      </ButtonsContainer>

      <Modal isOpen={modal} onRequestClose={closeModal} style={modalStyle}>
        <ModalContainer>
          <Title style={{ marginBottom: '10px' }}>Parabéns!!</Title>
          <Title>Está marcado</Title>

          <Lottie
            style={{ width: '800px', height: '400px', position: 'absolute' }}
            animationData={heart}
            loop={true}
          />
        </ModalContainer>
      </Modal>
    </Container>
  )
}
