function processData(input) {
    const inputs = input.split('\n')

    for (let i = 1; i <= inputs[0] * 2; i+=2) { // inputs[0] contains the number of testcases
        const word = inputs[i+1].split(' ')[inputs[i]];

        if (word) {
            console.log(word.split('').reduce((a, b) => {
                return a + b.charCodeAt(0);
            }, 0))
        } else {
            console.log(-1);
        }
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
