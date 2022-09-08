import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = (props: StoreProps) => {
  console.log(props);
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
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
