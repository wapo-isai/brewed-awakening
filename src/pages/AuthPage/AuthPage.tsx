import React from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserState} from "../../features/users/userSlice";
import {UserResponse} from "../../features/users/userSlice";

import styles from "./AuthPage.module.css";
import {updateUserCache} from "../../utils/updateCache";

import {AuthContext} from "../../App";

function AuthPage() {
  const dispatch = useDispatch();

  const authContext = React.useContext(AuthContext);

  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [isLogin, setIsLogin] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (authContext !== undefined && authContext.isAuthenticated) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    axios
      .post(import.meta.env.VITE_USERS_API_URL + "/login", user, {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        const jwtToken = res.headers.token;

        let userResponse: UserResponse = {
          userId: res.headers.userid,
          username: user.username,
        };

        updateUserCache(userResponse.userId, userResponse.username);

        dispatch(setUserState(userResponse));
        navigate("/");

        if (jwtToken != null) {
          sessionStorage.setItem("jwt", jwtToken);
        }
      })
      .catch(() => {
        alert("There was a problem with your login, please try again");
      });

    console.log("Here");
  };

  const handleRegister = () => {
    axios
      .post(import.meta.env.VITE_USERS_API_URL, user, {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        if (res.status == 201 || res.status == 200) {
          handleLogin();
        } else {
          throw new Error("Could not register successfully");
        }
      })
      .catch(() => {
        alert("There was a problem with your registration, please try again");
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isLogin) {
            handleLogin();
          } else {
            handleRegister();
          }
        }}
      >
        <div className={styles.authContainer}>
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <input
            className={styles.authInput}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <input
            className={styles.authInput}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className={styles.mainBtn}>
            {isLogin ? "Login" : "Register"}
          </button>
          <span className={styles.bottomSpan}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              className={styles.minorBtn}
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              {isLogin ? "register here " : "login here "}
            </span>
          </span>
        </div>
      </form>
    </>
  );
}

export default AuthPage;
