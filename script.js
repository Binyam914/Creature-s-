function showHome() {
    const creatures = document.querySelectorAll('.creature');
    creatures.forEach(creature => {
        const home = creature.dataset.home;
        switch (home) {
            case 'land':
                creature.style.backgroundColor = 'green';
                break;
            case 'water':
                creature.style.backgroundColor = 'blue';
                break;
            case 'air':
                creature.style.backgroundColor = 'yellow';
                break;
            default:
                break;
        }
    });
}

function showType() {
    const creatures = document.querySelectorAll('.creature');
    creatures.forEach(creature => {
        const type = creature.dataset.type;
        switch (type) {
            case 'animal':
                creature.style.border = '2px solid red';
                break;
            case 'insect':
                creature.style.border = '2px dashed orange';
                break;
            default:
                break;
        }
    });
}

function clearAll() {
    const creatures = document.querySelectorAll('.creature');
    creatures.forEach(creature => {
        creature.style.backgroundColor = '';
        creature.style.border = '2px solid #333';
    });
}
