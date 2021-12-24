import {useState, useEffect} from "react";

function App(){
  const [loading, setLoading]=useState(true);
  const [coins,setCoins]=useState([]);
  const [coinPrice,setCoinPrice]=useState(0);
  const [kMoney,setKMoney]=useState();
  const KORTOUSD=0.00084;
  const onChange=(event)=>{
    setCoinPrice(event.target.value);
  }
  const onChangeKmoney=(event)=>{
    setKMoney(event.target.value)
  }
  useEffect(
    ()=>{
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res)=>res.json()
      .then((json)=>{
        setCoins(json);
        setLoading(false); 
        setCoinPrice(json[0].quotes.USD.price);
      }));
    },[]
  )
  //setCoinPrice(coins[0].quotes.USD.price);
  return <div>
    <h1>-가상코인{loading ? "" : `(${coins.length})`}-</h1>
    {loading ? <strong>Loding...</strong>
    : <select onChange={onChange}>
      {
      coins.map((coin, index)=>{
        return (
      <option key={index} value={coin.quotes.USD.price}>
        {coin.name} ({coin.symbol}):${(coin.quotes.USD.price).toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} USD
      </option>
      )})}
    </select>}
    <div>
      <h1>현금---코인 환율</h1>
      <label htmlFor="Kmoney">현금(kor)</label>
      <input type="number" placeholder="총알을 입력하시면" onChange={onChangeKmoney} value={kMoney} id="Kmoney"></input>
      <label htmlFor="Kmoney">구입할 수 있는 코인량</label>
      <input disabled={true} value={kMoney>0 ? ((kMoney*KORTOUSD)/coinPrice).toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","):""} placeholder="살수있는 수량이 나옵니다" id="Kmoney"></input>
    </div>
    
  </div>
}

export default App;
