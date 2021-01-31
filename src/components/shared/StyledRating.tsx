import { withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { blue } from "@material-ui/core/colors";

const StyledRating = withStyles({
	iconFilled: {
		color: blue[700],
	},
})(Rating);

export default StyledRating;
