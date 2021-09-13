import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Address from './Address';

function App() {
  return (
    <div className="App">
      <Name firstName = "Aghaku" lastName = "Otote" middleName = "Marvis"/>
      <h1>This is my profile</h1>
      <Address location = "Havighorster weg" country = "Germany" postal = {21039}/>
    </div>
  );
}

export default App;
