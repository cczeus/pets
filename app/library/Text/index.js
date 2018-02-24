// Pass strings as props to allow for more dynamic rendering
import styled from 'styled-components';
import { C_PRIMARY_TEXT_DARK, C_SECONDARY_TEXT_DARK } from '../constants';

const Text = styled.div`
  font-family: ${(props) => {
    const family = props.fontFamily ? props.fontFamily : 'Roboto';
    if (props.light) {
      return `${family}-Light`;
    } else if (props.regular) {
      return `${family}-regular`;
    } else if (props.semibold) {
      return `${family}-semibold`;
    }
    return 'Roboto-Regular';
  }};
  font-size: ${(props) => {
    if (props.tiny) {
      return '11px';
    } else if (props.small) {
      return '13px';
    } else if (props.medium) {
      return '16px';
    } else if (props.large) {
      return '18px';
    } else if (props.huge) {
      return '22px';
    } else if (props.titan) {
      return '30px';
    } else if (props.gigantic) {
      return '38px';
    }
    return '16px';
  }};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }

    if (props.nocolor) {
      return null;
    }

    if (props.inverse) {
      if (props.secondary) {
        return '#ADADAF';
      }
      return 'white';
    }
    if (props.secondary) {
      return (props.nightMode ? C_SECONDARY_TEXT_DARK : '#757575')
    }
    return (props.nightMode ? C_PRIMARY_TEXT_DARK : '#212121');
  }};
  text-align: ${(props) => {
    if (props.center) {
      return 'center';
    }
    if (props.left) {
      return 'left';
    }
    if (props.right) {
      return 'right';
    }
    return null;
  }};
`;

export default Text;
