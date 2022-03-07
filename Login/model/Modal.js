import React,{useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import "./modal.css";

function Modal({ setOpenModal }) {
    const[username, setUserame] = useState();
    const[password, setPassword] = useState();

    let navigate = useNavigate();

    const ValidateLogin = async(data) => {
        console.log("working", username, password)

        try {
            const res = await axios.post(`https://localhost:1337/api/login`,{
                username:username,
                password:password
            } ,{
                headers: {
                    "Content-Type": "application/json"
                },
            })
            localStorage.setItem("token", res.data.token)
            // setmsg(res.data.message)
            return navigate('/dashboard')
            
        } catch (err) {
            console.log(err);
        }
        
    };




  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="OpenModal"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
        <h1 className="LoginTitle_1">WELCOME</h1>
        <h2 className="LoginTitle_2">ENTER LOGIN CREDENTIALS</h2>
        </div>
        <div className="body">
        <form>
            <label className="Labels" >Username</label>
            <br></br>
          
            <input value={username}
            onChange={(text) => setUserame(text.target.value)}
             type="text"
             className="InputContentt"
             username="username" 
             placeholder='Enter Username/Email' />
            <br></br>
            <label className="Labels" >Password</label>
            <br></br>
            <input value={password}
            onChange={(text) => setPassword(text.target.value)}
            className="InputContentt"
             type="password" 
             name="pswd"
             placeholder='Enter Password' />
            <br></br>
            <br></br>
            <a className="Forgot" href="#">Forgot Password</a>
            <br></br>
            <br></br>
            <button className="LoginButton" onClick={() => ValidateLogin("working")}>Submit</button>
            <br></br>
            <br></br>

                <div className="Quote">Not a Member?<Link className="Forgot" to="/signup">SignUp Here</Link></div>
            </form>        
            </div>
        
      </div>
    </div>
  );
}

export default Modal;