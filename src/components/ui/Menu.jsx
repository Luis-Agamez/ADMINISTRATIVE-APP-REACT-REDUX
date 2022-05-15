import React, { useState } from 'react'
import './menu.css';

export const Menu = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="conteiner">
            <div className={toggle ? "navigation active" : "navigation"}>
                <ul>

                    <li>
                        <div className="a">
                            <span className="icon">
                                <i className="fa fa-file-text" aria-hidden="true"></i>
                            </span>
                            <span className="title">Factures</span>
                        </div>

                    </li>
                    <li>
                        <div className="a">
                            <span className="icon">
                                <i className="fa fa-refresh" aria-hidden="true"></i>
                            </span>
                            <span className="title">Returns</span>
                        </div>

                    </li>



                    <li>
                        <div className="a">
                            <span className="icon">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                            </span>
                            <span className="title">Information</span>
                        </div>

                    </li>






                    <li>
                        <div className="a">
                            <span className="icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
                            <span className="title">Settings</span>
                        </div>

                    </li>

                    <li>
                        <div className="a">
                            <span className="icon">
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </span>
                            <span className="title">About this Software</span>
                        </div>

                    </li>


                    <li>
                        <div className="a">
                            <span className="icon">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </span>

                            <span className="title">Logout</span>
                        </div>

                    </li>

                </ul>
            </div>
            <div className={toggle ? "toggle active" : "toggle"} onClick={handleToggle}> </div>
        </div>
    )
}
