import React, { memo, useContext, useCallback } from "react";
import AppContext from "./AppContext";

const style = {
  cursor: "pointer",
  background: "lightblue",
  width: "50%",
  height: "7.69vh"
};

const Toggler = memo(props => {
  const handleClick = useCallback(() => {
    props.dispatch("toggle");
  }, []);

  // do some expensive work calculating the button guarded by the memo
  let work = 0.5;
  for (let i = 0; i < 10000; i++) {
    work = (work + Math.random()) / 2;
  }
  return <div style={style} onClick={handleClick} />;
});

export default () => {
  // useContext will re-render whenever isYellow changes
  const { dispatch } = useContext(AppContext);

  return <Toggler dispatch={dispatch} />;
};
