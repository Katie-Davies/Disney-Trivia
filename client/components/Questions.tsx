import { useState } from 'react'
import { useGetQuestions } from '../hooks/useGetQuestions'

function Questions() {
  const [questionNum, setQuestionNum] = useState(1)
  const [score, setScore] = useState(0)
  const [name, setName] = useState('')
  const [input, setInput] = useState('')
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

    const isCorrect = answer === correctAnswer
    if (isCorrect) {
      alert('You are correct!')
      setScore(score + 1)
    }

    if (questionNum < 8) {
      setQuestionNum(questionNum + 1)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setName(input)
    setInput('')
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value
    setInput(name)
  }
  console.log(name)

  if (questions)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your name"
            type="text"
            onChange={handleChange}
            value={input}
          ></input>
        </form>
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
