import Link from 'next/link'

export function Nav() {
	return (
		<div>
			<ul>
				<li>
					<Link href={'/'}>MVVM</Link>
				</li>
				<li>
					<Link href={'/mvc'}>MVC</Link>
				</li>
			</ul>
		</div>
	)
}
