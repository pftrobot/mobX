import Link from 'next/link'
import styled from 'styled-components'

export function Nav() {
	return (
		<NavWrapper>
			<ul>
				<li>
					<Link href={'/'}>MVVM</Link>
				</li>
				<li>
					<Link href={'/mvc'}>MVC</Link>
				</li>
			</ul>
		</NavWrapper>
	)
}

const NavWrapper = styled.div`
	ul {
		display: flex;
		justify-content: flex-start;

		li {
			a {
				display: block;
				font-size: 32px;
				font-weight: bold;
				padding: 12px;
			}
		}
	}
`
