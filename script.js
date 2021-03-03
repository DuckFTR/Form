document.addEventListener('DOMContentLoaded', () => {
    //ВПЕРЕД!
    //нашли и определили перем с кнопкой далее
    let forward = document.getElementById('forward');

    //функция к кнопке далее
    function pressForward() {
        //определили постоянную и добавили в нее эл. активный
        const field = document.querySelector('.fieldset--active');
        const nextfield = document.querySelector('.fieldset--active').nextElementSibling;
        //убрали класс и поставили класс филдсет с дисплейблоком = нон
        field.classList.add('fieldset');
        nextfield.classList.add('fieldset--active');
        field.classList.remove('fieldset--active');
        nextfield.classList.remove('fieldset');
    }

    //назначаем исполнение функции по нажатию кнопки далее
    forward.addEventListener('click', () => {
        pressForward();
    });
    //НАЗАД!
    //нашли и определили перем с кнопкой назад
    let backward = document.getElementById('backward');

    //функция к кнопке назад
    function pressBackward() {
        //определили постоянную и добавили в нее эл. активный
        const field = document.querySelector('.fieldset--active');
        const backfield = document.querySelector('.fieldset--active').previousElementSibling;
        //убрали класс и поставили класс филдсет с дисплейблоком = нон
        field.classList.add('fieldset');
        backfield.classList.add('fieldset--active');
        field.classList.remove('fieldset--active');
        backfield.classList.remove('fieldset');
    }

    //назначаем исполнение функции по нажатию кнопки назад
    backward.addEventListener('click', () => {
        pressBackward();
    });

    //валидация и выполнение вывода значений
    document.getElementById('finish').addEventListener('click', () => {
        let validated = true;


        document.querySelectorAll('[required]').forEach((item) => {
            if (item.value.length < 2) {
                validated = false;
            }
        });

        if (!validated) {
            alert('Заполните поле "Имя" и/или "Почта"');
        }

        if (validated===true) {
            //FINISH HIM!
            //нашли и определили перем с кнопкой завершить
            let finish = document.getElementById('finish');

            //функция к кнопке финиш
            function pressFinish() {
                //Объявляем постоянную и кладем в нее активный филдсет
                const field = document.querySelector('.fieldset--active');
                //скрываем филдсет
                field.classList.add('fieldset');
                field.classList.remove('fieldset--active');

                //объявляем переменную и втыкаем туда нодлист со всеми значеними элементов
                let results = document.querySelectorAll('.form-control, input:checked');
                console.log(results);

                //Находим див в документе
                let Res = document.querySelector('.results');

                //проходим по каждому объектув нодлисте results и выводим каждое его значение в хтмл
                results.forEach((obj) => {

                    Res.insertAdjacentHTML('beforeend', '<br>' + obj.value);
                });
            }

            finish.addEventListener('click', () => {
                pressFinish();
            });
        }
    });
});
