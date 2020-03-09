export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function saveUserAnswer(questionId, userId, answer) {
  return {
    type: SAVE_USER_ANSWER,
    questionId,
    userId,
    answer
  };
}

export function saveUserQuestion(questionId, userId) {
  return {
    type: SAVE_USER_QUESTION,
    questionId,
    userId
  };
}
