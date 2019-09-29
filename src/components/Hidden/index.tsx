import React from "react";

export default (props: { txt: string | number }) => {
  const [hidden, setHidden] = React.useState(true);
  return (
    <span
      onClick={() => {
        setHidden(!hidden);
      }}
      style={{
        cursor: "pointer",
        borderBottom: hidden ? "1px solid rgb(241,237,0)" : "none"
      }}
    >
      {hidden ? "Exibir" : props.txt}
    </span>
  );
};
