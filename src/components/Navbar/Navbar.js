import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import { className } from 'postcss-selector-parser';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			{/* Navar start */}
			<Navbar_nav>
				<Nav_left>
					<Toggle id='toggle' onClick={handleClick}>
						<FaBars />
					</Toggle>
					<Logo to='/'>
						<img src='/imgegs/logo.png' alt='' />
					</Logo>
					<NavMenu onClick={handleClick} click={click}>
						<NavItems>
							<NavLinks className='nav_links' to='/'>
								Home
							</NavLinks>
						</NavItems>
						<NavItems>
							Shows <AiFillCaretDown className='i' />
							<ul>
								<li>
									<NavLinks to='/'>show4</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show1</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show2</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show3</NavLinks>
								</li>
							</ul>
						</NavItems>
						<NavItems>
							Movies
							<AiFillCaretDown className='i' />
							<ul>
								<li>
									<NavLinks to='/'>show4</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show1</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show2</NavLinks>
								</li>
								<li>
									<NavLinks to='/'>show3</NavLinks>
								</li>
							</ul>
						</NavItems>
						<NavItems>
							<NavLinks className='nav_links' to='/'>
								Free
							</NavLinks>
						</NavItems>
						<NavItems>
							<NavLinks className='nav_links' to='/'>
								Upcomming
							</NavLinks>
						</NavItems>
					</NavMenu>
				</Nav_left>

				<Nav_right>
					<Search>
						<AiOutlineSearch />
					</Search>
					<p>EN</p>
					<button class='btn' btn='btn'>
						subscribe
					</button>
				</Nav_right>
			</Navbar_nav>
		</>
	);
};

export default Navbar;

export const Navbar_nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7rem 2rem;
	background-color: #000;
	position: fixed;
	width: 100%;
`;
export const Nav_left = styled.div`
	display: flex;
	align-items: center;
`;
export const Toggle = styled.div`
	display: none;
	font-size: 1.5rem;
	cursor: pointer;
	display: none;
	z-index: 6;
	color: #fff;
	@media screen and (max-width: 960px) {
		display: block;
	}
`;
export const Logo = styled.div`
	margin: 0 2.5rem;
	@media screen and (max-width: 960px) {
		margin: 0 1rem;
		img {
			width: 130px;
		}
	}
`;
export const NavMenu = styled.ul`
	display: flex;
	list-style-type: none;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		z-index: 5;
		left: ${({ click }) => (click ? '0px' : '-120%')};
		background: #000;
		width: 100%;
		height: 100vh;
		padding: 8rem 2rem;
		transition: 0.4s all ease-out;
	}
`;
export const NavItems = styled.li`
	/* border: 1px solid red; */
	padding: 0.4rem 0.8rem;
	margin-right: 1rem;
	/* font-weight: bold; */
	font-family: sans-serif;
	cursor: pointer;
	align-items: center;
	color: #fff;
	align-items: center;
	ul {
		margin-top: 1rem;
		position: absolute;
		display: none;
		background-color: #000;
		list-style-type: none;
		li {
			padding: 0.8rem 0.8rem;
			margin-right: 1rem;
			font-family: sans-serif;
			cursor: pointer;
			align-items: center;
			color: #fff;
			align-items: center;
		}
	}

	&:hover ul {
		transition: 0.7s all ease-in;
		display: block;
	}
	&:hover .i {
		transform: rotate(180deg);
		transition: 0.3s all ease-in;
	}

	@media screen and (max-width: 960px) {
		padding-bottom: 2rem;
		font-weight: 700;
		cursor: pointer;
		ul {
			top: 0;
			left: 30px;
			width: 0;
			position: relative;
		}
	}
`;
export const NavLinks = styled(Link)`
	color: #fff;
`;
export const Nav_right = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	p {
		cursor: pointer;
	}

	.btn {
		background: red;
		padding: 0.3rem 0.9rem;
		color: #fff;

		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		margin-left: 1rem;
	}
`;
export const Search = styled.div`
	color: #fff;
	padding-right: 0.8rem;
	font-size: 1.5rem;
	cursor: pointer;
`;
// export const Nav_right = styled.div``;
// export const Nav_right = styled.div``;
