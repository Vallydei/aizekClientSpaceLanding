import styled from 'styled-components';

export const FormForDemostration = styled.div`
  max-width: 990px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  gap: 25px;
  position: relative;
  &::after {
    content: '';
    background-image: url('./img/Subtract (1).png');
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    max-width: 1000px;
    height: 100%;
    max-height: 110%;
  }
`;

export const FromBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 270px;
  background-color: rgba(253, 107, 33, 10%);
  padding: 75px 160px;
`;

export const FormTitle = styled.h3`
  font-size: 27px;
  font-weight: 800;
`;

export const FormText = styled.p`
  font-size: 24px;
  font-weight: lighter;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 59px;
  background-color: #f2f2f2;
  border: #000 solid 1px;
  border-radius: 10px;
  padding: 15px 50px;
  color: #000;
  font-size: 24px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 139px;
  background-color: #f2f2f2;
  border: #000 solid 1px;
  border-radius: 10px;
  padding: 25px 50px;
  color: #000;
  font-size: 24px;
`;

export const FormButton = styled.button`
  width: 475px;
  height: 80px;
  background-color: #ef2a82;
  color: #fff;
  font-size: 32px;
  border-radius: 68px;
  border: none;
`;
