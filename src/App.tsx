import React, { useState } from "react";
import { PasswordStr } from "./components/PasswordStr.tsx";
import { PasswordInput } from "./components/PasswordInput.tsx";


export const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Enter your Password</h3>
        <PasswordInput 
          password={password}
          onPasswordChange={handlePasswordChange}
        />
        <PasswordStr password={password} />
      </div>
    </div>
  );
}

