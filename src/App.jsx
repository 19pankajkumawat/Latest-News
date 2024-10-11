import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import NewsBord from './component/NewsBord'
import Newsitem from './component/Newsitem'

function App() {
  let [category, setCategory] = useState("genral");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category} />
      <Newsitem />

    </>
  )
}

export default App
{/* <div>
 <h1>{count}</h1>
</div>
<button onClick={()=>(count === 10 ? setCount(10) : setCount(count+1))} >Click Me +</button>
<button onClick={()=>(count === 0 ? setCount(0) : setCount(count-1))} >Click Me -</button> */}
