let dados = [{
    images: ['images/mia-intro.png', 'images/mia-play1.gif', 'images/mia-erro.png',
            'images/roberta-play1.gif', 'images/roberta-intro.png', 'images/roberta-erro.png',
            'images/lupi-intro.png', 'images/lupi-play.gif', 'images/lupi-erro.png',
            'images/RBD1.gif'],
    audios: ['audio/Aún Hay Algo.mp3', 'audio/Tras De Mí.mp3','audio/UMA MENINA.mp3', 'audio/RBD - Este Corazón (Lyric Video)(MP3_160K).mp3',
            'audio/fail.mp3'],
    listas: [['<button class="hay"> Aún Hay Algo </button>', 
              '<button class="error"> Así soy yo </button>',
              '<button class="error"> Nuestro amor </button>',
              '<button class="error"> Qué Hay Detrás </button>'],
            
            ['<button class="error"> Futuro ex‐novio </button>', 
            '<button class="error"> Qué Fue Del Amor </button>',
            '<button class="tras"> Tras De Mí </button>',
            '<button class="error"> Sálvame </button>'],
        
            ['<button class="error"> Esse coração </button>', 
            '<button class="error"> Medley Rebelde </button>',
            '<button class="error"> No Pares </button>',
            '<button class="cuan"> Cuando el amor se acaba </button>']]
}]


localStorage.setItem('data', JSON.stringify(dados))
