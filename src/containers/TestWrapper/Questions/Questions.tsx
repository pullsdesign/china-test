import React from 'react';
import './Questions.scss';

import Requests from '../../../utils/requests';
import Config from '../../../config';

export default class Questions extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount(): void {
    Requests.get('allQuestions')
      .then( res => {
        if ( res.data.status ) {
          this.setState({
            questions: res.data.data
          })
        } else {
          console.error(res.data.err);
        }
      }).catch( err => console.error(err))
  }

  render() {
    return (
      <div className="questions">
        <ul className="questions__list">
          {this.state.questions.map( (question: any) => (
            <li>
              <pre className="questions__list-title" dangerouslySetInnerHTML={{__html: question.title}}/>
              <pre dangerouslySetInnerHTML={{__html: question.question}}/>
              <p><a href={Config.PUBLIC_IMGS_URL + question.img} target="_blank">{question.img}</a></p>
              <pre dangerouslySetInnerHTML={{__html: question.clarification}}/>
              <ul className="questions__answers">
                {question.answers.map( (answer: any) => (
                  <li className={answer.correct ? 'correct' : ''}>
                    <p><a href={Config.PUBLIC_IMGS_URL + answer.img} target="_blank">{answer.img}</a></p>
                    <pre dangerouslySetInnerHTML={{__html: answer.text}}/>
                    <pre dangerouslySetInnerHTML={{__html: answer.subText}}/>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
