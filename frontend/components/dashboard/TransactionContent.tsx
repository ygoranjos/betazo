"use client";

import { useTransactions } from "@/hooks";

const TYPE_LABEL: Record<string, string> = {
  DEPOSIT: "Depósito",
  WITHDRAWAL: "Saque",
};

const STATUS_CLASS: Record<string, string> = {
  COMPLETED: "complate",
  PENDING: "pending",
  FAILED: "cancel",
};

const STATUS_LABEL: Record<string, string> = {
  COMPLETED: "Concluído",
  PENDING: "Pendente",
  FAILED: "Falhou",
};

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatAmount = (amount: string) => {
  return `R$ ${parseFloat(amount).toFixed(2).replace(".", ",")}`;
};

const TransactionContent = () => {
  const { data: transactions, isLoading, isError } = useTransactions();

  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Transaction History</h3>
      <div className="casinoform__tabe">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "2rem" }}>
                  Carregando...
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "2rem", color: "red" }}>
                  Erro ao carregar transações.
                </td>
              </tr>
            )}
            {!isLoading && !isError && transactions?.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "2rem" }}>
                  Nenhuma transação encontrada.
                </td>
              </tr>
            )}
            {transactions?.map((tx) => (
              <tr key={tx.id}>
                <td>{formatDate(tx.createdAt)}</td>
                <td>{TYPE_LABEL[tx.type] ?? tx.type}</td>
                <td>{formatAmount(tx.amount)}</td>
                <td className={STATUS_CLASS[tx.status]}>{STATUS_LABEL[tx.status] ?? tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionContent;
