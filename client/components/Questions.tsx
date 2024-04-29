import { useState } from 'react'
import { useGetQuestions } from '../hooks/useGetQuestions'
import { useNavigate } from 'react-router-dom'
import { useAddPlayer } from '../hooks/useAddPlayer'
function Questions() {
  const [questionNum, setQuestionNum] = useState(0)
  const [score, setScore] = useState(0)
  const [name, setName] = useState(null)
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const player = useAddPlayer()
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
      console.log(score)
    }

    if (questionNum < 7) {
      setQuestionNum(questionNum + 1)
    } else {
      const playerData = name
        ? { name: name, score: score }
        : { name: 'guest', score: score }
      player.mutate(playerData)
      navigate('/leadershipboard')
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
