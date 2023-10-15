let dados = [{
    images: ['images/miaPlay.png', 'images/miaIntro.gif', 'images/miaFail.png',
            'images/robertaPlay.gif', 'images/robertaIntro.png', 'images/robertaFail.png',
            'images/lupIntro.png', 'images/lupPlay.gif', 'images/lupFail.png',
            'images/RBD1.gif'],
    audios: ['audio/Aún Hay Algo.mp3', 'audio/Tras De Mí.mp3','audio/cuando.mp3', 'audio/RBD - Este Corazón (Lyric Video)(MP3_160K).mp3',
            'audio/fail.mp3'],
    listas: [['<button class="hay"> Aún Hay Algo </button>', 
              '<button class="error"> Así soy yo </button>',
              '<button class="error"> Nuestro amor </button>',
              '<button class="error"> Qué Hay Detrás </button>'],
            
            ['<button class="error"> Futuro ex‐novio </button>', 
            '<button class="error"> Qué Fue Del Amor </button>',
            '<button class="tras"> Tras De Mí </button>',
            '<button class="error"> Sálvame </button>'],
        
            ['<button class="error"> Un poco de tu amor </button>', 
            '<button class="error"> Medley Rebelde </button>',
            '<button class="error"> No Pares </button>',
            '<button class="cuan"> Cuando el amor se acaba </button>']]
}]


localStorage.setItem('data', JSON.stringify(dados))
