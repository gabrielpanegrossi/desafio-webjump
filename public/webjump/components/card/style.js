import styled from 'styled-components';

export const Card = styled.section`
	.card-information {
		${(props) => (props.heightParameter ? 'height: 120px;' : 'height:80px;')}
	}
`;
