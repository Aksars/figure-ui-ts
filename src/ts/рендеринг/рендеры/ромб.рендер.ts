import { Ромб } from "../../геометрия/фигуры/ромб";
import { РендерФигуры } from "../рендер-фигуры";

export class РендерРомб extends РендерФигуры {
 
    создатьSVG(): string {
        const единица = this.фигура.основнаяЕдиница;
        const бок = (this.фигура as Ромб).side[единица].val.toFixed(2);
        const высота = (this.фигура as Ромб).height[единица].val.toFixed(2);
        
        return `
        <div class="shape-visual">
            <svg viewBox="0 0 200 180" class="shape-svg">
                <polygon points="100,20 180,100 100,180 20,100" class="neon-rhombus"/>
                <line x1="100" y1="20" x2="100" y2="180" class="dimension-line"/>
                <text x="100" y="90" text-anchor="middle" dominant-baseline="middle"
                      transform="rotate(90,100,100)" class="dimension-text">
                    ${высота}${единица}
                </text>
                <text x="140" y="52" text-anchor="middle" 
                      transform="rotate(45,140,60)" class="dimension-text">
                    ${бок}${единица}
                </text>
            </svg>
        </div>`;
    }

    создатьУникальныеСвойства(): string {
        const единица = this.фигура.основнаяЕдиница;
        const бок = (this.фигура as Ромб).side[единица].val;
        const высота = (this.фигура as Ромб).height[единица].val;
   
        return `
        ${this.создатьЧисловоеСвойство("Сторона", бок, единица)}
        ${this.создатьЧисловоеСвойство("Высота", высота, единица)}`;
    }
}
