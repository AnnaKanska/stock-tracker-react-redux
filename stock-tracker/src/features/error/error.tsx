import React from "react";

const ErrorMessage = (props: { featureName: string }) => {
  return (
    <div>
      <p className="error__message">
        Error: {props.featureName} can not be displayed
      </p>
    </div>
  );
};

export default ErrorMessage;
