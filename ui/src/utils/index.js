export const PokeTypes = [
    {
        type : 'bug',
        color : 'yellow'
    },
    {
        type : 'dark',
        color : 'black'
    },
    {
        type : 'dragon',
        color : 'violet'
    },
    {
        type : 'electric',
        color : 'yellow'
    },
    {
        type : 'fairy',
        color : 'pink'
    },
    {
        type : 'fighting',
        color : 'brown'
    },
    {
        type : 'fire',
        color : 'red'
    },
    {
        type : 'flying',
        color : 'white'
    },
    {
        type : 'ghost',
        color : 'black'
    },
    {
        type : 'grass',
        color : 'green'
    },
    {
        type : 'ground',
        color : 'brown'
    },
    {
        type : 'ice',
        color : 'blue'
    },
    {
        type : 'normal',
        color : 'white'
    },
    {
        type : 'poison',
        color : 'violet'
    },
    {
        type : 'psychic',
        color : 'violet'
    },
    {
        type : 'rock',
        color : 'brown'
    },
    {
        type : 'steel',
        color : 'grey'
    },
    {
        type : 'water',
        color : 'blue'
    },
]

export const PokeTypesColorMatch = {
    
    bug : 'rgb(159, 250, 74)',

    dark : 'rgb(54, 54, 54)',

    dragon : 'rgb(139, 107, 226)',
      
    electric : 'rgb(252, 255, 94)',
    
    fairy : 'rgb(241, 161, 235)',
    
    fighting : 'rgb(163, 53, 53)',
      
    fire : 'rgb(245, 72, 72)',
     
    flying : 'rgb(136, 235, 238)',
    
    ghost : 'rgb(119, 84, 116)',
    
    grass : 'rgb(166, 255, 94)',
    
    ground : 'rgb(163, 53, 53)',
    
    ice : 'rgb(117, 198, 201)',
    
    normal : 'rgb(204, 178, 202)',
    
    poison : 'rgb(138, 54, 110)',
    
    psychic : 'rgb(207, 133, 185)',
    
    rock : 'rgb(163, 53, 53)',
    
    steel : 'rgb(124, 124, 124)',
    
    water : 'rgb(102, 87, 241)'
    
}

export const formatPokedexNumber = pokedexNumber =>'#'+('000' + pokedexNumber).substr(-3)