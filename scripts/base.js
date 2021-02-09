class Character {
    constructor({name, str, agi, vit, mag, lck, hp, mana, soak, fp}) {
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
    let characters = loadCharacters();
    console.log(characters);
};

const loadCharacters = () => {
    let characters = [];
    for (const c of charactersData) {
        characters.push(new Character(c));
    }
    return characters;
};
