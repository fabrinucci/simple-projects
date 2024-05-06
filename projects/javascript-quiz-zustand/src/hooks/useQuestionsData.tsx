import { useQuestionsStore } from '../store/questions.store';

export const useQuestionsData = () => {
	const questions = useQuestionsStore((state) => state.questions);
	let correct = 0;
	let incorrect = 0;
	let unanswered = 0;

	questions.forEach((question) => {
		if (question.isCorrectUserAnswer == null) return unanswered++;
		if (question.isCorrectUserAnswer === true) return correct++;
		if (question.isCorrectUserAnswer === false) return incorrect++;
	});

	return { correct, incorrect, unanswered };
};
