import { Brightness1, Brightness4 } from '@mui/icons-material';
import { Box, IconButton, Theme } from '@mui/material';

interface Props {
	theme: Theme;
	colorMode: {
		toggleColorMode: () => void;
	};
}
export const SwitchTheme = ({ theme, colorMode }: Props) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
			}}>
			<IconButton
				size='large'
				onClick={colorMode.toggleColorMode}
				color='inherit'>
				{theme.palette.mode === 'dark' ? <Brightness1 /> : <Brightness4 />}
			</IconButton>
		</Box>
	);
};
