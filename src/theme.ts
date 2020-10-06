import { createMuiTheme } from "@material-ui/core/styles";
import { cyan, blue, green } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createPalette" {
	interface Palette {
		neutral: PaletteColor;
	}
	interface PaletteOptions {
		neutral: PaletteColorOptions;
	}
}

const theme = createMuiTheme({
	palette: {
		neutral: {
			main: green[700],
		},
		primary: {
			main: blue[700],
		},
		secondary: {
			main: cyan[700],
		},
	},
});

export default theme;
