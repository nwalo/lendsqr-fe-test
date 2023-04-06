import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import "./Users.scss";
import Card from "../../components/Card/Card";
import userIcon from "../../assets/icons/user.svg";
import loanIcon from "../../assets/icons/loan.svg";
import savingIcon from "../../assets/icons/savings.svg";
import usersIcon from "../../assets/icons/users.svg";
import filterIcon from "../../assets/icons/filter.svg";
import Badge from "../../components/Badge/Badge";
import Popover from "./Popover";
import axios from "axios";
import Pagination from "./Pagination";
import moment from "moment";

interface UserType {
  [key: string]: any;
}

interface MyOption {
  value: string;
  label: string;
}

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [count, setCount] = useState(1);
  const [noPerPage, setnoPerPage] = useState(10);
  const [usersWithLoan, setusersWithLoan] = useState(0);
  const [usersWithSavings, setusersWithSavings] = useState(0);
  const [page, setPage] = React.useState(1);
  const [selectedOption, setSelectedOption] = useState<MyOption>({
    value: "",
    label: "",
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const label = event.target.options[event.target.selectedIndex].text;
    setSelectedOption({ value, label });
    setnoPerPage(Number(value));
    console.log(value, label);
  };

  const fetchUsers = async () => {
    try {
      let users = (
        await axios.get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
        )
      ).data;
      // console.log(users.slice(0, noPerPage));
      if (users) {
        setUsers(users.slice(0, noPerPage));
        setAllUsers(users);
        setCount(users.length);

        let UWS = users.filter((user: UserType, i: number) => {
          return user.accountBalance > user.education.loanRepayment;
        });
        let UWL = users.filter((user: UserType, i: number) => {
          return user.accountBalance < user.education.loanRepayment;
        });

        setusersWithSavings(UWS.length);
        setusersWithLoan(UWL.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectPage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setnoPerPage(value);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDotClick = () => {
    console.log("dot clicked");
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setUsers(allUsers.slice((value - 1) * noPerPage, value * noPerPage));
  };

  return (
    <div>
      <Layout>
        <div className="users">
          <h3>Users</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card title="Users" icon={userIcon} stats={allUsers.length} />
            <Card title="Active users" icon={usersIcon} stats={2345} />
            <Card
              title="Users with loan"
              icon={loanIcon}
              stats={usersWithLoan}
            />
            <Card
              title="Users with savings"
              icon={savingIcon}
              stats={usersWithSavings}
            />
          </div>
          <div className="users__table">
            <table style={{}}>
              <thead>
                <th>
                  Organization{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th>
                  Username{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th>
                  Email{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th>
                  Phone Number{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th>
                  Date Joined{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th>
                  Status{" "}
                  <img
                    style={{ marginLeft: "5px", width: "12px" }}
                    src={filterIcon}
                    alt=""
                  />
                </th>
                <th></th>
              </thead>
              <tbody>
                {users.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.orgName.slice(0, 10) + "..."}</td>
                      <td>{e.userName}</td>
                      <td>{e?.email}</td>
                      <td>{e.phoneNumber}</td>
                      <td>{moment(e.createdAt).format("lll")}</td>
                      <td>
                        <Badge
                          createdAt={e.createdAt}
                          lastActiveDate={e.lastActiveDate}
                        />
                      </td>
                      <td className="dots" onClick={handleDotClick}>
                        <Popover data={e} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="showing-page">
              Showing{" "}
              <select
                className="select"
                name="noPage"
                id=""
                value={selectedOption.value}
                onChange={handleSelectChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>{" "}
              out of {allUsers.length}
            </div>
            <div>
              {" "}
              <Pagination
                count={count}
                currentPage={page}
                perPage={noPerPage}
                onPageChange={handleChange}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Users;
