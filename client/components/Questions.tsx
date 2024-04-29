import { useState } from 'react'
import { useGetQuestions } from '../hooks/useGetQuestions'

function Questions() {
  const [questionNum, setQuestionNum] = useState(0)
  const { data: questions, isLoading, isError } = useGetQuestions()
  if (isLoading) {
    return <p>Loading ...</p>
  }
  if (isError) {
    return <p>There has been an error!</p>
  }

  function handleClick(e) {
    const buttons = document.querySelectorAll(
      '.answer-button',
    ) as NodeListOf<HTMLButtonElement>

    const correctAnswer = questions[questionNum].correct_answer
    const answer = e.target.innerHTML
    console.log('correct answer', correctAnswer)
    console.log(answer)

    if (answer === correctAnswer) {
      return alert('You are correct!')
    }
  }

  if (questions)
    return (
      <div>
        <h1>Questions</h1>
        <img
          src={questions[questionNum].image_url}
          alt={questions[questionNum].correct_answer}
        />
        <h1>{questions[questionNum].question_text}</h1>
        <button className="answer-button" onClick={handleClick}>
          {questions[questionNum].option1}
        </button>
        <button className="answer-button" onClick={handleClick}>
          {questions[questionNum].option2}
        </button>
        <button className="answer-button" onClick={handleClick}>
          {questions[questionNum].option3}
        </button>
        <button className="answer-button" onClick={handleClick}>
          {questions[questionNum].option4}
        </button>
      </div>
    )
}

export default Questions
