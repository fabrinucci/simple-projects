import { Button } from '@mui/material';
import { useQuestionsData } from '../hooks/useQuestionsData';
import { useQuestionsStore } from '../store/questions.store';

export const Footer = () => {
	const { correct, incorrect, unanswered } = useQuestionsData();
	const reset = useQuestionsStore((state) => state.reset);

	return (
		<footer
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '10px',
				marginTop: '10px',
			}}>
			<strong>{`Correctas ${correct} - Incorrectas ${incorrect} - Sin responder ${unanswered}`}</strong>
			<Button onClick={() => reset()} color='primary' variant='contained'>
				Reiniciar
			</Button>
		</footer>
	);
};
