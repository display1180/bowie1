const mapContainer = document.querySelector('#map');
const btns = document.querySelectorAll('.branch li');
const btnToggle = document.querySelector('.btnToggle');
let active_index = 0;
let toggle = false;

const markerInfo = [
	{
		title: '코엑스',
		position: new kakao.maps.LatLng(37.51270999164393, 127.06069417692242),
		// imgSrc: 'img/marker1.png',
		imgSize: new kakao.maps.Size(232, 99),
		imgPos: { offset: new kakao.maps.Point(116, 99) },
		button: btns[0],
	},
	{
		title: '광화문',
		position: new kakao.maps.LatLng(37.57534, 126.977128),
		// imgSrc: 'img/marker2.png',
		imgSize: new kakao.maps.Size(232, 99),
		imgPos: { offset: new kakao.maps.Point(116, 99) },
		button: btns[1],
	},
	{
		title: '카카오본사',
		position: new kakao.maps.LatLng(33.450701, 126.570667),
		// imgSrc: 'img/marker3.png',
		imgSize: new kakao.maps.Size(232, 99),
		imgPos: { offset: new kakao.maps.Point(116, 99) },
		button: btns[2],
	},
];

//markerInfo의 첫번째 데이터로 기본 지도 인스턴스 생성
const map = new kakao.maps.Map(mapContainer, { center: markerInfo[0].position, level: 3 });
//마우스휠 이벤트시 줌 기능 비활성화
map.setZoomable(false);

//맵타입 인스턴스 생성후 맵인스턴스에 바인딩
const mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

//맵줌컨트롤 인스턴스 생성후 맵인스턴스에 바인딩
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

//markerInfo배열 데이터를 통해 기존 맵인스턴스에 반복을 돌며 마커 생성하고 바인딩
markerInfo.forEach((info, idx) => {
	const marker = new kakao.maps.Marker({ position: info.position, image: new kakao.maps.MarkerImage(info.imgSrc, info.imgSize, info.imgPos) });
	marker.setMap(map);
	//지점 버튼을 클릭시
	info.button.addEventListener('click', () => {
		//현재 클릭한 버튼의 순번을 active_index전역변수에 옮겨담음
		//추후 브라우저 리사이즈시 현재 활성화 된 지역위치의 데이터 순번이 필요하기 때문
		active_index = idx;
		map.panTo(info.position);

		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');
	});
});

//브라우저 리사이즈시 지도 위치 및 마커 가운데 보정
window.addEventListener('resize', () => {
	//현재 활성화 되어 있는 순번의 지역위치값으로 맵 인스턴스 가운데 위치보정
	map.setCenter(markerInfo[active_index].position);
});

//토글 버튼 클릭시 교통량정보 ON/OFF
// btnToggle.addEventListener('click', () => {
// 	//클릭할때마다 toggle에 담겨있는 불린 값이 계속 반전됨
// 	toggle = !toggle;

// 	if (toggle) {
// 		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
// 		btnToggle.innerHTML = 'Traffic ON';
// 	} else {
// 		map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
// 		btnToggle.innerHTML = 'Traffic OFF';
// 	}
// });