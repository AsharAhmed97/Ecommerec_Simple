import React, { useContext, useEffect, useState } from "react";
import { ContextCreate } from "./ContextCreate";
import Header from "./Header";

const ShowCart = () => {
  const {
    dataShow,
    quantityPlus,
    quantityMinus,
    removeItem,
    totalShow,
    shipment,
  } = useContext(ContextCreate);
  console.log("dataShow", dataShow);
  return (
    <>
      <table className="table table-bordered mt-5">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Add Quantity</th>
            <th>Quantity</th>
            <th>Remove Qunatity</th>
            <th>Image</th>
          </tr>

          {dataShow.map((elem, i) => (
            <tr key={i}>
              <td>{elem.Name}</td>
              <td>{elem.Price * elem.quantity}</td>
              <td>
                <button onClick={() => quantityPlus(i)}>+</button>
              </td>
              <td>{elem.quantity}</td>
              <td>
                <button onClick={() => quantityMinus(i)}>-</button>
              </td>
              <td>
                <img
                  src={elem.Image}
                  alt="image Show"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                {" "}
                {dataShow.status ? (
                  quantityPlus
                ) : (
                  <button
                    onClick={() => removeItem(i)}
                    className="btn btn-danger"
                  >
                    Remove Item
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>Total Price is: {totalShow}</div>
      <div>
        {" "}
        Shipment Charges:{" "}
        {totalShow < 5000 ? shipment : "free on orders of 5000 and above"}
      </div>
      <div>Your Total bill is : {totalShow + shipment}</div>
    </>
  );
};

export default ShowCart;
