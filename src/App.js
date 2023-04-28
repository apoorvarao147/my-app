import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Gadha from './Footer';
import SignUp from './SignUp';
import Project from './Project'; 
function App() {
  const url = "https://api.emissionshelp.com/api/v1/project/proj_167639093013210"
  return (
    // JSX
    <div className="App">
      <Header/>
      <Project data={url}/>
      <SignUp/>
      <Gadha/>
    </div>
  );
}

export default App;
