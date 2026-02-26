document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        antipasti: [
            {
                nome: "Tartare di Zucchine",
                prezzo: 9.50,
                descrizione: "Zucchine fresche marinate, salsa al basilico e germogli per un antipasto rinfrescante."
            },
            {
                nome: "Carpaccio di Barbabietola", 
                prezzo: 8.90,
                descrizione: "Barbabietola marinata servita con crema di mandorle e semi di zucca croccanti."
            }
        ],
        primi: [
            {
                nome: "Risotto al Tartufo Verde",
                prezzo: 15.50,
                descrizione: "Riso Carnaroli mantecato con crema di tartufo e chips di topinambur croccanti."
            }
        ]
    };

    const menuGrid = document.querySelector('.menu-grid');

    Object.values(menuData).flat().forEach(piatto => {
        const piattoDom = document.createElement('div');
        piattoDom.classList.add('menu-item');
        piattoDom.innerHTML = `
            <h3>${piatto.nome}</h3>
            <p>${piatto.descrizione}</p>
            <span class="prezzo">€${piatto.prezzo.toFixed(2)}</span>
        `;
        menuGrid.appendChild(piattoDom);
    });
});