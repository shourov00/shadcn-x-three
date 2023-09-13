import { cn } from "@/lib/utils.js";
import "./RotatorStyle.scss";
import PropTypes from "prop-types";

const Rotator = ({ className }) => {
  return <div className={cn("box", className)}></div>;
};

Rotator.propTypes = {
  className: PropTypes.string
};

export default Rotator;
