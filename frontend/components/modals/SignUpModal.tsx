"use client";

import Image from "next/image";
import Link from "next/link";
import modal from "/public/img/modal/modal.png";
import { useRegister } from "@/hooks";
import { useToastStore } from "@/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "@/lib/schemas";

const SignUpModal = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const registerMutation = useRegister();
  const success = useToastStore((state) => state.success);

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await registerMutation.register({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      success("Registration successful!");

      // Fechar modal após registro bem-sucedido
      setTimeout(() => {
        const closeButton = document.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
        closeButton?.click();
        reset();
      }, 500);
    } catch {
      // Erro já é tratado pelo hook e toast store
    }
  };

  return (
    <div className="modal register__modal" id="signUpPin" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" type="button">
                          Sign Up
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" role="tabpanel">
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
                          <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form__grp">
                              <label htmlFor="emailsign2">Email</label>
                              <input
                                type="email"
                                id="emailsign2"
                                placeholder="Email Your"
                                disabled={registerMutation.isLoading}
                                {...register("email")}
                              />
                              {formState.errors.email && (
                                <small className="text-danger">{formState.errors.email.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="username">Username</label>
                              <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                disabled={registerMutation.isLoading}
                                {...register("username")}
                              />
                              {formState.errors.username && (
                                <small className="text-danger">{formState.errors.username.message}</small>
                              )}
                            </div>
                            <div className="form__grp">
                              <label htmlFor="toggle-password32">Password</label>
                              <input
                                id="toggle-password32"
                                type="password"
                                placeholder="Your Password"
                                disabled={registerMutation.isLoading}
                                {...register("password")}
                              />
                              {formState.errors.password && (
                                <small className="text-danger">{formState.errors.password.message}</small>
                              )}
                              <span className="fa fa-fw fa-eye field-icon toggle-password3" />
                            </div>
                            <div className="form__grp">
                              <label htmlFor="toggle-password33">Confirm Password</label>
                              <input
                                id="toggle-password33"
                                type="password"
                                placeholder="Confirm Password"
                                disabled={registerMutation.isLoading}
                                {...register("confirmPassword")}
                              />
                              {formState.errors.confirmPassword && (
                                <small className="text-danger">{formState.errors.confirmPassword.message}</small>
                              )}
                              <span className="fa fa-fw fa-eye field-icon toggle-password3" />
                            </div>
                            <div className="login__signup">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remem2" />
                                <label className="form-check-label" htmlFor="remem2">
                                  Remember me
                                </label>
                              </div>
                              <Link href="URL:void(0)">Forgot Password</Link>
                            </div>
                            <div className="create__btn">
                              <button type="submit" className="cmn--btn" disabled={registerMutation.isLoading}>
                                <span>{registerMutation.isLoading ? "Registering..." : "Sign Up"}</span>
                              </button>
                            </div>
                            <p>
                              Do you have an account?{" "}
                              <Link
                                href="URL:void(0)"
                                data-bs-toggle="modal"
                                data-bs-target="#signInPin"
                              >
                                Login
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

export default SignUpModal;
