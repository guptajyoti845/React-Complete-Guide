import './App.css';
import AddUser from "./component/User/AddUser"
import React, {useState} from "react";
import UserList from "./component/User/UserList";

function App() {
    const [usersList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge}]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </div>
    );
}

export default App;
