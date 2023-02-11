import React, { useEffect, useRef, useState } from 'react';
const Typing = ({ text }) => {
    let index = useRef(0);
    
    const [currentText, setCurrentText] = useState('');
    
    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current++));
        }, 150)
    }, [currentText]);

    return <p>{currentText}</p>;
};

export default Typing;