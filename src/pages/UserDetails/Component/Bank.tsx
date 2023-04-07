import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const Bank = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">Bank</div>
    </div>
  );
};

export default Bank;
