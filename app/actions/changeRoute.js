import { browserHistory } from 'react-router';
export const updateData = (route) => {
    browserHistory.push(route);
}