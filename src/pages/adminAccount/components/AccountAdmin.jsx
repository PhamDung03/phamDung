import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import { API_DOMAIN } from "../../../constants/schematics";
import { ROLES } from "../../../mockApi/opsition";
import axios from "axios";
import { useUser } from "../../../providers/user-provider";

const AccountAdmin = ({ selectAccount, setSelectAccount }) => {
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const { user } = useUser();
  const onChange = (updateData = {}) => {
    setSelectAccount({ ...selectAccount, ...updateData });
  };
  // Lấy api cho departments
  useEffect(() => {
    axios(`${API_DOMAIN}/departments`)
      .then((res) => {
        setDepartments(res.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatDepartment = () => {
    return departments.map((department) => ({
      value: department.departmentId,
      label: department.departmentName,
    }));
  };

  // Lấy api cho positions
  useEffect(() => {
    axios(`${API_DOMAIN}/positions`)
      .then((res) => {
        setPositions(res.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatPosition = () => {
    return positions.map((position) => ({
      value: position.positionId,
      label: position.positionName,
    }));
  };

  return (
    <from>
      <Input
        label="Email:"
        placeholder="input Email"
        value={selectAccount.email}
        onChange={(e) => onChange({ email: e?.target?.value })}
      />

      <Input
        label="UserName:"
        placeholder="input UserName"
        value={selectAccount.username}
        onChange={(e) => onChange({ username: e.target.value })}
      />

      <Input
        label="FullName:"
        placeholder="input FullName"
        value={selectAccount.fullName}
        onChange={(e) => onChange({ fullName: e.target.value })}
      />

      <Input
        label="Department:"
        placeholder="input department"
        type="select"
        options={formatDepartment()}
        value={selectAccount.departmentId}
        onChange={(e) => onChange({ departmentId: e.target.value })}
      />

      <Input
        label="Position:"
        placeholder="input Position"
        type="select"
        options={formatPosition()}
        value={selectAccount.positionId}
        onChange={(e) => onChange({ positionId: e.target.value })}
      />
      {user?.isAdmin === 1 && (
        <Input
          label="Is Admin:"
          placeholder="input isAdmin"
          type="select"
          options={ROLES}
          value={selectAccount.isAdmin}
          onChange={(e) => onChange({ isAdmin: e.target.value })}
        />
      )}

      {!selectAccount.accountId && (
        <Input
          label="Password:"
          placeholder="input Password"
          value={selectAccount.password}
          onChange={(e) => onChange({ password: e.target.value })}
        />
      )}
    </from>
  );
};

export default AccountAdmin;
