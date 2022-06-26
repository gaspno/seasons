import React from 'react'

function Spinner(props){

return(
<div style={{display:'inline-block'}}>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

<div style={{ 
             
color:'black',

display:'inline-block',
 border: '16px solid #292524',
 borderRadius: '50%',
 borderTop:'16px solid #1016DD',
 width: '120px',
 height:'120px',            
 animation: 'spin 2s linear infinite',
          
}}></div>
<div style={{textAlign:'center'}}>{props.message}</div>
</div>           

</div>
)

}

export default Spinner