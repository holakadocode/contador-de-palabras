
function countWords() {
    const text = document.getElementById('text').value;
    const resultado = document.getElementById('resultado');

    resultado.textContent = `El texto tiene ${text.split(' ').length} palabras`;
}