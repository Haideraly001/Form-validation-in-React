import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [user, setUser] = useState([])

  const userData = async () => {
    const resp = await fetch("http://localhost:8000/api/v1/form")
    const result = await resp.json()
    console.log(result.data);
    setUser(result.data)
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <div className="App">
      <h1>Haider</h1>
      {user.map((el) => (
        <>
          <h3>Name:  {el.name}</h3>
          <h3>Email: {el.email}</h3></>
      ))}
    </div>
  );
}

export default App;
