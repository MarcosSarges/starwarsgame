import React from "react";
import "./styles.css";

type PropsInputSearch = {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  labelButton: string;
};

export default function InputSearch(props: PropsInputSearch) {
  return (
    <form className="form">
      <input {...props.inputProps} />
      <button type="submit" {...props.buttonProps}>
        {props.labelButton}
      </button>
    </form>
  );
}
