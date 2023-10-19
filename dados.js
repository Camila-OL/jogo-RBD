let dados = [{
    images: ['images/miaPlay.png', 'images/miaIntro.gif', 'images/miaFail.png',
            'images/robertaPlay.gif', 'images/robertaIntro.png', 'images/robertaFail.png',
            'images/lupIntro.png', 'images/lupPlay.gif', 'images/lupFail.png',
            'images/RBD1.gif',
            'images/boysIntro.png', 'images/boysPlay.gif', 'images/boysFail.png',
            'images/girlsIntro.png', 'images/Girls.gif', 'images/girlsFail.png',
            'images/Banda.gif'],
    audios: ['audio/Aún Hay Algo.mp3', 'audio/Tras De Mí.mp3','audio/cuando.mp3', 'audio/RBD - Este Corazón (Lyric Video)(MP3_160K).mp3',
            'audio/fail.mp3', 'audio/futuroEx.mp3', 'audio/Ser O Parecer(MP3_160K).mp3'],
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
            '<button class="cuan"> Cuando el amor se acaba </button>'],
        
            ['<button class="error"> Inalcanzable </button>', 
            '<button class="error"> Bésame Sin Miedo </button>',
            '<button class="fut"> Futuro ex‐novio </button>',
            '<button class="error"> Tenerte y quererte </button>'],
        
            ['<button class="error"> Ser ou parecer </button>', 
            '<button class="error"> Santa no soy </button>',
            '<button class="error"> A Tu Lado </button>',
            '<button class="ser"> Ser O Parecer </button>']]
}]


localStorage.setItem('data', JSON.stringify(dados))
