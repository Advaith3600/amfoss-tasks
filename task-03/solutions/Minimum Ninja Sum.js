function processData(input) {
    // process inputs
    const inputs = input.split('\n'),
        t = parseInt(inputs[0]);

    for (let i = 1; i <= t; i++) {
        let N = inputs[i].split(' ')[0],
            K = parseInt(inputs[i].split(' ')[1]),
            min = Infinity,
            ninja_sum_cache = [];

        for (let j = 0; j < N.length; j++) {
            let ninja_sum = 0;

            for (let k = j; k < j + K; k++) {
                let temp = parseInt(N[k]);

                if (isFinite(temp))
                    ninja_sum += (temp);
                else {
                    ninja_sum = -1;
                    break;
                }
            }

            ninja_sum_cache.push(ninja_sum);
        }

        for (let j = 0; j < ninja_sum_cache.length - 1; j++) {
            if (ninja_sum_cache[j] !== -1 && ninja_sum_cache[j+1] !== -1)
                min = Math.min(min, Math.abs(ninja_sum_cache[j] - ninja_sum_cache[j+1]));
        }

        if (min === Infinity) console.log(-1);
        else console.log(min);

        // objective - minimum amount of MNS between two digits
        // MNS - absolute value of difference between the Ninja Sum of the respective digits
        // Ninga Sum - sum of K consecutive digits including the digit
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