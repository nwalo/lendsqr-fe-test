import React from "react";
import "./Badge.scss";

type Props = {
  createdAt: string;
  lastActiveDate: string;
  userstatus: string;
};

const Badge = ({ createdAt, lastActiveDate, userstatus }: Props) => {
  let c = new Date(createdAt).getMilliseconds();
  let l = new Date(lastActiveDate).getMilliseconds();
  let status = "active";

  if (l > c) {
    status = "active";
  } else if (l < c) {
    status = "inactive";
  } else if (l === c) {
    status = "pending";
  } else {
    status = "blacklisted";
  }

  return (
    <div className="badge">
      <div
        className={`badge__status badge__${userstatus ? userstatus : status}`}
      >
        <div>{userstatus ? userstatus : status}</div>
      </div>
    </div>
  );
};

export default Badge;
