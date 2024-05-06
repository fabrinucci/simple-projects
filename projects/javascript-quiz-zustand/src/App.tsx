import { Container, Stack, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useQuestionsStore } from './store/questions.store';
import { Start } from './components/Start';
import { Game } from './components/Game';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	const questions = useQuestionsStore((state) => state.questions);

	return (
		<ThemeProvider theme={darkTheme}>
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
