import { useQuestionsData } from '../hooks/useQuestionsData';

export const Footer = () => {
	const { correct, incorrect, unanswered } = useQuestionsData();
	return (
		<footer
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				marginTop: '10px',
			}}>
			<strong>{`Correctas ${correct} - Incorrectas ${incorrect} - Sin responder ${unanswered}`}</strong>
		</footer>
	);
};
