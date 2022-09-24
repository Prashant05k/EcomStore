import React from "react";

function Items(props) {
  const [data, fn, text] = props.value;
  const { id, title, price, description, category, image, rating } = data;
  const { rate, count } = rating;

  return (
    <>
      <div className="my-3">
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
            <p className="card-text">
              <small className="text-muted">
                {!category ? "" : category} {count} Left
              </small>
            </p>
            <button className="btn btn-sm btn-dark" id={`sold-out${id}`} onClick={() => fn(data)}>
              {text}
              {price}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
