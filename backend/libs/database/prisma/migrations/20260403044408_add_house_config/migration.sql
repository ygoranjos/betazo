-- CreateTable
CREATE TABLE "house_configs" (
    "id" TEXT NOT NULL,
    "min_bet_amount" DECIMAL(18,2) NOT NULL,
    "max_payout_per_ticket" DECIMAL(18,2) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "house_configs_pkey" PRIMARY KEY ("id")
);
