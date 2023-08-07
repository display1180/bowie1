import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { memo } from 'react';
import { toggle } from '../../redux/menuSlice';
import { useDispatch } from 'react-redux';

function Header({ type }) {
	const dispatch = useDispatch();
	const active = 'on';
	return (
		<>
			<header className={type}>
				<div className='row'>
					<span>( ABOUT )</span>
					<h1>
						<Link to='/'>
							<img src={`${process.env.PUBLIC_URL}/img/db-logo.png`} alt={'BOWIE IN BERLIN'} />
						</Link>
					</h1>
					<span onClick={() => dispatch(toggle())}>( MENU )</span>
				</div>

				{/* <ul id="gnb">
          <li>
            <NavLink to="/department" activeClassName={active}>
              Department
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeClassName={active}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName={active}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/youtube" activeClassName={active}>
              Youtube
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact" activeClassName={active}>
              Contact
            </NavLink>
          </li> 
          <li>
            <NavLink to="/member" activeClassName={active}>
              Member
            </NavLink>
          </li> 
        </ul>*/}
			</header>
		</>
	);
}

export default memo(Header);
