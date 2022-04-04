import React from "react";
import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import dice from '../icon-dice.svg';


const FetchAdv = () => {
    const [advice, setAdvice] = useState([]);

        const callApi = async () => {
            const response = await fetch(
                "https://api.adviceslip.com/advice"
            );
            const data = await response.json();
            setAdvice(data);
        };

    useEffect(() => {
      callApi();
    }, []);
    
    return (
        <div className="fetchPart">
            <h3 className="adviceId">ADVICE #{advice.slip.id}</h3>
            <p className="adviceParagraph">"{advice.slip.advice}"</p>
            <motion.div className="button" 
            onClick={callApi}
            whileHover={{scale: 1.3,
            rotate: 180}}
            >
                <img src={dice} className='buttonDice' />
            </motion.div>
        </div>
    )
}

export default FetchAdv;

