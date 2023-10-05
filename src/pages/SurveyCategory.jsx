import { Link, useParams } from 'react-router-dom';
import '../styles/user.css';
import { Questions } from '../data/questions';

export default function SurveyCategory() {
  const {id, menu, chapter } = useParams();
  const arr = '<';
  
  // Sample list of questions and answers
  const questions = Questions

  return (
    <main className='main'>
      <div className='title'>
        <h3>Users 
          <small className='small'>
            {arr} Safaa {arr} &nbsp;
            <Link className='breadcrumb' to={`/dashboard/users/user/${id}/survey`}>Survey</Link>
            &nbsp;
            {arr} {menu} {arr} {chapter}
          </small>
        </h3>
      </div>
      <div className='main-container'>
        {questions.map((qa, index) => (
          <div 
            key={index} 
            className={index % 2 === 0 ? 'question-answer odd' : 'question-answer even'}
          >
            <div className='question'><strong>Question {qa.number}:</strong> {qa.question}</div>
            <div className='answer'><strong>Answer:</strong> {qa.answer}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
