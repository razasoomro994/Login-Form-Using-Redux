import { Login } from './Component/Login';
import { Logout } from './Component/Logout';
import {useSelector} from "react-redux"
import {login, selectUser} from "./feature/userSlice"

function App() {

  const user = useSelector(selectUser);
  return (
     
    <div>

      
      { user ?  <Logout/> :  <Login/>}
    </div>
  )
}

export default App;
