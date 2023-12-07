import Account from "./Account";
// import { Table } from "./AccountFrom.styled";
import { styled , TableContainer , Table} from "@mui/material"

const AccountFrom = ({
  onClickEdit,
  onClickDelete,
  accounts = [],
  setSelectAccount,
}) => {
  return (
    <StyleAccountFrom>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Full name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delele</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, i) => (
            <Account
              account={acc}
              key={i}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              setSelectAccount={setSelectAccount}
            />
          ))}
        </tbody>

      </Table>
      
    </StyleAccountFrom>
  );
};

const StyleAccountFrom = styled(TableContainer)({
  maxWidth: "100%",
  Table: {
    width: "100%", 
    tableLayout: "auto" , 
  }, 
  td:{
    border: "1px solid black", 
    padding: 8
  }, 
  th:{
    border: "1px solid black", 
    padding: 8
  }
})

export default AccountFrom;
