import {
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import type { Question as IQuestion } from '../types';

export const Question = ({ info }: { info: IQuestion }) => {
	const { id, answers, code, question } = info;
	return (
		<Card
			sx={{
				padding: '20px',
				bgcolor: '#8125a9bc',
			}}
			variant='outlined'>
			<div key={id}>
				<Typography variant='h4'>{question}</Typography>
				<SyntaxHighlighter language='javascript' style={gradientDark}>
					{code}
				</SyntaxHighlighter>
				<List
					sx={{
						bgcolor: '#9734c1bb',
					}}
					disablePadding>
					{answers.map((answer, index) => (
						<ListItem key={index} disablePadding divider>
							<ListItemButton>
								<ListItemText sx={{ textAlign: 'center' }} primary={answer} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</div>
		</Card>
	);
};
