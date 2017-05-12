
interface IChartProps {
    data: any[];
    type:string;
    x:string;
    y:string;
    color:string;
}

declare class Chart {
    renderTo(htmlTag: string): void;
}

declare module tauCharts {
    class Chart{
        constructor(props: IChartProps)
        renderTo(htmlTag: string): void;
    }
        
}

export = tauCharts;