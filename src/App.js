import Loading from './components/Loading.js'
import Loaded from './components/Loaded.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [objectExample, setObjectExample] = useState({ name:'name of object' })
  const [userName, setUserName] = useState('')

  const ternary = isLoaded ? 'YEP!' : 'NO 😢'
  const numbers = [1,2,3,4,5,6,7,8,9,0]

  return (
    <>
      <div className="App">
        <h1>Username is: {userName !== '' ? userName : 'Guest'}</h1>
        <h1>{'Username is: ' + userName || 'Guest'}</h1> 
        <h1>{
          isLoaded && 
          <>
          {numbers.map((num) => {
            return num + ' & '
          }).reverse()}
          <Loaded />
          <h2> I have {numbers.length} numbers</h2>
          </>
        }</h1>
        {/* <input onClick={setUserName()}></input> */}

        <button onClick={() => {
          console.log('button clicked')
          setIsLoaded(!isLoaded)
        }}>Change Loaded</button>
        <h1>{objectExample.name}</h1>
        <h1>{ternary}</h1>

    {
      isLoaded ?
      <Loaded />
      :
      <Loading />
    }   
    <h1>isLoaded = {String(isLoaded)}</h1>
      </div>
    </>
  )
}

export default App
