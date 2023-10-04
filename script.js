const calcTemp = () => {
    const temperature = document.getElementById('temp').value;
    const tempChoice = document.getElementById('tempChoose');
    const valueTemp = tempChoose.options[tempChoice.selectedIndex].value;
    const ctof = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const ftoc = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }
    let result;
    if (valueTemp == 'cel') {
        result = ctof(temperature);
        document.getElementById('result').innerHTML = `= <code> ${result}°Fahrenheit </code>`;
    } else {
        result = ftoc(temperature);
        document.getElementById('result').innerHTML = `= <code> ${result}°celsius </code>`;
    }
}