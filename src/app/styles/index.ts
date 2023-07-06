import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  height: 100vh;

  overflow: hidden;
`

export const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;

  width: 100%;

  font-size: 50px;
  letter-spacing: -0.045em;
  font-weight: 900;
  color: #f3f3f3;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  min-width: 130px;
  height: 41px;

  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  white-space: nowrap;

  background: hsla(238, 82%, 70%, 1);
  box-shadow: 0px 4px 6px #00000029;
  border: 0;
  border-radius: 6px;

  transition: all 300ms linear 0s;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`

export const ModalContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100%;

  background: hsla(238, 82%, 70%, 1);

  overflow: hidden;
`
