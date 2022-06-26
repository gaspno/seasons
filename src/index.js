import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import './spin.css'
import Spinner from './Loading'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {lat:null,errMessage:''}      
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),            
            err=>this.setState({errMessage:err.message}))
    }
    render(){
    if(!this.state.errMessage&&this.state.lat){
    return(
        <SeasonDisplay lat={this.state.lat}/>
    )
    }
     if(this.state.errMessage&&!this.state.lat){
        return(
        <div>Error : {this.state.errMessage}</div>
        )
    }     
        return (
        <Spinner message='por favor autorize seu navegador'/>
        )    
    }  
}
ReactDOM.render(<App/>,document.getElementById('root'))