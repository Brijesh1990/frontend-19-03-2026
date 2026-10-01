import React, { useState } from "react";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";

export default function LoginApp() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successfully!");
  };

  return (
    <div className="login-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <HeaderApp />


      {/* =====================================================
          LOGIN SECTION
      ===================================================== */}

      <section className="login-section">

        <div className="container">

          <div className="row login-wrapper g-0">


            {/* =================================================
                LEFT GRID
            ================================================= */}

            <div className="col-lg-6">

              <div className="login-left">

                <div className="login-left-content">

                  <div className="brand-badge">
                    <span>✦</span>
                    Healthcare Platform
                  </div>

                  <h1>
                    Your Health.
                    <br />
                    <span>Your Priority.</span>
                  </h1>

                  <p>
                    Welcome to our healthcare platform.
                    Manage your appointments, doctors,
                    reports and healthcare journey from
                    one simple dashboard.
                  </p>


                  {/* GIF / ANIMATION */}

                  <div className="login-animation">

                    <img
                      src="https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
                      alt="Healthcare Animation"
                    />

                  </div>


                  {/* FEATURES */}

                  <div className="feature-list">

                    <div className="feature-item">
                      <span className="feature-icon">
                        ✓
                      </span>

                      <span>
                        Easy appointment management
                      </span>
                    </div>

                    <div className="feature-item">
                      <span className="feature-icon">
                        ✓
                      </span>

                      <span>
                        Connect with expert doctors
                      </span>
                    </div>

                    <div className="feature-item">
                      <span className="feature-icon">
                        ✓
                      </span>

                      <span>
                        Secure healthcare information
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT GRID
            ================================================= */}

            <div className="col-lg-6">

              <div className="login-right">

                <div className="login-form-container">


                  {/* HEADER */}

                  <div className="login-heading">

                    <span>
                      WELCOME BACK
                    </span>

                    <h2>
                      Login to your account
                    </h2>

                    <p>
                      Enter your details below to continue.
                    </p>

                  </div>


                  {/* FORM */}

                  <form onSubmit={handleSubmit}>


                    {/* EMAIL */}

                    <div className="form-field">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <div className="input-box">

                        <span className="input-icon">
                          ✉
                        </span>

                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          required
                        />

                      </div>

                    </div>


                    {/* PASSWORD */}

                    <div className="form-field">

                      <label htmlFor="password">
                        Password
                      </label>

                      <div className="input-box">

                        <span className="input-icon">
                          🔒
                        </span>

                        <input
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          id="password"
                          placeholder="Enter your password"
                          required
                        />

                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                        >
                          {showPassword ? "🙈" : "👁"}
                        </button>

                      </div>

                    </div>


                    {/* REMEMBER / FORGOT */}

                    <div className="login-options">

                      <label className="remember-me">

                        <input
                          type="checkbox"
                        />

                        <span>
                          Remember me
                        </span>

                      </label>

                      <a href="#!">
                        Forgot Password?
                      </a>

                    </div>


                    {/* LOGIN BUTTON */}

                    <button
                      type="submit"
                      className="login-button"
                    >

                      Login

                      <span>
                        →
                      </span>

                    </button>

                  </form>


                  {/* DIVIDER */}

                  <div className="divider">

                    <span>
                      OR CONTINUE WITH
                    </span>

                  </div>


                  {/* SOCIAL LOGIN */}

                  <div className="social-buttons">

                    <button
                      type="button"
                      className="social-button"
                    >
                      <span className="google-icon">
                        G
                      </span>

                      Google
                    </button>

                    <button
                      type="button"
                      className="social-button"
                    >
                      <span className="facebook-icon">
                        f
                      </span>

                      Facebook
                    </button>

                  </div>


                  {/* REGISTER */}

                  <div className="register-section">

                    <span>
                      Don't have an account?
                    </span>

                    <a href="#!">
                      Create Account
                    </a>

                  </div>


                  {/* SECURITY */}

                  <div className="security-info">

                    🔒 Your information is securely protected

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <FooterApp />


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .login-page {
          background:
            linear-gradient(
              135deg,
              #f3fbff 0%,
              #ffffff 50%,
              #f4f8ff 100%
            );

          min-height: 100vh;
        }


        /* =====================================================
           LOGIN SECTION
        ===================================================== */

        .login-section {
          padding: 70px 0;
        }


        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .login-wrapper {

          max-width: 1100px;

          margin: auto;

          background: #ffffff;

          border-radius: 25px;

          overflow: hidden;

          box-shadow:
            0 25px 70px
            rgba(18, 80, 110, 0.15);

        }


        /* =====================================================
           LEFT GRID
        ===================================================== */

        .login-left {

          min-height: 680px;

          padding: 55px;

          display: flex;

          align-items: center;

          justify-content: center;

          position: relative;

          overflow: hidden;

          background:
            linear-gradient(
              145deg,
              #006fae,
              #00a5d5
            );

        }


        /* Decorative circle */

        .login-left::before {

          content: "";

          position: absolute;

          width: 350px;

          height: 350px;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.08);

          top: -170px;

          left: -150px;

        }


        .login-left::after {

          content: "";

          position: absolute;

          width: 300px;

          height: 300px;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.08);

          bottom: -150px;

          right: -130px;

        }


        .login-left-content {

          position: relative;

          z-index: 2;

          text-align: center;

          max-width: 450px;

        }


        /* =====================================================
           BADGE
        ===================================================== */

        .brand-badge {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 8px 16px;

          border-radius: 30px;

          background:
            rgba(255,255,255,0.16);

          border:
            1px solid
            rgba(255,255,255,0.25);

          color: white;

          font-size: 13px;

          margin-bottom: 22px;

        }


        .brand-badge span {

          color: #ffe082;

          font-size: 18px;

        }


        /* =====================================================
           LEFT TITLE
        ===================================================== */

        .login-left h1 {

          color: white;

          font-size: 46px;

          line-height: 1.15;

          font-weight: 800;

          margin-bottom: 18px;

        }


        .login-left h1 span {

          color: #b9f3ff;

        }


        .login-left p {

          color:
            rgba(255,255,255,0.86);

          line-height: 1.7;

          font-size: 15px;

          margin-bottom: 25px;

        }


        /* =====================================================
           GIF
        ===================================================== */

        .login-animation {

          width: 230px;

          height: 230px;

          margin: 20px auto;

          border-radius: 50%;

          padding: 12px;

          background:
            rgba(255,255,255,0.15);

          box-shadow:
            0 20px 40px
            rgba(0,0,0,0.12);

        }


        .login-animation img {

          width: 100%;

          height: 100%;

          object-fit: cover;

          border-radius: 50%;

        }


        /* =====================================================
           FEATURES
        ===================================================== */

        .feature-list {

          margin-top: 25px;

          text-align: left;

          display: inline-block;

        }


        .feature-item {

          display: flex;

          align-items: center;

          gap: 10px;

          color: white;

          margin-bottom: 10px;

          font-size: 14px;

        }


        .feature-icon {

          width: 22px;

          height: 22px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #ffffff;

          color: #008bc9;

          border-radius: 50%;

          font-size: 12px;

          font-weight: bold;

        }


        /* =====================================================
           RIGHT GRID
        ===================================================== */

        .login-right {

          min-height: 680px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 60px 55px;

          background: #ffffff;

        }


        .login-form-container {

          width: 100%;

          max-width: 430px;

        }


        /* =====================================================
           HEADING
        ===================================================== */

        .login-heading span {

          color: #008bc9;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.5px;

        }


        .login-heading h2 {

          color: #173b52;

          font-size: 34px;

          font-weight: 800;

          margin:
            8px 0;

        }


        .login-heading p {

          color: #81929d;

          font-size: 14px;

          margin-bottom: 30px;

        }


        /* =====================================================
           FORM
        ===================================================== */

        .form-field {

          margin-bottom: 20px;

        }


        .form-field label {

          display: block;

          font-size: 14px;

          color: #344d5d;

          font-weight: 600;

          margin-bottom: 8px;

        }


        /* =====================================================
           INPUT
        ===================================================== */

        .input-box {

          height: 55px;

          position: relative;

        }


        .input-box input {

          width: 100%;

          height: 55px;

          border:
            1px solid #dce6ec;

          border-radius: 11px;

          outline: none;

          padding:
            0 48px;

          font-size: 14px;

          color: #263b48;

          background: #f9fbfc;

          transition: .3s;

        }


        .input-box input:focus {

          background: white;

          border-color: #008bc9;

          box-shadow:
            0 0 0 4px
            rgba(0,139,201,0.08);

        }


        .input-icon {

          position: absolute;

          left: 17px;

          top: 50%;

          transform:
            translateY(-50%);

          color: #8ba0ad;

          z-index: 2;

        }


        .password-toggle {

          position: absolute;

          right: 14px;

          top: 50%;

          transform:
            translateY(-50%);

          border: none;

          background: transparent;

          cursor: pointer;

          color: #7d919d;

          font-size: 17px;

        }


        /* =====================================================
           OPTIONS
        ===================================================== */

        .login-options {

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          margin:
            5px 0 25px;

          font-size: 13px;

        }


        .remember-me {

          display: flex;

          align-items: center;

          gap: 7px;

          color: #738591;

        }


        .remember-me input {

          width: 15px;

          height: 15px;

          accent-color: #008bc9;

        }


        .login-options a {

          color: #008bc9;

          text-decoration: none;

          font-weight: 600;

        }


        .login-options a:hover {

          text-decoration: underline;

        }


        /* =====================================================
           LOGIN BUTTON
        ===================================================== */

        .login-button {

          width: 100%;

          height: 55px;

          border: none;

          border-radius: 11px;

          color: white;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          background:
            linear-gradient(
              90deg,
              #007fbd,
              #00a6d5
            );

          box-shadow:
            0 12px 25px
            rgba(0,139,201,0.22);

          transition: .3s;

        }


        .login-button span {

          margin-left: 10px;

          font-size: 20px;

        }


        .login-button:hover {

          transform:
            translateY(-2px);

          box-shadow:
            0 18px 30px
            rgba(0,139,201,0.28);

        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .divider {

          display: flex;

          align-items: center;

          gap: 12px;

          margin:
            28px 0;

          color: #a0afb8;

          font-size: 11px;

          font-weight: 600;

        }


        .divider::before,
        .divider::after {

          content: "";

          flex: 1;

          height: 1px;

          background: #e4ebef;

        }


        /* =====================================================
           SOCIAL
        ===================================================== */

        .social-buttons {

          display: flex;

          gap: 12px;

        }


        .social-button {

          flex: 1;

          height: 48px;

          border:
            1px solid #dfe7eb;

          background: white;

          border-radius: 10px;

          color: #536b79;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition: .3s;

        }


        .social-button:hover {

          border-color: #008bc9;

          background: #f5fcff;

        }


        .google-icon {

          color: #db4437;

          font-weight: 800;

          margin-right: 7px;

        }


        .facebook-icon {

          color: #1877f2;

          font-weight: 800;

          margin-right: 7px;

        }


        /* =====================================================
           REGISTER
        ===================================================== */

        .register-section {

          text-align: center;

          margin-top: 27px;

          font-size: 14px;

          color: #81929d;

        }


        .register-section a {

          color: #008bc9;

          font-weight: 700;

          margin-left: 5px;

          text-decoration: none;

        }


        /* =====================================================
           SECURITY
        ===================================================== */

        .security-info {

          text-align: center;

          margin-top: 25px;

          color: #a1afb7;

          font-size: 11px;

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .login-section {

            padding:
              40px 20px;

          }

          .login-left {

            min-height: 520px;

            padding: 40px 30px;

          }

          .login-right {

            min-height: auto;

            padding:
              50px 35px;

          }

          .login-left h1 {

            font-size: 38px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 576px) {

          .login-section {

            padding:
              25px 12px;

          }

          .login-wrapper {

            border-radius: 18px;

          }

          .login-left {

            min-height: 450px;

            padding:
              35px 20px;

          }

          .login-left h1 {

            font-size: 31px;

          }

          .login-left p {

            font-size: 13px;

          }

          .login-animation {

            width: 175px;

            height: 175px;

          }

          .login-right {

            padding:
              40px 22px;

          }

          .login-heading h2 {

            font-size: 28px;

          }

          .social-buttons {

            flex-direction: column;

          }

          .login-options {

            font-size: 12px;

          }

        }

      `}</style>

    </div>
  );
}