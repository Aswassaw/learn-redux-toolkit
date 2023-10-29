import { Fragment } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export default function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <h1>Cake View</h1>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </Fragment>
  );
}
