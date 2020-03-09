import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';

import { receiveUsers, saveUserAnswer, saveUserQuestion } from './users';
import { receiveQuestions, addQuestionAnaswer, addQuestion } from './questions';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleAddAnswer(qid, authedUser, answer) {
  return dispatch => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(addQuestionAnaswer(qid, authedUser, answer));
      dispatch(saveUserAnswer(qid, authedUser, answer));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(saveUserQuestion(question.id, author));
    });
  };
}
