import React from 'react';
import Expandable from "../Dropdowns/expandable";
<<<<<<< HEAD

import "./sort-dropdown.css"
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortNumericDown,
  faSortNumericUp,
  faSortAlphaUp,
  faSortAlphaDown
} from "@fortawesome/free-solid-svg-icons";

import "./sort-dropdown.css";

const getSortIcon = (sortDirection, incomingState) => {
  if (incomingState === 'Distance') {
    if (sortDirection === 'asc') {
      return faSortNumericUp;
    }
    return faSortNumericDown;
  } else {
    if (sortDirection === 'asc') {
      return faSortAlphaUp;
    }
    return faSortAlphaDown;
  }
};
>>>>>>> 34cddecbe81b900d298a92c1e426582f0af3a504

const SortDropdown = ({
  className,
  handleChange,
  header,
  incomingState,
  group,
  options,
}) => {
    let inputDiv = options.map((option, index) =>
        <div
            className={`radio-container ${option === incomingState ? "selected" : null}`}
            key={index}
            onClick={() => handleChange(option)}
        >
            <input
                id={option}
                type="radio"
                name={group}
                value={option}
                checked={option === incomingState}
                onChange={() => {}}
            />
            <label className="expandable-label" htmlFor={option}>
                {option.toString()}
            </label>
        </div>
    );
<<<<<<< HEAD
    let wrappedHeader = <h4>{header}</h4>

    return (
        <div className="sort-container">
            <Expandable
                className={className}
                header={wrappedHeader}
                content={inputDiv}
                closeOnSelect={true}
            />
            <img src="/sort-numeric-down.svg" alt={`current sort method: ${incomingState}`} />
        </div>
=======
    let wrappedHeader = <h4>{header}: {incomingState}</h4>;

    return (
    <div className="sort-container">
      <Expandable
        className={className}
        header={wrappedHeader}
        content={inputDiv}
        closeOnSelect={true}
      />
      <FontAwesomeIcon size="3x" icon={getSortIcon(sortDirection, incomingState)}
        onClick={() => changeDirection()} style={{cursor: 'pointer'}}/>
    </div>
>>>>>>> 34cddecbe81b900d298a92c1e426582f0af3a504
    )
}

export default SortDropdown;
