import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

import Input from "../Input/Input";

function Filter({ inputTracking }) {
  return (
    <div className={styles.wrapper}>
      <Input
        type={"input"}
        name={"filter"}
        inputTracking={inputTracking}
        placeholder={"Search"}
      />
    </div>
  );
}

Filter.propTypes = {
  inputTracking: PropTypes.func.isRequired,
};

export default Filter;
