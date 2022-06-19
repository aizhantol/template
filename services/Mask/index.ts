const tokens:any = {
  '#': {
    pattern: /\d/
  }
}

class Mask {
  constructor() {}

  private replaceAt(str: string, index: number, replacement: string): string {
    return str.substring(0, index) + replacement + str.substring(index + str.length)
  }

  private masking(mask: string, value: string): any {
    let [position, result, has] = [0, '', -1]
    mask.split('').forEach((maskChar: string, index: number) => {
      if (Object.keys(tokens).includes(maskChar)) {
        while (position < value.length) {
          if (tokens[maskChar].pattern.test(value[position]) && value[position] !== mask[position]) {
            result += value[position]
            position++
            has = index
            break
          }
          position++
        }
      } else if (position < value.length) {
        result += maskChar
      }
    })
    return has > -1 ? result.substring(0, has + 1) : ''
  }

  public mask(mask: any[], value: string): any {
    if (Array.isArray(mask)) {
      // @ts-ignore
    } else if (typeof mask === 'object') {
      // @ts-ignore
    } else {
      return this.masking(mask, value)
    }
  }
}

export default Mask
