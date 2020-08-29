import React, { useRef } from "react";

export const FocusTrap = ({ children }) => {
  const ref = useRef(null);
  const focused = event => {
    const focusableNodes = ref.current.querySelectorAll(
      '[role="button"], a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    if (event.target.id === "top-fragment") {
      focusableNodes[focusableNodes.length - 1].focus();
    } else {
      focusableNodes[0].focus();
    }
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div
        id="top-fragment"
        style={{ height: 0 }}
        onFocus={focused}
        tabIndex={0}
      />
      <div id="focus-trap" ref={ref}>
        {children}
      </div>
      <div
        id="bottom-fragment"
        style={{ height: 0 }}
        onFocus={focused}
        tabIndex={0}
      />
    </React.Fragment>
  );
};
