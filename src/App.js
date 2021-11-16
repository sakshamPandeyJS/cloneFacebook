import './App.css';
import Feeds from './Feeds';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';


function App() {
   const [state,dispatch]=useStateValue();
console.log("one more change to check in git");
  // const user="Saksham";
  return (
    <div className="app">
      {/* { console.log('render at app check user changes',state.user)} */}
      {!state.user?(<><Login/></>):(<><Header/>
      <div className="body">
      <Sidebar id="test1"/>
      <Feeds />
      <Widgets id="test"/>
        </div></>)}
      
          </div>

  );
}

export default App;
