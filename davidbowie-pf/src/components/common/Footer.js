import { useSelector, useDispatch } from 'react-redux';
//menuSlice로 부터 전역state값을 변경해주는 close함수를 import
import { close } from '../../redux/menuSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';
function Footer() {
	const active = { color: '#ff6c00' };
	const Department = useSelector((store) => store.department.data);
	return (
		<footer>
			<div className='row'>
				{/* <ul className="sitemap"> */}
				{/* <li>( SITEMAP )</li> */}
				{/* <li>
            <NavLink to="/department" activeStyle={active}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeStyle={active}>
              COMMUNITY
            </NavLink>
          </li> */}
				{/* <li>
            <NavLink to="/gallery" activeStyle={active}>
              SOUND
            </NavLink>
          </li>
          <li>
            <NavLink to="/youtube" activeStyle={active}>
              VIDEO
            </NavLink>
          </li> */}
				{/* <li>
              <NavLink to="/contact" activeStyle={active}>
                Contact
              </NavLink>
            </li> */}
				{/* <li>
            <NavLink to="/member" activeStyle={active}>
              MEMBERS
            </NavLink>
          </li> */}
				{/* </ul> */}
				<ul>
					<li>( SITEMAP ) </li>
					<li>
						<NavLink to='/department' activeStyle={active}>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							SOUND
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							VISION
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							VIDEO
						</NavLink>
					</li>
					{/* <li>
              <NavLink to="/contact" activeStyle={active}>
                Contact
              </NavLink>
            </li> */}
					<li>
						<NavLink to='/member' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
					<li>&nbsp;</li>
					<li></li>
				</ul>

				<ul></ul>
				<ul>
					<li>( BERLIN TRILOGY )</li>
					<li>LOW(1977)</li>
					<li>HEROES(1977)</li>
					<li>LODGER(1979)</li>
				</ul>
				{/* <ul>
					<li>( LOCATION )</li>
					<li>
						Hauptstraße 155, <br />
						10827 Berlin, <br />
						Germany
					</li>
				</ul> */}

				<ul>
					<ul>
						<li>( LEGAL )</li>
						<li>PRIVATE POLICY</li>
						<li>TERMS & CONDITIONS</li>
					</ul>
					<ul>
						<li>&nbsp;</li>
					</ul>
				</ul>
				<ul>
					<li>( SNS )</li>
					<li>LINKEDIN</li>
					<li>BEHANCE</li>
					<li>TWITTER</li>
					<li>INSTAGRAM</li>
				</ul>
				<ul></ul>
			</div>
			{/* <h1>DCODELAB</h1> */}
			<div className='wrap'>
				<div className='row'>
					<span>B</span>
					<span>O</span>
					<span>W</span>
					<span>I</span>
					<span>E</span>
					<span>&nbsp;</span>
					<span>I</span>
					<span>N</span>
					<span>&nbsp;</span>
					<span>B</span>
					<span>E</span>
					<span>R</span>
					<span>L</span>
					<span>I</span>
					<span>N</span>
				</div>
				<p className='copyright'>COPYRIGHT © 2023 YOUNGSEO YOOK ALL RIGHTS RESERVED.</p>
			</div>

			{/* <p>COPYRIGHT (C) 2023 DAVID BOWIE ALL RIGHTS RESERVED.</p>
      <p>Private Policy</p> */}
			{/* <p>{`This Company was founded by ${Department[0]?.name} in 2023`}</p> */}
		</footer>
	);
}

export default Footer;
