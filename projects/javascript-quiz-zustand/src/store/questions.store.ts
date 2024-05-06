import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import confetti from 'canvas-confetti';
import type { Question } from '../types';

interface QuestionsState {
	questions: Question[];
	currentQuestion: number;

	fetchQuestions: (limit: number) => Promise<void>;
	selectedAnswer: (questionId: number, answerIndex: number) => void;
	getPrevQuestion: () => void;
	getNextQuestion: () => void;
	reset: () => void;
}

const storeApi: StateCreator<QuestionsState, [['zustand/devtools', never]]> = (
	set,
	get,
) => ({
	questions: [],
	currentQuestion: 0,

	fetchQuestions: async (limit) => {
		const res = await fetch('http://localhost:5173/data.json');
		const json: Question[] = await res.json();

		const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
		set({ questions }, false, 'FETCH_QUESTIONS');
	},

	selectedAnswer: (questionId, asnwerIndex) => {
		const { questions } = get();
		const newQuestions = structuredClone(questions);
		const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
		const questionInfo = newQuestions[questionIndex];
		const isCorrectUserAnswer = questionInfo.correctAnswer === asnwerIndex;
		if (isCorrectUserAnswer) confetti();

		newQuestions[questionIndex] = {
			...questionInfo,
			userSelectedAnswer: asnwerIndex,
			isCorrectUserAnswer,
		};

		set({ questions: newQuestions }, false, 'SELECTED_ANSWER');
	},

	getPrevQuestion: () => {
		const { currentQuestion } = get();
		const prevQuestion = currentQuestion - 1;
		if (currentQuestion === 0) return;

		set({ currentQuestion: prevQuestion }, false, 'GET_PREV_QUESTION');
	},

	getNextQuestion: () => {
		const { questions, currentQuestion } = get();
		const nextQuestion = currentQuestion + 1;
		if (questions.length === nextQuestion) return;

		set(
			{
				currentQuestion: nextQuestion,
			},
			false,
			'GET_NEXT_QUESTION',
		);
	},

	reset: () => {
		set(
			{
				questions: [],
				currentQuestion: 0,
			},
			false,
			'RESET',
		);
	},
});

export const useQuestionsStore = create<QuestionsState>()(
	devtools(persist(storeApi, { name: 'question-store' })),
);
