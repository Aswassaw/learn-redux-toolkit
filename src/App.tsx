import {Fragment} from 'react'
import CakeView from './features/cake/CakeView';
import UserView from './features/user/UserView';

export default function App() {
  return (
    <Fragment>
      <h1>APP</h1>
      <CakeView />
      <UserView />
    </Fragment>
  )
}
