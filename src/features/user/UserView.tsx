import { Fragment, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

export default function UserView() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Fragment>
      <h1>List Of Users</h1>
      {user.loading && <h1>Loading...</h1>}
      {!user.loading && user.error ? <h1>Error: {user.error}</h1> : null}
      {!user.loading && user.users.length ? (
        <>
          {user.users.map((user) => (
            <h1>
              {user.id} - {user.name}
            </h1>
          ))}
        </>
      ) : null}
    </Fragment>
  );
}
