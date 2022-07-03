import './App.css';
import Header from './components/Header';
import User from './components/User';
// import  {Lokasyon , Hesapla} from './components/Lokasyon';



function App() {
  return (
    <div>
      <User  surname="doğru" age={22} friends={["ali","ayşe","selim"]}/>
    </div>
  )
}

export default App;
