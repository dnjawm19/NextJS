import Link from "next/link"
import Router, { useRouter } from "next/router"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const StyledImg = styled.img`
    max-width: 100px;
    margin-bottom: 5px;
`

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

export default function NavBar() {
    const router = useRouter();
    const { pathname } = router;

    const StyledA = styled.a`
        color: ${props => "/" + props.children === pathname ? 'red' : 'blue'}
    `

    return (
        <Nav>
            <StyledImg src="/vercel.svg" />
            <Link href="/" passHref>
                <StyledA>Home</StyledA>
            </Link>
            <Link href="/about" passHref>
                <StyledA>about</StyledA>
            </Link>
        </Nav>
    )
}