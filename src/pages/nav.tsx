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
				<li>
					<Link href={'/readme'}>MobX</Link>
				</li>
				<li>
					<Link href={'/mobx-core'}>MobXCore</Link>
				</li>
			</ul>
		</NavWrapper>
	)
}

const NavWrapper = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 0;

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
