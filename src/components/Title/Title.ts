import styled from 'styled-components';

type CustomTitleProps = {
  small?: boolean;
  medium?: boolean;
  bigger?: boolean;
  mainColor?: boolean;
};

export const Title = styled.h2<CustomTitleProps>`
  color: ${(props) => (props.mainColor ? '#ffffff' : '#000000')};
  font-size: ${(props) =>
    props.small ? '16px' : props.medium ? '27px' : props.bigger ? '50px' : '40px'};
  font-weight: 800;
`;
