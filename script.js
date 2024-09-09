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

    /* Стиль для нового блока */
    #content {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div id="banner"></div>

  <div id="content">
    <!-- Здесь будет содержимое вашего нового блока -->
    <h1>Заголовок нового блока</h1>
    <p>Текст нового блока.</p>
  </div>

  <script src="script.js"></script> <!-- Подключение JavaScript-файла -->

</body>
</html>
