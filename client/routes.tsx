import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="/game" element={<Questions />} />
    <Route path="/leadershipboard" element={<Leadership />} />
  </Route>,
)
