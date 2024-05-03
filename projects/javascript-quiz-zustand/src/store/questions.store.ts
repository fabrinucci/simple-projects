import { create } from 'zustand';
import type { Question } from '../types';

interface QuestionsState {
	questions: Question[];
	currentQuestion: number;
	fetchQuestions: (limit: number) => Promise<void>;
	selectedAnswer: (questionId: number, answerIndex: number) => void;
}

export const useQuestionsStore = create<QuestionsState>()((set, get) => ({
	questions: [],
	currentQuestion: 0,

	fetchQuestions: async (limit) => {
		const res = await fetch('http://localhost:5173/data.json');
		const json: Question[] = await res.json();

		const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
		set({ questions });
	},

	selectedAnswer: (questionId, asnwerIndex) => {
		const { questions } = get();
		const newQuestions = structuredClone(questions);
		const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
		const questionInfo = newQuestions[questionIndex];
		const isCorrectUserAnswer = questionInfo.correctAnswer === asnwerIndex;

		newQuestions[questionIndex] = {
			...questionInfo,
			userSelectedAnswer: asnwerIndex,
			isCorrectUserAnswer,
		};

		set({ questions: newQuestions });
	},
}));
