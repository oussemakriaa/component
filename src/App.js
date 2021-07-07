import './App.css';
import Address from './Profile/Address/Address';
import FullName from './Profile/FullName/FullName';
import ProfilePhoto from './Profile/ProfilePhoto/ProfilePhoto';
import Icone from './Profile/Icone/Icone';

function App() {
  return (
    <div className="App">

    
        <ProfilePhoto />
        <FullName />
        <Address />
        <Icone />
        </div>
      );
}

      export default App;
