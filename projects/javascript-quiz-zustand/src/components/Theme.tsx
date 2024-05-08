import { Brightness1, Brightness4 } from '@mui/icons-material';
import { Box, IconButton, Theme } from '@mui/material';
import { useThemeStore } from '../store/theme.store';

interface Props {
	theme: Theme;
}

export const SwitchTheme = ({ theme }: Props) => {
	const toggleColorMode = useThemeStore((state) => state.toggleColorMode);
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
				onClick={() => toggleColorMode()}
				color='inherit'>
				{theme.palette.mode === 'dark' ? <Brightness1 /> : <Brightness4 />}
			</IconButton>
		</Box>
	);
};
