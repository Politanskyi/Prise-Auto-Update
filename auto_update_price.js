//Главная страница, цены на все машины
const
    kodiaq_min_price = 28037,
    karoq_min_price = 23793,
    octavia_min_price = 16917,
    scala_min_price = 22770,
    kamiq_min_price = 23416;

//Авто в наличии цены на все машины
const
    kodiaq_price_model_1 = 34465,
    kodiaq_price_model_2 = 33150,
    kodiaq_price_model_3 = 36368,
    kodiaq_price_model_4 = 34465,
    kodiaq_price_model_5 = 36708,
    kodiaq_price_model_6 = 39346,
    kodiaq_price_model_7 = 31687,
    kodiaq_price_model_8 = 36708;

const superb_price_model_1 = 39678;

const
    karoq_price_model_1 = 26561,
    karoq_price_model_2 = 24807,
    karoq_price_model_3 = 26561;

const scala_price_model_1 = 26865;

const
    octavia_price_model_1 = 22190,
    octavia_price_model_2 = 23534,
    octavia_price_model_3 = 23534,
    octavia_price_model_4 = 24298,
    octavia_price_model_5 = 17282,
    octavia_price_model_6 = 17667;

const fabia_price_model_1 = 14958;

function fetchRequest() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json')
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (response) {
            //console.log(response);

            const
                //Выбранная валюта
                curr_currency = response[0].cc,
                //Дата текущего курса
                curr_day = response[0].exchangedate,
                //Курс на текущую дату
                curr_rate = Number(response[0].rate),
                //Курс на текущую дату по формуле Skoda
                curr_rate_for_skoda = curr_rate + (curr_rate * 0.025);

            console.log('Тип валюты: ' + curr_currency);
            console.log('Текущая дата: ' + curr_day);
            console.log('Курс на текущую дату: ' + curr_rate);
            console.log('Курс Skoda: ' + curr_rate_for_skoda);

            //Главная страница, цены на машины
            function outPriceGeneral(generalPriceModel, out) {
                const
                    outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = `${(Math.ceil(curr_rate_for_skoda * generalPriceModel)).toLocaleString('uk-UA')} грн.`;
                }
            };

            //Авто в наличии, цены на машины
            function outPriceAll(allPriceModel, out) {
                const
                    outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = `${(Math.ceil(curr_rate_for_skoda * allPriceModel)).toLocaleString('uk-UA')} грн.`;
                }
            };

            //Одиночная страница, цены на машины
            function outPriceSingle(singlePriceModel, out) {
                const
                    outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = `${(Math.ceil(curr_rate_for_skoda * singlePriceModel)).toLocaleString('uk-UA')} грн.`;
                }
            };

            //////////////////////////////////////////
            /////Главная страница, цены на машины/////
            //////////////////////////////////////////

            //Вывод цен на машины в слайдей
            outPriceGeneral(scala_min_price, '#general_page_slider_scala_min_price');
            outPriceGeneral(kodiaq_min_price, '#general_page_slider_kodiaq_min_price');
            outPriceGeneral(octavia_min_price, '#general_page_slider_octavia_min_price');
            outPriceGeneral(kamiq_min_price, '#general_page_slider_kamiq_min_price');

            //Вывод цен на машины в блок авто в наличии
            outPriceGeneral(kodiaq_min_price, '#general_page_kodiaq_min_price');
            outPriceGeneral(karoq_min_price, '#general_page_karoq_min_price');
            outPriceGeneral(octavia_min_price, '#general_page_octavia_min_price');
            outPriceGeneral(scala_min_price, '#general_page_scala_min_price');

            //////////////////////////////////////////
            /////Главная страница, цены на машины/////
            //////////////////////////////////////////

            ////////////////////////////////////////
            /////Авто в наличии, цены на машины/////
            ////////////////////////////////////////

            //Вывод цен на машины в блоки авто в налии
            outPriceAll(kodiaq_price_model_1, '#all_page_kodiaq_price_model_1');
            outPriceAll(kodiaq_price_model_2, '#all_page_kodiaq_price_model_2');
            outPriceAll(kodiaq_price_model_3, '#all_page_kodiaq_price_model_3');
            outPriceAll(kodiaq_price_model_4, '#all_page_kodiaq_price_model_4');
            outPriceAll(kodiaq_price_model_5, '#all_page_kodiaq_price_model_5');
            outPriceAll(kodiaq_price_model_6, '#all_page_kodiaq_price_model_6');
            outPriceAll(kodiaq_price_model_7, '#all_page_kodiaq_price_model_7');
            outPriceAll(kodiaq_price_model_8, '#all_page_kodiaq_price_model_8');

            outPriceAll(superb_price_model_1, '#all_page_superb_price_model_1');

            outPriceAll(karoq_price_model_1, '#all_page_karoq_price_model_1');
            outPriceAll(karoq_price_model_2, '#all_page_karoq_price_model_2');
            outPriceAll(karoq_price_model_3, '#all_page_karoq_price_model_3');

            outPriceAll(scala_price_model_1, '#all_page_scala_price_model_1');

            outPriceAll(octavia_price_model_1, '#all_page_octavia_price_model_1');
            outPriceAll(octavia_price_model_2, '#all_page_octavia_price_model_2');
            outPriceAll(octavia_price_model_3, '#all_page_octavia_price_model_3');
            outPriceAll(octavia_price_model_4, '#all_page_octavia_price_model_4');
            outPriceAll(octavia_price_model_5, '#all_page_octavia_price_model_5');
            outPriceAll(octavia_price_model_6, '#all_page_octavia_price_model_6');

            outPriceAll(fabia_price_model_1, '#all_page_fabia_price_model_1');

            ////////////////////////////////////////
            /////Авто в наличии, цены на машины/////
            ////////////////////////////////////////

            ////////////////////////////////////////////
            /////Одиночная страница, цены на машины/////
            ////////////////////////////////////////////

            //Вывод цен на машины в блоки одиночной страницы
            outPriceSingle(kodiaq_price_model_1, '#single_page_kodiaq_price_model_1');
            outPriceSingle(kodiaq_price_model_2, '#single_page_kodiaq_price_model_2');
            outPriceSingle(kodiaq_price_model_3, '#single_page_kodiaq_price_model_3');
            outPriceSingle(kodiaq_price_model_4, '#single_page_kodiaq_price_model_4');
            outPriceSingle(kodiaq_price_model_5, '#single_page_kodiaq_price_model_5');
            outPriceSingle(kodiaq_price_model_6, '#single_page_kodiaq_price_model_6');
            outPriceSingle(kodiaq_price_model_7, '#single_page_kodiaq_price_model_7');
            outPriceSingle(kodiaq_price_model_8, '#single_page_kodiaq_price_model_8');

            outPriceSingle(superb_price_model_1, '#single_page_superb_price_model_1');

            outPriceSingle(karoq_price_model_1, '#single_page_karoq_price_model_1');
            outPriceSingle(karoq_price_model_2, '#single_page_karoq_price_model_2');
            outPriceSingle(karoq_price_model_3, '#single_page_karoq_price_model_3');

            outPriceSingle(scala_price_model_1, '#single_page_scala_price_model_1');

            outPriceSingle(octavia_price_model_1, '#single_page_octavia_price_model_1');
            outPriceSingle(octavia_price_model_2, '#single_page_octavia_price_model_2');
            outPriceSingle(octavia_price_model_3, '#single_page_octavia_price_model_3');
            outPriceSingle(octavia_price_model_4, '#single_page_octavia_price_model_4');
            outPriceSingle(octavia_price_model_5, '#single_page_octavia_price_model_5');
            outPriceSingle(octavia_price_model_6, '#single_page_octavia_price_model_6');

            outPriceSingle(fabia_price_model_1, '#single_page_fabia_price_model_1');

            ////////////////////////////////////////////
            /////Одиночная страница, цены на машины/////
            ////////////////////////////////////////////

        })
        .catch(function (error) {
            //Перезапуск если ошибка
            setTimeout(fetchRequest, 3000);

            console.log(error);

            //Главная страница, цены на машины, если ошибка
            function outPriceGeneralUpdate(out) {
                const outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = 'Оновлення...';
                }
            };

            //Авто в наличии, цены на машины, если ошибка
            function outPriceAllUpdate(out) {
                const outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = 'Оновлення...';
                }
            };

            //Одиночная страница, цены на машины, если ошибка
            function outPriceSingleUpdate(out) {
                const outSelector = document.querySelector(out);

                if (outSelector) {
                    outSelector.innerHTML = 'Оновлення...';
                }
            };

            /////////////////////////////////////////////////
            //Главная страница, цены на машины, если ошибка//
            /////////////////////////////////////////////////

            //Вывод заглушки цены на машины в слайдей
            outPriceGeneralUpdate('#general_page_slider_scala_min_price');
            outPriceGeneralUpdate('#general_page_slider_kodiaq_min_price');
            outPriceGeneralUpdate('#general_page_slider_octavia_min_price');
            outPriceGeneralUpdate('#general_page_slider_kamiq_min_price');

            //Вывод заглушки цены на машины в блок авто в наличии
            outPriceGeneralUpdate('#general_page_kodiaq_min_price');
            outPriceGeneralUpdate('#general_page_karoq_min_price');
            outPriceGeneralUpdate('#general_page_octavia_min_price');
            outPriceGeneralUpdate('#general_page_scala_min_price');

            /////////////////////////////////////////////////
            //Главная страница, цены на машины, если ошибка//
            /////////////////////////////////////////////////

            ///////////////////////////////////////////////
            //Авто в наличии, цены на машины, если ошибка//
            ///////////////////////////////////////////////

            //Вывод заглушки цены на машины в авто в наличии
            outPriceAllUpdate('#all_page_kodiaq_price_model_1');
            outPriceAllUpdate('#all_page_kodiaq_price_model_2');
            outPriceAllUpdate('#all_page_kodiaq_price_model_3');
            outPriceAllUpdate('#all_page_kodiaq_price_model_4');
            outPriceAllUpdate('#all_page_kodiaq_price_model_5');
            outPriceAllUpdate('#all_page_kodiaq_price_model_6');
            outPriceAllUpdate('#all_page_kodiaq_price_model_7');
            outPriceAllUpdate('#all_page_kodiaq_price_model_8');

            outPriceAllUpdate('#all_page_superb_price_model_1');

            outPriceAllUpdate('#all_page_karoq_price_model_1');
            outPriceAllUpdate('#all_page_karoq_price_model_2');
            outPriceAllUpdate('#all_page_karoq_price_model_3');

            outPriceAllUpdate('#all_page_scala_price_model_1');

            outPriceAllUpdate('#all_page_octavia_price_model_1');
            outPriceAllUpdate('#all_page_octavia_price_model_2');
            outPriceAllUpdate('#all_page_octavia_price_model_3');
            outPriceAllUpdate('#all_page_octavia_price_model_4');
            outPriceAllUpdate('#all_page_octavia_price_model_5');
            outPriceAllUpdate('#all_page_octavia_price_model_6');

            outPriceAllUpdate('#all_page_fabia_price_model_1');

            ///////////////////////////////////////////////
            //Авто в наличии, цены на машины, если ошибка//
            ///////////////////////////////////////////////

            ///////////////////////////////////////////////////
            //Одиночная страница, цены на машины, если ошибка//
            ///////////////////////////////////////////////////

            //Вывод заглушки цены на машины в авто в наличии
            outPriceSingleUpdate('#single_page_kodiaq_price_model_1');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_2');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_3');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_4');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_5');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_6');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_7');
            outPriceSingleUpdate('#single_page_kodiaq_price_model_8');

            outPriceSingleUpdate('#single_page_superb_price_model_1');

            outPriceSingleUpdate('#single_page_karoq_price_model_1');
            outPriceSingleUpdate('#single_page_karoq_price_model_2');
            outPriceSingleUpdate('#single_page_karoq_price_model_3');

            outPriceSingleUpdate('#single_page_scala_price_model_1');

            outPriceSingleUpdate('#single_page_octavia_price_model_1');
            outPriceSingleUpdate('#single_page_octavia_price_model_2');
            outPriceSingleUpdate('#single_page_octavia_price_model_3');
            outPriceSingleUpdate('#single_page_octavia_price_model_4');
            outPriceSingleUpdate('#single_page_octavia_price_model_5');
            outPriceSingleUpdate('#single_page_octavia_price_model_6');

            outPriceSingleUpdate('#single_page_fabia_price_model_1');

            ///////////////////////////////////////////////////
            //Одиночная страница, цены на машины, если ошибка//
            ///////////////////////////////////////////////////
        });
};

fetchRequest();