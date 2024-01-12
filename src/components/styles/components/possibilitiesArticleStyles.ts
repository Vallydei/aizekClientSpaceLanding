import styled from 'styled-components';

export const PossibilitiesArticleBox = styled.article`
  display: flex;
  flex-direction: column;
  margin: 130px 0 73px;
  gap: 120px;
`;

export const Possibilitie = styled.div`
  display: flex;
`;

export const PossibilitieLeftContainer = styled.div`
  margin-right: 100px;
  width: 50%;
`;

export const PossibilitieRightContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const PossibilitieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const PossibilitieTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const PossibilitieText = styled.p`
  color: #5c5c5c;
  font-size: 18px;
  line-height: 1.5;
`;

export const PossibilitieImg = styled.img`
  border-radius: 38px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

`;

export const ImageScheme = styled.img`
width: 90%;
position: absolute;
top: 20%;
left: 5%
`
