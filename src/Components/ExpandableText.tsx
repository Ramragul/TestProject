import {useState} from 'react';

interface Props {
    children : string;
    maxChars ?: number;
}

const ExpandableText = ({children , maxChars = 100} : Props) => {

    const [expandStatus,setExpandStatus] = useState(false)
    //const[buttonText,setButtonText] = useState('more')
    
    

    const onButtonClick = ()=> {
        console.log("button Clicked")
        // setButtonText ({expandStatus} ? "Less" : "More" )
         setExpandStatus(!expandStatus)
        
    }
    
       if(children.length <= maxChars)  return<p>{children}</p>

       const text = expandStatus ? children : children.substring(0,maxChars);
       return<p>{text}...<button onClick={onButtonClick}>{expandStatus ? "Less" : "More"}</button></p>
       
       
    
}
export default ExpandableText;

// function setButtonText(arg0: string) {
//     throw new Error('Function not implemented.');
// }
