const horrorMovies = [
  { title: "The Conjuring", year: 2013, genre: "  Supernatural", platforms: ["Netflix", "Prime Video"] },
  { title: "Hereditary", year: 2018, genre: "  Psychological", platforms: ["Netflix"] },
  { title: "The Exorcist", year: 1973, genre: "  Possession", platforms: ["Prime Video"] },
  { title: "It Follows", year: 2014, genre: "  Supernatural Curse", platforms: ["Netflix"] },
  { title: "The Babadook", year: 2014, genre: "  Psychological", platforms: ["Prime Video"] },
  { title: "A Tale of Two Sisters", year: 2003, genre: "  Psychological Korean", platforms: ["Prime Video"] },
  { title: "The Ring", year: 2002, genre: "  J-  Supernatural", platforms: ["Netflix"] },
  { title: "Ring (Ringu)", year: 1998, genre: "  J-Horror", platforms: ["Prime Video"] },
  { title: "Insidious", year: 2010, genre: "  Supernatural", platforms: ["Netflix", "Prime Video"] },
  { title: "Sinister", year: 2012, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "The Witch", year: 2015, genre: "  Folk Horror", platforms: ["Netflix"] },
  { title: "Get Out", year: 2017, genre: "  Social Thriller", platforms: ["Netflix"] },
  { title: "Us", year: 2019, genre: "  Social Thriller", platforms: ["Prime Video"] },
  { title: "The Texas Chainsaw Massacre", year: 1974, genre: "  Slasher", platforms: ["Prime Video"] },
  { title: "Halloween", year: 1978, genre: "  Slasher", platforms: ["Netflix"] },
  { title: "Scream", year: 1996, genre: "  Slasher", platforms: ["Prime Video"] },
  { title: "The Shining", year: 1980, genre: "  Psychological", platforms: ["Prime Video"] },
  { title: "Midsommar", year: 2019, genre: "  Folk / Psychological", platforms: ["Netflix"] },
  { title: "The Lighthouse", year: 2019, genre: "  Psychological", platforms: ["Prime Video"] },
  { title: "Smile", year: 2022, genre: "  Psychological Supernatural", platforms: ["Prime Video"] },
  { title: "Barbarian", year: 2022, genre: "  Thriller", platforms: ["Disney+"] },
  { title: "Talk to Me", year: 2023, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "The Cabin in the Woods", year: 2012, genre: "  Meta / Monster", platforms: ["Prime Video"] },
  { title: "The Grudge", year: 2004, genre: "  J-Horror", platforms: ["Netflix"] },
  { title: "Train to Busan", year: 2016, genre: "  Zombie / Korean", platforms: ["Prime Video"] },
  { title: "The Wailing", year: 2016, genre: "  Korean / Mystery", platforms: ["Prime Video"] },
  { title: "The Autopsy of Jane Doe", year: 2016, genre: "  Mystery", platforms: ["Netflix"] },
  { title: "The Nun", year: 2018, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "Annabelle: Creation", year: 2017, genre: "  Supernatural", platforms: ["Netflix"] },
  { title: "Lights Out", year: 2016, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "Don't Breathe", year: 2016, genre: "  Thriller", platforms: ["Netflix"] },
  { title: "Hush", year: 2016, genre: "  Slasher / Home Invasion", platforms: ["Netflix"] },
  { title: "The Strangers", year: 2008, genre: "  Home Invasion", platforms: ["Prime Video"] },
  { title: "The Ritual", year: 2017, genre: "  Creature", platforms: ["Netflix"] },
  { title: "Bird Box", year: 2018, genre: "  Post-apocalyptic", platforms: ["Netflix"] },
  { title: "It", year: 2017, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "It Chapter Two", year: 2019, genre: "  Supernatural", platforms: ["Netflix"] },
  { title: "A Quiet Place", year: 2018, genre: "  Sci-Fi Thriller", platforms: ["Prime Video"] },
  { title: "A Quiet Place Part II", year: 2020, genre: "  Sci-Fi", platforms: ["Netflix"] },
  { title: "The Hills Have Eyes", year: 2006, genre: "  Survival", platforms: ["Prime Video"] },
  { title: "The Omen", year: 1976, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "Orphan", year: 2009, genre: "  Psychological", platforms: ["Netflix"] },
  { title: "Carrie", year: 1976, genre: "  Supernatural", platforms: ["Prime Video"] },
  { title: "The Others", year: 2001, genre: "  Supernatural Mystery", platforms: ["Netflix"] },
  { title: "Mama", year: 2013, genre: "  Supernatural", platforms: ["Prime Video"] },
]

// giving names to ids or classes
const randombtn = document.getElementById("randombtn");
const resultdiv = document.getElementById("result");

randombtn.onclick = ()=>{
    deletold();
    setTimeout(() => {
        makedispcard();
    }, 500);
}

function makedispcard(){
    let index = Math.floor(Math.random() * (45));

    let tittleh3 = document.createElement(`h3`);

    let newdiv = document.createElement(`div`);
    newdiv.id = "info";
    
    let p1 = document.createElement(`p`);
    p1.id = "year";
    let p2 = document.createElement(`p`);
    p2.id = "genre"
    
    let p3 = document.createElement(`p`);
    p3.id = "avail";
    
    tittleh3.innerText = horrorMovies[index].title;
    p1.innerText = horrorMovies[index].year;
    p2.innerText = horrorMovies[index].genre;
    p3.innerText = horrorMovies[index].platforms[0];

    resultdiv.appendChild(tittleh3);
    resultdiv.appendChild(newdiv);
    resultdiv.appendChild(p3);
    newdiv.appendChild(p1);
    newdiv.appendChild(p2);
}

function deletold(){
    resultdiv.innerHTML = "";
}