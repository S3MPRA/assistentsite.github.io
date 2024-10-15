const slider = document.querySelector('.services-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true; // Указываем, что кнопка мыши зажата
    slider.classList.add('active'); // Добавляем класс активного состояния
    startX = e.pageX - slider.offsetLeft; // Получаем начальную позицию мыши
    scrollLeft = slider.scrollLeft; // Получаем текущее положение прокрутки
});

// При движении мыши
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Если кнопка мыши не зажата, ничего не делаем
    e.preventDefault(); // Предотвращаем выделение текста

    const x = e.pageX - slider.offsetLeft; // Получаем текущую позицию мыши
    const walk = (x - startX) * 2; // Вычисляем расстояние прокрутки (умножаем для увеличения скорости)
    slider.scrollLeft = scrollLeft - walk; // Обновляем положение прокрутки
});

// При отпускании мыши или выходе за границы элемента
slider.addEventListener('mouseleave', () => {
    isDown = false; // Указываем, что кнопка мыши отпущена
    slider.classList.remove('active'); // Убираем класс активного состояния
});

slider.addEventListener('mouseup', () => {
    isDown = false; // Указываем, что кнопка мыши отпущена
    slider.classList.remove('active'); // Убираем класс активного состояния
});

// Для плавного прокручивания при использовании колесика мыши
slider.addEventListener('wheel', (e) => {
    e.preventDefault(); // Предотвращаем стандартную прокрутку
    slider.scrollLeft += e.deltaY; // Прокручиваем в зависимости от направления прокрутки
});
