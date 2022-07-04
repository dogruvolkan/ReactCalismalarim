import './App.css';
// import Header from './components/Header';
import User from './components/User';
// import  {Lokasyon , Hesapla} from './components/Lokasyon';
import { useState } from "react";


function App() {

  const [name, setName] = useState("volkan");
  const [age , setAge] = useState(22);
  const [friends ,setFriend] = useState(["ali","selim"]);
  const [address , setAddress] = useState({title:"istanbul" , zip : 45});

  let [sayac , setSayac] =useState(0);

  const Artir = () =>{
    setSayac(++sayac);
  }

  const Azalt = () =>{
      if(sayac!=0){
        setSayac(--sayac);
      }
      else{
        setSayac(sayac=0);
      }
  }

  const Sifirla = () =>{
    setSayac(sayac=0);
  }

  return (
    <div>
      <User surname="doğru" age={22} friends={["ali", "ayşe", "selim"]} />

      <h1>Merhaba {name} {age}</h1>
      <button onClick={() => setName("Selim")}>Change Name</button>
      <button onClick={() => setAge(1)}>Change Age</button>
      {
        friends.map((friend , index) =>(
            <div key={index}>{friend}</div>
        ))             
      }
      <button onClick={() => setFriend([...friends , "volkan"])}>add friend</button>

      <h1>Address</h1>
      <p>{address.title} {address.zip}</p>

      <button onClick={() => setAddress({...address , title:"izmir"})}>Adres Değiştir</button>

      <h1>SAYAC</h1>
      <h3>{sayac}</h3>
      <button onClick={Artir}>Artır</button>
      <button onClick={Azalt}>Azalt</button>
      <button onClick={Sifirla}>Sıfırla</button>
    </div>
  )
}

export default App;
