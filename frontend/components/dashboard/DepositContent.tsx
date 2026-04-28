"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bvisa from "/public/img/profile/bvisa.png";
import visap from "/public/img/profile/visap.png";
import { useDeposit } from "@/hooks";

const depositSchema = z.object({
  amount: z
    .number()
    .positive("Valor deve ser positivo")
    .min(10, "Valor mínimo de depósito é R$ 10")
    .max(10000, "Valor máximo de depósito é R$ 10.000"),
});

type DepositFormData = z.infer<typeof depositSchema>;

const QUICK_VALUES = [20, 30, 200];

const DepositContent = () => {
  const [selectedQuick, setSelectedQuick] = useState<number | null>(null);
  const { deposit, isLoading } = useDeposit();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DepositFormData>({
    resolver: zodResolver(depositSchema),
  });

  const amountField = register("amount", { valueAsNumber: true });

  const handleQuickSelect = (value: number) => {
    setSelectedQuick(value);
    setValue("amount", value, { shouldValidate: true });
  };

  const onSubmit = async (data: DepositFormData) => {
    await deposit(data.amount);
    reset();
    setSelectedQuick(null);
  };

  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Deposit</h3>
      <div className="deposit__complate">
        <h3>Complete Your Deposit</h3>
        <div className="deposit__wallet">
          <div className="deopsit__wallet__items">
            <p>Deposit to Wallet</p>
            <div className="usd__chacnge">
              <span>BRL</span>
            </div>
          </div>
          <div className="deopsit__wallet__items">
            <p>Payment Provider</p>
            <div className="usd__chacnge">
              <span>
                <Image src={bvisa} alt="visa" />
              </span>
            </div>
          </div>
        </div>
        <ul className="quick-value">
          {QUICK_VALUES.map((value) => (
            <li key={value}>
              <h5
                className={selectedQuick === value ? "active" : ""}
                onClick={() => handleQuickSelect(value)}
                style={{ cursor: "pointer" }}
              >
                {value}
              </h5>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="single-input mb__20">
            <input
              type="number"
              step="0.01"
              placeholder="Enter Amount"
              {...amountField}
              onChange={(e) => {
                setSelectedQuick(null);
                void amountField.onChange(e);
              }}
            />
            {errors.amount && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.amount.message}
              </span>
            )}
          </div>
          <div className="btn-area">
            <button className="cmn--btn" type="submit" disabled={isLoading}>
              <span>{isLoading ? "Processando..." : "Deposit"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositContent;
