import React from "react";
import Dialog from "react-native-dialog";
import { IPaymentContact, IPaymentOtherItem } from "./types";

interface IPaymentDialog {
  visible: boolean;
  onChangeValue: (value: string) => void;
  contact?: IPaymentContact;
  paymentOther?: IPaymentOtherItem;
}

const PaymentDialog: React.FC<IPaymentDialog> = ({
  visible = false,
  onChangeValue,
  contact,
  paymentOther,
}) => {
  const [isVisible, setIsVisible] = React.useState(visible);
  const [amount, setAmount] = React.useState("");

  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const onClose = () => {
    setIsVisible(false);
  };

  let dispayName = "";

  if (contact) dispayName = contact.displayName;
  else if (paymentOther) dispayName = paymentOther.title;

  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Title>Перевод: ({dispayName})</Dialog.Title>
      <Dialog.Input
        label="Укажите сумму перевода"
        placeholder="Сумма перевода"
        onChangeText={setAmount}
      />
      <Dialog.Button label="Отправить" onPress={() => onChangeValue(amount)} />
      <Dialog.Button label="Отменить" onPress={onClose} />
    </Dialog.Container>
  );
};

export default PaymentDialog;
