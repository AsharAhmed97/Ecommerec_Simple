import React, { useState, useContext, useEffect } from "react";
import { ContextCreate } from "./ContextCreate";
import { FaShoppingCart } from "react-icons/fa";

import ShowCart from "./ShowCart";
import Header from "./Header";
const getLocalStorageData = () => {
  let items = localStorage.getItem("items");

  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};
const ShowCards = () => {
  const { sendApi } = useContext(ContextCreate);
  const [dataShow, setDataShow] = useState(getLocalStorageData());
  const [totalShow, setTotalShow] = useState(0);
  // const [shipment, setShipment] = useState(0);

  const quantityMinus = (id) => {
    if (dataShow[id].quantity > 1) {
      dataShow[id].quantity -= 1;
      calculateFunction();
    }
  };
  const quantityPlus = (id) => {
    dataShow[id].quantity += 1;
    calculateFunction();
  };

  const calculateFunction = () => {
    let data = 0;
    dataShow.map((elem) => (data += elem.Price * elem.quantity));
    setTotalShow(data);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(dataShow));
    calculateFunction();
  }, [dataShow]);

  const removeItem = (i) => {
    dataShow[i].quantity = 1;
    let filteredDataShow = dataShow.filter((elem, id) => {
      return i != id;
    });
    setDataShow(filteredDataShow);
  };

  let shipment = 0;
  if (totalShow > 0 && totalShow < 5000) {
    shipment = 500;
  }
  if (totalShow >= 5000) {
    shipment = 0;
  }
  const showDataInCart = (i) => {
    const findItem = dataShow.find((elem) => elem.id == i.id);
    if (findItem) {
      let outcome = dataShow.map((elem) => {
        if (elem.id == findItem.id) {
          elem.quantity += 1;
          return elem;
        } else {
          return elem;
        }
      });
      setDataShow(outcome);
      // calculateFunction();
    } else {
      setDataShow([...dataShow, { ...i, quantity: 1 }]);
    }
  };
  return (
    <>
      <ContextCreate.Provider value={{ totalShow }}>
        <Header />
      </ContextCreate.Provider>
      <div className="d-flex justify-content-around">
        {sendApi.map((elem) => (
          <div className="card" style={{ width: "18rem" }} key={elem.id}>
            <img
              className="card-img-top"
              src={elem.Image}
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{elem.Name}</h5>
              <p className="card-text">{elem.Price}</p>
              <button
                className="btn btn-success"
                onClick={() => showDataInCart(elem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ContextCreate.Provider
        value={{
          dataShow,
          quantityPlus,
          quantityMinus,
          removeItem,
          totalShow,
          shipment,
        }}
      >
        <ShowCart />
      </ContextCreate.Provider>
    </>
  );
};

export default ShowCards;
