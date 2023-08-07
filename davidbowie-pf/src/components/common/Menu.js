/*
	--Redux-tookit으로 client State전역 관리하는 작업 순서--
	{open: false} false면 메뉴제거 / true면 메뉴오픈 
	menuSlice.js를 만들어서 위의 정보값을 초기 전역 state로 등록
	reducer에는 해당 전역 state값을 변경해주는 함수를 등록 (close, toggle)
	해당 함수를 원하는 컴포넌트에서 자유롭게 호출해서 전역 state변경하도록 
*/

import { useSelector, useDispatch } from 'react-redux';
//menuSlice로 부터 전역state값을 변경해주는 close함수를 import
import { close } from '../../redux/menuSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Menu() {
	const active = { color: '#ff6c00' };
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) dispatch(close());
		});
	}, [dispatch]);

	return (
		<AnimatePresence>
			{menu && (
				<motion.nav
					id='mobilePanel'
					initial={{ opacity: 0, y: -600 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, y: -600, transition: { duration: 0.5 } }}
					//닫기버튼 클릭시 전역state를 변경하는 close함수를 호출해서 그 결과값인 action객체를 dispatch로 전달
					onClick={() => dispatch(close())}
				>
					<h1>
						{/* <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/db-logo.png`}
                alt={"BOWIE IN BERLIN"}
              />
            </Link> */}
					</h1>
					<ul id='gnbMo'>
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
					</ul>
					<ul className='sns'>
						<li>( LINKDEIN )</li>
						<li>( BEHANCE )</li>
						<li>( INSTAGRAM )</li>
						<li>( PINTEREST )</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;
