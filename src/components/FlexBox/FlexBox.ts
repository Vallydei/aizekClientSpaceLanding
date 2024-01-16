import styled from 'styled-components';

type CustomFlexBoxProps = {
  jcStart?: boolean;
  jcEnd?: boolean;
  jcSpaceBetween?: boolean;
};

export const FlexBoxColumn = styled.div<CustomFlexBoxProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.jcStart
      ? 'start'
      : props.jcEnd
        ? 'end'
        : props.jcSpaceBetween
          ? 'space-between'
          : 'center'};
  gap: 20px;
`;

export const FlexBoxRow = styled.div<CustomFlexBoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.jcStart
      ? 'start'
      : props.jcEnd
        ? 'end'
        : props.jcSpaceBetween
          ? 'space-between'
          : 'center'};
  gap: 20px;
`;

export const FlexBoxMain = styled(FlexBoxColumn)`
  max-width: 1060px;
  text-align: center;
  margin: 1.7% 0;
  justify-content: start;
`;

export const FlexBoxMainDiv = styled(FlexBoxRow)`
  margin-top: 120px;
`;

export const FlexBoxForm = styled(FlexBoxColumn)`
  height: 270px;
  background-color: rgba(253, 107, 33, 10%);
  padding: 75px 160px;
  gap: 25px;
`;

export const FlexBoxPossibilitie = styled(FlexBoxColumn)`
  align-items: start;
`;

