import { Link, Outlet } from 'react-router-dom'
import style from './index.module.css'

export const Statistics = () => {
  return (
    <div className={style.container}>
    <ul>
      <li>
        <Link to={"example"}>Example</Link>
      </li>

      <li>
        <Link to={"radialExample"}>RadialBarChartExample</Link>
      </li>
    </ul>
    <div>
      <Outlet/>
    </div>
  </div>
  )
}