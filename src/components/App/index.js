
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Loading from '../../assets/loading.gif';

function App() {
  const [imageDog, setImageDog] = useState(null);

  useEffect(() =>{
    const promise = axios.get(process.env.REACT_APP_API_CATIORO_URL);
    promise.then((response) => {
      setImageDog(response.data.message);
    })
    promise.catch(e => console.log("Erro :( ", e));
  }, []);


  function buildImage(){
    if (imageDog === null) return <img src={Loading} alt="carregando..." />

    return(
      <img src={imageDog} alt="cachorrinho" />
    )

  }


  const image = buildImage();
  return (
    <div className="App">
      <div className="image">
        {image}
      </div>
    </div>
  );
}

export default App;
