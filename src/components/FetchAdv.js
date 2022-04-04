import React from "react";
import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import axios from "axios";
import dice from '../icon-dice.svg';


const FetchAdv = () => {
    const [adv, setAdv] = useState([]);
    const getAdv = async () => {
        const response = await axios("	https://api.adviceslip.com/advice");
        console.log(response);
        setAdv(response.data.slip);
    };
    useEffect(() => {
        getAdv();
    }, []);
        
    return (
        <div className="fetchPart">
            <h3 className="adviceId">ADVICE #{adv.id}</h3>
            <p className="adviceParagraph">"{adv.advice}"</p>
            <motion.div className="button" 
            onClick={getAdv}
            whileHover={{scale: 1.3,
            rotate: 180}}
            >
                <img src={dice} className='buttonDice' />
            </motion.div>
        </div>
    )
}

export default FetchAdv;

