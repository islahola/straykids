import { useAppContext } from "../contex/app-contex";

function Intro() {
  const contex = useAppContext()
  return (
    <div className="intro">
      <p>
      { (contex.user == "") ? "STAY" : contex.user}, DO YOU WANT TO BE 
      </p>
    </div>
  );
}

export default Intro;
