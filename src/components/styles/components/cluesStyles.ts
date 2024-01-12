import styled from 'styled-components';

export const ArticleBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #8794ba;
  margin: 30px 60px 81px;
  text-align: center;
`;

export const FeatureList = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
`;

export const Feature = styled.div`
  width: 33.33%;
`;

export const FeatureTitle = styled.h4`
  font-weight: 800;
  margin: 26px 0 15px;
`;

export const FeatureText = styled.p`
  color: #8794ba;
`;
