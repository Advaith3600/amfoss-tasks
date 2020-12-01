function validateSlice(array) {
    let count0 = 0, count1 = 0;

    for (let arr of array) {
        for (let c of arr.split('')) {
            if (parseInt(c)) count1++;
            else count0++;
        }
    }

    return count0 !== count1;
}

function processData(input) {
    // parsing the inputs
    const inputs = input.split('\n'),
        length = parseInt(inputs[0])
    string = inputs[1];

    if (validateSlice([string])) console.log(1)
    else console.log(2);

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
