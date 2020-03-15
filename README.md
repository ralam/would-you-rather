# Would You Rather Project

## Startup

To get started right away:

- install all project dependencies with `npm install` or `yarn`
- start the development server with `npm start` or `yarn start`

## Features

This is a basic polling app in which users can ask and answer questions. The app has the following pages:

1. Homepage: users can see the questions they have and haven't answered.
2. Question page: If a user hasn't answered the quesiton yet, they can pick an answer. After answering the quesiton, the user can see stats about how all users answered the question.
3. Leaderboard: Users can see all the users and the number of questions they've asked and answered. Users are ranked by the sum of their asked and answered questions.
4. Create a new poll: Users can create a new question that will be available for all users to answer.

Users must be authenticated to view any page. Users can choose any of the three existing user profiles to impersonate during authentication.

The backend/database are mocked, so any actions a user takes (answering questions, creating new questions) will not be persisted between page reloads.
