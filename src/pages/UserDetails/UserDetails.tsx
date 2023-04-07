import React, { useEffect, useState } from "react";
import "./UserDetails.scss";
import Layout from "../../layout/Layout";
import ArrowLeft from "../../assets/icons/ArrowLeft.svg";
import Avatar from "../../assets/icons/avatar.svg";
import { Tab } from "@headlessui/react";
import General from "./Component/General";
import Document from "./Component/Document";
import Bank from "./Component/Bank";
import Loans from "./Component/Loans";
import Savings from "./Component/Savings";
import AppSystem from "./Component/AppSystem";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserType {
  [key: string]: any;
}

type UserInfoType = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  accountBalance: string;
  accountNumber: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

const UserDetails = () => {
  const [tab, setTab] = useState(0);
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState<UserType[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    accountBalance: "",
    accountNumber: "",
    firstName: "",
    lastName: "",
    avatar: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleTabChange = (num: number) => {
    setTab(num);
  };

  const handleBlackList = (id: number) => {
    const storedUsers = localStorage.getItem("allUsers");
    console.log("storedUers");

    if (storedUsers) {
      let newAllUsers = JSON.parse(storedUsers);
      newAllUsers[id].status = "blacklisted";
      localStorage.setItem("allUsers", JSON.stringify(newAllUsers));
    }
  };

  const handleActive = (id: number) => {
    const storedUsers = localStorage.getItem("allUsers");
    if (storedUsers) {
      let newAllUsers = JSON.parse(storedUsers);
      newAllUsers[id].status = "active";
      localStorage.setItem("allUsers", JSON.stringify(newAllUsers));
    }
  };

  const fetchUser = async () => {
    try {
      const user = (
        await axios.get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`
        )
      ).data;

      if (user) {
        const {
          orgName,
          userName,
          email,
          phoneNumber,
          accountBalance,
          accountNumber,
          profile,
        } = user;

        setUserInfo({
          orgName,
          userName,
          email,
          phoneNumber,
          accountBalance,
          accountNumber,
          firstName: profile.firstName,
          lastName: profile.lastName,
          avatar: profile.avatar,
        });

        setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    const storedItem = localStorage.getItem("user");
    if (storedItem) {
      const parsedObject = JSON.parse(storedItem);
      setUserData(parsedObject);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Layout>
      <div className="users">
        <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          <img src={ArrowLeft} alt="" />{" "}
          <span className="users__back">Back to User</span>
        </div>
        <div
          style={{
            margin: "30px 0 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 style={{ color: "#545F7D" }}>Users Details</h3>
          </div>
          <div>
            <button
              onClick={(e) => handleBlackList(Number(params.id) - 1)}
              className="users__blacklist-status"
            >
              Blacklist User
            </button>
            <button
              onClick={(e) => handleActive(Number(params.id) - 1)}
              className="users__active-status"
            >
              Activate User
            </button>
          </div>
        </div>
        <div className="users__table">
          <div className="users__details">
            <div className="users__details__item j-between">
              <div style={{ marginRight: "10px" }}>
                <img
                  style={{ borderRadius: "50%" }}
                  src={userInfo ? userInfo.avatar : Avatar}
                  alt=""
                />
              </div>
              <div className="a-center">
                <div>
                  <h3 className="users__details__item__heading">
                    {userInfo.firstName} {userInfo.lastName}
                  </h3>
                  <p className="users__details__item__small">
                    {userInfo.userName}
                  </p>
                </div>
              </div>
            </div>
            <div className="users__details__item users__details__line">
              <div className="a-center">
                <div>
                  <h3
                    className="users__details__item__heading"
                    style={{ fontSize: "1em", fontWeight: "400" }}
                  >
                    User's Tier
                  </h3>
                  <p className="users__details__item__small">***</p>
                </div>
              </div>
            </div>
            <div className="users__details__item">
              <div className="a-center">
                <div>
                  <h3 className="users__details__item__heading">
                    &#8358; {Number(userInfo.accountBalance).toLocaleString()}
                  </h3>
                  <p className="users__details__item__small">
                    {userInfo.accountNumber}/Providus Bank
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="users__tab">
            <div
              className={`users__tab__header${tab === 0 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(0)}
            >
              General Details
            </div>
            <div
              className={`users__tab__header${tab === 1 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(1)}
            >
              Documents
            </div>
            <div
              className={`users__tab__header${tab === 2 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(2)}
            >
              Bank Details
            </div>
            <div
              className={`users__tab__header${tab === 3 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(3)}
            >
              Loans
            </div>
            <div
              className={`users__tab__header${tab === 4 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(4)}
            >
              Savings
            </div>
            <div
              className={`users__tab__header${tab === 5 ? `__active` : ""}`}
              onClick={(e) => handleTabChange(5)}
            >
              App & System
            </div>
          </div>
        </div>

        <div className="users__table">
          {tab === 0 && <General userDetails={user} />}
          {tab === 1 && <Document userDetails={user} />}
          {tab === 2 && <Bank userDetails={user} />}
          {tab === 3 && <Loans userDetails={user} />}
          {tab === 4 && <Savings userDetails={user} />}
          {tab === 5 && <AppSystem userDetails={user} />}
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
