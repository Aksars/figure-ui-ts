import '../css/style.css' // Стили можно подключать как в html так и в TS
import { Точка, Фигура, Круг, Прямоугольник as Rectangle } from './classes/area'

// определяем контейнер для отрисовки фигур
let контейнерДляИнфы = document.querySelector('.figures-text-info')
if (!контейнерДляИнфы) throw new Error('Контейнер не найден')
if (!(контейнерДляИнфы instanceof HTMLElement)) {
  throw new Error('Элемент не является HTMLElement')
}

// Создаем фигуры в массиве
let shapes: Фигура[] = [
  new Круг(2), // Круг радиусом 2
  new Rectangle(5, 6), // Квадрат 5*6
  new Rectangle(3, 6), // Квадрат 3*6
]
// Или можем сразу посчитать площади
let areas: number[] = [
  new Круг(2).площадь(), // Площадь ≈ 12.57 м²
  new Rectangle(5, 6).площадь(), // Площадь = 30 м²
  new Rectangle(3, 6).площадь(), // Площадь = 18 м²
]

// в прям === тот прямоугольник который будем считать
// в еденица === "м" || еденица === "см" метры или сантиметры
function makeHTML(прям: Rectangle, единица: 'м' | 'см' = 'м'): string {
  let площадь = прям.площадь()
  let периметр = прям.периметр()
  if (единица === 'м')
    return `
   <div class="result">   
        <h1>Периметр прямоугольника  = ${периметр} м </h1>
        <h1>Площадь прямоугольника  = ${площадь} м^2 </h1>
   </div>`
  else
    return `
   <div class="result">
        <h1>Периметр прямоугольника  = ${периметр * 100} см </h1>
        <h1>Площадь прямоугольника  = ${площадь * 10000} см^2 </h1>
   </div>`
}

function HTMLвКонтейнер(html: string, div: HTMLElement = document.body): void {
  div.insertAdjacentHTML('beforeend', html)
}

// Наши фигуры
let circle1 = new Круг(60)
let circle2 = new Круг(140)
let circle3 = new Круг(9)
let kvadr1 = new Rectangle(40, 40) // Квадрат 40м*40м
let priam1 = new Rectangle(20, 60) // Квадрат 20м*60м
let priam2 = new Rectangle(100, 40) // Квадрат 100м*40м

// можно выводить что то в консоль
console.log(makeHTML(kvadr1, 'см')) // вывод HTML квадрата1 в см
console.log(makeHTML(priam1, 'м')) // вывод HTML прямоугольника2 в м
console.log(makeHTML(priam2)) // вывод HTML прямоугольника3 тоже в метрах, (они там по умолчанию  еденица: "м" | "см" = "м")

// А можно создавать
let хтмлФигуры1 = makeHTML(kvadr1, 'см')
let хтмлФигуры2 = makeHTML(priam1, 'м')
let хтмлФигуры3 = makeHTML(priam2)

// очищаем контейнер для отображения
контейнерДляИнфы.innerHTML = ''
// засовываем в контейнер фигуры
HTMLвКонтейнер(хтмлФигуры1, контейнерДляИнфы)
HTMLвКонтейнер(хтмлФигуры2, контейнерДляИнфы)
HTMLвКонтейнер(хтмлФигуры3, контейнерДляИнфы)
