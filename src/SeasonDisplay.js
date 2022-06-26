import React from "react";

const seasonConfig={
    winter:{
        text:'Inverno',
        imgSrc:'img/winter.jpeg',
        color:'blue'
    },
    summer:{
        text:'Verão',
        imgSrc:'img/summer.jpg',
        color:'red'
    }
}

const getSeason=(lat,month)=>{
    if(month>=2&&month<=9){
        return lat>0?'summer':'winter'        
    }else{
        return lat>0?'winter':'summer'         
    }
}

function SeasonDisplay(props){

    const season=getSeason(props.lat,new Date().getMonth())            

    return(
        <div style={{backgroundColor:seasonConfig[season].color}}>
        <div><img src={seasonConfig[season].imgSrc} style={{float:'left',width:'250px',height:'250px'}}/></div>
        <div style={{textAlign:'center',clear: 'both',fontSize:'40px',color:'white'}}>{seasonConfig[season].text}</div>
        <div><img src={seasonConfig[season].imgSrc} style={{float:'right',width:'250px',height:'250px'}}/></div>
        <br style={{clear:'both'}}/>
        </div>
        )
}

export default SeasonDisplay