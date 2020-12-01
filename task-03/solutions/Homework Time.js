// function to determine Incredible series
const _series = [1, 2, 3];

function series(n) {
    for (let i = 3; i < n; i++) {
        _series[i] = (_series[i-1] + _series[i-2] + _series[i-3]) % (Math.pow(10, 9) + 7);
    }

    return _series[n-1];
}

// function to reverse the number
function reverse(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function processData(input) {
    // processing inputs
    const inputs = input.split('\n').map(u => parseInt(u)),
        t = inputs[0];

    // looping all test cases
    for (let i = 1; i <= t; i++) {
        console.log(reverse(series(inputs[i])))
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