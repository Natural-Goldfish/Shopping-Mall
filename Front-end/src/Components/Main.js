import React from 'react';
import "../Styles/Main.css";
function Main(){
    return (
        <div className="mainWrap">
            <div className="mainBanner">
                <div className="mbInner">
                    <button className="preButton" type="button">Previous</button>
                    <div className="slideBanner">
                        <div className="imageBanner">                        
                            <span className="imageWrap">
                                <img className="mbImage" src="/images/1.png" alt="temp" width="1000px" height="300px"/>
                            </span>
                        </div>
                    </div>
                    <button className="nextButton" type="button">Next</button>
                </div>
            </div>
            <div className="mainBanner">
                <div className="mbInner">
                    <button className="preButton" type="button">Previous</button>
                    <div className="slideBanner">
                        <div className="imageBanner">                        
                            <span className="imageWrap">
                                <img className="mbImage" src="/images/1.png" alt="temp" width="1000px" height="300px"/>
                            </span>
                        </div>
                    </div>
                    <button className="nextButton" type="button">Next</button>
                </div>
            </div>
            <div className="mainBanner">
                <div className="mbInner">
                    <button className="preButton" type="button">Previous</button>
                    <div className="slideBanner">
                        <div className="imageBanner">                        
                            <span className="imageWrap">
                                <img className="mbImage" src="/images/1.png" alt="temp" width="1000px" height="300px"/>
                            </span>
                        </div>
                    </div>
                    <button className="nextButton" type="button">Next</button>
                </div>
            </div>
            <div className="mainBanner">
                <div className="mbInner">
                    <button className="preButton" type="button">Previous</button>
                    <div className="slideBanner">
                        <div className="imageBanner">                        
                            <span className="imageWrap">
                                <img className="mbImage" src="/images/1.png" alt="temp" width="1000px" height="300px"/>
                            </span>
                        </div>
                    </div>
                    <button className="nextButton" type="button">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Main;