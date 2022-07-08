import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import apiClient from "../../services/apiClient"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
import "./RegistrationForm.css"



export default function Signup({  }) {

  const {setUser, isProcessing, error, setError, signupUser} = useAuthContext()
  const navigate = useNavigate()
  //const [isLoading, setIsLoading] = useState(false)
  //const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setError((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setError((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setError((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setError((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setError((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setError((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    const nav = await signupUser(form);
    if (nav) navigate("/activity");
  }

  return (
    <div className="register-form">
      <div className="card">
        <h2>Register</h2>
        {error?.form && <span className="error">{error?.form}</span>}
        <br />

        <div className="form">
          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Jane"
                value={form.firstName}
                onChange={handleOnInputChange}
              />
              {error?.firstName && <span className="error">{error?.firstName}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={form.lastName}
                onChange={handleOnInputChange}
              />
              {error?.lastName && <span className="error">{error?.lastName}</span>}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jane@doe.io"
              value={form.email}
              onChange={handleOnInputChange}
            />
            
          </div>
          {error?.email && <span className="error">{error?.email}</span>}
          <div className="input-field">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="username"
              placeholder="JaneDoe123"
              value={form.username}
              onChange={handleOnInputChange}
            />
            {error?.username && <span className="error">{error?.username}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {error?.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            
          </div>
          {error?.passwordConfirm && <span className="error">{error?.passwordConfirm}</span>}
        <div className="btn-row">
            <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                {isProcessing ? "Loading..." : "Create Account"}
            </button>
        </div>
          
        </div>

        <div className="footer">
          <p>
            Already have an account? Login <Link id="here-text" className="here-text" to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}