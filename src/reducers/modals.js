import { SHOW_AUTH_MODAL, HIDE_AUTH_MODAL } from '../actions/modals';

export default function modals(state = {}, action) {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      return {
        authModalVisible: true
      };
    case HIDE_AUTH_MODAL:
      return {
        authModalVisible: false
      };
    default:
      return state;
  }
}
