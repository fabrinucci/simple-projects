import { Button } from '@mui/material';
import { useQuestionsStore } from '../store/questions.store';

const LIMIT_QUESTIONS = 10;

export const Start = () => {
	const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
	const handleFetchQuestions = () => {
		fetchQuestions(LIMIT_QUESTIONS);
	};
	return (
		<Button onClick={handleFetchQuestions} color='primary' variant='contained'>
			Empezar
		</Button>
	);
};
