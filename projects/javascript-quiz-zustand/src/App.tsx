import { Container, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useQuestionsStore } from './store/questions.store';
import { Start } from './components/Start';
import { Game } from './components/Game';
import { SwitchTheme } from './components/Theme';
import { useThemeStore } from './store/theme.store';
import { useMemo } from 'react';
import { getDesignTokens } from './theme';

function App() {
	const questions = useQuestionsStore((state) => state.questions);
	const mode = useThemeStore((state) => state.mode);
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				<Container maxWidth='sm'>
					<Stack
						direction='row'
						gap={2}
						alignItems='center'
						justifyContent='center'>
						<Typography component='h1' variant='h2'>
							JavaScript Quiz
						</Typography>
						<SwitchTheme theme={theme} />
					</Stack>
					<Stack
						padding={2}
						direction='column'
						gap={2}
						alignItems='center'
						justifyContent='center'>
						{questions.length === 0 && <Start />}
						{questions.length > 0 && <Game />}
					</Stack>
				</Container>
			</main>
		</ThemeProvider>
	);
}

export default App;
