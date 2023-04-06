import React from "react";
import "./Card.scss";

type Props = {
  icon: string;
  title: string;
  stats: number;
};

const Card = ({ icon, title, stats }: Props) => {
  return (
    <div className="card">
      <div className="card__icon">
        <img src={icon} alt="" />
      </div>
      <div>
        <p className="card__title">{title}</p>
      </div>
      <div>
        <p className="card__stats">{stats.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;
