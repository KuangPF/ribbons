interface IOptions {
    /** ribbon width */
    size: number;
    /** ribbon transparency */
    alpha: number;
    /** z-index */
    zIndex: number;
}
interface IPath {
    x: number;
    y: number;
}
export default class Ribbons {
    config: IOptions;
    canvasRibbon: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    path: IPath[];
    constructor(option?: Partial<IOptions>);
    init(): void;
    initCanvas(): void;
    drawLine(start: IPath, end: IPath): void;
    _calculateY(y: number): number;
    extractConfig(option?: Partial<IOptions>): IOptions;
}
export {};
