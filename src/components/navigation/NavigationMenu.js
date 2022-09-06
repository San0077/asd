import { NavLink } from "react-router-dom";
import ResetLocation from "../actions/ResetLocation";
import HideMenu from "../actions/HideMenu";
const NavigationMenu = () => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          ResetLocation();
          HideMenu();
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          ResetLocation();
          HideMenu();
        }}
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
      >
        About
      </NavLink>
      <NavLink
        to="/stack"
        onClick={() => {
          ResetLocation();
          HideMenu();
        }}
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
        onClick={() => {
          ResetLocation();
          HideMenu();
        }}
      >
        Project
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
        onClick={() => {
          ResetLocation();
          HideMenu();
        }}
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
