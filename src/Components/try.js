import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import './App.css';

const ENDPOINT = "http://127.0.0.1:4001";

function App() {

    const [response, setResponce] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT, { transports: ['websocket'] });
        socket.on("FromAPI", data => {
            setResponce(data);
        });
    }, []);

    return (
        <div className="App">
            <p>
                It's <time dateTime={response}>{response}</time>
            </p>
        </div>
    );
}

export default App;
