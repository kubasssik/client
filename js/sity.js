const locality = {

    sity: [
        {km: 0,  sity: 'Выбрать город', },
        {
            km: 0, sity: 'Аэропорт Симферополь',  kmZdSimf: 15, kmZdSevas: 91, kmZdVlad: 129, kmAlup: 117, kmAlusta: 68,
            kmErmeni: 140, kmBakhic: 45, kmBelog: 57, kmDzhan: 95, kmEvpat: 70, kmKersch: 218, kmKirov: 125, kmKrgv: 63, kmKrprk: 70,kmLenin: 165,
            kmNizgk: 105,kmNikPgt: 50,kmNfedor: 41, kmPervmay: 95,
        },

        {
            kmZdSimf: 0, sity: 'РЖД Симферополь',  km: 15, kmZdSevas: 81, kmZdVlad: 118, kmAlup: 101, kmAlusta: 53,
            kmErmeni: 150, kmBakhic: 35, kmBelog: 48, kmDzhan: 95, kmEvpat: 70, kmKersch: 208, kmKirov: 114, kmKrgv: 67,kmKrprk: 70, kmLenin: 154,
            kmNizgk: 95,kmNikPgt:42 ,kmNfedor:55 ,kmPervmay: 95,
        },

        {
            kmZdSevas: 0, sity: 'РЖД Севастополь',  km: 90, kmZdSimf: 81, kmZdVlad: 196, kmAlup: 70, kmAlusta: 120,
            kmErmeni: 228, kmBakhic: 52, kmBelog: 124, kmDzhan: 175, kmEvpat: 117, kmKersch: 279, kmKirov: 199, kmKrgv: 144,kmKrprk: 202, kmLenin: 233,
            kmNizgk: 189,kmNikPgt: 67,kmNfedor: 93,kmPervmay: 176,
        },

        {
            kmZdVlad: 0, sity: 'РЖД Владиславовка',  km: 130, kmZdSimf: 116, kmZdSevas: 207, kmAlup: 129, kmAlusta: 192,
            kmErmeni: 192, kmBakhic: 160, kmBelog: 70, kmDzhan: 113, kmEvpat: 185, kmKirov: 19, kmKrgv: 107,kmKrprk:174 , kmLenin: 50,
            kmNizgk: 73,kmNikPgt: 157,kmNfedor: 169,kmPervmay: 157,
        },

        {
            kmAlup: 0,sity: 'Алупка г.',  km: 117, kmZdSimf: 101, kmZdSevas: 70, kmZdVlad: 129, kmAlusta: 51,
            kmErmeni: 244, kmBakhic: 91, kmBelog: 142, kmDzhan: 195, kmEvpat: 195, kmKersch: 300, kmKirov: 205, kmKrgv: 169,kmKrprk: 225, kmLenin: 235,
            kmNizgk: 190,kmNikPgt: 115,kmNfedor: 143,kmPervmay: 197,
        },

        {
            kmAlusta: 0, sity: 'Алушта (ГО)',  km: 68, kmZdSimf: 53, kmZdSevas: 120, kmZdVlad: 145, kmAlup: 51,
            kmErmeni: 194, kmBakhic: 85, kmBelog: 89, kmDzhan: 144, kmEvpat: 119, kmKersch: 233, kmKirov: 147, kmKrgv: 119,kmKrprk: 174, kmLenin: 183,
            kmNizgk: 139,kmNikPgt:108 ,kmNfedor: 108,kmPervmay: 148,
        },

        {
            kmErmeni: 0,sity: 'Армянск (ГО)', kmErmeni: 0, km: 140, kmZdSimf: 150, kmZdSevas: 228, kmZdVlad: 192, kmAlup: 244, kmAlusta: 194,
            kmBakhic: 174, kmBelog: 174, kmDzhan: 81, kmEvpat: 132, kmKersch: 296, kmKirov: 181, kmKrgv: 99,kmKrprk: 100, kmLenin: 245,
            kmNizgk: 123,kmNikPgt: 142,kmNfedor: 142,kmPervmay: 51,
        },

        {
            kmBakhic: 0,sity: 'Бахчисарай г.', kmBakhic: 0, km: 45, kmZdSimf: 35, kmZdSevas: 52, kmZdVlad: 160, kmAlup: 91, kmAlusta: 85,
            kmErmeni: 174, kmBelog: 90, kmDzhan: 128, kmEvpat: 93, kmKersch: 235, kmKirov: 156, kmKrgv: 100,kmKrprk:100 , kmLenin: 199,
            kmNizgk: 137,kmNikPgt:43 ,kmNfedor: 73,kmPervmay: 128,
        },

        {
            kmBakhic: 0,sity: 'Бахчисарайский район', kmBakhic: 0, km: 45, kmZdSimf: 35, kmZdSevas: 52, kmZdVlad: 160, kmAlup: 91, kmAlusta: 85,
            kmErmeni: 174, kmBelog: 90, kmDzhan: 128, kmEvpat: 93, kmKersch: 235, kmKirov: 156, kmKirov: 156, kmKrgv: 100,kmKrprk: 100, kmLenin: 199,
            kmNizgk: 137,kmNikPgt: 43,kmNfedor: 73,kmPervmay: 128,
        },

        {
            kmBelog: 0,sity: 'Белогорск г.',  km: 57, kmZdSimf: 48, kmZdSevas: 124, kmZdVlad: 70, kmAlup: 142, kmAlusta: 89,
            kmErmeni: 174, kmBakhic: 90, kmDzhan: 98, kmEvpat: 118, kmKersch: 163, kmKirov: 66, kmKrgv: 79,kmKrprk: 80, kmLenin: 113,
            kmNizgk: 51,kmNikPgt: 89,kmNfedor: 97,kmPervmay: 134,
        },

        {
            kmBelog: 0,sity: 'Белогорский район',  km: 57, kmZdSimf: 50, kmZdSevas: 124, kmZdVlad: 70, kmAlup: 142, kmAlusta: 89,
            kmErmeni: 174, kmBakhic: 90, kmDzhan: 98, kmEvpat: 118, kmKersch: 163, kmKirov: 66, kmKrgv: 79, kmKrprk: 80,kmLenin: 113,
            kmNizgk: 51,kmNikPgt: 89,kmNfedor: 97,kmPervmay: 134,
        },

        {
            kmDzhan: 0, sity: 'Джанкой г.', km: 95, kmZdSimf: 95, kmZdSevas: 175, kmZdVlad: 113, kmAlup: 195, kmAlusta: 144,
            kmErmeni: 81, kmBakhic: 128, kmBelog: 98, kmEvpat: 130, kmKersch: 210, kmKirov: 101, kmKrgv: 26,kmKrprk: 61, kmLenin: 159,
            kmNizgk: 46, kmNikPgt:130 ,kmNfedor: 122,kmPervmay: 51,
        },

        {
            kmDzhan: 0,sity: 'Джанкойский район', km: 95, kmZdSimf: 95, kmZdSevas: 175, kmZdVlad: 113, kmAlup: 195, kmAlusta: 144,
            kmErmeni: 81, kmBakhic: 128, kmBelog: 98, kmEvpat: 130, kmKersch: 210, kmKirov: 101, kmKrgv: 26,kmKrprk: 61, kmLenin: 159,
            kmNizgk: 46,kmNikPgt: 130,kmNfedor: 122,kmPervmay: 51,//--------
        },

        {
            kmEvpat: 0,sity: 'Евпатория (ГО)',  km: 70, kmZdSimf: 70, kmZdSevas: 117, kmZdVlad: 185, kmAlup: 163, kmAlusta: 119,
            kmErmeni: 132, kmBakhic: 93, kmBelog: 118, kmDzhan: 130, kmKersch: 274, kmKirov: 183, kmKrgv: 104, kmKrprk: 114,kmLenin: 227,
            kmNizgk: 142,kmNikPgt:54 ,kmNfedor: 32,
        },

        {
            kmKersch: 0,sity: 'Керчь г.',  km: 217, kmZdSimf: 205, kmZdSevas: 283, kmZdVlad: 99, kmAlup: 285, kmAlusta: 234,
            kmErmeni: 300, kmBakhic: 249, kmBelog: 164, kmDzhan: 216, kmEvpat: 273, kmKirov: 125, kmKrgv: 204,kmKrprk: 269, kmLenin: 63,
            kmNizgk: 169,kmNikPgt: 247,kmNfedor: 255,
        },

        {
            kmKirov: 0,sity: 'Кировский район',  km: 124, kmZdSimf: 113, kmZdSevas: 200, kmZdVlad: 20, kmAlup: 200, kmAlusta: 145,
            kmErmeni: 182, kmBakhic: 153, kmBelog: 72, kmDzhan: 104, kmEvpat: 173, kmKersch: 122, kmKrgv: 92,kmKrprk: 158, kmLenin: 67,
            kmNizgk: 59,kmNikPgt: 159,kmNfedor: 164,
        
        },

        {
            kmKrgv: 0,sity: 'Красногвардейский район',  km: 70, kmZdSimf: 70, kmZdSevas: 148, kmZdVlad: 108, kmAlup: 168, kmAlusta: 118,
            kmErmeni: 100, kmBakhic: 100, kmBelog: 80, kmDzhan: 30, kmEvpat: 103, kmKersch: 208, kmKirov: 96, kmLenin: 83,
            kmNizgk: 40,kmNikPgt: 104,kmNfedor: 98,
        },

        {
            kmKrprk: 0,sity: 'Красноперекопск г.', km: 120, kmZdSimf: 122, kmZdSevas: 202, kmZdVlad: 174, kmAlup: 225, kmAlusta: 174,
            kmErmeni: 22, kmBakhic: 153, kmBelog: 157, kmDzhan: 61, kmEvpat: 114, kmKersch: 269, kmKirov: 158, kmKrgv: 83,
            kmNikPgt: 144, kmNfedor: 123,
        },

        {
            kmKrprk: 0,sity: 'Красноперекопский район',  km: 135, kmZdSimf: 122, kmZdSevas: 202, kmZdVlad: 174, kmAlup: 225, kmAlusta: 174,
            kmErmeni: 22, kmBakhic: 153, kmBelog: 157, kmDzhan: 61, kmEvpat: 114, kmKersch: 269, kmKirov: 158, kmKrgv: 83,
            kmNikPgt:144 ,kmNfedor:123 ,
        },

        {
            kmLenin: 0,sity: 'Ленинский район',  km: 165, kmZdSimf: 154, kmZdSevas: 233, kmZdVlad: 50, kmAlup: 235, kmAlusta: 183,
            kmErmeni: 245, kmBakhic: 199, kmBelog: 113, kmDzhan: 159, kmEvpat: 227, kmKersch: 63, kmKirov: 67,kmKrprk: 220, kmKrgv: 156,
            kmNizgk: 116,kmNikPgt: 195,kmNfedor: 204,
        },

        {
            kmNizgk: 0,sity: 'Нижнегорский район', km: 105, kmZdSimf: 95, kmZdSevas: 189, kmZdVlad: 73, kmAlup: 190, kmAlusta: 139,
            kmErmeni: 123, kmBakhic: 137, kmBelog: 51, kmDzhan: 46, kmEvpat: 142, kmKersch: 169, kmKirov: 59, kmKrgv: 40,kmKrprk: 110, kmLenin: 116,
            kmNikPgt: 141,kmNfedor: 134,
        },

        {
            kmNikPgt:0,sity: 'Николаевка пгт', km: 50, kmZdSimf: 42, kmZdSevas: 67, kmZdVlad: 157, kmAlup: 117, kmAlusta: 96,
            kmErmeni: 163, kmBakhic: 43, kmBelog: 89, kmDzhan: 130, kmEvpat: 54, kmKersch: 247, kmKirov: 159, kmKrgv: 104,kmKrprk:144, kmLenin: 195,
            kmNizgk: 141,kmNfedor: 33,
        },

        {
            kmNfedor: 0,sity: 'Новофедоровка пгт', km: 41, kmZdSimf: 55, kmZdSevas: 93, kmZdVlad: 169, kmAlup: 143, kmAlusta: 108,
            kmErmeni: 142, kmBakhic: 73, kmBelog: 97, kmDzhan: 122, kmEvpat: 32, kmKersch: 255, kmKirov: 164, kmKrgv: 98,kmKrprk: 123, kmLenin: 204,
            kmNizgk: 134,kmNikPgt: 33,
        },

        {
            kmPervmay:0 , sity: 'Первомайский район', km: 95, kmZdSimf: 95, kmZdSevas: 176, kmZdVlad: 157, kmAlup: 197, kmAlusta: 148,
            kmErmeni: 51, kmBakhic: 128, kmBelog: 134, kmDzhan: 51, kmEvpat: 88, kmKersch: 252, kmKirov: 144, kmKrgv: 50,kmKrprk: 32, kmLenin: 208,
            kmNizgk: 89,kmNikPgt:  117,kmNfedor: 94,
        },

        {
            sity: 'Раздольненский район', km: 118, kmZdSimf: 122, kmZdSevas: 201, kmZdVlad: 193, kmAlup: 224, kmAlusta: 175,
            kmErmeni: 62, kmBakhic: 153, kmBelog: 160, kmDzhan: 81, kmEvpat: 74, kmKersch: 290, kmKirov: 182, kmKrgv: 93,kmKrprk: 43, kmLenin: 239,
            kmNizgk: 127,kmNikPgt: 119,kmNfedor: 96,
        },

        {
            sity: 'Саки г.', km: 50, kmZdSimf: 50, kmZdSevas: 92, kmZdVlad: 160, kmAlup: 141, kmAlusta: 98,
            kmErmeni: 133, kmBakhic: 71, kmBelog: 94, kmDzhan: 120, kmEvpat: 23, kmKersch: 251, kmKirov: 158, kmKrgv: 91,kmKrprk: 114, kmLenin: 200,
            kmNizgk: 131,kmNikPgt: 32,kmNfedor: 8,
        },

        {
            sity: 'Сакский район', km: 50, kmZdSimf: 50, kmZdSevas: 92, kmZdVlad: 160, kmAlup: 141, kmAlusta: 98,
            kmErmeni: 133, kmBakhic: 71, kmBelog: 94, kmDzhan: 120, kmEvpat: 23, kmKersch: 251, kmKirov: 158, kmKrgv: 91,kmKrprk:114 , kmLenin: 200,
            kmNizgk: 131,kmNikPgt: 32,kmNfedor: 8,
        },

        {
            sity: "Севастополь (ГФЗ)", km: 90, kmZdSimf: 81, kmZdSevas: 0, kmZdVlad: 196, kmAlup: 70, kmAlusta: 120,
            kmErmeni: 222, kmBakhic: 52, kmBelog: 124, kmDzhan: 175, kmEvpat: 117, kmKersch: 279, kmKirov: 199, kmKrgv: 144,kmKrprk: 202, kmLenin: 233,
            kmNizgk: 189, kmNikPgt: 67, kmNfedor: 93,
        },

        {
            sity: 'Симферополь г.', km: 15, kmZdSimf: 0, kmZdSevas: 81, kmZdVlad: 118, kmAlup: 101, kmAlusta: 53,
            kmErmeni: 150, kmBakhic: 35, kmBelog: 48, kmDzhan: 95, kmEvpat: 70, kmKersch: 218, kmKirov: 114, kmKrgv: 67,kmKrprk: 122, kmLenin: 154,
            kmNizgk: 95, kmNikPgt: 42,kmNfedor: 55,
        },

        {
            sity: 'Симферопольский район', km: 15, kmZdSimf: 0, kmZdSevas: 81, kmZdVlad: 118, kmAlup: 101, kmAlusta: 53,
            kmErmeni: 150, kmBakhic: 35, kmBelog: 48, kmDzhan: 95, kmEvpat: 70, kmKersch: 218, kmKirov: 114, kmKrgv: 67,kmKrprk: 122, kmLenin: 154,
            kmNizgk: 95,kmNikPgt:42 ,kmNfedor: 55,
        },

        {
            sity: 'Советский район', km: 114, kmZdSimf: 103, kmZdSevas: 178, kmZdVlad: 50, kmAlup: 193, kmAlusta: 144,
            kmErmeni: 147, kmBakhic: 145, kmBelog: 66, kmDzhan: 70, kmEvpat: 162, kmKersch: 143, kmKirov: 33, kmKrgv: 61,kmKrprk: 128, kmLenin: 96,
            kmNizgk: 27,kmNikPgt: 149, kmNfedor: 142,
        },
        {
            sity: 'Судак (ГО)', km: 115, kmZdSimf: 105, kmZdSevas: 195,
            kmZdVlad: 68,//надо подумать
            kmAlup: 131, kmAlusta: 80,
            kmErmeni: 231, kmBakhic: 148, kmBelog: 72, kmDzhan: 145, kmEvpat: 173, kmKersch: 158, kmKirov: 70, kmKrgv: 139,kmKrprk: 205, kmLenin: 102,
            kmNizgk: 105,kmNikPgt: 153,kmNfedor: 155,
        },
        {
            sity: 'Феодосия (ГО)', km: 125, kmZdSimf: 115, kmZdSevas: 211, kmZdVlad: 15,//обдумать 
            kmAlup: 187,
            kmErmeni: 209, kmBakhic: 162, kmBelog: 82, kmDzhan: 128, kmEvpat: 184, kmKersch: 102, kmKirov: 37, kmKrgv: 124,kmKrprk: 192, kmLenin: 53,
            kmNizgk: 88,kmNikPgt: 164,kmNfedor: 168,
        },
        {
            sity: 'Черноморский район', km: 145, kmZdSimf: 145, kmZdSevas: 188, kmZdVlad: 258, kmAlup: 238, kmAlusta: 194,
            kmErmeni: 140, kmBakhic: 167, kmBelog: 189, kmDzhan: 160, kmEvpat: 75, kmKersch: 350, kmKirov: 255, kmKrgv: 160,kmKrprk: 122, kmLenin: 297,
            kmNizgk: 199,kmNikPgt: 127,kmNfedor: 103,
        },

        {
            sity: 'Щёлкино г.', km: 185, kmZdSimf: 171, kmZdSevas: 267, kmZdVlad: 65, kmAlup: 251, kmAlusta: 200,
            kmErmeni: 263, kmBelog: 139, kmDzhan: 177, kmEvpat: 240, kmKersch: 80, kmKirov: 89, kmKrgv: 176,kmKrprk: 238, kmLenin: 19,
            kmNizgk: 137,kmNikPgt: 221,kmNfedor: 221,
        },

        {
            sity: 'Ялта (ГО)', km: 100, kmZdSimf: 85, kmZdSevas: 90, kmZdVlad: 180, kmAlup: 17, kmAlusta: 36,
            kmErmeni: 224, kmBelog: 120, kmDzhan: 177, kmEvpat: 160, kmKersch: 266, kmKirov: 189, kmKrgv: 154,kmKrprk: 206, kmLenin: 216,
            kmNizgk: 174,kmNikPgt: 124,kmNfedor: 139,
        },
        { sity: 'Другой...', km: 0, },
    ],
    Alusta: [
        'Выбрать',
        'Алушта г.',
        'Бондаренково',
        'Верхняя Кутузовка',
        'Виноградное (Алушта)',
        'Генеральское',
        'Запрудное',
        'Зеленогорье',
        'Изобильное',
        'Кипарисное',
        'Лаванда',
        'Лавровое',
        'Лазурное',
        'Лучистое',
        'Малореченское',
        'Малый Маяк',
        'Нижнее Запрудное',
        'Нижняя Кутузовка',
        'Партенит пгт',
        'Приветное',
        'Пушкино',
        'Розовый',
        'Рыбачье',
        'Семидворье',
        'Солнечногорское',
        'Утёс',
        'Другой...'
    ],
    Bakhchisaray: [
        "Куйбышево пгт",
        "Почтовое пгт",
        "Айвовое",
        "Аромат",
        "Ароматное",
        "Баштановка",
        "Белокаменное",
        "Береговое",
        "Береговое",
        "Богатое Ущелье",
        "Богатырь",
        "Большое Садовое",
        "Верхоречье",
        "Викторовка",
        "Вилино",
        "Высокое",
        "Глубокий Яр",
        "Голубинка",
        "Горка",
        "Дачное",
        "Долинное",
        "Дорожное",
        "Дубровка",
        "Железнодорожное",
        "Залесное",
        "Зелёное",
        "Зубакино",
        "Казанки",
        "Каштаны",
        "Кочергино",
        "Красная Заря",
        "Красный Мак",
        "Кудрино",
        "Малиновка",
        "Малиновка",
        "Маловидное",
        "Малое Садовое",
        "Машино",
        "Многоречье",
        "Мостовое",
        "Нагорное",
        "Научный пгт",
        "Некрасовка",
        "Нижняя Голубинка",
        "Новенькое",
        "Новопавловка",
        "Новополье",
        "Новоульяновка",
        "Отрадное",
        "Песчаное",
        "Песчаное",
        "Плотинное",
        "Поляна",
        "Предущельное",
        "Приятное Свидание",
        "Прохладное",
        "Путиловка",
        "Растущее",
        "Репино",
        "Речное",
        "Розовое",
        "Самохвалово",
        "Севастьяновка",
        "Синапное",
        "Сирень",
        "Скалистое",
        "Соколиное",
        "Солнечноселье",
        "Стальное",
        "Суворово",
        "Счастливое",
        "Табачное",
        "Танковое",
        "Тенистое",
        "Тополи",
        "Трудолюбовка",
        "Тургеневка",
        "Угловое",
        "Фурмановка",
        "Ходжа-Сала",
        "Холмовка",
        "Шевченково",
        'Другой...',
    ],
    Belogorsk: [

        "Александровка",
        "Алексеевка",
        "Анновка",
        "Ароматное",
        "Баланово",
        "Балки",
        "Барабаново",
        "Белая Скала",
        "Богатое",
        "Васильевка",
        "Верхние Орешники",
        "Вишенное",
        "Вишнёвое",
        "Владимировка",
        "Головановка",
        "Горлинка",
        "Дивное",
        "Дозорное",
        "Долиновка",
        "Другой...",
        "Еленовка",
        "Зеленогорское",
        "Земляничное",
        "Зуя пгт",
        "Зыбины",
        "Карасёвка",
        "Кизиловка",
        "Кирпичное",
        "Красная Слобода",
        "Красногорское",
        "Красносёловка",
        "Кривцово",
        "Криничное",
        "Крымская Роза",
        "Курортное",
        "Курское",
        "Лечебное",
        "Литвиненково",
        "Луговое",
        "Малиновка",
        "Межгорье",
        "Мелехово",
        "Мельники",
        "Мельничное",
        "Мироновка",
        "Мичуринское",
        "Муромское",
        "Некрасово",
        "Нижние Орешники",
        "Новоалександровка",
        "Новогригорьевка",
        "Новожиловка",
        "Новоклёново",
        "Овражки",
        "Опытное",
        "Павловка",
        "Павловка",
        "Петрово",
        "Поворотное",
        "Пролом",
        "Пчелиное",
        "Радостное",
        "Родники",
        "Русаковка",
        "Русское",
        "Северное",
        "Сенное",
        "Синекаменка",
        "Тополевка",
        "Тургенево",
        "Ударное",
        "Украинка",
        "Ульяновка",
        "Учебное",
        "Хлебное",
        "Цветочное",
        "Черемисовка",
        "Чернополье",
        "Яблочное",
        "Яковлевка",
        'Другой...'

    ],
    Dzhankoy: [
        "Азовское пгт",
        "Вольное пгт",
        "Ермаково",
        "Завет-Ленинский",
        "Заречное",
        "Изумрудное",
        "Кондратьево",
        "Крымка",
        "Лобаново",
        "Луганское",
        "Майское",
        "Маслово",
        "Медведевка",
        "Мирновка",
        "Новокрымское",
        "Пахаревка",
        "Победное",
        "Просторное",
        "Роскошное",
        "Рощино",
        "Светлое",
        "Стальное",
        "Табачное",
        "Целинное",
        "Чайкино",
        "Яркое",
        "Яркое Поле",
        "Яснополянское",
        'Другой...',
    ],
    Evpatoria: [
        'Выбрать',
        'Евпатория',
        'Заозёрное',
        'Мирный',
        'Новоозёрное',
        'Другой...'
    ],
    Ermeni: [
        'Выбрать',
        'Армянск г.',
        'Волошино',
        'Перекоп',
        'Суворово',
        'Другой...'
    ],
    Kirov: [
        "Кировское пгт",
        "Абрикосовка",
        "Айвазовское",
        "Бабенково",
        "Васильковое",
        "Видное",
        "Владиславовка",
        "Возрождение",
        "Добролюбовка",
        "Долинное",
        "Жемчужина Крыма",
        "Журавки",
        "Золотое Поле",
        "Изобильное",
        "Изюмовка",
        "Ключевое",
        "Красновка",
        "Красносельское",
        "Кринички",
        "Льговское",
        "Маковское",
        "Матросовка",
        "Новопокровка",
        "Новофёдоровка",
        "Ореховка",
        "Отважное",
        "Партизаны",
        "Первомайское",
        "Приветное",
        "Пруды",
        "Садовое",
        "Синицыно",
        "Софиевка",
        "Спасовка",
        "Токарево",
        "Трудолюбовка",
        "Тутовка",
        "Шубино",
        "Яркое Поле",
        'Другой...'
    ],
    Krasnogvardeyskiy: [
        "Октябрьское пгт",
        "Азов",
        "Александровка",
        "Амурское",
        "Ближнее",
        "Видное",
        "Вишняковка",
        "Владимирово",
        "Восход",
        "Григорьевка",
        "Докучаево",
        "Доходное",
        "Дубровское",
        "Заречное",
        "Заря",
        "Звёздное",
        "Зерновое",
        "Знаменка",
        "Золотое",
        "Известковое",
        "Искра",
        "Калинино",
        "Карповка",
        "Клепинино",
        "Климово",
        "Колодезное",
        "Комаровка",
        "Коммунары",
        "Котельниково",
        "Красная Долина",
        "Красная Поляна",
        "Красногвардейское",
        "Краснодарка",
        "Краснознаменка",
        "Красный Партизан",
        "Кремневка",
        "Курганное",
        "Ленинское",
        "Марьяновка",
        "Машино",
        "Менделеево",
        "Миролюбовка",
        "Мироновка",
        "Молочное",
        "Мускатное",
        "Найдёновка",
        "Нахимово",
        "Невское",
        "Некрасово",
        "Новоалексеевка",
        "Новодолинка",
        "Новоекатериновка",
        "Новозуевка",
        "Новоивановка",
        "Новоникольское",
        "Новопокровка",
        "Новосельцы",
        "Новоэстония",
        "Орловка",
        "Петровка",
        "Плодородное",
        "Победино   ",
        "Пологи",
        "Полтавка",
        "Проточное",
        "Прямое",
        "Пушкино",
        "Пятихатка",
        "Радужное",
        "Ровное",
        "Рогово",
        "Салгирка",
        "Симоненко",
        "Тимашовка",
        "Тимошенко",
        "Трактовое",
        "Удачное",
        "Ульяновка",
        "Холмовое",
        "Цветково",
        "Чапаево",
        "Щербаково",
        "Янтарное",
        "Ястребовка",
        "Другой...",
    ],
    Krasnoperekopskiy: [
        "Богачёвка",
        "Братское",
        "Вишнёвка",
        "Воинка",
        "Воронцовка",
        "Долинка",
        "Зелёная Нива",
        "Знаменка",
        "Ильинка",
        "Источное",
        "Ишунь",
        "Карпова Балка",
        "Красноармейское",
        "Крепкое",
        "Курганное",
        "Магазинка",
        "Надеждино",
        "Новоалександровка",
        "Новоивановка",
        "Новониколаевка",
        "Новорыбацкое",
        "Орловское",
        "Полтавское",
        "Почётное",
        "Привольное",
        "Пролетарка",
        "Пятихатка",
        "Рисовое",
        "Сватово",
        "Смушкино",
        "Совхозное",
        "Таврическое",
        "Танковое",
        "Трактовое",
        "Уткино",
        "Филатовка",
        "Шатры",
        "Другое...",
    ],
    Lenin: [
        "Богачёвка",
        "Братское",
        "Вишнёвка",
        "Воинка",
        "Воронцовка",
        "Долинка",
        "Зелёная Нива",
        "Знаменка",
        "Ильинка",
        "Источное",
        "Ишунь",
        "Карпова Балка",
        "Красноармейское",
        "Крепкое",
        "Курганное",
        "Магазинка",
        "Надеждино",
        "Новоалександровка",
        "Новоивановка",
        "Новониколаевка",
        "Новопавловка",
        "Новорыбацкое",
        "Орловское",
        "Полтавское",
        "Почётное",
        "Привольное",
        "Пролетарка",
        "Пятихатка",
        "Рисовое",
        "Сватово",
        "Смушкино",
        "Совхозное",
        "Таврическое",
        "Танковое",
        "Трактовое",
        "Уткино",
        "Филатовка",
        "Шатры",
        "Другое...",
    ],
    Nizhnegorskiy: [
        'Нижнегорский пгт',
        "Акимовка",
        "Буревестник",
        "Великоселье",
        "Владиславовка",
        "Дворовое",
        "Двуречье",
        "Дрофино",
        "Емельяновка",
        "Желябовка",
        "Жемчужина",
        "Заливное",
        "Заречье",
        "Зелёное",
        "Зоркино",
        "Ивановка",
        "Изобильное",
        "Кирсановка",
        "Коврово",
        "Коренное",
        "Косточковка",
        "Кукурузное",
        "Кунцево",
        "Линейное",
        "Лиственное",
        "Ломоносово",
        "Луговое",
        "Лужки",
        "Любимовка",
        "Межевое",
        "Митрофановка",
        "Михайловка",
        "Нежинское",
        "Новогригорьевка",
        "Новоивановка",
        "Охотское",
        "Пены",
        "Плодовое",
        "Приречное",
        "Пшеничное",
        "Разливы",
        "Родники",
        "Садовое",
        "Семенное",
        "Серово",
        "Сливянка",
        "Степановка",
        "Стрепетово",
        "Тамбовка",
        "Тарасовка",
        "Уваровка",
        "Уютное",
        "Фрунзе",
        "Цветущее",
        "Червоное",
        "Чкалово",
        "Широкое",
        "Ястребки",
        "Другой..."
    ],
    Pervomayskiy: [
        "Первомайское пгт",
        "Абрикосово",
        "Алексеевка",
        "Арбузово",
        "Братское",
        "Войково",
        "Выпасное",
        "Гвардейское",
        "Гришино",
        "Дальнее",
        "Дмитровка",
        "Еленовка",
        "Калинино",
        "Каменка",
        "Каштановка",
        "Кормовое",
        "Крестьяновка",
        "Крыловка",
        "Левитановка",
        "Макаровка",
        "Матвеевка",
        "Мельничное",
        "Новая Деревня",
        "Октябрьское",
        "Островское",
        "Островское",
        "Панфиловка",
        "Правда",
        "Привольное",
        "Пшеничное",
        "Ровное",
        "Сары-Баш",
        "Свердловское",
        "Снегирёвка",
        "Стахановка",
        "Степное",
        "Сусанино",
        "Тихоновка",
        "Упорное",
        "Фрунзе",
        "Чапаево",
        "Черново",
        "Другой...",
    ],
    Razdolnensky: [
        "Раздольное пгт",
        "Новосёловское пгт",
        "Аврора",
        "Бахчёвка",
        "Берёзовка",
        "Ботаническое",
        "Ветрянка",
        "Волочаевка",
        "Воронки",
        "Зимино",
        "Камышное",
        "Каштановка",
        "Ковыльное",
        "Коммунарное",
        "Котовское",
        "Красноармейское",
        "Кропоткино",
        "Кукушкино",
        "Кумово",
        "Максимовка",
        "Молочное",
        "Нива",
        "Овражное",
        "Огни",
        "Огородное",
        "Орловка",
        "Портовое",
        "Ручьи",
        "Рылеевка",
        "Северное",
        "Сенокосное",
        "Серебрянка",
        "Славное",
        "Славянское",
        "Соколы",
        "Стерегущее",
        "Ульяновка",
        "Фёдоровка",
        "Червоное",
        "Чернышёво",
        "Чехово",
        "Другой...",
    ],
    Saki: [

        "Новофёдоровка пгт",
        "Абрикосовка",
        "Валентиново",
        "Великое",
        "Вересаево",
        "Вершинное",
        "Весёловка",
        "Ветровка",
        "Виноградово",
        "Витино",
        "Владимировка",
        "Властное",
        "Водопойное",
        "Воробьёво",
        "Гаршино",
        "Геройское",
        "Глинка",
        "Громовка",
        "Добрушино",
        "Долинка",
        "Елизаветово",
        "Жаворонки",
        "Желтокаменка",
        "Журавли",
        "Зерновое",
        "Ивановка",
        "Игоревка",
        "Известковое",
        "Ильинка",
        "Каменоломня",
        "Карьерное",
        "Колоски",
        "Кольцово",
        "Крайнее",
        "Крыловка",
        "Крымское",
        "Куликовка",
        "Лесновка",
        "Лиманное",
        "Листовое",
        "Луговое",
        "Лушино",
        "Митяево",
        "Михайловка",
        "Молочное",
        "Наташино",
        "Наумовка",
        "Нива",
        "Низинное",
        "Огневое",
        "Орехово",
        "Орлянка",
        "Охотниково",
        "Победное",
        "Поповка",
        "Порфирьевка",
        "Прибрежное",
        "Приветное",
        "Ромашкино",
        "Рунное",
        "Сизовка",
        "Солдатское",
        "Степное",
        "Столбовое",
        "Суворовское",
        "Трудовое",
        "Туннельное",
        "Уютное",
        "Фрунзе",
        "Фурманово",
        "Хуторок",
        "Чеботарка",
        "Червоное",
        "Шалаши",
        "Шаумян",
        "Шелковичное",
        "Шишкино",
        "Штормовое",
        "Яркое",
        "Другой...",
    ],
    Sevastopol: [
        'Выбрать',
        "Севастополь г.",
        "Севастополь г., северная",
        "Балаклава г.",
        "Инкерман г.",
        "Кача пгт.",
        "Ласпи пгт.",
        "Андреевка",
        "Верхнесадовое",
        "Вишнёвое",
        "Гончарное",
        "Дальнее",
        "Золотая Балка",
        "Камышлы",
        "Кизиловое",
        "Колхозное",
        "Морозовка",
        "Новобобровка (Ново-Бобровка)",
        "Оборонное",
        "Озёрное",
        "Орлиное",
        "Орловка",
        "Осипенко",
        "Павловка",
        "Первомайское",
        "Передовое",
        "Пироговка",
        "Поворотное",
        "Подгорное",
        "Полюшко",
        "Резервное",
        "Родниковское",
        "Родное",
        "Россошанка",
        "Сахарная Головка",
        "Солнечный (Солнечное)",
        "Терновка",
        "Тыловое",
        "Ушаковка",
        "Ушаково",
        "Флотское",
        "Фронтовое",
        "Фруктовое",
        "Хмельницкое",
        "Черноречье",
        "Широкое",
        "Широкое"
    ],
    Simferopolskiy: [
        "Николаевка пгт",
        "Гвардейское пгт",
        "Молодёжное пгт",
        "Айкаван",
        "Акрополис",
        "Александровка",
        "Ана-Юрт",
        "Андрусово",
        "Аркадьевка",
        "Белоглинка",
        "Верхнекурганное",
        "Весёлое",
        "Винницкое",
        "Водное",
        "Грушевое",
        "Давыдово",
        "Демьяновка",
        "Денисовка",
        "Дивное",
        "Дмитрово",
        "Доброе",
        "Донское",
        "Дружное",
        "Дубки",
        "Живописное",
        "Журавлёвка",
        "Залесье",
        "Заречное",
        "Ивановка",
        "Камышинка",
        "Каштановое",
        "Кизиловое",
        "Клиновка",
        "Ключевое",
        "Ключи",
        "Клёновка",
        "Колодезное",
        "Кольчугино",
        "Константиновка",
        "Красная Зорька",
        "Красновка",
        "Красное",
        "Краснолесье",
        "Кубанское",
        "Куприно",
        "Курганное",
        "Лазаревка",
        "Левадки",
        "Лекарственное",
        "Лесноселье",
        "Лозовое",
        "Мазанка",
        "Маленькое",
        "Межгорное",
        "Мирное",
        "Молочное",
        "Мраморное",
        "Нижнекурганное",
        "Новоандреевка",
        "Новозбурьевка",
        "Новониколаевка",
        "Новосёловка",
        "Новый Мир",
        "Новый Сад",
        "Обрыв",
        "Опушки",
        "Партизанское",
        "Первомайское",
        "Перевальное",
        "Передовое",
        "Перово",
        "Петровка",
        "Петропавловка",
        "Пионерское",
        "Пожарское",
        "Привольное",
        "Пролётное",
        "Прудовое",
        "Равнополье",
        "Раздолье",
        "Родниково",
        "Скворцово",
        "Совхозное",
        "Солнечное",
        "Соловьёвка",
        "Софиевка",
        "Спокойное",
        "Сторожевое",
        "Строгоновка",
        "Сумское",
        "Сухоречье",
        "Тепловка",
        "Топольное",
        "Трудовое",
        "Трудолюбово",
        "Трёхпрудное",
        "Тёплое",
        "Украинка",
        "Укромное",
        "Урожайное",
        "Ферсманово",
        "Фонтаны",
        "Харитоновка",
        "Чайкино",
        "Чайковское",
        "Чистенькое",
        "Шафранное",
        "Широкое",
        "Школьное",
        "Другой...",
    ],
    Sovetskiy: [
        "Советский пгт",
        "Алмазное",
        "Варваровка",
        "Восточное",
        "Георгиевка",
        "Демьяновка",
        "Дмитровка",
        "Дятловка",
        "Заветное",
        "Ильичёво",
        "Коломенское",
        "Корнеевка",
        "Красногвардейское",
        "Краснофлотское",
        "Лебединка",
        "Лоховка",
        "Лучевое",
        "Маковка",
        "Марково",
        "Надежда",
        "Некрасовка",
        "Николаевка",
        "Новосёловка",
        "Новый Мир",
        "Октябрьское",
        "Привольное",
        "Присивашное",
        "Пруды",
        "Пушкино",
        "Пчельники",
        "Раздольное",
        "Речное",
        "Ровенка",
        "Урожайное",
        "Хлебное",
        "Чапаевка",
        "Чернозёмное",
        "Шахтино",
        "Другой...",
    ],
    Sudak: [
        'Выбрать',
        "Судак г.",
        "Богатовка",
        "Весёлое",
        "Ворон",
        "Громовка",
        "Грушевка",
        "Дачное",
        "Лесное",
        "Междуречье",
        "Миндальное",
        "Морское",
        "Новый Свет пгт",
        "Переваловка",
        "Переваловка",
        "Солнечная Долина",
        "Холодовка",
        "Другой...",
    ],
    Feodosia: [
        'Выбрать',
        "Феодосия г.",
        "Коктебель пгт",
        "Курортное пгт",
        "Орджоникидзе пгт",
        "Подгорное пгт",
        "Щебетовка пгт",
        "Выбрать",
        "Береговое",
        "Ближнее",
        "Виноградное",
        "Краснокаменка",
        "Наниково",
        "Насыпное",
        "Пионерское",
        "Подгорное",
        "Солнечное",
        "Степное",
        "Узловое",
        "Щебетовка",
        "Другой...",
    ],
    Chernomorskiy: [
        "Черноморское пгт",
        "Артёмовка",
        "Владимировка",
        "Внуково",
        "Водопойное",
        "Громово",
        "Далёкое",
        "Дозорное",
        "Журавлёвка",
        "Задорное",
        "Зайцево",
        "Знаменское",
        "Зоряное",
        "Калиновка",
        "Кировское",
        "Красная Поляна",
        "Красносельское",
        "Красноярское",
        "Кузнецкое",
        "Ленское",
        "Марьино",
        "Маяк",
        "Медведево",
        "Межводное",
        "Низовка",
        "Новоивановка",
        "Новосельськое",
        "Новоульяновка",
        "Озёровка",
        "Окунёвка",
        "Оленевка",
        "Северное",
        "Снежное",
        "Хмелево",
        "Другой...",
    ],
    Yalta: [
        'Выбрать',
        "Ялта г.",
        "Береговое пгт",
        "Виноградное пгт",
        "Восход пгт",
        "Восход пгт",
        "Высокогорное",
        "Гаспра пгт",
        "Голубой Залив пгт",
        "Горное (Ялта)",
        "Гурзуф пгт",
        "Даниловка (Ялта)",
        "Кореиз пгт (Мисхор)",
        "Краснокаменка пгт",
        "Куйбышево (Ялта)",
        "Курпаты пгт",
        "Ливадия пгт",
        "Массандра пгт",
        "Никита пгт",
        "Олива (посёлок)",
        "Оползневое",
        "Ореанда пгт",
        "Отрадное пгт",
        "Охотничье (Ялта)",
        "Парковое пгт",
        "Партизанское (Ялта)",
        "Понизовка пгт",
        "Санаторное пгт",
        "Симеиз пгт",
        "Советское пгт",
        "Форос пгт",
        'Другой...'
    ],
    flight: [
        'Рейс',
        'Nordwind Airlines',
        'Pegas Fly',
        'Red Wings',
        'S7',
        'Азимут',
        'Алроса',
        'Аэрофлот',
        'Ижавиа',
        'Костромское авиапредприятие',
        'Россия',
        'РусЛайн',
        'Северсталь',
        'Смартавиа',
        'Уральские авиалинии',
        'ЮВТ Аэро',
        'Якутия',
        'Ямал',
        'Другое...',
    ]
};
export { locality };