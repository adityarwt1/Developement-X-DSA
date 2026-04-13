function armStrongNumber(num) {
    let indivisualsum = 0;
    let original = num;

    while (num > 0) {
        const lastNumber = num % 10;
        indivisualsum += Math.pow(lastNumber, 3)
        num = Math.floor(num / 10);
    }

    return original === indivisualsum;
}

const input = Number(process.argv[2]);
console.log(armStrongNumber(input));