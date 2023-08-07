import { memo } from 'react';

function Visual() {
	console.log('visual');

	return (
		<figure id='visual' className='myScroll'>
			<video src={process.env.PUBLIC_URL + '/img/DJ1.mp4'} loop autoPlay muted></video>
			<div className='h2'>
				<h2>
					BOWIE <br />
					IN BERLIN
					{/* <em>
						<i>BOWIE IN</i>
						<br />
						BERLIN
					</em> */}
				</h2>
			</div>
			<p class='texts'>
				CONSISTS OF : <br />
				LOW(1977), HEROES(1977), LODGER(1979)
				{/* */}
			</p>
		</figure>
	);
}

export default memo(Visual);
