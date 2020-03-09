import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestionAnaswer(questionId, userId, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    questionId,
    userId,
    answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddAnswer(qid, authedUser, answer) {
  return dispatch => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => dispatch(addQuestionAnaswer(qid, authedUser, answer)));
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(question => dispatch(addQuestion(question)));
  };
}
