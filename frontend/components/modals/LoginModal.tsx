"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import modal from "/public/img/modal/modal.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin, useRegister } from "@/hooks";
import { useToastStore } from "@/store";
import { loginSchema, registerSchema } from "@/lib/schemas";

type Tab = "signin" | "signup";

const LoginModal = () => {
  const [activeTab, setActiveTab] = useState<Tab>("signin");

  // React Hook Form para Login
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: loginFormState,
    reset: resetLogin,
  } = useForm<{ email: string; password: string }>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  // React Hook Form para Registro
  const {
    register: registerSignup,
    handleSubmit: handleRegisterSubmit,
    formState: registerFormState,
    reset: resetSignup,
  } = useForm<{ email: string; username: string; password: string; confirmPassword: string }>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  // Mutations
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const { success } = useToastStore();

  // Limpar erros e forms ao mudar de tab
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    resetLogin();
    resetSignup();
  };

  // Handler de Login
  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      await loginMutation.login({ email: data.email, password: data.password });
      success("Login realizado com sucesso!");

      // Fechar modal após login bem-sucedido
      setTimeout(() => {
        const closeButton = document.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
        closeButton?.click();
        resetLogin();
      }, 500);
    } catch {
      // Erro já é tratado pelo hook e toast store
    }
  };

  // Handler de Registro
  const handleRegister = async (data: { email: string; username: string; password: string }) => {
    try {
      await registerMutation.register({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      success("Registro realizado com sucesso!");

      // Fechar modal após registro bem-sucedido
      setTimeout(() => {
        const closeButton = document.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
        closeButton?.click();
        resetSignup();
      }, 500);
    } catch {
      // Erro já é tratado pelo hook e toast store
    }
  };

  return (
    <div className="modal register__modal" id="signInPin" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                resetLogin();
                resetSignup();
              }}
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="modal__left">
                    <Image src={modal} alt="modal" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="modal__right">
                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
                          type="button"
                          onClick={() => handleTabChange("signup")}
                        >
                          Sign Up
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === "signin" ? "active" : ""}`}
                          type="button"
                          onClick={() => handleTabChange("signin")}
                        >
                          Sign In
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                      {/* Sign Up Tab */}
                      <div
                        className={`tab-pane fade ${activeTab === "signup" ? "show active" : ""}`}
                        role="tabpanel"
                      >
                        <div className="form__tabs__wrap">
                          <div className="focus__icon">
                            <p>or registration via social media accounts</p>
                            <div className="social__head">
                              <ul className="social">
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form onSubmit={handleRegisterSubmit(handleRegister)}>
                            <div className="form__grp">
                              <label htmlFor="registerEmail">Email</label>
                              <input
                                type="email"
                                id="registerEmail"
                                placeholder="Email Your"
                                disabled={registerMutation.isLoading}
                                {...registerSignup("email")}
                              />
                              {registerFormState.errors.email && (
                                <small className="text-danger">{registerFormState.errors.email.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="registerUsername">Username</label>
                              <input
                                type="text"
                                id="registerUsername"
                                placeholder="Username"
                                disabled={registerMutation.isLoading}
                                {...registerSignup("username")}
                              />
                              {registerFormState.errors.username && (
                                <small className="text-danger">{registerFormState.errors.username.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="registerPassword">Password</label>
                              <input
                                type="password"
                                id="registerPassword"
                                placeholder="Your Password"
                                disabled={registerMutation.isLoading}
                                {...registerSignup("password")}
                              />
                              {registerFormState.errors.password && (
                                <small className="text-danger">{registerFormState.errors.password.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="registerConfirmPassword">Confirm Password</label>
                              <input
                                type="password"
                                id="registerConfirmPassword"
                                placeholder="Password"
                                disabled={registerMutation.isLoading}
                                {...registerSignup("confirmPassword")}
                              />
                              {registerFormState.errors.confirmPassword && (
                                <small className="text-danger">{registerFormState.errors.confirmPassword.message}</small>
                              )}
                            </div>
                            <div className="create__btn">
                              <button type="submit" className="cmn--btn" disabled={registerMutation.isLoading}>
                                <span>{registerMutation.isLoading ? "Registering..." : "Sign Up"}</span>
                              </button>
                            </div>
                            <p>
                              Do you have an account?{" "}
                              <Link href="URL:void(0)" onClick={() => handleTabChange("signin")}>
                                Login
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>
                      {/* Sign In Tab */}
                      <div
                        className={`tab-pane fade ${activeTab === "signin" ? "show active" : ""}`}
                        role="tabpanel"
                      >
                        <div className="form__tabs__wrap">
                          <div className="focus__icon">
                            <p>or registration via social media accounts</p>
                            <div className="social__head">
                              <ul className="social">
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form onSubmit={handleLoginSubmit(handleLogin)}>
                            <div className="form__grp">
                              <label htmlFor="loginEmail">Email</label>
                              <input
                                type="email"
                                id="loginEmail"
                                placeholder="Email Your"
                                disabled={loginMutation.isLoading}
                                {...registerLogin("email")}
                              />
                              {loginFormState.errors.email && (
                                <small className="text-danger">{loginFormState.errors.email.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="loginPassword">Password</label>
                              <input
                                type="password"
                                id="loginPassword"
                                placeholder="Your Password"
                                disabled={loginMutation.isLoading}
                                {...registerLogin("password")}
                              />
                              {loginFormState.errors.password && (
                                <small className="text-danger">{loginFormState.errors.password.message}</small>
                              )}
                            </div>
                            <div className="login__signup">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remem" />
                                <label className="form-check-label" htmlFor="remem">
                                  Remember me
                                </label>
                              </div>
                              <Link href="URL:void(0)">Forgot Password</Link>
                            </div>
                            <div className="create__btn">
                              <button type="submit" className="cmn--btn" disabled={loginMutation.isLoading}>
                                <span>{loginMutation.isLoading ? "Signing in..." : "Sign In"}</span>
                              </button>
                            </div>
                            <p>
                              Do you have an account?{" "}
                              <Link href="URL:void(0)" onClick={() => handleTabChange("signup")}>
                                Registration
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
