function loadRzhdData() {
    /**
 * Список станций
 * @type {Station[]}
 */
    const stations = [
        stationFactory('Санкт-Петербург'),
        stationFactory('Москва'),
        stationFactory('Ярославль'),
        stationFactory('Рязань'),
        stationFactory('Нижний Новгород'),
        stationFactory('Воронеж'),
        stationFactory('Липецк'),
        stationFactory('Казань'),
        stationFactory('Пенза'),
        stationFactory('Ижевск'),
        stationFactory('Ростов-на-Дону'),
        stationFactory('Ульяновск'),
        stationFactory('Тольятти'),
        stationFactory('Саратов'),
        stationFactory('Краснодар'),
        stationFactory('Самара'),
        stationFactory('Волгоград'),
        stationFactory('Астрахань'),
        stationFactory('Махачкала'),
        stationFactory('Оренбург'),
        stationFactory('Уфа'),
        stationFactory('Набережные Челны'),
        stationFactory('Пермь'),
        stationFactory('Екатеринбург'),
        stationFactory('Тюмень'),
        stationFactory('Челябинск'),
        stationFactory('Омск'),
        stationFactory('Томск'),
        stationFactory('Новосибирск'),
        stationFactory('Кемерово'),
        stationFactory('Новокузнецк'),
        stationFactory('Барнаул'),
        stationFactory('Красноярск'),
        stationFactory('Иркутск'),
        stationFactory('Хабаровск'),
        stationFactory('Владивосток'),
    ];

    /**
     * Список маршрутов
     * @type {Route[]}
     */
    const routes = [
        routeFactory('101', [1, 2]),
        routeFactory('102', [2, 1]),
        routeFactory('201', [1, 2, 4, 7, 6, 11, 15]),
        routeFactory('202', [15, 11, 6, 7, 4, 2, 1]),
        routeFactory('221', [1, 2, 5, 8, 22, 21, 26, 27, 29, 32]),
        routeFactory('222', [32, 29, 27, 26, 21, 22, 8, 5, 2, 1]),
        routeFactory('223', [1, 2, 5, 8, 23, 24, 27, 29, 33, 34, 35, 36]),
        routeFactory('224', [36, 35, 34, 33, 29, 27, 24, 23, 8, 5, 2, 1]),
        routeFactory('351', [3, 2, 6, 17, 18, 19]),
        routeFactory('352', [19, 18, 17, 6, 2, 3]),
        routeFactory('357', [5, 9, 14, 17, 18, 19]),
        routeFactory('358', [19, 18, 17, 14, 9, 5]),
        routeFactory('383', [6, 9, 12, 16, 22, 10, 23, 24, 25, 27, 28, 30, 31, 33]),
        routeFactory('384', [33, 31, 30, 28, 27, 25, 24, 23, 10, 22, 16, 12, 9, 6]),
        routeFactory('411', [11, 17, 16, 21, 24, 27, 29]),
        routeFactory('412', [29, 27, 24, 21, 16, 17, 11]),
        routeFactory('413', [15, 11, 17, 14, 13, 16, 20, 26, 24, 25]),
        routeFactory('414', [25, 24, 26, 20, 16, 13, 14, 17, 11, 15]),
        routeFactory('515', [29, 31, 33, 34, 35, 36]),
        routeFactory('516', [36, 35, 34, 33, 31, 29]),
    ];

    /**
     * Список рейсов
     * @type {Reis[]}
     */
    const reises = [
        reisFactory('101', '1.08.2021'),
        reisFactory('102', '1.08.2021'),
        reisFactory('101', '3.08.2021'),
        reisFactory('102', '3.08.2021'),
        reisFactory('101', '5.08.2021'),
        reisFactory('102', '5.08.2021'),
        reisFactory('101', '7.08.2021'),
        reisFactory('102', '7.08.2021'),
        reisFactory('101', '9.08.2021'),
        reisFactory('102', '9.08.2021'),
        reisFactory('101', '11.08.2021'),
        reisFactory('102', '11.08.2021'),
        reisFactory('101', '13.08.2021'),
        reisFactory('102', '13.08.2021'),
        reisFactory('101', '15.08.2021'),
        reisFactory('102', '15.08.2021'),
        reisFactory('101', '17.08.2021'),
        reisFactory('102', '17.08.2021'),
        reisFactory('101', '19.08.2021'),
        reisFactory('102', '19.08.2021'),
        reisFactory('101', '21.08.2021'),
        reisFactory('102', '21.08.2021'),
        reisFactory('101', '23.08.2021'),
        reisFactory('102', '23.08.2021'),
        reisFactory('101', '25.08.2021'),
        reisFactory('102', '25.08.2021'),
        reisFactory('101', '27.08.2021'),
        reisFactory('102', '27.08.2021'),
        reisFactory('101', '29.08.2021'),
        reisFactory('102', '29.08.2021'),
        reisFactory('101', '31.08.2021'),
        reisFactory('102', '0.08.2021'),
        reisFactory('201', '2.08.2021'),
        reisFactory('202', '2.08.2021'),
        reisFactory('201', '4.08.2021'),
        reisFactory('202', '4.08.2021'),
        reisFactory('201', '6.08.2021'),
        reisFactory('202', '6.08.2021'),
        reisFactory('201', '8.08.2021'),
        reisFactory('202', '8.08.2021'),
        reisFactory('201', '10.08.2021'),
        reisFactory('202', '10.08.2021'),
        reisFactory('201', '12.08.2021'),
        reisFactory('202', '12.08.2021'),
        reisFactory('201', '14.08.2021'),
        reisFactory('202', '14.08.2021'),
        reisFactory('201', '16.08.2021'),
        reisFactory('202', '16.08.2021'),
        reisFactory('201', '18.08.2021'),
        reisFactory('202', '18.08.2021'),
        reisFactory('201', '20.08.2021'),
        reisFactory('202', '20.08.2021'),
        reisFactory('201', '22.08.2021'),
        reisFactory('202', '22.08.2021'),
        reisFactory('201', '24.08.2021'),
        reisFactory('202', '24.08.2021'),
        reisFactory('201', '26.08.2021'),
        reisFactory('202', '26.08.2021'),
        reisFactory('201', '28.08.2021'),
        reisFactory('202', '28.08.2021'),
        reisFactory('201', '30.08.2021'),
        reisFactory('202', '30.08.2021'),
        reisFactory('221', '1.08.2021'),
        reisFactory('222', '1.08.2021'),
        reisFactory('221', '3.08.2021'),
        reisFactory('222', '3.08.2021'),
        reisFactory('221', '5.08.2021'),
        reisFactory('222', '5.08.2021'),
        reisFactory('221', '7.08.2021'),
        reisFactory('222', '7.08.2021'),
        reisFactory('221', '9.08.2021'),
        reisFactory('222', '9.08.2021'),
        reisFactory('221', '11.08.2021'),
        reisFactory('222', '11.08.2021'),
        reisFactory('221', '13.08.2021'),
        reisFactory('222', '13.08.2021'),
        reisFactory('221', '15.08.2021'),
        reisFactory('222', '15.08.2021'),
        reisFactory('221', '17.08.2021'),
        reisFactory('222', '17.08.2021'),
        reisFactory('221', '19.08.2021'),
        reisFactory('222', '19.08.2021'),
        reisFactory('221', '21.08.2021'),
        reisFactory('222', '21.08.2021'),
        reisFactory('221', '23.08.2021'),
        reisFactory('222', '23.08.2021'),
        reisFactory('221', '25.08.2021'),
        reisFactory('222', '25.08.2021'),
        reisFactory('221', '27.08.2021'),
        reisFactory('222', '27.08.2021'),
        reisFactory('221', '29.08.2021'),
        reisFactory('222', '29.08.2021'),
        reisFactory('221', '31.08.2021'),
        reisFactory('222', '0.08.2021'),
        reisFactory('223', '1.08.2021'),
        reisFactory('224', '2.08.2021'),
        reisFactory('223', '4.08.2021'),
        reisFactory('224', '5.08.2021'),
        reisFactory('223', '7.08.2021'),
        reisFactory('224', '8.08.2021'),
        reisFactory('223', '10.08.2021'),
        reisFactory('224', '11.08.2021'),
        reisFactory('223', '13.08.2021'),
        reisFactory('224', '14.08.2021'),
        reisFactory('223', '16.08.2021'),
        reisFactory('224', '17.08.2021'),
        reisFactory('223', '19.08.2021'),
        reisFactory('224', '20.08.2021'),
        reisFactory('223', '22.08.2021'),
        reisFactory('224', '23.08.2021'),
        reisFactory('223', '25.08.2021'),
        reisFactory('224', '26.08.2021'),
        reisFactory('223', '28.08.2021'),
        reisFactory('224', '29.08.2021'),
        reisFactory('223', '31.08.2021'),
        reisFactory('224', '1.08.2021'),
        reisFactory('351', '2.08.2021'),
        reisFactory('352', '3.08.2021'),
        reisFactory('351', '5.08.2021'),
        reisFactory('352', '6.08.2021'),
        reisFactory('351', '8.08.2021'),
        reisFactory('352', '9.08.2021'),
        reisFactory('351', '11.08.2021'),
        reisFactory('352', '12.08.2021'),
        reisFactory('351', '14.08.2021'),
        reisFactory('352', '15.08.2021'),
        reisFactory('351', '17.08.2021'),
        reisFactory('352', '18.08.2021'),
        reisFactory('351', '20.08.2021'),
        reisFactory('352', '21.08.2021'),
        reisFactory('351', '23.08.2021'),
        reisFactory('352', '24.08.2021'),
        reisFactory('351', '26.08.2021'),
        reisFactory('352', '27.08.2021'),
        reisFactory('351', '29.08.2021'),
        reisFactory('352', '30.08.2021'),
        reisFactory('357', '3.08.2021'),
        reisFactory('358', '4.08.2021'),
        reisFactory('357', '6.08.2021'),
        reisFactory('358', '7.08.2021'),
        reisFactory('357', '9.08.2021'),
        reisFactory('358', '10.08.2021'),
        reisFactory('357', '12.08.2021'),
        reisFactory('358', '13.08.2021'),
        reisFactory('357', '15.08.2021'),
        reisFactory('358', '16.08.2021'),
        reisFactory('357', '18.08.2021'),
        reisFactory('358', '19.08.2021'),
        reisFactory('357', '21.08.2021'),
        reisFactory('358', '22.08.2021'),
        reisFactory('357', '24.08.2021'),
        reisFactory('358', '25.08.2021'),
        reisFactory('357', '27.08.2021'),
        reisFactory('358', '28.08.2021'),
        reisFactory('357', '30.08.2021'),
        reisFactory('358', '0.08.2021'),
        reisFactory('383', '2.08.2021'),
        reisFactory('384', '3.08.2021'),
        reisFactory('383', '7.08.2021'),
        reisFactory('384', '8.08.2021'),
        reisFactory('383', '12.08.2021'),
        reisFactory('384', '13.08.2021'),
        reisFactory('383', '17.08.2021'),
        reisFactory('384', '18.08.2021'),
        reisFactory('383', '22.08.2021'),
        reisFactory('384', '23.08.2021'),
        reisFactory('383', '27.08.2021'),
        reisFactory('384', '28.08.2021'),
        reisFactory('411', '3.08.2021'),
        reisFactory('412', '5.08.2021'),
        reisFactory('411', '8.08.2021'),
        reisFactory('412', '10.08.2021'),
        reisFactory('411', '13.08.2021'),
        reisFactory('412', '15.08.2021'),
        reisFactory('411', '18.08.2021'),
        reisFactory('412', '20.08.2021'),
        reisFactory('411', '23.08.2021'),
        reisFactory('412', '25.08.2021'),
        reisFactory('411', '28.08.2021'),
        reisFactory('412', '30.08.2021'),
        reisFactory('413', '4.08.2021'),
        reisFactory('414', '7.08.2021'),
        reisFactory('413', '9.08.2021'),
        reisFactory('414', '12.08.2021'),
        reisFactory('413', '14.08.2021'),
        reisFactory('414', '17.08.2021'),
        reisFactory('413', '19.08.2021'),
        reisFactory('414', '22.08.2021'),
        reisFactory('413', '24.08.2021'),
        reisFactory('414', '27.08.2021'),
        reisFactory('413', '29.08.2021'),
        reisFactory('414', '1.08.2021'),
        reisFactory('515', '5.08.2021'),
        reisFactory('516', '5.08.2021'),
        reisFactory('515', '10.08.2021'),
        reisFactory('516', '10.08.2021'),
        reisFactory('515', '15.08.2021'),
        reisFactory('516', '15.08.2021'),
        reisFactory('515', '20.08.2021'),
        reisFactory('516', '20.08.2021'),
        reisFactory('515', '25.08.2021'),
        reisFactory('516', '25.08.2021'),
        reisFactory('515', '30.08.2021'),
        reisFactory('516', '30.08.2021'),
    ];

    /**
     * содержит данные о билетах
     * @var Ticket[]
     */
    const tickets = [];

    return Promise.resolve({
        stations,
        routes,
        reises,
        tickets,
    })
}





















/**
 * @var Promise<Station[]>
 */
const allStations = Promise.resolve([
    stationFactory('sdf'),
    stationFactory('sdf'),
    stationFactory('sdf'),
    stationFactory('sdf'),
])


