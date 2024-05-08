import type { PaletteMode } from '@mui/material';
import { deepOrange, deepPurple, purple } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					primary: {
						main: '#673ab7',
					},
					secondary: {
						main: '#673ab7',
					},
					divider: purple[400],
					background: {
						default: purple[100],
						paper: purple[200],
					},
					text: {
						primary: deepPurple[800],
						secondary: deepOrange[50],
					},
				}
			: {
					primary: {
						main: '#ea80fc',
					},
					secondary: {
						main: purple[100],
					},
					divider: purple[300],
					background: {
						default: purple[900],
						paper: purple[700],
					},
					text: {
						primary: purple[50],
						secondary: purple[100],
					},
				}),
	},
});
