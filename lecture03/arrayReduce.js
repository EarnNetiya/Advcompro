const array = [15, 16, 17, 18];

function reducer(accumulator, currentValue, index) {
    const returns =accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValie: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);