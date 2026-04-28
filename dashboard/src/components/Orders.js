import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrdrs,setAllOrders]=React.useState([]);

  useEffect(()=>{
    fetch("http://localhost:3002/allOrders")
    .then(res=>res.json())
    .then(data=>{
      setAllOrders(data);
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <>
      <h3 className="title">Orders ({allOrdrs.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrdrs.map((stock,index)=>{
            return(
               <tr key={index} >
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{stock.mode}</td>
          </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {allOrdrs.map((order)=>{
               return order.price.toLocaleString("en-IN");
            })}
          </h5>
          <p>Total investment</p>
        </div>
      </div>
    </>
  );
};

export default Orders;
