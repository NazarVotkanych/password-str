import React from "react";

interface PasswordInputProps {
  password: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ password, onPasswordChange }) => {
  return (
    <div className="form-group mb-1">
      <input
        type="password"
        className="form-control shadow-none"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
    </div>
  );
};
