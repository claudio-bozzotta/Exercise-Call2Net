import './App.css';

const algoritmo = (array) => {

    let result= 1;
    let sum= 0;

    for (let i=0; i < array.length; i++) {
        result = result * array[i];
    }
    if(result%2==0){
      console.log("Yes, it's even!" + result);
      for (let i=0; i < array.length; i++) {
        sum = sum + array[i];
      }
    } else {
      sum = "Sum was not made because the result of the multiplication is odd"
    }
    
    return sum;

}




function App() {
  return (
    <div className="App">
      Create an algorythm that verifies if the result of a list of number multiplied is even or odd, and, if even, print the sum of all the elements of the list
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
