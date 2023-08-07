import { memo } from 'react';
import { useSelector } from 'react-redux';
function Banner() {
	const Members = useSelector((store) => store.department.data);
	return (
		<section id='banner' className='myScroll'>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
							{/* <img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} /> */}
						</div>
						<div className='txt'>
							<h2>{member.quote}</h2>
							<p>{member.name}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
}

export default memo(Banner);
