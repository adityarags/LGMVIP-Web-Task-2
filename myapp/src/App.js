import { useState } from 'react';
import './App.css';
import { PuffLoader } from 'react-spinners';


function App() {
  function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
      });
    }
  

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);


  const loadUsers = async() => {

    var x = document.createElement("H1");
    var t = document.createTextNode("All Users!");
    x.appendChild(t);
    document.body.appendChild(x);


    setLoading(true);
    const res = await fetch("https://reqres.in/api/users?page=1");
    const responsefromJSON = await res.json();
    setUser(responsefromJSON.data);
    await delay(3000);
    setLoading(false);
  }

  

  return (

    <div className="App">
      <nav className="navbar">
        <a href="#">Admin Page</a>
        <a onClick={loadUsers}>Get Users</a>
      </nav>
      {loading ? <PuffLoader color='white' css={{position: "fixed", top: "50%", left:"45%"}} size={150}/> :<>
      {users.map(({ id, first_name, last_name, avatar, email}) => (
      <div className='userBoxes'>
        <div className='box'>
          
          <img src={avatar} alt='User Image'/>  
          
          {/* ID */}
            <h2>User ID</h2> 
            <h4>{id}</h4>
  
          {/* Name: First and Last Name */}
            <h2>Name</h2> 
            <h3>First Name</h3>
            <h4>{first_name} </h4>
            <h3>Last Name</h3>
            <h4>{last_name}</h4>

          {/* Email ID */}
            <h2>Email</h2> 
            <h4>{email}</h4>

        </div>
      </div>
      ))}</>}
      
    </div>
    
    
  );
      
}

export default App;
