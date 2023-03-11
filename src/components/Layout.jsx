import { Outlet, Link} from "react-router-dom";
import "../css/Layout.css";
import plane from "../assets/airplane.png"
function Layout()
{

return (
	<div className='layout'>
      <div className='header'>
        <h1>Airport Network Flight Scheduler</h1>
        <img src={plane} alt='plane' />
      </div>
      <nav>
        <ul className='nav'>
          <li>
            <Link to="/home" state={{ toggle : "false"}}>Home</Link>
          </li>
          <li>
            <Link to="/arrival">Arrival</Link>
          </li>
          <li>
            <Link to="/departure">Departure</Link>
          </li>
        </ul>
      </nav>
    </div>
)
}

export default Layout