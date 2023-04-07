import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const Loans = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">Loans</div>
    </div>
  );
};

export default Loans;
