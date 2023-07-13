import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = "Maria"
  return (
    <div className="App">
      <p>Testando Eventos</p>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form/>
    </div>
  );
}

export default App;
