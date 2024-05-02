import { useQuestionsStore } from '../store/questions.store';
import { Question } from './Question';

export const Game = () => {
	const questions = useQuestionsStore((state) => state.questions);
	const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
	const questionInfo = questions[currentQuestion];

	return (
		<>
			<Question info={questionInfo} />
		</>
	);
};
