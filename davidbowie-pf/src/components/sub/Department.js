import Layout from '../common/Layout';
import { useSelector } from 'react-redux';
import { useRef, useEffect, useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import transition from '../transition';

function Department() {
	const Members = useSelector((store) => store.department.data);
	const container = useRef(null);
	const form = useRef(null);
	const inputName = useRef(null);
	const inputEmail = useRef(null);
	const inputMsg = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const [Success, setSuccess] = useState(false);

	const { kakao } = window;
	// const info = useRef([
	// 	{
	// 		title: '삼성역 코엑스',
	// 		latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// 	{
	// 		title: '넥슨 본사',
	// 		latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// 	{
	// 		title: '서울 시청',
	// 		latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// ]);

	//marker의 정보값을 useMemo로 메모이제이션 해야 되는 이유
	//해당 정보값이 바뀌지않는 static한 값이 아니고 State에 의해서 계속 변경되는 값이기 때문에
	//내부에 index State값이 바뀔때마 임시로 메모이제이션을 풀기 위해서 useMemo에 Index State를 의존성 배열에 등록해야 되기 때문
	// const marker = useMemo(() => {
	// 	return new kakao.maps.Marker({
	// 		position: info.current[Index].latlng,
	// 		image: new kakao.maps.MarkerImage(
	// 			info.current[Index].imgSrc,
	// 			info.current[Index].imgSize,
	// 			info.current[Index].imgPos
	// 		),
	// 	});
	// }, [Index, kakao]);

	//폼메일 전송 함수
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_4wnjvjd', 'template_651z7ig', form.current, '23g8RepczesqKPoIX').then(
			(result) => {
				console.log(result.text);
				setSuccess(true);
				inputName.current.value = '';
				inputEmail.current.value = '';
				inputMsg.current.value = '';
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
			}
		);
	};

	// useEffect(() => {
	// 	container.current.innerHTML = '';
	// 	const mapInstance = new kakao.maps.Map(container.current, {
	// 		center: info.current[Index].latlng,
	// 		level: 3,
	// 	});
	// 	marker.setMap(mapInstance);
	// 	mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
	// 	mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
	// 	setLocation(mapInstance);

	// 	//지도영역에 휠 기능 비활성화
	// 	mapInstance.setZoomable(false);

	// 	const setCenter = () => {
	// 		mapInstance.setCenter(info.current[Index].latlng);
	// 	};

	// 	window.addEventListener('resize', setCenter);
	// 	return () => window.removeEventListener('resize', setCenter);
	// }, [Index, kakao, marker]);

	// useEffect(() => {
	// 	Traffic
	// 		? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
	// 		: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	// }, [Traffic, Location, kakao]);

	return (
		<motion.Layout name={'ABOUT'} txt={' '} bg={'Department.jpg'}>
			<div className='departmentcontact'>
				<div class='row'>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/bowiemugshotcropped.webp`} alt={'bowie'} />
					</div>
					<div className='col'>
						<h3>BACKGROUND</h3>
						<p>
							In the summer of 1974, David Bowie developed a cocaine addiction affecting both his
							physical and mental state. he was ready to rid himself of the drug culture of Los
							Angeles and get sober.
						</p>
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<h3>THE GREAT ESCAPE</h3>
						<p>
							Bowie became fascinated with Berlin, finding it a place of great escape. In love with
							the city, he and Pop decided to move there in a further attempt to kick their drug
							habits and escape the spotlight.
						</p>
					</div>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/bowieiggy.jpg`} alt={'bowie'} />
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/db-s3-low.jpg`} alt={'bowie'} />
					</div>
					<div className='col'>
						<h3>LOW</h3>
						<p>
							The first album in the trilogy was Low. Low's music delves into electronic, ambient,
							art rock and experimental rock. In 1977, Bowie said side one was about himself and his
							"prevailing moods" at the time while side two was about his musical observations
							living in Berlin.
						</p>
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<h3>HEROES</h3>
						<p>
							As the second release of the Berlin Trilogy, "Heroes" (1977) expands on the material
							found on Low. It delves into art rock and experimental rock, while continuing Bowie's
							work in the electronic and ambient genres. Visconti would describe the album as "a
							very positive version of Low".
						</p>
					</div>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/db-s3-heroes.webp`} alt={'bowie'} />
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/db-s3-lodger.jpg`} alt={'bowie'} />
					</div>
					<div className='col'>
						<h3>LODGER</h3>
						<p>
							It was around the time of Lodger (1979) that Bowie began framing his previous two
							albums as the beginning of a Berlin-centred trilogy, concluding with Lodger, largely
							as a marketing technique to support the unusual new album. Lodger features a variety
							of musical styles, including new wave, Middle Eastern music, reggae and krautrock.
						</p>
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<h3>RECEPTION</h3>
						<p>
							Bowie would later describe the trilogy's music as his "DNA". Consequence of Sound
							characterised the trilogy as an "art rock trifecta". Classic Rock History ranked the
							Berlin Trilogy as Bowie's seventh greatest work, calling the three albums a
							"fascinating chapter" in Bowie's life.
						</p>
					</div>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/db-s8.jpg`} alt={'bowie'} />
					</div>
				</div>
				<div class='row'>
					<div className='col'>
						<img src={`${process.env.PUBLIC_URL}/img/bowiepiano.png`} alt={'bowie'} />
					</div>
					<div className='col'>
						<h3>INFLUENCED</h3>
						<p>
							Commentators regard the Berlin Trilogy as among the most innovative works of Bowie's
							career. Alfred Soto also noted the influence of the trilogy, stating that the
							"sepulchral baritone" of the records "rumbled beneath the desiccated landscapes
							created by The Mission U.K., Fields of the Nephilim, Sisters of Mercy and, most
							famously, Bauhaus."
						</p>
					</div>
				</div>
				<div className='row'>
					<div class='history'>
						<h6>HISTORY</h6>
						<dl>
							<dt>1976</dt>
							<dd>
								Came to Berlin
								<span>to rejuvenile his mind</span>
							</dd>
						</dl>
						<dl>
							<dt>1977</dt>
							<dd>
								Low
								<span>Château d'Hérouville</span>
							</dd>
						</dl>
						<dl>
							<dt>1977</dt>
							<dd>
								Heroes<span>Hansa Studios in West Berlin</span>
							</dd>
						</dl>
						<dl>
							<dt>1978</dt>
							<dd>
								Isolar 2 Tour<span>World Tour</span>
							</dd>
						</dl>
						<dl>
							<dt>1979</dt>
							<dd>
								Lodger<span>Mountain Studios in Montreux, Switzerland</span>
							</dd>
						</dl>
						{/* <img src="img/h1.jpg" alt="david 
                bowie in berlin" class="his1">
                    <img src="img/h3.jpg" alt="david bowie in berlin" class="his2">
                    <img src="img/h2.jpg" alt="david bowie in berlin" class="his3"> */}
					</div>
				</div>
				{/* <div id='map' ref={container}></div>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic ON' : 'Traffic OFF'}
				</button> */}

				<ul className='branch'>
					{/* {info.current.map((el, idx) => {
						return (
							<li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
								{el.title}
							</li>
						);
					})} */}
				</ul>

				<div id='formBox'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='row'>
							<div className='col'>
								<label>[Name]</label>
								<input type='text' name='name' ref={inputName} />
							</div>
							<div className='col'>
								<label>[Email]</label>
								<input type='email' name='email' ref={inputEmail} />
							</div>
						</div>
						<label>[Message]</label>

						<textarea name='message' ref={inputMsg} />
						<input type='submit' value='Send' />
					</form>
					{Success && <p>메일이 성공적으로 발송되었습니다.</p>}
				</div>
			</div>
		</motion.Layout>
	);
}

export default transition(Department);
