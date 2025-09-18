// Калькулятор дохода
function calculateIncome() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const hourlyRate = parseInt(document.getElementById('hourlyRate').value) || 0;
    const tariff = parseFloat(document.getElementById('tariff').value);
    const result = (hours * hourlyRate) * (1 - tariff);
    document.getElementById('result').textContent = result.toLocaleString('ru-RU') + ' ₽';
}
// Прокрутка к началу при клике на логотип
document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
