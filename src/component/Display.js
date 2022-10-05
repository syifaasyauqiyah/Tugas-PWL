import React from 'react';
import style from "../styles/displayStyles.module.css";

class Display extends React.Component {
    render(){
        return(
            <div className={style.Display}>
                {this.props.data}
            </div>
        );
    }
}

export default Display;