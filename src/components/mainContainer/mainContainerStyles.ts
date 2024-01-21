import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;
export const FlexBoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.7% 0;
  justify-content: space-between;
  gap: 20px;
`;

export const FlexBoxSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.7% 0;
  justify-content: space-between;
  gap: 20px;
`;

export const FlexBoxMainDiv = styled.div`
  display: flex;
  margin-top: 120px;
  width: 100%;
  justify-content: space-between;
  gap: 7%;
`;

export const ContText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContImg = styled.div`
  width: 50%;

`;
export const ImgMain = styled.img`
  border-radius: 38px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
