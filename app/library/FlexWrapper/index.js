import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: ${(props) => {
    if (props.row) {
      return `row ${props.wrap ? 'wrap' : 'nowrap'}`;
    }
    if (props.column) {
      return `column ${props.wrap ? 'wrap' : 'nowrap'}`;
    }
    if (props.flow) {
      return `${props.flow} nowrap`;
    }
    return 'unset';
  }};
  flex: ${(props) => (props.flex ? props.flex : null)};
  justify-content: ${(props) => {
    if (props.justify) {
      return props.justify;
    }
    if (props['justify-center']) {
      return 'center';
    }
    if (props['justify-around']) {
      return 'space-around';
    }
    if (props['justify-between']) {
      return 'space-between';
    }
    return 'unset';
  }};
  align-items: ${(props) => {
    if (props.baseline) {
      return 'baseline';
    }
    if (props['align-center']) {
      return 'center';
    }
    if (props['align-start']) {
      return 'flex-start';
    }
    if (props['align-end']) {
      return 'flex-end';
    }
    return 'unset';
  }};
`;

export default FlexWrapper;
