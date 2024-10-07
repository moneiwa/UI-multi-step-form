import React from 'react';

function Sidebar() {
    const Step = () => {
     
    };

    return ( 
        <div className="container">
            <div className="displayStep">
                <div className="circle">
                    <div className="circle1" id="circle1"><p>1</p></div>
                    <div className="circle2" id="circle2"><p>2</p></div>
                    <div className="circle3" id="circle3"><p>3</p></div>
                    <div className="circle4" id="circle4"><p>4</p></div>
                </div>
                <div className="steps">
                    <div className="step1">
                        <p>STEP 1</p>
                        <span>YOUR INFO</span>
                    </div>
                    <div className="step1">
                        <p>STEP 2</p>
                        <span>SELECT PLAN</span>
                    </div>
                    <div className="step1">
                        <p>STEP 3</p>
                        <span>ADD-ONS</span>
                    </div>
                    <div className="step1">
                        <p>STEP 4</p>
                        <span>SUMMARY</span>
                    </div>
                </div>
            </div>

            <div className="stepContainer" id="stepContainer">
                <div className="affichStep">
                    <div className="stepInfo" id="stepInfo">
                        <h1>Personal Info</h1>
                        <p className="description">
                            Please provide your name, email address, and phone number.
                        </p>
                        <div className="flexError">
                            <p>Name</p>
                            <span id="errorName"></span>
                        </div>
                        <input
                            type="text"
                            id="infoName"
                            placeholder="e.g. Stephen King"
                        />
                        <div className="flexError">
                            <p>Email Address</p>
                            <span id="errorMail"></span>
                        </div>
                        <input
                            type="email"
                            id="infoMail"
                            placeholder="e.g. stephenking@lorem.com"
                        />
                        <div className="flexError">
                            <p>Phone Number</p>
                            <span id="errorNum"></span>
                        </div>
                        <input
                            type="tel"
                            id="infoNumber"
                            placeholder="e.g. +1 234 567 890"
                        />
                        <div className="buttonContainerStepOne">
                            <button onClick={Step} className="nextStep">Next Step</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
