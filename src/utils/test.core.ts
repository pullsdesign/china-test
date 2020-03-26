import Questions from '../assets/testData/questions';
import Answers from '../assets/testData/answers';

export const getBasicQuestions = () =>
  new Promise((resolve, reject) => {
    try {
      const questions = Questions.filter( question => question.basic === 1).map( question => {
        // @ts-ignore
        question.answers = Answers.filter( answer => answer.questionID.$oid === question._id.$oid);
        return question;
      });
      resolve(questions);
    } catch (e) {
      reject(e);
    }
  });

export const checkAnswer = (questionID: any, answerID: any) =>
  new Promise((resolve, reject) => {
    const answer: any = Answers.find( answer => answer._id.$oid === answerID);
    if ( answer.questionID.$oid === questionID ) {
      answer.correct ? resolve(true) : resolve(false);
    } else {
      reject('Question do not has this answer');
    }
  });

export const getQuestion = (level: any = 1) =>
  new Promise((resolve, reject) => {
    const questions = Questions.filter( question => question.level === level && question.basic !== 1);
    const random = Math.floor(Math.random() * questions.length);
    const question = questions[random];
    const answers = Answers.filter( answer => answer.questionID.$oid === question._id.$oid);

    if ( !answers.length ) {
      reject('Answers not found');
    } else {
      resolve({
        question,
        answers,
      })
    }
  });
