const fizzbuzz = (input) => {
    const fizz = (input % 3 === 0) ? 'Fizz' : '';
    const buzz = (input % 5 === 0) ? 'Buzz' : '';

    if (fizz || buzz) {
        return `${fizz}${buzz}`;
    }

    return input;
}

module.exports = fizzbuzz;