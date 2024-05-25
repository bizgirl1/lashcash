function calculateProfit() {
    const numLashes = parseFloat(document.getElementById('numLashes').value);
    const pricePerLash = parseFloat(document.getElementById('pricePerLash').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    const monthlyIncome = numLashes * pricePerLash;
    const monthlyProfit = monthlyIncome - expenses;

    document.getElementById('monthlyIncome').textContent = `$${monthlyIncome.toFixed(2)}`;
    const profitSpan = document.getElementById('monthlyProfit');
    profitSpan.textContent = `$${monthlyProfit.toFixed(2)}`;

    // Change profit color based on positive/negative value
    if (monthlyProfit >= 0) {
        profitSpan.className = 'green';
    } else {
        profitSpan.className = 'red';
    }
}
