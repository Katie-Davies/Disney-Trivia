import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Disney Trivia</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
