let map1 = [53.676876, 84.989619]

function init() {
	let map = new ymaps.Map('map', {
		center: map1,
		zoom: 10
	})

	let placemark = new ymaps.Placemark(map1, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn4.iconfinder.com/data/icons/symbol-blue-set-1/100/Untitled-2-85-1024.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	})

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark)
}

ymaps.ready(init)
