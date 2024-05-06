import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useQuestionsStore } from '../store/questions.store';
import { Question } from './Question';
import { Footer } from './Footer';

export const Game = () => {
	const questions = useQuestionsStore((state) => state.questions);
	const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
	const getPrevQuestion = useQuestionsStore((state) => state.getPrevQuestion);
	const getNextQuestion = useQuestionsStore((state) => state.getNextQuestion);

	const questionInfo = questions[currentQuestion];

	return (
		<>
			<Stack
				direction='row'
				gap={2}
				alignItems='center'
				justifyContent='center'>
				<IconButton onClick={getPrevQuestion} disabled={currentQuestion === 0}>
					<ArrowBackIos />
				</IconButton>
				<Typography>
					{currentQuestion + 1} / {questions.length}
				</Typography>
				<IconButton
					onClick={getNextQuestion}
					disabled={currentQuestion === questions.length - 1}>
					<ArrowForwardIos />
				</IconButton>
			</Stack>
			<Question info={questionInfo} />
			<Footer />
		</>
	);
};
