const card = document.querySelector(".card");
const card_desconhecido = document.getElementById('pokemon-desconhecido');

async function buscarPokemon() {
    const nome = document.getElementById("busca").value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${nome.trim()}`;
    if (!nome.trim()) {
        document.getElementById("busca").value = '';
        alert("Digite o nome de um pokémon!");
        return
    };

    try {
        const resData = await fetch(url).then(res => res.json());
        console.log(resData)
        
        mostrarPokemon(resData);
    } catch (error) {
        console.log("Erro:", error)
        if(card_desconhecido.classList.contains("hidden")){
            trocarTelas()
        } else {
            card_desconhecido.style.animation = 'tremerTela 0.2s ease'
            setTimeout(() => {
                card_desconhecido.style.animation = ''
            },210)
        };
    };
};

function trocarTelas() {
    card.classList.toggle("hidden");
    card_desconhecido.classList.toggle("hidden");
}


function clearCard() {
    document.getElementById("nome").textContent = ''
    document.getElementById("tipo").textContent = ''
    document.getElementById("img-pokemon").src = ''
    document.getElementById("peso").textContent = ''
    document.getElementById("altura").textContent = ''
    const skills = document.querySelector(".habilidades").children;
    for(let i = 1; i < skills.length; i++) {
        skills[i].textContent = 'vazio';
    }
};

function mostrarPokemon(pokemon) {
    clearCard();
    if(card.classList.contains("hidden")) trocarTelas();

    const cardInfo = {
        nome: document.getElementById("nome"),
        tipo: document.getElementById("tipo"),
        img: document.getElementById("img-pokemon"),
        peso: document.getElementById("peso"),
        altura: document.getElementById("altura"),
        stats: {
            HP:document.getElementById("hp"),
            ATK: document.getElementById("atk"),
            DEF: document.getElementById("def"),
            SP_DEF: document.getElementById("sp_def"),
            SP_ATK: document.getElementById("sp_atk"),
            SPD: document.getElementById("spd")
        }
    };


//  <!-- Nome:                                      -->
    cardInfo.nome.textContent = pokemon.name.toUpperCase();
    
//  <!-- Tipos:                                     -->
    pokemon.types.map(tipo => {
        if(cardInfo.tipo.textContent === "Tipo") {cardInfo.tipo.textContent = ''};
        const span = document.createElement('span');
        span.textContent = tipo.type.name.toUpperCase();
        span.classList.add(tipo.type.name.toLowerCase());
        cardInfo.tipo.appendChild(span);
    });

//  <!-- Imagem:                                    -->
    cardInfo.img.src = pokemon.sprites.other['official-artwork'].front_default;

//  <!-- Altura:                                    -->
    cardInfo.altura.textContent = pokemon.height;

//  <!-- Peso:                                      -->
    cardInfo.peso.textContent = pokemon.weight;

//  <!-- Habilidades:                               -->
    pokemon.abilities.map((habilidade, i) => { // Limite 3
        document.querySelector(`.hld-${i+1}`).textContent = habilidade.ability.name;
    });

//  <!-- Status:                                    -->
    cardInfo.stats.HP.textContent = pokemon.stats[0].base_stat;
    cardInfo.stats.ATK.textContent = pokemon.stats[1].base_stat;
    cardInfo.stats.DEF.textContent = pokemon.stats[2].base_stat;
    cardInfo.stats.SP_ATK.textContent = pokemon.stats[3].base_stat;
    cardInfo.stats.SP_DEF.textContent = pokemon.stats[4].base_stat;
    cardInfo.stats.SPD.textContent = pokemon.stats[5].base_stat;

    console.log(card);
};
