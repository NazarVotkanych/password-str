import React, { useState } from "react";
import PasswordStr from "./components/PasswordStr";

function App() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Enter your Password</h3>
        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <PasswordStr password={password} />
      </div>
    </div>
  );
}

export default App;
