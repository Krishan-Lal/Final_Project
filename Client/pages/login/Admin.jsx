import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./Login.css";

function Admin() {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loadData = async () => {
        const response = await Axios.get("http://localhost:3000/customer");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="login">
            <div className="d-flex justify-content-center">
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Id</th>
                            <th style={{ textAlign: "center" }}>Username</th>
                            <th style={{ textAlign: "center" }}>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td><input type="text" placeholder={item.username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} /></td>
                                    <td><input type="text" placeholder={item.password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} /></td>
                                    <td>
                                        <button className="btn btn-success m-3" onClick={(e) => {
                                            Axios.put('http://localhost:3000/update', {
                                                username: username, password: password, userid: item.id
                                            });
                                            window.location.reload(false);
                                        }}>update</button>
                                        <button className="btn btn-danger" onClick={(e) => {
                                            Axios.delete(`http://localhost:3000/delete/${item.id}`, {
                                                method: 'DELETE'
                                            });
                                            window.location.reload(false);
                                        }}>delete</button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin