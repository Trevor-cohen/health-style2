  const calculatorForm = document.getElementById('calculator-form');
const lastPeriodDateInput = document.getElementById('last-period-date');
const cycleLengthInput = document.getElementById('cycle-length');
const resultsDiv = document.getElementById('results');
const ovulationDateP = document.getElementById('ovulation-date');
const fertileDaysP = document.getElementById('fertile-days');

calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const lastPeriodDate = new Date(lastPeriodDateInput.value);
    const cycleLength = parseInt(cycleLengthInput.value);
    const ovulationDate = calculateOvulationDate(lastPeriodDate, cycleLength);
    const fertileDays = calculateFertileDays(ovulationDate);
    displayResults(ovulationDate, fertileDays);
});

function calculateOvulationDate(lastPeriodDate, cycleLength) {
    const ovulationDay = 14; // assuming ovulation occurs 14 days before next period
    const ovulationDate = new Date(lastPeriodDate.getTime() + (cycleLength - ovulationDay) * 24 * 60 * 60 * 1000);
    return ovulationDate;
}

function calculateFertileDays(ovulationDate) {
    const fertileDays = [];
    for (let i = -5; i <= 0; i++) {
        const fertileDay = new Date(ovulationDate.getTime() + i * 24 * 60 * 60 * 1000);
        fertileDays.push(fertileDay.toLocaleDateString());
    }
    return fertileDays.join(', ');
}

function displayResults(ovulationDate, fertileDays) {
    ovulationDateP.textContent = `Your ovulation date is: ${ovulationDate.toLocaleDateString()}`;
    fertileDaysP.textContent = `Your fertile days are: ${fertileDays}`;
    resultsDiv.style.display = 'block';
}