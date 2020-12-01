// recursive function to add in the array
function addToArray(N, limits) {
    let index = 0,
        array = Array(limits.length).fill().map(u => 0);

    for (let i = 0; i < N; i++) {
        while (array[index] >= limits[index])
            index++;

        array[index]++;
    }

    return array;
}

function processData(input) {
    // parsing the inputs
    const inputs = input.split('\n');

    // for t test cases
    for (let i = 1; i <= parseInt(inputs[0]) * 3; i += 3) {
        const constraints = inputs[i].split(' ').map(u => parseInt(u)),
            M = constraints[1], // no: of boxes
            K = constraints[2]; // max num of boxes

        let N = constraints[0]; // no: of inifinity stones

        // filling boxes with infinty stones
        const limits = inputs[i+2].split(' ').map(u => parseInt(u));

        let array = addToArray(N, limits);

        // checking for limits
        let countBoxes = 0;

        for (let item of array)
            if (item) countBoxes++;

        if (countBoxes > K) console.log('NO');
        else console.log('YES')

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