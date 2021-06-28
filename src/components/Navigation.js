import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/roxanne.png" alt="profile-img"/>
                    <h3>Roxanne Labelle-Lecompte</h3>
                </div>
            </div>


            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fa fa-home"></i>
                            <span> Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fa fa-sliders"></i>
                            <span> Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fa fa-file-code-o"></i>
                            <span> Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fa fa-envelope-o"></i>
                            <span> Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetworks">
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Roxanne LabLec - 2021</p>
                </div>
            </div>
        </div>
    
    );
};

export default Navigation;