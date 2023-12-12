const monstros = [
    {
        Id: 1,
        Nome: 'Jax',
        Altura: 2.5,
        Habilidades: 'fogo',
        Historia: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam earum explicabo eius libero, a dolorem? Saepe eius, sit, quibusdam minima animi aliquid consequatur tempora iste natus error distinctio ratione.',
        foto: 'https://robohash.org/Jax'
    },
    {
        Id: 2,
        Nome: 'Lilian',
        Altura: 3.2,
        Habilidades: 'vento',
        Historia: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam earum explicabo eius libero, a dolorem? Saepe eius, sit, quibusdam minima animi aliquid consequatur tempora iste natus error distinctio ratione.',
        foto: 'https://robohash.org/Lilian'
    },
    {
        Id: 3,
        Nome: 'Neeko',
        Altura: 2.3,
        Habilidades: 'fogo',
        Historia: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam earum explicabo eius libero, a dolorem? Saepe eius, sit, quibusdam minima animi aliquid consequatur tempora iste natus error distinctio ratione.',
        foto: 'https://robohash.org/Neeko'
    },
    {
        Id: 4,
        Nome: 'Nautilus',
        Altura: 0.5,
        Habilidades: 'fogo',
        Historia: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam earum explicabo eius libero, a dolorem? Saepe eius, sit, quibusdam minima animi aliquid consequatur tempora iste natus error distinctio ratione.',
        foto: 'https://robohash.org/Nautilus'
    },

]

const humanos = [
    {
        Nome: 'Jax',
        Altura: 1.8,
        Habilidades: 'Leitura',
        foto: './jax.png'
    },
    {
        Nome: 'Lilian',
        Altura: 1.6,
        Habilidades: 'Raciocinio',
        foto: './lilian.png'
    },
    {
        Nome: 'Neeko',
        Altura: 1.5,
        Habilidades: 'Atletismo',
        foto: './neeko.png'
    },
    {
        Nome: 'Nautilus',
        Altura: 1.9,
        Habilidades: 'Atletismo',
        foto: './nautilus.png'
    },
]

const secao1 = document.querySelector(".alunos");

const secao2 = document.querySelector(".monstro");

const botao = document.querySelector(".btn");

botao.addEventListener("click", () => {
    //toggle se tiver a classe ele tira se não tiver ele adiciona 
    let darkMode = document.documentElement.classList.toggle('dark');
    if (darkMode){
        const alunos = document.getElementById("alunos");
        alunos.setAttribute("style", "display:none");
        const monstros = document.getElementById("monstros");
        monstros.setAttribute("style", "display:block");  
    } else {
        const alunos = document.getElementById("alunos");
        alunos.setAttribute("style", "display:block");
        const monstros = document.getElementById("monstros");
        monstros.setAttribute("style", "display:none");
    }  
});



const todosOsAlunos = humanos.map(humano => {
    return `<div>
        <span>Nome:${humano.Nome}</span><br>
        <span>Altura: ${humano.Altura}</span><br>
        <img src="${humano.foto}">
    </div>`
});

secao1.innerHTML += todosOsAlunos;



const todosOsmonstros = monstros.map(monstro => {
    return `<div>
        <span>Nome:${monstro.Nome}</span><br>
        <span>Altura: ${monstro.Altura}</span>
        <p>Habilidades: ${monstro.Habilidades}</p>
        <img src="${monstro.foto}">
    </div>`
});

secao2.innerHTML += todosOsmonstros;



