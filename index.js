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
let areai = document.querySelector('.area-int')


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
            image.style.width = '200px'
            image.style.top = '62%'
        })
        //trocar imagem clicar pause
        aud.addEventListener('pause', () => {
            image.src = arm[0]
            image.style.width = '400px'
            image.style.top = '52%'
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
                image.style.width = '300px'
                image.style.top = '56%'
            })
            //trocar imagem clicar pause
            aud.addEventListener('pause', () => {
                image.src = arm[4]
                image.style.width = '250px'
                image.style.top = '50%'
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
                imgErro.style.width = '280px'
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
                        image.style.width = '300px'
                        image.style.top = '56%'
                    })
                    aud.addEventListener('pause', () => {
                        image.src = arm[6]
                        image.style.top = '45%'
                        image.style.width = '280px'
                    })
                    //trocar lista 2
                    lst.innerHTML = armL[2]

                    //parte 4
                    let c = document.querySelector('.cuan')
                    c.addEventListener('click', () => {
                        rein.style.display = 'none'
                        //trocar imagem 2
                        image.src = arm[11]
                        //trocar audio 2
                        aud.setAttribute('src', armA[5])
                        //trocar imagem 2 play 
                        aud.addEventListener('play', () => {
                            image.src = arm[11]
                            image.style.width = '400px'
                            image.style.top = '56%'
                            image.style.right = '-15%'
                        })
                        aud.addEventListener('pause', () => {
                            image.src = arm[10]
                            image.style.top = '48%'
                            image.style.width = '350px'
                        })
                        //trocar lista 2
                        lst.innerHTML = armL[3]
                    
                    //parte 4 erro
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
                            imgErro.src = arm[12]
                            rein.style.marginBottom = '47%'
                            rein.style.marginTop = '33%'
                            cont.style.padding = '0'
                            imgErro.style.width = '400px'
                            espImage.appendChild(imgErro)
                
                            //reiniciar
                            rein.innerHTML = 'Reiniciar'
                            rein.style.cursor = 'pointer'
                            rein.addEventListener('click', () => {
                                location.reload()
                            })

                        })
                        })
                        //parte 5
                        let f = document.querySelector('.fut')
                        f.addEventListener('click', () => {
                            rein.style.display = 'none'
                            //trocar imagem 2
                            image.src = arm[14]
                            //trocar audio 2
                            aud.setAttribute('src', armA[6])
                            //trocar imagem 2 play 
                            aud.addEventListener('play', () => {
                                image.src = arm[14]
                                image.style.width = '430px'
                                image.style.top = '60%'
                                image.style.right = '-17%'
                            })
                            aud.addEventListener('pause', () => {
                                image.src = arm[13]
                                image.style.top = '55%'
                                image.style.width = '400px'
                            })
                            //trocar lista 2
                            lst.innerHTML = armL[4]

                            //parte 5 acerto
                            let s = document.querySelector('.ser') 
                            s.addEventListener('click', () => {
                                cont.style.backgroundImage = "url('images/back.jpg')"
                                title.style.display = 'none'
                                rein.style.display = 'block'
                                rein.style.marginBottom = '0'
                                exit.style.display = 'block'
                                cont.style.width = '300px'
                                let nam = document.querySelector('.name').value
                                aud.parentNode.removeChild(aud)
                                image.parentNode.removeChild(image)
                                list.parentNode.removeChild(list)
                                //texto
                                text.innerHTML = `<div class="sign">
                                <div class="neon-blue" id="title"> P<span id="fade"> arabéns </span> Você </div>
                                <div class="neon-blue"> é <span class="neon-purple" id="trav"> Realmente </span> Fã <span class="neon-purple"> ${nam} </span></div>
                                </div>`
                                //trocar imagem 3
                                imgTrue = document.createElement('img')
                                imgTrue.src = arm[16]
                                imgTrue.style.width = '400px'
                                imgTrue.style.height = '250px'
                                imgTrue.style.top = '63%'
                                imgTrue.style.left = '-3%'
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

                            //parte 5 erro
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
                            imgErro.src = arm[15]
                            rein.style.marginBottom = '40%'
                            rein.style.marginTop = '25%'
                            imgErro.style.width = '450px'
                            cont.style.padding = '0'
                            espImage.appendChild(imgErro)
                
                            //reiniciar
                            rein.innerHTML = 'Reiniciar'
                            rein.style.cursor = 'pointer'
                            rein.addEventListener('click', () => {
                                location.reload()
                            })

                        })

                    })
                        })

                        
                        /*
                        
                    */
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
                            rein.style.marginBottom = '40%'
                            imgErro.style.width = '300px'
                            espImage.appendChild(imgErro)
                
                            //reiniciar
                            rein.innerHTML = 'Reiniciar'
                            rein.style.cursor = 'pointer'
                            rein.addEventListener('click', () => {
                                location.reload()
                            })

                        })

                    })
                    
                   
                    
                })

        })
    //parte 1 ERRO
        let error = document.querySelectorAll('.error')
        error.forEach(element => {
            element.addEventListener('click', () => {
                rein.style.display = 'block'
                cont.style.padding = '8%'
                const fail = new Audio(armA[4])
                fail.play()

                aud.parentNode.removeChild(aud)
                image.parentNode.removeChild(image)
                list.parentNode.removeChild(list)
    
                //add imagem erro
                let imgErro = document.createElement('img')
                imgErro.src = arm[2]
                imgErro.style.width = '250px'
                espImage.appendChild(imgErro)
    
                //reiniciar
                rein.innerHTML = 'Reiniciar'
                rein.style.cursor = 'pointer'
                rein.addEventListener('click', () => {
                    location.reload()
                })
            })

        })   
})

