import styled from 'styled-components';

export const FormStyled = styled.form`
  max-width: 990px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  margin: 73px auto 0;
  position: relative;

  &::after {
    content: '';
    background-image: url('img/Subtract (1).png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1000px;
    height: 150%;
    z-index: -1;
  }

  .formInput {
    width: 100%;
    height: 59px;
    background-color: #f2f2f2;
    border: #000 solid 1px;
    border-radius: 10px;
    padding: 15px 50px;
    color: #000;
    font-size: 24px;
  }

  .formTextarea {
    width: 100%;
    height: 139px;
    background-color: #f2f2f2;
    border: #000 solid 1px;
    border-radius: 10px;
    padding: 25px 50px;
    color: #000;
    font-size: 24px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
