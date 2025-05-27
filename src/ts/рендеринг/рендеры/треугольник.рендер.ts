import { Треугольник } from "../../геометрия/фигуры/треугольник";
import { РендерФигуры } from "../рендер-фигуры";

export class РендерТреугольник extends РендерФигуры {
    
    создатьSVG(): string {
        const единица = this.фигура.основнаяЕдиница;
        const стороны = (this.фигура as Треугольник).стороны.map(s => s[единица].val.toFixed(2));
        
        return `
        <div class="shape-visual">
            <svg viewBox="0 0 200 180" class="shape-svg">
                <path id="sideAB" d="M108.7,15 L188.7,155" fill="none"/>
                <path id="sideBC" d="M20,170 L180,170" fill="none"/>
                <path id="sideCA" d="M11.3,155 L91.3,15" fill="none"/>
                <polygon points="100,20 180,160 20,160" class="neon-triangle"/>
                <text><textPath href="#sideCA" startOffset="50%" text-anchor="middle"
                      class="dimension-text">${стороны[0]}${единица}</textPath></text>
                <text><textPath href="#sideAB" startOffset="50%" text-anchor="middle" 
                      class="dimension-text">${стороны[1]}${единица}</textPath></text>
                <text><textPath href="#sideBC" startOffset="50%" text-anchor="middle"
                      class="dimension-text">${стороны[2]}${единица}</textPath></text>                
            </svg>
        </div>`;
    }

    создатьУникальныеСвойства(): string {
        const единица = this.фигура.основнаяЕдиница;
        const стороны = (this.фигура as Треугольник).стороны.map(s => s[единица].val.toFixed(2)+единица).join('<br> ');
        return this.создатьТекстовоеСвойство("Стороны", стороны);
    }
}
