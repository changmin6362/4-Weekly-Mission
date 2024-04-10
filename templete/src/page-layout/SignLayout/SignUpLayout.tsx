import React, { MouseEventHandler, useState } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "@/src/sharing/ui-input";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import Link from "next/link";
import { EyeIcon } from "@/components/EyeIcon";
import { SocialSignUp } from "@/components/SocialSignup";
const cx = classNames.bind(styles);

export const LOGO_IMAGE = "images/linkbrary.svg";

export const SignUpLayout = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    passwordType: "password",
    confirmPasswordType: "password",
    pwEyeIcon: "EYE_OFF_IMAGE",
    cpEyeIcon: "EYE_OFF_IMAGE",
    emailMessage: "",
    passWordMessage: "",
    ConfirmPasswordMessage: "",
    placeholderEmail: "이메일을 입력해주세요.",
    placeholderPassword: "영문, 숫자를 조합해 8자 이상 입력해주세요.",
    placeholderConfirmPassword: "비밀번호와 일치하는 값을 입력해주세요.",
    hasError: false,
  });

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({ ...prevValue, email: e.target.value }));
  };
  const handlepasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({ ...prevValue, password: e.target.value }));
  };
  const handlepasswordCorrectChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      confirmPassword: e.target.value,
    }));
  };
  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      emailMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handlePasswordBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      passWordMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handlePasswordCorrectBlur: FocusEventHandler<HTMLInputElement> = (
    e
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      ConfirmPasswordMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handlePasswordType: MouseEventHandler<HTMLImageElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      passwordType: value.passwordType === "password" ? "text" : "password",
      pwEyeIcon:
        value.pwEyeIcon === "EYE_OFF_IMAGE" ? "EYE_ON_IMAGE" : "EYE_OFF_IMAGE",
    }));
    console.log(value.passwordType);
  };
  const handleConfirmPasswordType: MouseEventHandler<HTMLImageElement> = (
    e
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      confirmPasswordType:
        value.confirmPasswordType === "password" ? "text" : "password",
      cpEyeIcon:
        value.cpEyeIcon === "EYE_OFF_IMAGE" ? "EYE_ON_IMAGE" : "EYE_OFF_IMAGE",
    }));
  };

  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <form className={cx("input-container")}>
          <div className={cx("article")}>
            <img
              className={cx("logo")}
              src={LOGO_IMAGE}
              alt="Linkbrary 서비스 로고"
            />
            <div>
              이미 회원이신가요?{" "}
              <Link href={ROUTE.로그인}>
                <span>로그인하기</span>
              </Link>
            </div>
          </div>
          <div className={cx(["email", "input"])}>
            <div className={cx("label")}>이메일</div>
            <Input
              value={value.email}
              placeholder={value.placeholderEmail}
              hasError={value.hasError}
              helperText={value.emailMessage}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호</div>
            <Input
              value={value.password}
              placeholder={value.placeholderPassword}
              type={value.passwordType}
              hasError={value.hasError}
              helperText={value.passWordMessage}
              onChange={handlepasswordChange}
              onBlur={handlePasswordBlur}
            />
            <EyeIcon src={value.pwEyeIcon} onClick={handlePasswordType} />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호 확인</div>
            <Input
              value={value.confirmPassword}
              placeholder={value.placeholderConfirmPassword}
              type={value.confirmPasswordType}
              hasError={value.hasError}
              helperText={value.ConfirmPasswordMessage}
              onChange={handlepasswordCorrectChange}
              onBlur={handlePasswordCorrectBlur}
            />
            <EyeIcon
              src={value.cpEyeIcon}
              onClick={handleConfirmPasswordType}
            />
          </div>
          <div className={cx("button")}>회원가입</div>
        </form>
        <SocialSignUp />
      </div>
    </div>
  );
};
