const characters = [
    {
        name: "Joker",
        image: "img/JokerP5.webp",
        description: "The protagonist of Persona 5. After being falsely accused of a crime, he moves to Tokyo and starts a new life as a student. Upon awakening his Persona, he takes on the identity of Joker and leads the Phantom Thieves in their mission to change the hearts of corrupt people."
    },
    {
        name: "Ryuji Sakamoto",
        image: "img/RyujiP5.webp",
        description: "A former track-and-field athlete, Ryuji lost his promising future after a conflict with his abusive coach. Rebellious and impulsive, he finds in the Phantom Thieves an opportunity to fight against those who abuse their power. His Persona is Captain Kidd."
    },
    {
        name: "Ann Takamaki",
        image: "img/AnnP5.webp",
        description: "Ann is a student known for her beauty and for being the target of rumors and prejudice at school. Despite appearing confident, she struggles to find her place among her classmates. After discovering the Metaverse, she joins the Phantom Thieves and awakens her Persona, Carmen."
    },
    {
        name: "Morgana",
        image: "img/MorganaP5.webp",
        description: "A mysterious creature resembling a cat whom the protagonists encounter in the Metaverse. Convinced that he is human, Morgana possesses extensive knowledge of the Palaces and teaches the Phantom Thieves how to survive in the Metaverse. His Persona is Zorro."
    },
    {
        name: "Yusuke Kitagawa",
        image: "img/YusukeP5.webp",
        description: "Yusuke is a talented and eccentric art student known for his dedication to painting. Initially studying under the renowned artist Ichiryusai Madarame, he begins questioning the true nature of his mentor. His experiences with the Phantom Thieves lead him to awaken his Persona, Goemon."
    },
    {
        name: "Makoto Niijima",
        image: "img/MakotoP5.webp",
        description: "Makoto is a determined and responsible student who serves as president of the student council. Accustomed to following rules and meeting the expectations of others, she begins questioning this way of life after becoming involved with the Phantom Thieves. Her Persona is Johanna."
    },
    {
        name: "Futaba Sakura",
        image: "img/FutabaP5.webp",
        description: "A highly talented computer hacker, Futaba lives isolated from the outside world after experiencing traumatic events in her past. After meeting the Phantom Thieves, she gradually begins confronting her personal struggles. Her Persona is Necronomicon, and she primarily supports the team from behind the scenes."
    },
    {
        name: "Haru Okumura",
        image: "img/HaruP5.webp",
        description: "The heiress to a major company, Haru grew up surrounded by expectations regarding her future. Despite her gentle and polite personality, she struggles with her family and her lack of freedom. After joining the Phantom Thieves, she awakens her Persona, Milady."
    },
    {
        name: "Goro Akechi",
        image: "img/GoroP5.webp",
        description: "A young detective who becomes famous for solving mysterious cases, Akechi quickly attracts the attention of the public and the media. Intelligent and charismatic, he appears interested in the Phantom Thieves and eventually becomes deeply involved with them. His Persona is Robin Hood."
    },
    {
        name: "Kasumi Yoshizawa",
        image: "img/KasumiP5.webp",
        description: "A transfer student who joins Shujin Academy as a gymnast, Kasumi is determined to achieve her goals and admires the Phantom Thieves. Her story becomes particularly important in Persona 5 Royal, where she eventually awakens her Persona, Cendrillon."
    }
];

let currentCharacter = 0;

function showCharacter() {
    document.getElementById("character-image").src =
        characters[currentCharacter].image;

    document.getElementById("character-name").textContent =
        characters[currentCharacter].name;

    document.getElementById("character-description").textContent =
        characters[currentCharacter].description;
}

function nextCharacter() {
    currentCharacter++;

    if (currentCharacter >= characters.length) {
        currentCharacter = 0;
    }

    showCharacter();
}

function previousCharacter() {
    currentCharacter--;

    if (currentCharacter < 0) {
        currentCharacter = characters.length - 1;
    }

    showCharacter();
}

