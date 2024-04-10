import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  value,
  placeholder,
  type = "text",
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className={cx("container")}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cx("input", { error: hasError })}
      />
      {helperText && (
        <p className={cx("helper-text", { error: hasError })}>{helperText}</p>
      )}
    </div>
  );
};
