import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import News from './Component/News/News'
function App() {
  const [artical , setArtical] = useState([]);
   useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-08&sortBy=publishedAt&apiKey=aef775d85f034dea9890d78614bf3091';
    fetch(url)
    .then(res => res.json())
    .then(data => setArtical(data.articles))
   },[])
   
  return (
    <>
    <h1>BreaKing News </h1>
    <div className='artical'>
      <div className='artical_modify'>
    {
      artical.map(data => <News  ArticalData ={data}></News>)
    }
     </div>

    </div>
   
    </>
  );
}

export default App;
