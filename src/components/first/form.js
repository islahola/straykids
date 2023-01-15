import { NavLink } from "react-router-dom";

function Name() {
  return (
    <form class="row g-3">
    <div class="col-auto">
      <input class="form-control" id="name" placeholder="Typing..."/>
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