import React from "react";
import './appdownload.css';
import android from './assetss/play_store.png';
import apple from './assetss/app_store.png';

const Appdownload = () => {
    return (
        <div className="main-container">
            <h1>For Better Experience Download <br/> Tomato App</h1>
            <div className="img-con">
                <img src={android} alt="Google Play Store" />
                <img src={apple} alt="App Store" />
            </div>
        </div>
    );
};

export default Appdownload;
