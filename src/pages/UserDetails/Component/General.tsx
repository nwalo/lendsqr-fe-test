import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const General = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">
        <div className="users__tab__body__heading">Personal Information</div>
        <div className="j-between" style={{ flexWrap: "wrap" }}>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Full Name </div>
            <div className="users__tab__body__value">
              {userDetails.profile?.firstName} {userDetails.profile?.lastName}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Phone Number</div>
            <div className="users__tab__body__value">
              {userDetails.profile?.phoneNumber}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Email Address</div>
            <div className="users__tab__body__value">{userDetails.email}</div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">BVN</div>
            <div className="users__tab__body__value">
              {userDetails.profile?.bvn}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Gender </div>
            <div className="users__tab__body__value">
              {userDetails.profile?.gender}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Marital Status</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Children</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Type of Residence</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items"></div>
          <div className="users__tab__body__items"></div>
        </div>
      </div>

      <div className="users__tab__body">
        <div className="users__tab__body__heading">
          Education and Employment
        </div>
        <div className="j-between" style={{ flexWrap: "wrap" }}>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">level of education</div>
            <div className="users__tab__body__value">
              {userDetails.education?.level}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">employment status</div>
            <div className="users__tab__body__value">
              {userDetails.education?.employmentStatus}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">sector of employment</div>
            <div className="users__tab__body__value">
              {userDetails.education?.sector}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">
              Duration of employment
            </div>
            <div className="users__tab__body__value">
              {userDetails.education?.duration}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">office email</div>
            <div className="users__tab__body__value">
              {userDetails.education?.officeEmail}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Monthly income</div>
            <div className="users__tab__body__value">
              &#8358;{userDetails.education?.monthlyIncome[0]} - &#8358;
              {userDetails.education?.monthlyIncome[1]}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">loan repayment</div>
            <div className="users__tab__body__value">
              &#8358;{userDetails.education?.loanRepayment}
            </div>
          </div>
          <div className="users__tab__body__items"></div>
          <div className="users__tab__body__items"></div>
          <div className="users__tab__body__items"></div>
        </div>
      </div>
      <div className="users__tab__body">
        <div className="users__tab__body__heading">Socials</div>
        <div className="j-between" style={{ flexWrap: "wrap" }}>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Twitter</div>
            <div className="users__tab__body__value">
              {userDetails.socials?.facebook}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Facebook</div>
            <div className="users__tab__body__value">
              {userDetails.socials?.twitter}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Insatgram</div>
            <div className="users__tab__body__value">
              {userDetails.socials?.instagram}
            </div>
          </div>
          <div className="users__tab__body__items"></div>
        </div>
      </div>

      <div className="users__tab__body">
        <div className="users__tab__body__heading">Guarantor</div>
        <div className="j-between" style={{ flexWrap: "wrap" }}>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Full Name</div>
            <div className="users__tab__body__value">
              {" "}
              {userDetails.guarantor?.firstName}{" "}
              {userDetails.guarantor?.lastName}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Phone Number</div>
            <div className="users__tab__body__value">
              {" "}
              {userDetails.guarantor?.phoneNumber}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Email Address</div>
            <div className="users__tab__body__value">
              {" "}
              {userDetails.guarantor?.address}
            </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Relationship</div>
            <div className="users__tab__body__value">{" - "}</div>
          </div>
        </div>
      </div>

      <div className="users__tab__body">
        {/* <div className="users__tab__body__heading">Gurantor</div> */}
        <div className="j-between" style={{ flexWrap: "wrap" }}>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Full Name</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Phone Number</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Email Address</div>
            <div className="users__tab__body__value"> - </div>
          </div>
          <div className="users__tab__body__items">
            <div className="users__tab__body__title">Relationship</div>
            <div className="users__tab__body__value"> - </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
