function processData(input) {
    // parsing the inputs
    const inputs = input.split('\n'),
        t = parseInt(inputs[0]);

    for (let i = 1; i <= 2 * t; i+=2) {
        const data = inputs[i].split(' ').map(u => parseInt(u)),
            K = data[1], // number of money to be removed
            N = data[0], // number of bags
            bags = inputs[i+1].split(' ').map(u => parseInt(u));

        let max = 0; // maximum money he can get

        for (let j = 0; j < N; j++) {
            const count = bags.reduce((a, b, index) => {
                if (index !== j && b) return a * b;
                else return a;
            }, 1);

            max = Math.max(max, (bags[j] - K) * count);
        }

        console.log(max);
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