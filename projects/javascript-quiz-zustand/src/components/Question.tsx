import {
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { green, red } from '@mui/material/colors';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import type { Question as IQuestion } from '../types';
import { useQuestionsStore } from '../store/questions.store';

const getBackgroundColor = (info: IQuestion, asnwerIndex: number) => {
	const { userSelectedAnswer, correctAnswer } = info;

	if (userSelectedAnswer == null) return 'transparent';
	if (asnwerIndex !== correctAnswer && asnwerIndex !== userSelectedAnswer)
		return 'transparent';
	if (asnwerIndex === correctAnswer) return green[600];
	if (asnwerIndex === userSelectedAnswer) return red[600];

	return 'transparent';
};

export const Question = ({ info }: { info: IQuestion }) => {
	const selectedAnswer = useQuestionsStore((state) => state.selectedAnswer);
	const handleSelectedAnswer = (asnwerIndex: number) => () => {
		selectedAnswer(info.id, asnwerIndex);
	};

	return (
		<Card
			sx={{
				padding: '20px',
			}}
			variant='outlined'>
			<Typography variant='h4'>{info.question}</Typography>
			<SyntaxHighlighter language='javascript' style={gradientDark}>
				{info.code}
			</SyntaxHighlighter>
			<List disablePadding>
				{info.answers.map((answer, asnwerIndex) => (
					<ListItem key={asnwerIndex} disablePadding divider>
						<ListItemButton
							disabled={info.userSelectedAnswer != null}
							onClick={handleSelectedAnswer(asnwerIndex)}
							sx={{
								bgcolor: getBackgroundColor(info, asnwerIndex),
							}}>
							<ListItemText sx={{ textAlign: 'center' }} primary={answer} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	);
};
