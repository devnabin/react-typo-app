import React from 'react'
const Validation = (props)=>{

 let WarningString = 'text too enough '
 if(props.textLength==0){
    WarningString = undefined;
}
   else if(props.textLength <= 5){
        WarningString = ' text too small'
    } 

return(
    <div>
        <p>{WarningString } <br/>Length of text :- {props.textLength}</p>
    </div>
)
}

export default Validation