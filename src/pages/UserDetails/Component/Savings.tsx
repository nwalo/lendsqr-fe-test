import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const Savings = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">Savings</div>
    </div>
  );
};

export default Savings;
