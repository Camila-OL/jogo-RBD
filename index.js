let n = JSON.parse(localStorage.getItem('data'))


let start = document.querySelector('.start')
let espImage = document.querySelector('.images')
let aud = document.querySelector('.audio')
let list = document.querySelector('.resp')
let text = document.querySelector('.text')
let rein = document.querySelector('.reiniciar')
let nam = document.querySelector('.name')
let cont = document.querySelector('.content')
let exit = document.querySelector('.sair')
let title = document.querySelector('.title')
let areaT = document.querySelector('.area-total')


start.addEventListener('click', () => {
    aud.style.display = 'block'
    start.style.display = 'none'
    nam.style.display = 'none'
    cont.style.display = 'flex'
    areaT.style.display = 'none'
      
    let arm = n[0].images
    let armA = n[0].audios
    let armL = n[0].listas

    //parte 1
        //add imagem 1
        let image = document.createElement('img')
        image.src = arm[1]
        image.style.position = 'absolute'
        image.style.bottom = '3%'
        image.style.right = '5%'
        espImage.appendChild(image)

        rein.style.display = 'none'
        exit.style.display = 'none'

        //add audio 1
        let ad = document.createElement('source')
        ad.src = armA[0]
        ad.type = 'audio/mp3'
        aud.appendChild(ad)

        //add lista
        let lst = document.createElement('li')
        lst.innerHTML = armL[0]
        list.appendChild(lst)

        //trocar imagem clicar play
        aud.addEventListener('play', () => {
            image.src = arm[1]
        })
        //trocar imagem clicar pause
        aud.addEventListener('pause', () => {
            image.src = arm[0]
        })
        

    //parte 2 
        //add imagem 2
        let h = document.querySelector('.hay')
        h.style.cursor = 'pointer'
        h.addEventListener('click', () => {
            rein.style.display = 'none'
            //trocar imagem
            image.src = arm[3]
            //trocar audio
            aud.setAttribute('src', armA[1])

            //trocar imagem clicar play
            aud.addEventListener('play', () => {
                image.src = arm[3]
                image.style.top = '60%'
            })
            //trocar imagem clicar pause
            aud.addEventListener('pause', () => {
                image.src = arm[4]
                image.style.top = '52%'
            })
            //trocar lista
            lst.innerHTML = armL[1]

        //parte 2 ERRO
        let error = document.querySelectorAll('.error')
        error.forEach(element => {
            element.addEventListener('click', () => {
                rein.style.display = 'block'
                const fail = new Audio(armA[4])
                fail.play()

                aud.parentNode.removeChild(aud)
                image.parentNode.removeChild(image)
                list.parentNode.removeChild(list)
    
                //add imagem erro
                let imgErro = document.createElement('img')
                imgErro.src = arm[5]
                imgErro.style.marginTop = '90px'
                espImage.appendChild(imgErro)
    
                //reiniciar
                rein.innerHTML = 'Reiniciar'
                rein.style.cursor = 'pointer'
                rein.addEventListener('click', () => {
                    location.reload()
                })
            })

        })

            //parte 3
                let t = document.querySelector('.tras')    
                t.addEventListener('click', () => {
                    rein.style.display = 'none'
                    //trocar imagem 2
                    image.src = arm[7]
                    //trocar audio 2
                    aud.setAttribute('src', armA[2])
                    //trocar imagem 2 play 
                    aud.addEventListener('play', () => {
                        image.src = arm[7]
                        image.style.top = '58%'
                    })
                    aud.addEventListener('pause', () => {
                        image.src = arm[6]
                        image.style.top = '55%'
                    })
                    //trocar lista 2
                    lst.innerHTML = armL[2]
                    //parte 3 acerto
                    let c = document.querySelector('.cuan')
                    c.addEventListener('click', () => {
                        title.style.display = 'none'
                        rein.style.display = 'block'
                        exit.style.display = 'block'
                        cont.style.width = '300px'
                        let nam = document.querySelector('.name').value
                        let namM = nam.toUpperCase()
                        aud.parentNode.removeChild(aud)
                        image.parentNode.removeChild(image)
                        list.parentNode.removeChild(list)
                        //texto
                        text.innerHTML = `<span> PARABÉNS VOCÊ </br> É REALMENTE </br> FÃ ${namM} </span>`
                        //trocar imagem 3
                        imgTrue = document.createElement('img')
                        imgTrue.src = arm[9]
                        imgTrue.style.width = '400px'
                        imgTrue.style.top = '73%'
                        imgTrue.style.left = '6%'
                        imgTrue.style.position = 'absolute'
                        espImage.appendChild(imgTrue)
                        //parte 3 audio
                        let audEnd = new Audio(armA[3])
                        audEnd.addEventListener('ended', function() {
                            this.currentTime = 0
                            this.play()
                        })
                        audEnd.play()
                        //parte 3 reiniciar 
                        rein.innerHTML = 'Reiniciar'
                        exit.innerHTML = 'Sair'
                        rein.style.cursor = 'pointer'
                        exit.style.cursor = 'pointer'
                        rein.addEventListener('click', () => {
                            location.reload()
                        })
                        exit.addEventListener('click', () => {
                            window.close()
                        })
                    })
                    //parte 3 erro
                    let error = document.querySelectorAll('.error')
                    error.forEach(element => {
                        element.addEventListener('click', () => {
                            rein.style.display = 'block'
                            const fail = new Audio(armA[4])
                            fail.play()

                            aud.parentNode.removeChild(aud)
                            image.parentNode.removeChild(image)
                            list.parentNode.removeChild(list)

                            //add imagem erro
                            let imgErro = document.createElement('img')
                            imgErro.src = arm[8]
                            imgErro.style.marginTop = '30%'
                            espImage.appendChild(imgErro)
                
                            //reiniciar
                            rein.innerHTML = 'Reiniciar'
                            rein.style.cursor = 'pointer'
                            rein.addEventListener('click', () => {
                                location.reload()
                            })

                        })

                    })     
                    //
                })

        })
    //parte 1 ERRO
        let error = document.querySelectorAll('.error')
        error.forEach(element => {
            element.addEventListener('click', () => {
                rein.style.display = 'block'
                const fail = new Audio(armA[4])
                fail.play()

                aud.parentNode.removeChild(aud)
                image.parentNode.removeChild(image)
                list.parentNode.removeChild(list)
    
                //add imagem erro
                let imgErro = document.createElement('img')
                imgErro.src = arm[2]
                imgErro.width = 100
                espImage.appendChild(imgErro)
                espImage.style.marginTop = '30%'
    
                //reiniciar
                rein.innerHTML = 'Reiniciar'
                rein.style.cursor = 'pointer'
                rein.addEventListener('click', () => {
                    location.reload()
                })
            })

        })   
})

