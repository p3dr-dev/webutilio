declare module 'potrace' {
  interface PotraceOptions {
    threshold?: number;
    blackOnWhite?: boolean;
    turdSize?: number;
    turnPolicy?: 'black' | 'white' | 'left' | 'right' | 'minority' | 'majority';
    alphaMax?: number;
    optCurve?: boolean;
    optTolerance?: number;
    color?: string;
    background?: string;
  }

  interface Potrace {
    setParameters(options: PotraceOptions): void;
    loadImage(buffer: Buffer | ArrayBuffer, callback: (error?: Error) => void): void;
    getSVG(): string;
    getPathTag(): string;
  }

  export function from(buffer: Buffer | ArrayBuffer): Potrace;
  export function trace(buffer: Buffer | ArrayBuffer, options?: PotraceOptions, callback?: (error?: Error, svg?: string) => void): void;
}
