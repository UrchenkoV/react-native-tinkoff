export type TAccountCurrency = "RUB" | "USD";

export type TAccountName = "Tinkoff Black" | "Tinkoff All Airlines";

export interface IAccount {
  id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TAccountCurrency;
  name: TAccountName;
}
