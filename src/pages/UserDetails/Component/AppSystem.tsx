import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const AppSystem = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">AppSystem</div>
    </div>
  );
};

export default AppSystem;
