import { useEffect } from "react";

function BootstrapCard({ data, addToCartHandler }) {
  const { id, title, price, description, category, image, rating } = data;
  const { rate, count } = rating;
  useEffect(() => {
    const arrIds = [1, 3, 5];
    if (arrIds.includes(id)) {
      setTimeout(() => {
        let btn = document.getElementById(`sold-out${id}`);
        // console.log('ran after 3sec')
        btn.innerText = "Sold Out";
        btn.disabled = true;
      }, 1000 * 60);
    }
  }, []);

  return (
    <div className="my-1">
      <div className="card" style={{ border: "0px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {rate} </span>
        </div>
        <img src={!image ? "" : image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          {/* <p className="card-text">{description}</p> */}
          <p className="card-text">
            {/* <small className="text-muted">
              {!category ? "" : category}
            </small> */}
          </p>
          <button
            className="btn btn-sm btn-dark"
            id={`sold-out${id}`}
            onClick={() => addToCartHandler([data])}
          >
            Add To Cart: {price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BootstrapCard;
