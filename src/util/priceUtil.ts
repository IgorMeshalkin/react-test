// Returns price string with spaces between every three chars.
export const getSeparatedPriceString = (price: number): string => {
    const array: string[] = price.toString().split('');
    let reversedString: string = '';
    for (let i = array.length - 1; i >= 0; i--) {
        if (reversedString.replaceAll(' ', '').length % 3 === 0) {
            reversedString += ' ';
        }
        reversedString += array[i];
    }

    let result:string = '';
    reversedString.split('').reverse().forEach(char => {
        result += char;
    });
    return result;
}