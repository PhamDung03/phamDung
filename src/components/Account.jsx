import { formatDateTime } from "../utils/stringHelpers";
import Button from "./Button";

const Account = (props) => {
  const { account, onClickEdit, onClickDelete, setSelectAccount } = props;

  return (
    <tr>
      <td>{account.accountId}</td>
      <td>{account.email}</td>
      <td>{account.username}</td>
      <td>{account.fullName}</td>
      <td>{account.departmentName}</td>
      <td>{account.positionName}</td>
      <td>{formatDateTime(account.createDate)}</td>
      <td>
        <Button
          text="Edit"
          textBg="#D6A132"
          onClick={() => {
            setSelectAccount(account);
            onClickEdit();
          }}
        />
      </td>
      <td>
        <Button
          text="Delete"
          textBg="#a32908c8"
          onClick={() => {
            setSelectAccount(account);
            onClickDelete();
          }}
        />
      </td>
    </tr>
  );
};

export default Account;
