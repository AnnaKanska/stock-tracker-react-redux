import React from "react";

const ErrorMessage = (props: { feature: string }) => {
  return (
    <div>
      <p className="error__message">
        Error: {props.feature} can not be displayed
      </p>
    </div>
  );
};

export default ErrorMessage;
