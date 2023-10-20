import { Link } from "react-router-dom";

export const BackForward = ({
  lastStep,
  lastStepText = "Go back",
  nextStep,
  nextStepText = "Next Step",
}) => {
  return (
    <div className="position-relative footer-box">
      <div className="footer col-12">
        {window.location.pathname != "/" ? (
          <Link to={lastStep}>
            <button className="goback">{lastStepText}</button>
          </Link>
        ) : (
          ""
        )}
        <Link to={nextStep}>
          <button className="next btn">{nextStepText}</button>
        </Link>
      </div>
    </div>
  );
};
