import { useState } from 'react'
import Header from './Components/Header'
import WhatWeDO from './Components/SectionA'
import WhatWeStandFor from './Components/SectionB'
import Projects from './Components/Projects'
import FootNote from './Components/FootNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <WhatWeDO/>
        <WhatWeStandFor />
        <Projects />
        <FootNote />
    </>
  )
}

export default App
