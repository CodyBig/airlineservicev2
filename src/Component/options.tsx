
import './passenger';

import { NavLink } from 'react-router-dom';
function Options() {
    
  return (
      <>
    <div className="passengers">
    <NavLink
    to="/passenger">
    <button>Render Passenger</button>
    </NavLink>
    </div>

    <div className = "flights">
    <NavLink
    to="/flights">
    <button>Render Flights</button>
    </NavLink>
    </div>
    </>
  );
}

export default Options;
