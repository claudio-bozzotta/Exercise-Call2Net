import './App.css';

const algoritmo = (array) => {

    let result= 1;
    let sum= 0;

    for (let i=0; i < array.length; i++) {
        result = result * array[i];
    }
    if(result%2==0){
      console.log("Sì, pari!" + result);
      for (let i=0; i < array.length; i++) {
        sum = sum + array[i];
      }
    } else {
      sum = "non pervenuta perché il prodotto è dispari"
    }
    
    return sum;

}




function App() {
  return (
    <div className="App">
      Vediamo
      <h1>
        {algoritmo([1,2,1,2,8])}
      </h1>
      <h1>
        {algoritmo([8,9,9,9,36,45,5,7,2,7,2,1])}
      </h1>
      <h1>
        {algoritmo([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])}
      </h1>
    </div>
  );
}

export default App;
