// eslint-disable-next-line no-unused-vars
import avatar2 from "../../src/Assets/Pic/avatar2.jpg"
import acouteautires from "../../src/Assets/Pic/acouteautires.jpg"
import Top_Gun from "../../src/Assets/Pic/Top-Gun-Maverick-affiche-1.jpg"
import inception from "../../src/Assets/Pic/inception.jpg"
import The_Dark_Knight from "../../src/Assets/Pic/The_Dark_Knight.jpg"
import FORREST_GUMP from "../../src/Assets/Pic/FORREST_GUMP.jpg"
import lala_land from "../../src/Assets/Pic/lala_land.jpg"
import interstellar from "../../src/Assets/Pic/Interstellar.jpg"


const MovieData =  [

    {
        id: 1,
        title: "Avatar 2",
        des: "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Cependant, leur tranquillité est interrompue par une nouvelle menace. Les humains sont de retour sur Pandora, mais cette fois-ci ils ne sont pas venus pour explorer, mais pour exploiter les ressources naturelles de la planète. Jake et Ney'tiri doivent unir leurs forces avec les Na'vi et d'autres créatures pour défendre leur foyer contre les envahisseurs.",
        posterURL: avatar2,
        rating: 10,
        youtubesrc: "https://www.youtube.com/embed/sdMBNpdYV3Y",
        youtubetitile: "YouTube video player",
        duration: "2h 34min",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    },
    {
        id: 2,
        title: "A Couteau Tiré",
        des: "Célèbre auteur de polars, Harlan Thrombey est retrouvé mort, le soir de ses 85 ans, dans sa somptueuse propriété, le poignet tranché. Le détective Benoit Blanc est appelé pour enquêter sur ce qui semble être un suicide. Mais il se rend rapidement compte que la mort de Thrombey est peut-être un meurtre. Blanc interroge tous les membres de la famille, qui ont tous des secrets à cacher, afin de trouver le coupable.",
        posterURL: acouteautires,
        rating: 8,
        youtubesrc: "https://www.youtube.com/embed/OOTOwlSIIdU",
        youtubetitile: "YouTube video player",
        duration: "2h 11min",
        actors: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    },
    {
        id: 3,
        title: "Top Gun",
        des: "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete \"Maverick\" Mitchell est toujours en activité, malgré son âge. Quand il est choisi pour former un escadron d'élite de jeunes pilotes, Maverick se retrouve en compétition avec un brillant pilote appelé Iceman, ainsi qu'avec l'ex-petite amie de Maverick, Charlotte \"Charlie\" Blackwood. Alors que la compétition s'intensifie, Maverick doit surmonter son passé pour devenir le meilleur pilote qu'il puisse être.",
        posterURL: Top_Gun,
        rating: 9,
        youtubesrc: "https://www.youtube.com/embed/giXco2jaZ_4",
        youtubetitile: "YouTube video player",
        duration: "1h 50min",
        actors: ["Tom Cruise", "Tim Robbins", "Kelly McGillis"],
    },
    {
        id: 4,
        title: "Inception",
        des: "Dom Cobb est un voleur professionnel, spécialisé dans l'extraction d'informations de l'inconscient de ses cibles pendant leur sommeil. Cobb est engagé pour effectuer une opération inverse, appelée \"inception\", où il doit implanter une idée dans l'esprit de la cible. Cobb recrute une équipe d'experts pour l'aider dans cette mission, qui les emmène à travers différents niveaux de rêves, où la réalité est de plus en plus difficile à discerner.",
        posterURL: inception,
        rating: 9.5,
        youtubesrc: "https://www.youtube.com/embed/HcoZbHBDHQA",
        youtubetitile: "YouTube video player",
        duration: "2h 28min",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    },
    {
        id: 5,
        title:"The Dark Knight",
        des: "Lorsque le criminel le plus redouté de Gotham City, le Joker, commence à semer le chaos et la destruction dans la ville, Batman doit intervenir pour l'arrêter. Mais le Joker n'est pas le seul ennemi que Batman doit affronter - il doit également faire face à la pression du procureur Harvey Dent, qui est déterminé à mettre fin à la criminalité à Gotham une fois pour toutes. Batman doit naviguer dans un monde où la ligne entre le bien et le mal est floue, tout en protégeant ceux qu'il aime.",
        posterURL: The_Dark_Knight,
        rating: 9.3,
        youtubesrc: "https://www.youtube.com/embed/jane6C4rIwc",
        youtubetitile: "YouTube video player",
        duration: "2h 32min",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    },{
        id: 6,
        title: "La La Land",
        des: "Mia, une actrice en herbe, rencontre Sebastian, un pianiste de jazz passionné, à Los Angeles. Alors qu'ils poursuivent tous deux leurs rêves de carrière, leur amour grandissant est mis à l'épreuve par les sacrifices qu'ils doivent faire pour réussir dans leur domaine respectif.",
        posterURL: lala_land,
        rating: 8.5,
        youtubesrc: "https://www.youtube.com/embed/0pdqf4P9MB8",
        youtubetitile: "La La Land - Bande Annonce Officielle (VOST)",
        duration: "2h 08min",
        actors: ["Emma Stone", "Ryan Gosling", "John Legend"]
    },
    {
        id: 7,
        title: "Forrest Gump",
        des: "Forrest Gump est un homme simple d'esprit mais au grand cœur qui traverse les moments les plus marquants de l'histoire américaine. Alors qu'il raconte son histoire à des étrangers rencontrés à un arrêt de bus, Forrest revit ses rencontres avec Elvis Presley, son engagement dans la guerre du Vietnam, son amour pour Jenny et ses réussites en affaires.",
        posterURL:FORREST_GUMP,
        rating: 8.8,
        youtubesrc: "https://www.youtube.com/embed/bLvqoHBptjg",
        youtubetitile: "Forrest Gump - Trailer (HD) (English & French Subtitles)",
        duration: "2h 22min",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        id: 8,
        title: "Interstellar",
        des: "Dans un futur où la Terre est devenue inhospitalière, un groupe de scientifiques entreprend un voyage interstellaire périlleux pour trouver une nouvelle maison pour l'humanité. Avec des ressources limitées et des défis scientifiques et émotionnels à chaque étape, les membres de l'équipage doivent trouver un moyen de surmonter les obstacles pour réussir leur mission.",
        posterURL: interstellar,
        rating: 8.6,
        youtubesrc: "https://www.youtube.com/embed/zSWdZVtXT7E",
        youtubetitile: "Interstellar - Bande-Annonce Officielle (VF) - Matthew McConaughey / Anne Hathaway",
        duration: "2h 49min",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
]

export default MovieData