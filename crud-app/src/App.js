import './App.css';
import {useEffect, useRef, useState} from 'react'
function App() {

  const [users, setUsers] = useState([]);
  // useRef for taking name and email from the user.
  const nameRef = useRef();
  const emailRef = useRef();
  // load data from nodeJs server
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  // handle post requests
  const handleAddUser = e => {
    console.log("post from react server");
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email }

    // send data to the server
    fetch('http://localhost:5000/users', {
      
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const addedUser = data;
        const newUsers = [...users, addedUser];
        setUsers(newUsers);
        console.log("after then: ", newUsers);
        // reset name and email
        nameRef.current.value = '';
        emailRef.current.value = '';
      })

  }
  return (

    <div className="App">
      <h2>Number of Users: {users.length}</h2>

      <h5>add user</h5>
      
      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="email" ref={emailRef} name="" id="" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {
          users.map(user => <p 
                    key={user.id}> user_id: {user.id}: <br /> 
                    User name: {user.name} <br /> 
                    User Email:  {user.email}
                  </p>)
        }
      </div>
    </div>
  );
}

export default App;
