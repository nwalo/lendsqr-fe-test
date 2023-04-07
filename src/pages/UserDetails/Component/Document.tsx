import React from "react";

type userProps = {
  userDetails: { [key: string]: any };
};

const Document = ({ userDetails }: userProps) => {
  return (
    <div>
      <div className="users__tab__body">Document</div>
    </div>
  );
};

export default Document;
