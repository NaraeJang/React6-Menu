import { useState } from "react";

const MenuItem = ({ img, title, price, desc }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">
          {showMore ? desc : `${desc.substring(0, 50)}...`}
        </p>
        <button
          type="button"
          onClick={() => {
            setShowMore(!showMore);
          }}>
          {showMore ? `Read Less` : `Read More`}
        </button>
      </div>
    </article>
  );
};
export default MenuItem;
