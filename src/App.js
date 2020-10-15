import React from 'react';
import { userRoutes } from './constants/apiEndpoints';

function App() {
  const [userInfo, setUserInfo] = React.useState({});

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const currentIdentity = new URLSearchParams({
            user_id: e.target[0].value,
            user_password: e.target[1].value
          });
          fetch(userRoutes.login, {
            body: currentIdentity,
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
          }).then((rawResult) => rawResult.json())
            .then((result) => {
              setUserInfo(result.data)
            })
        }}
      >
        <input type="username" name="user_id" />
        <input type="password" name="user_password" />
        <button type="submit">
          login
        </button>
      </form>
      <div>
        <p>login state: {Object.keys(userInfo).length === 0 ? "not login" : "logged in"}</p>
        <p>user info: {JSON.stringify(userInfo[0])}</p>
      </div>
    </div>
  );
}

export default App;
