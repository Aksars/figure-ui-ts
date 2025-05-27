import {Фигура} from "../геометрия/фигура"

// сюда поместить РендерФигуры

export abstract class РендерФигуры {
    constructor(protected фигура: Фигура) {}

    abstract создатьSVG(): string;
    abstract создатьУникальныеСвойства(): string;

    создатьХТМЛФигуры(): string {
        return `
        <div class="shape-card neon-card">
            ${this.создатьЗаголовок()}
            <div class="shape-content">
                ${this.создатьSVG()}
                ${this.создатьСвойстваФигуры()}
            </div>
        </div>`;
    }
    
    создатьЗаголовок(): string {
        return `
        <div class="shape-header">
            <h1 class="shape-title">${this.фигура.constructor.name}</h1>
        </div>`;
    }
    
    создатьСвойстваФигуры(): string {
        return `
        <div class="shape-properties">
            ${this.создатьУникальныеСвойства()}
            ${this.создатьВычисляемыеСвойства()}
        </div>`;
    }

    private создатьВычисляемыеСвойства(): string {
        return `
        ${this.создатьТекстовоеСвойство("Периметр", this.фигура.периметр().строкой, true)}
        ${this.создатьТекстовоеСвойство("Площадь", this.фигура.площадь().строкой, true)}`;
    }

   protected создатьЧисловоеСвойство(
        название: string,
        значение: number,
        единица: string,
        isMain = false
    ): string {
        return this.создатьСвойствоHTML(
            название,
            `${значение.toFixed(2)} ${единица}`,
            isMain
        );
    }
    
    protected создатьТекстовоеСвойство(
        название: string,
        значение: string,
        isMain = false
    ): string {
        return this.создатьСвойствоHTML(название, значение, isMain);
    }
    
    private создатьСвойствоHTML(
        название: string,
        значение: string,
        isMain: boolean
    ): string {
        return `
        <div class="property ${isMain ? 'main-property' : ''}">
            <span class="neon-property">${название}:</span> 
            <br>
            <span>${значение}</span>  
        </div>`;
    }
    
}