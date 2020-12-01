function processData(input) {
    const order = parseInt(input),
        half = Math.floor(order / 2);
    let array = Array(order).fill().map(u => Array(order).fill());

    // top half
    for (let i = 0; i < half; i++) {
        let count = 0; // number of 'D'

        for (let j = 0; j <  order; j++) {
            if (half - i > j || (2 * i + 1) <= count)
                array[i][j] = '*';
            else {
                array[i][j] = 'D';
                count++;
            }
        }
    }

    // middle layer
    const middle = half;
    array[middle] = array[middle].map(u => 'D');

    // bottom half
    for (let i = Math.ceil(order / 2); i < order; i++) {
        let count = 0; // number of 'D'

        for (let j = 0; j <  order; j++) {
            if (i - Math.ceil(order / 2) + 1 > j || (2 * (order - i - 1) + 1) <= count)
                array[i][j] = '*';
            else {
                array[i][j] = 'D';
                count++;
            }
        }
    }

    for (let i = 0; i < order; i++) {
        console.log(array[i].join(''));
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
