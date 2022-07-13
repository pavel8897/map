function init() {
	let map = new ymaps.Map('map', {
		center: [53.676876,84.989619],
		zoom: 16
	})

	let myCollection = new ymaps.GeoObjectCollection({}, {
	    preset: 'islands#redIcon', //все метки красные
	    draggable: true // и их можно перемещать
	});

	for(let coord in coords) {
		let arr = []
		arr.push(coords[coord]['coordinates']['latitude'])
		arr.push(coords[coord]['coordinates']['longitude'])
	    myCollection.add(new ymaps.Placemark(arr, {
	    	balloonContent: `
	    		<div class="balloon">
	    			<span>${coords[coord]['locotype']}</span>
	    			<div>${coords[coord]['loconumber']}</div>
	    		</div>
	    	`
	    }, {
	    	iconLayout: 'default#image',
	    	iconImageHref: 'https://cdn-icons.flaticon.com/png/512/5836/premium/5836608.png?token=exp=1657703056~hmac=5347a1ceb64dbe1a8a91c1e7139c5df2',
	    	iconImageSize: [30, 30],
	    	iconImageOffset: [-20, -40]
	    }));
	}

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(myCollection)
}

ymaps.ready(init)
