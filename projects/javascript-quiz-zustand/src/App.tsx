import { createContext } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useQuestionsStore } from './store/questions.store';
import { Start } from './components/Start';
import { Game } from './components/Game';
import { SwitchTheme } from './components/Theme';
import { useTheme } from './hooks/useTheme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
	const { theme, colorMode } = useTheme();
	const questions = useQuestionsStore((state) => state.questions);

	return (
		<ColorModeContext.Provider value={colorMode}>
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
							<SwitchTheme theme={theme} colorMode={colorMode} />
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
		</ColorModeContext.Provider>
	);
}

export default App;
