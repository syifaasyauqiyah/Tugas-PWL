import React from 'react';
import style from '../styles/keypadStyles.module.css';

class Keypad extends React.Component {
    render(){
        return(
            <div className={style.Keypad}>
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;