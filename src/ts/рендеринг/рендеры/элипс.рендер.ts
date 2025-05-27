import { Элипс } from "../../геометрия/фигуры/элипс";
import { РендерФигуры } from "../рендер-фигуры";

export class РендерЭлипс extends РендерФигуры {
    
    создатьSVG(): string {
        const единица = this.фигура.основнаяЕдиница;
        const большаяОсь = (this.фигура as Элипс).majorAxis[единица].val.toFixed(2);
        const малаяОсь = (this.фигура as Элипс).minorAxis[единица].val.toFixed(2);
        
        return `
        <div class="shape-visual">
            <svg viewBox="0 0 200 120" class="shape-svg">
                <ellipse cx="100" cy="60" rx="80" ry="40" class="neon-ellipse"/>
                <line x1="20" y1="60" x2="180" y2="60" class="dimension-line"/>
                <text x="33.33%" y="55" text-anchor="middle" class="dimension-text">
                    ${большаяОсь}${единица}
                </text>
                <text x="75%" y="50%" text-anchor="middle" dominant-baseline="middle"
                      transform="rotate(90,130,40)" class="dimension-text">
                    ${малаяОсь}${единица}
                </text>
                <line x1="100" y1="20" x2="100" y2="100" class="dimension-line"/>
            </svg>
        </div>`;
    }

    создатьУникальныеСвойства(): string {
        const единица = this.фигура.основнаяЕдиница;
        const большаяОсь = (this.фигура as Элипс).majorAxis[единица].val;
        const малаяОсь = (this.фигура as Элипс).minorAxis[единица].val;
        
        return `
        ${this.создатьЧисловоеСвойство("Большая ось", большаяОсь, единица)}
        ${this.создатьЧисловоеСвойство("Малая ось", малаяОсь, единица)}`;
    }
}