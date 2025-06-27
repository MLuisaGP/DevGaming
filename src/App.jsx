
import './App.css'
import { useGet } from "./hooks/useGet";

function App() {
  let data = useGet();

  return (
    <>
      <h1>ok</h1>
      <p>{data}</p>
    </>
  )
}

export default App
