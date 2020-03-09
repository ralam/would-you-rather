import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_USER_ANSWER: {
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer
          }
        }
      };
    }
    case SAVE_USER_QUESTION: {
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: [...state[action.userId].questions, action.questionId]
        }
      };
    }
    default:
      return state;
  }
}
