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
  secundButton?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  labelButton: string;
  secundLabelButton: string;
};

export default function InputSearch(props: PropsInputSearch) {
  return (
    <form className="form">
      <input {...props.inputProps} />
      <button type="submit" {...props.buttonProps}>
        {props.labelButton}
      </button>
      <button type="button" {...props.secundButton}>
        {props.secundLabelButton}
      </button>
    </form>
  );
}
