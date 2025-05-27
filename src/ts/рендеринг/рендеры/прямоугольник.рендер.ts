import { Прямоугольник } from "../../геометрия/фигуры/прямоугольник";
import { РендерФигуры } from "../рендер-фигуры";

export class РендерПрямоугольник extends РендерФигуры {
   
    создатьSVG(): string {
        const единица = this.фигура.основнаяЕдиница;
        const прямоугольник = this.фигура as Прямоугольник;
        const ширина = прямоугольник.width.val.toFixed(2);
        const высота = прямоугольник.height.val.toFixed(2);
        
        return `
        <div class="shape-visual">
            <svg viewBox="0 0 200 120" class="shape-svg">
                <rect x="20" y="20" width="160" height="80" class="neon-rect"></rect>
                <text text-anchor="middle" class="dimension-text" x="50%" y="11%">${ширина} ${единица}</text>
                <text text-anchor="middle" dominant-baseline="middle" transform="rotate(90,180,60)" 
                      class="dimension-text" x="180" y="42%">${высота} ${единица}</text>
            </svg>
        </div>`;
    }

    создатьУникальныеСвойства(): string {
        const прямоугольник = this.фигура as Прямоугольник;
        const единица = this.фигура.основнаяЕдиница;
        
        return `
        ${this.создатьЧисловоеСвойство("Ширина", прямоугольник.width.val, единица)}
        ${this.создатьЧисловоеСвойство("Высота", прямоугольник.height.val, единица)}`;
    }
}
