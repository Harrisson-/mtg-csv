
/**
 * Based on https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
 * 
 * @param hexColor {string}
 * @returns 
 */
export function hextoRGB(hexColor: string): number[] {
  const colorArray = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g) ?? [];
  return colorArray.map(color => parseInt(color, 16));
}

/**
 * Based on https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
 * 
 * @param rgbColor {number[]}
 * @returns { string }
 */
export function rgbToHex(rgbColor: number[]): string {
  const r = rgbColor[0].toString(16);
  const g = rgbColor[1].toString(16);
  const b = rgbColor[2].toString(16);
  return "#" + (r.length == 1 ? "0" + r : r) + (g.length == 1 ? "0" + g : g) + (b.length == 1 ? "0" + b : b);
}

/**
 * 
 * @param colorsArray {number[][]}
 * @param stepBetween {number}
 */
function createPalette(colorsArray: number[][], stepBetween: number): number[][] {
  const palette: number[][] = [];
  for (let index = 0; index <= colorsArray.length -1; index++) {
    const startColor = colorsArray[index];
    const endColor = colorsArray[index + 1];
    const rRatio = (endColor[0] - startColor[0]) / stepBetween;
    const gRatio = (endColor[1] - startColor[1]) / stepBetween;
    const bRatio = (endColor[2] - startColor[2]) / stepBetween;
    for(let step = 0; step < stepBetween; step++) {
      palette[palette.length - 1 + index + step] = [
        startColor[0] + rRatio,
        startColor[1] + gRatio,
        startColor[2] + bRatio,
      ];
    }
  }
  return palette;
}

export function buildPalette(colorsArray: string[], stepBetween: number): string[] {
  const rgbcolors = colorsArray.map(color => hextoRGB(color));
  const palette = createPalette(rgbcolors, stepBetween);
  return palette.map(rgbcolor => rgbToHex(rgbcolor));
}
