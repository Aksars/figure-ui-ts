import '../css/style.css' // Стили можно подключать как в html так и в TS
import { Точка, Фигура, Круг, Прямоугольник } from './classes/figures'

// определяем контейнер для отрисовки фигур
let контейнерДляИнфы = document.querySelector('.figures-text-info')
if (!контейнерДляИнфы) throw new Error('Контейнер не найден')
if (!(контейнерДляИнфы instanceof HTMLElement)) {
  throw new Error('Элемент не является HTMLElement')
}

// Создаем фигуры в массиве
let shapes: Фигура[] = [
  new Круг(2), // Круг радиусом 2
  new Прямоугольник(5, 6), // Квадрат 5*6
  new Прямоугольник(3, 7), // Квадрат 3*6
]
// // Или можем сразу посчитать площади
// let areas: number[] = [
//   new Круг(2).площадь(), // Площадь ≈ 12.57 м²
//   new Прямоугольник(5, 6).площадь(), // Площадь = 30 м²
//   new Прямоугольник(3, 9).площадь(), // Площадь = 18 м²
// ]

// в прям === тот прямоугольник который будем считать
// в еденица === "м" || еденица === "см" метры или сантиметры
function создатьHTML(прям: Прямоугольник, единица: 'м' | 'см' = 'м'): string {  
  let площадь
  let периметр
  if (единица === 'м') {
    периметр = прям.периметр().м.строкой
    площадь = прям.площадь().м.строкой
  } else {
    периметр = прям.периметр().см.строкой
    площадь = прям.площадь().см.строкой
  }

  return `
  <div class="result">       
      <h1>Периметр прямоугольника  = ${периметр} </h1>
      <h1>Площадь прямоугольника  = ${площадь} </h1>
  </div>`
}

function HTMLвКонтейнер(html: string, div: HTMLElement = document.body): void {
  div.insertAdjacentHTML('beforeend', html)
}

// Наши фигуры
let circle1 = new Круг(6)
let circle2 = new Круг(14)
let circle3 = new Круг(9)
let kvadr1 = new Прямоугольник(40, 40) // Квадрат 40м*40м
let priam1 = new Прямоугольник(20, 60) // Квадрат 20м*60м
let priam2 = new Прямоугольник(100, 40) // Квадрат 100м*40м

// можно выводить что то в консоль
console.log(создатьHTML(kvadr1, 'см')) // вывод HTML квадрата1 в см
console.log(создатьHTML(priam1, 'м')) // вывод HTML прямоугольника2 в м
console.log(создатьHTML(priam2)) // вывод HTML прямоугольника3 тоже в метрах, (они там по умолчанию  еденица: "м" | "см" = "м")

// А можно создавать
let хтмлФигуры1 = создатьHTML(kvadr1, 'м')
let хтмлФигуры2 = создатьHTML(kvadr1, 'см')
let хтмлФигуры3 = создатьHTML(priam1, 'м')
let хтмлФигуры4 = создатьHTML(priam2)

// очищаем контейнер для отображения
контейнерДляИнфы.innerHTML = ''
// засовываем в контейнер фигуры
HTMLвКонтейнер(хтмлФигуры1, контейнерДляИнфы)
HTMLвКонтейнер(хтмлФигуры2, контейнерДляИнфы)
HTMLвКонтейнер(хтмлФигуры3, контейнерДляИнфы)
HTMLвКонтейнер(хтмлФигуры4, контейнерДляИнфы)

//let новыйПрям = прям.конвертироватьВЕдиницы(единица)
// <h1>Прямоугольник ${прям.width[единица].val} х ${прям.height[единица].val} ${единица} </h1>