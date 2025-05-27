import { Круг } from "../../геометрия/фигуры/круг";
import { РендерФигуры } from "../рендер-фигуры";

export class РендерКруг extends РендерФигуры {

    создатьSVG(): string {
        const единица = this.фигура.основнаяЕдиница;
        const радиус = (this.фигура as Круг).radius[единица].val.toFixed(2);

        return `
        <div class="shape-visual">
            <svg viewBox="0 0 200 200" class="shape-svg">
                <circle cx="100" cy="100" r="80" class="neon-circle"/>
                <line x1="100" y1="100" x2="180" y2="100" 
                      stroke-dasharray="5,3" class="dimension-line"/>
                <text x="140" y="92" text-anchor="middle" class="dimension-text">
                    ${радиус}${единица}
                </text>
            </svg>
        </div>`;
    }

    создатьУникальныеСвойства(): string {
        const единица = this.фигура.основнаяЕдиница;
        const радиус = (this.фигура as Круг).radius[единица].val;
        return this.создатьЧисловоеСвойство("Радиус", радиус, единица);
    }
}