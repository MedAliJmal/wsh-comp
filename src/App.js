import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adress from "./profile/components/address/Adress";
import FullName from "./profile/components/fullName/FullName";
import ProfilePhoto from "./profile/components/profilePhoto/ProfilePhoto"
import Gmc from "./profile/components/gmc/Gmc"
function App() {
  return (
    <div className="App">
    <Gmc/>
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
     
    </div>
  );
}

export default App;
