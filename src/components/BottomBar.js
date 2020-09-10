import React from 'react';
import Logo from "../assets/BottomLogo.png";

class BottomBar extends React.Component {
    render() {
        return (
            <div className="bottomLogo">
                <img src={Logo} />
            </div>            
        );
    }
}

export default BottomBar;