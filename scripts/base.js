class Character {
    constructor(name, str, agi, vit, mag, lck, hp, mana, soak, fp) {
        this.name = name;
        this.str = str;
        this.agi = agi;
        this.vit = vit;
        this.mag = mag;
        this.lck = lck;
        this.hp = hp;
        this.mana = mana;
        this.soak = soak;
        this.fp = fp;
    }
}

window.onload = (event) => {
    loadCharacters(window.location.href + "/data/PCs.json");
};

const loadCharacters = (filename) => {
    fetch(filename)
        .then(response => response.json())
        .then(data => console.log(data));
}
