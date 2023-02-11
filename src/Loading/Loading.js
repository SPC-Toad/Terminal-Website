import React, { useEffect, useState, useRef } from 'react'
import './Loading.css';

function Loading() {

    const [input, setInput] = useState('');
    const [oldInput, setOldInput] = useState('');
    const [output, setOutput] = useState('');
    const inputRef = useRef();

    useEffect ( () => {
        inputRef.current.focus()
    }, [])

  return (
    <div 
        className='loading-container'
        onClick={e=>{inputRef.current.focus()}}
    >
        <p className='intro-text'>
            Welcome to my portfolio website!<br/>
            If you are lost, don't worry!<br/>
            Type "ls" in terminal to see all features!<br/>
        </p>

        <div className='terminal'>
            <div id='output-line1'>
                <div>visitor@lnx:~$</div>
                {oldInput}
            </div>
            {output}
        </div>

        <div className='input-container'>
            <div>visitor@lnx:~$</div>
            <input 
                type='text'
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        let newOutput = '';
                        let olderInput = '';
                        switch (input) {
                            case 'ls':
                                olderInput = input;
                                newOutput ='english.lnx korean.lnx';
                                break;
                                case 'ls':
                                    olderInput = input;
                                    newOutput ='english.lnx korean.lnx';
                                break;
                                case 'help':
                                    olderInput = input;
                                    newOutput ='try typing "nano [language.lnx]"';
                                break;
                                case 'nano korean.lnx':
                                    olderInput = input;
                                    newOutput ='한국어 활성화....';
                                    window.location.replace("/홈");
                                break;
                                case 'nano english.lnx':
                                    olderInput = input;
                                    newOutput = '한국어 활성화....';
                                    window.location.replace("/main");
                                break;
                            default:
                                olderInput = input;
                                newOutput ='Error Message!';
                                window.alert("Bruh");
                                break;
                        }
                        setOutput(newOutput);
                        setOldInput(olderInput);
                        setInput('');
                    }
                }
            }
            />
        </div>
    </div>
  )
}

export default Loading