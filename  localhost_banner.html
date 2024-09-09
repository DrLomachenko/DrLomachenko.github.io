<!DOCTYPE html>
<html>
<head>
  <title>Динамический баннер</title>
  <style>
    #banner {
      position: relative; /* Для позиционирования элементов */
    }

    #banner img {
      max-width: 100%; /* Максимальная ширина изображения */
      max-height: 100%; /* Максимальная высота изображения */
      display: block; /* Предотвращение пробелов между элементами */
    }

    .dot-container {
      position: absolute;
      bottom: 10px; /* Позиционирование внизу */
      left: 10px; /* Позиционирование слева */
      background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
      padding: 5px 10px;
      border-radius: 5px;
    }

    .dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 2px;
      background-color: white;
      border-radius: 50%;
      animation: dot-animation 1s infinite;
    }

    @keyframes dot-animation {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .ad-label {
      color: white;
      font-weight: bold;
      margin-left: 10px;
    }
  </style>
</head>
<body>

  <div id="banner"></div>

  <script>
    const banner = document.getElementById('banner');

    function updateBanner() {
      // Рандомный файл изображения
      var randomFilename = Math.floor(Math.random() * 10) + 1;
      // Загрузка изображения
      var img = document.createElement('img');
      img.src = 'http://185.158.153.19:8000/localhost?getImg?t=' + Date.now(); // Добавляем временную метку

      img.onload = function() {
        // Очистка баннера
        banner.innerHTML = '';

        // Создание контейнера с точками
        const dotContainer = document.createElement('div');
        dotContainer.classList.add('dot-container');

        // Создание точек
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          dotContainer.appendChild(dot);
        }

        // Добавление метки "Реклама"
        const adLabel = document.createElement('span');
        adLabel.classList.add('ad-label');
        adLabel.textContent = 'Реклама';
        dotContainer.appendChild(adLabel);

        // Установка размеров баннера по размеру изображения
        banner.style.width = img.width + 'px';
        banner.style.height = img.height + 'px';

        // Добавление изображения
        banner.appendChild(img);
        // Добавление контейнера с точками
        banner.appendChild(dotContainer);
      };

      // Обработка ошибки загрузки
      img.onerror = function() {
        console.error('Ошибка загрузки изображения');
        // Вы можете добавить обработку ошибки, например, показать сообщение пользователю
      };
    }

    // Вызов функции при загрузке страницы
    updateBanner();
    // Интервал обновления изображения
    setInterval(updateBanner, 2000); 
  </script>

</body>
</html>
