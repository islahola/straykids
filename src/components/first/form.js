import { NavLink } from "react-router-dom";
import { useAppContext } from "../contex/app-contex";
function Name() {
  const contex = useAppContext()
  return (
    <form class="row g-3">
    <div class="col-auto">
        <input class="form-control" type="text" id="name" placeholder="Typing..."
          value={contex.user} onChange={contex.handleName}/>
    </div>
    <div class="col-auto">
      <NavLink className="btn btn-danger mb-3"  to="/home">
              Home
      </NavLink>
    </div>
    </form>
  );
}

export default Name;