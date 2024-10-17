import "./Toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <label htmlFor="check" className="toggle-label">
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={isChecked}
        />
        <span className="slider">
          <FontAwesomeIcon
            icon={faSun}
            className={`icon sun ${isChecked ? "hidden" : ""}`}
          />
          <FontAwesomeIcon
            icon={faMoon}
            className={`icon moon ${isChecked ? "" : "hidden"}`}
          />
        </span>
      </label>
    </div>
  );
};
                              