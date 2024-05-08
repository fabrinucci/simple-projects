import { createTheme, PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';
import { getDesignTokens } from '../theme';

export const useTheme = () => {
	const [mode, setMode] = useState<PaletteMode>('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === 'light' ? 'dark' : 'light',
				);
			},
		}),
		[],
	);

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return {
		theme,
		colorMode,
	};
};
