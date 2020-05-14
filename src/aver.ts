import add from 'lodash/add';

export default function (num1: number, num2: number | undefined): number {
    if (!num2) {
        return num1;
    }
    return add(num1, num2) / 2;
}
