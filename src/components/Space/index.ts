import styled from 'styled-components';

interface Props {
  width: number | string;
  height: number | string;
}

export const Space = styled.div`
  width: ${(props: Props) =>
    typeof props.width === typeof 'aa' ? props.width : `${props.width}px`};

  height: ${(props: Props) =>
    typeof props.height === typeof 'aa' ? props.height : `${props.height}px`};
`;
