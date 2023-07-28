import {useState} from 'react'
import {BsFillHeartFill ,BsFillHeartbreakFill} from 'react-icons/bs'

interface Props {
    onClick : () => void;
    
}

const LikeButton = ({onClick}: Props) => {

    const [status,setStatus] = useState(false) 

    const toggle = () => {
        setStatus(!status)
        var clickStatus = "Love"
        if(!status)
            clickStatus = "Breakup"
        clickStatus = clickStatus;
        onClick();
    }
    
        if(status)
       return  <BsFillHeartbreakFill color="red" onClick={toggle}></BsFillHeartbreakFill>
       return  <BsFillHeartFill color="red" onClick={toggle}></BsFillHeartFill>
    

};

export default LikeButton;