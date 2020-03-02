import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION_ANSWER: {
      const { questionId, userId, answer } = action;
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([userId])
          }
        }
      };
    }
    default:
      return state;
  }
}
