import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Post() {
	const [Tit, setTit] = useState('');
	const [Con, setCon] = useState('');
	const [ConTest, setConTest] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const item = { title: Tit, content: Con, test: ConTest };

		axios
			.post('/api/post', item)
			.then((res) => {
				console.log(res);
				alert('글 저장에 성공했습니다.');
			})
			.catch((err) => {
				console.log(err);
				alert('글 저장에 실패했습니다.');
			});
	};

	useEffect(() => {
		axios
			.get('/api/post')
			.then((json) => {
				console.log('json', json);
			})
			.catch((err) => console.log('error', err));
	}, []);
	return (
		<SubLayout>
			<p>포스트페이지 인트로화면입니다1.</p>
			<div className='inputBox'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='제목을 입력하세요'
						value={Tit}
						onChange={(e) => setTit(e.target.value)}
					/>
					<br />
					<textarea
						cols='30'
						rows='3'
						placeholder='본문 내용을 입력하세요'
						value={Con}
						onChange={(e) => setCon(e.target.value)}
					></textarea>
					<br />
					<textarea
						cols='30'
						rows='3'
						placeholder='테스트 내용을 입력하세요'
						value={ConTest}
						onChange={(e) => setConTest(e.target.value)}
					></textarea>
					<nav>
						<input type='reset' defaultValue='CANCEL' />
						<input type='submit' defaultValue='SUBMIT' />
					</nav>
				</form>
			</div>
		</SubLayout>
	);
}

export default Post;
