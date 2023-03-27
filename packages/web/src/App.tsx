/* eslint-disable react/button-has-type */
import { SetStateAction, useState } from 'react';
import axios from 'axios';
import './components/css/body.css';

const urlApi = 'http://127.0.0.1:3000/record';

function App() {
    const [frames, setFrames] = useState([]);

    const startRecording = () => {
        axios
            .get(urlApi)
            .then((response: { data: SetStateAction<never[]> }) => {
                setFrames(response.data);
            })
            .catch((error: any) => {
                // eslint-disable-next-line no-console
                console.error('Esto es un error! ', error);
            });
    };

    return (
        <div className="container">
            <button onClick={startRecording}>Start</button>
            <div className="images">
                {frames.map((frame, index) => (
                    <img key={index} src={frame} alt={`Frame ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default App;
