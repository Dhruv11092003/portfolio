import { Component } from "react";
import Header from '../Header/index'
import './index.css'

class Home extends Component{
    state={
        checked:false,
        theme:'light'
    }

    onClickChangeTheme = () => {
        this.setState((prevState) => ({
          checked: !prevState.checked,
          theme: prevState.checked ? 'light' : 'dark',
        }), () => {
          console.log("Theme changed to:", this.state.theme);
        });
      }
      
    render(){
        const {theme,checked}=this.state
        return(
            <div>
                <Header changeTheme={{main:this.onClickChangeTheme,theme:theme,isChecked:checked}} />
                <div style={{height:"200vh","z-index":-1}}>
                    <h1>Home</h1>
                </div>
            </div>
        )
    }
}

export default Home