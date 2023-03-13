import { IFooterItem } from "./../Footer/types";

export interface IPaymentContact {
  id: string;
  name: string;
  cardNumber: string;
  displayName: string;
}

export interface IPaymentOtherItem extends Pick<IFooterItem, "iconName"> {
  title: string;
}
