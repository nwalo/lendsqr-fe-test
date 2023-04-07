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
import { useNavigate } from "react-router-dom";

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
  const [userData, setUserData] = useState<any>(null);
  const [count, setCount] = useState(1);
  const [noPerPage, setnoPerPage] = useState(5);
  const [usersWithLoan, setusersWithLoan] = useState(0);
  const [usersWithSavings, setusersWithSavings] = useState(0);
  const [page, setPage] = React.useState(1);
  const [selectedOption, setSelectedOption] = useState<MyOption>({
    value: "",
    label: "",
  });
  const navigate = useNavigate();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const label = event.target.options[event.target.selectedIndex].text;
    setSelectedOption({ value, label });
    setnoPerPage(Number(value));
    setUsers(
      allUsers.slice(
        Number(Number(page) - 1) * Number(value),
        Number(page) * Number(value)
      )
    );
  };

  const fetchUsers = async () => {
    try {
      console.log("fetching ...");

      let use = localStorage.getItem("allUsers");
      if (use) {
        let usersRes = JSON.parse(use);

        if (usersRes) {
          setUsers(usersRes.slice(0, noPerPage));
          setAllUsers(usersRes);
          setCount(usersRes.length);

          let UWS = usersRes.filter((user: UserType, i: number) => {
            return user.accountBalance > user.education.loanRepayment;
          });
          let UWL = usersRes.filter((user: UserType, i: number) => {
            return user.accountBalance < user.education.loanRepayment;
          });

          setusersWithSavings(UWS.length);
          setusersWithLoan(UWL.length);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    const storedItem = localStorage.getItem("user");
    if (storedItem) {
      const parsedObject = JSON.parse(storedItem);
      setUserData(parsedObject);
    } else {
      navigate("/login");
    }
  }, []);

  const handleDotClick = () => {
    console.log("dot clicked");
    fetchUsers();
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Card title="Users" icon={userIcon} stats={12345} />
            <Card title="Active users" icon={usersIcon} stats={2345} />
            <Card title="Users with loan" icon={loanIcon} stats={234} />
            <Card title="Users with savings" icon={savingIcon} stats={1145} />
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
                          userstatus={e.status}
                        />
                      </td>
                      <td className="dots">
                        <Popover
                          data={e}
                          dataIndex={i}
                          handleDotClick={handleDotClick}
                        />
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
