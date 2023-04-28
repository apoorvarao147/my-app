import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Gadha from './Footer';
import SignUp from './SignUp'; 
function App() {
  return (
    // JSX
    <div className="App">
      <Header/>
      <SignUp/>
      <Gadha/>
    </div>
  );
}

export default App;
