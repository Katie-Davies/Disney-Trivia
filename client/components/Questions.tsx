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

  // const handleClick(e) {

  // }

  if (questions)
    return (
      <div>
        <h1>Questions</h1>
        <img
          src={questions[questionNum].image_url}
          alt={questions[questionNum].correct_answer}
        />
        <h1>{questions[questionNum].question_text}</h1>
        <button>{questions[questionNum].option1}</button>
        <button>{questions[questionNum].option2}</button>
        <button>{questions[questionNum].option3}</button>
        <button>{questions[questionNum].option4}</button>
      </div>
    )
}

export default Questions
