import React, { useState } from 'react';
import './main.css';

export default function App() {
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const special = ['!', '@', '#', '$', '%', '&', '*'];

    const [randomChars, setRandomChars] = useState('');

    function Random() {
        const randomCharsArray = [];
        for (let i = 0; i < 3; i++) {
            randomCharsArray.push(upper[Math.floor(Math.random() * upper.length)]);
            randomCharsArray.push(lower[Math.floor(Math.random() * lower.length)]);
            randomCharsArray.push(num[Math.floor(Math.random() * num.length)]);
            randomCharsArray.push(special[Math.floor(Math.random() * special.length)]);
        }
        setRandomChars(randomCharsArray.join(''));
    }

    function copyToClipboard() {
        const textArea = document.createElement("textarea");
        textArea.value = randomChars;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wrap d-flex flex-column justify-content-center align-items-center">
                        <div className='position-relative mb-3'>
                            {randomChars ? (
                                <p>{randomChars}</p>
                            ) : (
                                <p>Click the button</p>
                            )}
                            {randomChars && (
                                <a title="Copy to clipboard" className='position-absolute copy' onClick={copyToClipboard}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-clipboard" viewBox="0 0 16 16">
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <button className='generate' onClick={Random}>Generate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
