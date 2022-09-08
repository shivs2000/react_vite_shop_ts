import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = (props: StoreProps) => {
  console.log(props);
  const quantity = 1;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-content-baseline  mb-4">
          <span className="fs-2">{props.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to cart</Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center "
                style={{ gap: ".5rem" }}
              >
                <Button> +</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in Cart
                </div>

                <Button>-</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
