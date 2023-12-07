import Button from "../../components/Button";
import AccountFrom from "../../components/AccountFrom";
import AccountAdmin from "./components/AccountAdmin";
import Dialog from "../../components/Dialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_DOMAIN } from "../../constants/schematics";
import { Box, Pagination, styled, Typography } from "@mui/material";

const constructorAccount = {
  email: "",
  userName: "",
  fullName: "",
  departmentId: 1,
  positionId: 1,
  createAt: "2003-12-11",
};

const AdminAccount = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectAccount, setSelectAccount] = useState(constructorAccount);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadAccount, setReloadAccount] = useState(false);
  const [metaData, setMetaData] = useState({
    page: 1,
    limit: 6,
  });

  const [total, setTotal] = useState(0);

  const handleChange = (event, value) => {
    setMetaData({ ...metaData, page: value });
  };

  const onReloadAccount = () => {
    setReloadAccount(!reloadAccount);
  };

  const onClickEdit = () => {
    setShowEditDialog(true);
  };

  const onClickDelete = () => {
    setShowDeleteDialog(true);
  };

  const onCloseDialog = () => {
    setShowEditDialog(false);
    setShowDeleteDialog(false);
  };

  const onComfirmDelete = () => {
    axios
      .delete(`${API_DOMAIN}/accounts/${selectAccount.accountId}`)
      .then((res) => {
        setReloadAccount(!reloadAccount);
        onCloseDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCreateAccount = () => {
    setSelectAccount(constructorAccount);
    setShowEditDialog(true);
  };

  const onComfirmCreate = () => {
    axios
      .post(`${API_DOMAIN}/accounts`, selectAccount)
      .then((res) => {
        onCloseDialog();
        onReloadAccount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onComfirmUpdate = () => {
    axios
      .put(`${API_DOMAIN}/accounts/${selectAccount.accountId}`, selectAccount)
      .then((res) => {
        onReloadAccount();
        onCloseDialog();
      })
      .catch((err) => {
        onCloseDialog();
      });
  };

  useEffect(() => {
    setLoading(true);
    axios(
      `${API_DOMAIN}/accounts?page=${metaData.page}&limit=${metaData.limit}`
    )
      .then((res) => {
        setLoading(false);
        setAccounts(res.data.data || []);
        setTotal(res.data.metadata.total || 0);
        console.log(metaData.page, metaData.limit);
      })
      .catch((err) => {
        setAccounts([]);
        setLoading(false);
        console.log(err);
      });
  }, [reloadAccount, metaData]);

  // const onClickNext = () => {
  //     const pageQuantity = Math.ceil(total / metaData.limit) ;
  //     const nextPageIdx = metaData.page + 1 ;
  //     setMetaData({...metaData, page: nextPageIdx > pageQuantity ? 1 : nextPageIdx
  //     });
  // }

  // const onClickBack = () => {
  //     const pageQuantity = Math.ceil(total / metaData.limit) ;
  //     const nextPageIdx = metaData.page - 1 ;
  //     setMetaData({...metaData, page: nextPageIdx <= 0 ? pageQuantity : nextPageIdx
  //     });
  // }

  return (
    <StyleAdminAccount>
      {/* Button Add new account  */}
      <Box m={"8px 24px"}>
        <Button
          textBg="var(--app-color)"
          text="Create new account"
          onClick={onClickCreateAccount}
        />
      </Box>

      {/* Title */}
      <Typography align="center" variant="h5" m={"8px"}>
        Account list
      </Typography>

      {/* List Account  */}
      <AccountFrom
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        accounts={accounts}
        setSelectAccount={setSelectAccount}
      />
      {/* Phân Trang */}
      {/* <Pagination 
                limit={metaData.limit} 
                page={metaData.page} 
                {...{total, onClickNext, onClickBack }}/> */}

      {!loading && accounts.length < 1 && <p>Trống</p>}
      
      {/* Phân Trang */}
      <Pagination
        className="pagination"
        count={Math.ceil(total / metaData.limit)}
        color="primary"
        onChange={handleChange}
      />

      {/* loading */}
      {loading && <p>Loadding...</p>}

      {showEditDialog && (
        <Dialog
          title={(selectAccount.accountId ? "Edit " : "Create ") + "account"}
          onClose={onCloseDialog}
          onClick={onCloseDialog}
          onComfirm={
            selectAccount.accountId ? onComfirmUpdate : onComfirmCreate
          }
          showComfrimEdit
          showFooter
        >
          <AccountAdmin {...{ selectAccount, setSelectAccount }} />
        </Dialog>
      )}

      {showDeleteDialog && (
        <Dialog
          title="Delete account"
          onClose={onCloseDialog}
          onClick={onCloseDialog}
          showFooterDelete
          onComfirm={onComfirmDelete}
        >
          <h2 style={{ textAlign: "center" }}>Would you like to Delete ?</h2>
        </Dialog>
      )}
    </StyleAdminAccount>
  );
};

const StyleAdminAccount = styled(Box)({
  ".pagination": {
    margin: "8px 0 0 39% ",
  },
});

export default AdminAccount;
