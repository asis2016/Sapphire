import React, {FC} from "react";
import {
    Link
} from "react-router-dom"
import {menu} from "../assets/content";
import {NavBase} from "./Nav.style";

interface IProps {
    name: string;
    img: string;
}

export const Navigation: FC<IProps> = (props) => {
    return (
      <NavBase>
        <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
          <a className="navbar-brand " href="#">
            <span className="d-block d-lg-none">{props.name}</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={require('../assets/images/' + props.img)}
                alt={props.name}
              />
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mt-4">
            <ul className="navbar-nav">
              {menu.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link to={item.url} className="nav-link">
                    <i className={item.faIcon}></i> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </NavBase>
    );
}