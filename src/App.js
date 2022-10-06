import logo from './logo.svg';
import './App.css';

function App() {
 const title = 'Welcome to Sammmyblack new blog';
 const likes = 50;
 // const person = { name: 'Samuel', age: 31};

  return (
    <div className="App">
       <div className="Content">
          <h1>{ title}</h1>
          <p>Liked { likes } times</p>

          {/* <p>{ person }</p> */}
          
          
          <p>{ 10 }</p>
          <p>{ "Hello, World" }</p>
          <p>{ [1,2,3,4,5,6,7] }</p>
          <p>{ Math.random() *10 }</p>
        </div>
      
    </div>
  );
}

export default App;
