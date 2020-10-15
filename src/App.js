import React from 'react';
import { userRoutes } from './constants/apiEndpoints';

function App() {
  const [userInfo, setUserInfo] = React.useState({});

  return (
    <body class="text-center">
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
          <h1 class="h3 mb-3 font-weight-normal">NCU sign in</h1>
          <input type="username" name="user_id" class="form-control" placeholder="學號" />
          <input type="password" name="user_password" class="form-control" placeholder="password" />
          <div class="checkbox mb-3"></div><label><input type="checkbox" value="remember-me" />remember me</label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            sign in
        </button>
        </form>
        <div>
          <p class="mt-5 mb-3 text-muted">&copy; ncu-2020</p>
          <p>login state: {Object.keys(userInfo).length === 0 ? "not login" : "logged in"}</p>
          <p>user info: {JSON.stringify(userInfo[0])}</p>
        </div>
      </div>
    </body>
  );
}

export default App;
