
/**
 * Based on https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
 * 
 * @param colorHex {string}
 * @returns 
 */
function hextoRGB(colorHex: string): number[] {
  const colorArray = colorHex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g) ?? [];
  return colorArray.map(x => parseInt(x, 16));
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

function rgbToHex(colorArray: number[]) {

}
