import React, { useState } from "react";
import logo from "../../images/logo.svg";
import Github from "../../images/Github.svg";
import Google from "../../images/Google.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Email,
  Visibility,
  VisibilityOff,
  AccountCircle,
  ExitToApp,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Register = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register">
      <img
        src={logo}
        alt=""
        style={{ width: "140px" }}
        className="firstImage"
      />
      <p
        style={{ fontSize: ".9rem", margin: "20px 30px 40px 0" }}
        className="top"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
        rerum, eos nobis optio minus aspernatur.
      </p>

      <form action="">
        <TextField
          id="outlined-search"
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle style={{ color: "#828282" }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <div className="mb-1"></div>
        <TextField
          id="outlined-search"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Email style={{ color: "#828282" }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <div className="mb-1"></div>
        <TextField
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          label="Password"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <div className="mb-1"></div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ExitToApp />}
          fullWidth
        >
          Sign-Up
        </Button>

        <p className="bottom" style={{ marginTop: "25px" }}>
          or continue with these social profile
        </p>
        <ul>
          <li>
            <img src={Google} alt="" />
          </li>
          <li>
            <img src={Github} alt="" />
          </li>
        </ul>

        <p className="bottom">
          Adready a member? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
