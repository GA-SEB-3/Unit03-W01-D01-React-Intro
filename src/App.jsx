import './App.css'
import Navbar from './components/Navbar'

/* 
Steps to create react application:

1. npm create vite name-of-application
2. cd name-of-application
3. npm i


To Run the React application:

npm run dev
*/

function App() {
  let myName = "Hasan"
  return (
    <>
      <Navbar></Navbar>
      <Navbar></Navbar>
      <h1>Hello my name is {myName}</h1>
      <p>And I am taking SE Bootcamp</p>
    </>
  )
}

export default App
