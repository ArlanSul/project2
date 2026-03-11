import './App.css';
import samosa from './assets/samosa.png'

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Somosa Selector</h1>
        <h2>Count:</h2>
        <img src={samosa} className="samosa" />
      </div>
    </div>
  )
}

export default App