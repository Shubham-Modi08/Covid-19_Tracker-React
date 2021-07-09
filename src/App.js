import React from 'react';
import {Cards,CountryPicker} from './components'
import styles from './App.module.css'
import {Data}  from './api';

class App extends React.Component{
    state = {
        data: {},
    }


    async componentDidMount(){
        const fetcheddata = await Data();

            this.setState({data: fetcheddata})

    }
    render(){
        const {data} = this.state;
        return(
            <div className = {styles.container}>
                <Cards data={data}/>
                <CountryPicker/>
            </div>

        )
    }
}

export default App;