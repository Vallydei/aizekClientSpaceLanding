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

export const FlexBoxForm = styled(FlexBoxColumn)`
  height: 270px;
  background-color: rgba(253, 107, 33, 10%);
  padding: 75px 160px;
`;

export const FlexBoxPossibilitie = styled(FlexBoxColumn)`
  align-items: start;
`;

export const FlexBoxFooter = styled(FlexBoxColumn)`
  height: 1125px;
  background-color: #172755;
  border-top: solid 17px #ef2a82;
  color: #fff;
  margin: 5px auto;
  padding: 272px 210px 72px;
`;
