function validateArray(array) {
    for (let arr of array) {
        if (arr < 0) return false;
    }

    return true;
}

function processData(input) {
    //Enter your code here

    // parsing the input
    const inputs = input.split('\n');

    // constants
    const amt = inputs[0]; // number of type of papers
    const avap = inputs[1].split(' ').map(a => parseInt(a)); // number of type of papers he have

    // variables
    let total_papers = inputs[2].split(' ').map(a => parseInt(a)); // number of papers available
    let num = -1; // number of notes he can make

    while (validateArray(total_papers)) {
        total_papers = total_papers.map((a, index) => {
            return a - avap[index]; // subtracting each
        });

        num++;
    }

    console.log(num);
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