const games = [
    {
        name: "Persona 5 (2016)",
        image: "img/persona5.jpg",
        description: "The original entry in the Persona 5 series. Players take on the role of a high school student who moves to Tokyo and becomes the leader of the Phantom Thieves of Hearts. Together, they enter the mysterious Metaverse to change the hearts of corrupt adults while balancing school, friendships, and everyday life."
    },

    {
        name: "Persona 5 Royal (2020)",
        image: "img/persona5royal.png",
        description: "An expanded and enhanced version of Persona 5. Royal introduces new characters, a new semester at Shujin Academy, additional locations, new Confidants, gameplay improvements, and a completely new story arc. It offers an expanded experience of the Phantom Thieves' journey."
    },

    {
        name: "Persona 5 Strikers (2020)",
        image: "img/persona5strikers.webp",
        description: "A sequel to the events of Persona 5. The Phantom Thieves reunite during their summer vacation when a series of strange incidents begins occurring across Japan. Combining Persona's RPG mechanics with fast-paced action combat, the group travels across the country while investigating the mysterious Jails."
    },

    {
        name: "Persona 5 Tactica (2023)",
        image: "img/persona5tactica.avif",
        description: "A tactical RPG set in the Persona 5 universe. The Phantom Thieves suddenly find themselves in a mysterious world ruled by oppressive forces. Joined by new allies, they must use strategy, positioning, and their Personas to fight their way through this new adventure."
    },

    {
        name: "Persona 5: Dancing in Starlight (2018)",
        image: "img/persona5dancing.jpg",
        description: "A rhythm game featuring the Phantom Thieves. After a strange encounter in the Velvet Room, the characters find themselves taking part in a mysterious dance competition. The game features songs from Persona 5 and allows players to see the characters in a more lighthearted setting."
    }
];

const media = [
    {
        name: "Persona 5: The Animation",
        image: "img/persona5anime.jpg",
        description: "An anime adaptation of Persona 5 that follows Joker and the Phantom Thieves as they awaken their Personas and begin changing the hearts of corrupt adults. The series adapts the main story of the game while expanding on the characters and their relationships."
    },

    {
        name: "Persona 5 Manga",
        image: "img/persona5manga.jpg",
        description: "A manga adaptation of the original Persona 5 story. It follows  Joker after his arrival in Tokyo and his transformation into Joker, alongside the other members of the Phantom Thieves. The manga retells the events of the game in a serialized format."
    },

    {
        name: "Persona 5 The Stage",
        image: "img/persona5stage.webp",
        description: "A theatrical adaptation of Persona 5 performed as a live stage production. The musical-style performances recreate the story of the Phantom Thieves on stage, combining acting, choreography, music, and visual effects inspired by the game."
    },

    {
        name: "Persona 5: Original Soundtrack",
        image: "img/persona5soundtrack.webp",
        description: "The original soundtrack of Persona 5, composed primarily by Shoji Meguro with vocals by Lyn. Featuring jazz, rock, pop, and electronic influences, the soundtrack is an important part of the game's distinctive style and atmosphere."
    }
];

let currentMedia = 0;

function showMedia() {

    const image = document.getElementById("media-image");
    const name = document.getElementById("media-name");
    const description = document.getElementById("media-description");

    image.classList.add("fade");

    setTimeout(() => {

        image.src = media[currentMedia].image;
        image.alt = media[currentMedia].name;

        name.textContent = media[currentMedia].name;

        description.textContent =
            media[currentMedia].description;

        image.classList.remove("fade");

    }, 400);
}

function nextMedia() {

    currentMedia++;

    if (currentMedia >= media.length) {
        currentMedia = 0;
    }

    showMedia();
}

function previousMedia() {

    currentMedia--;

    if (currentMedia < 0) {
        currentMedia = media.length - 1;
    }

    showMedia();
}
let currentGame = 0;

function showGame() {
    document.getElementById("game-image").src =
        games[currentGame].image;

    document.getElementById("game-name").textContent =
        games[currentGame].name;

    document.getElementById("game-description").textContent =
        games[currentGame].description;
}

function nextGame() {
    currentGame++;

    if (currentGame >= games.length) {
        currentGame = 0;
    }

    showGame();
}

function previousGame() {
    currentGame--;

    if (currentGame < 0) {
        currentGame = games.length - 1;
    }

    showGame();
}
