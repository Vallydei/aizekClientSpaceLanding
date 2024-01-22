import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

type CustomFlexBoxProps = {
  jcStart?: boolean;
  jcEnd?: boolean;
  jcSpaceBetween?: boolean;
};

export const FlexBoxColumn = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<CustomFlexBoxProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.jcStart
      ? 'flex-start'
      : props.jcEnd
        ? 'flex-end'
        : props.jcSpaceBetween
          ? 'space-between'
          : 'center'};
  gap: 20px;
`;

export const FlexBoxRow = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<CustomFlexBoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.jcStart
      ? 'flex-start'
      : props.jcEnd
        ? 'flex-end'
        : props.jcSpaceBetween
          ? 'space-between'
          : 'center'};
  gap: 20px;
`;



export const FlexBoxForm = styled(FlexBoxColumn)`
  height: 270px;
  background-color: rgba(253, 107, 33, 10%);
  padding: 75px 160px;
  gap: 25px;
`;

