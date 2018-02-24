import styled from 'styled-components';

const Spacer = styled.div`
  min-width: ${(props) => (props.width ? `${props.width}px` : null)};
  min-height: ${(props) => (props.height ? `${props.height}px` : null)};
`;

export default Spacer;
