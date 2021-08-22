import Link from 'next/dist/client/link';

export default function MenuOption(props) {
	return (
		<Link href="#">
			<a onClick={props.onClickFunction}>{props.children}</a>
		</Link>
	);
}
