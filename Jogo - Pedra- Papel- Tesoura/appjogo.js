var elementos = document.querySelectorAll('.player-options div > img');
            var playerOpt = "";
            var inimigoOpt = "";

            // funcao validar elementos
            function validarVitoria(){
                let vencedor = document.querySelector('.vencedor');
                // validar papel
                if(playerOpt == "papel"){

                    if(inimigoOpt == "papel"){
                    //Empate
                    vencedor.innerHTML = "O Jogo Empatou";
                    }
                    else if(inimigoOpt == "tesoura"){
                    //Inimigo ganhou
                    vencedor.innerHTML = "O Inimigo Ganhou";
                    }
                    else if(inimigoOpt == "pedra"){
                    // Player ganhou
                    vencedor.innerHTML = "O Player Ganhou";
                    }
                }
                // validar tesoura
                if(playerOpt == "tesoura"){

                    if(inimigoOpt == "papel"){
                    //Empate
                    vencedor.innerHTML = "O Player Ganhou";
                    }
                    else if(inimigoOpt == "tesoura"){
                    //Inimigo ganhou
                    vencedor.innerHTML = "O Jogo Empatou";
                    }
                    else if(inimigoOpt == "pedra"){
                    // Player ganhou
                    vencedor.innerHTML = "O Inimigo Ganhou";
                    }
                    }

                    //validar pedra
                    if(playerOpt == "pedra"){

                        if(inimigoOpt == "papel"){
                        //Empate
                        vencedor.innerHTML = "O Inimigo Ganhou";
                        }
                        else if(inimigoOpt == "tesoura"){
                        //Inimigo ganhou
                        vencedor.innerHTML = "O Player Ganhou";
                        }
                        else if(inimigoOpt == "pedra"){
                        // Player ganhou
                        vencedor.innerHTML = "O Jogo Empatou";
                        }
                        }

                    
            }

            function resetInimigo(){
                const enemyOptions = document.querySelectorAll('.enemy-options div');
                for(i=0;i< enemyOptions.length; i ++){
                    
                enemyOptions[i].childNodes[0].style.opacity = 0.3;
                    
                }
            }

            // funcao inteligencia de interacao no jogo
            function inimigoJogar(){
                let rand =Math.floor(Math.random()*3);
                
                const enemyOptions = document.querySelectorAll('.enemy-options div');
                resetInimigo();

                for(i=0;i< enemyOptions.length; i ++){
                    if(i == rand){
                        enemyOptions[i].childNodes[0].style.opacity = 1;
                        inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
                    }
                }
                validarVitoria();
                // alert(playerOpt);
                //alert(inimigoOpt);
            }

            // funcao para colocar a opacidade nos que nao estao selecionados
            function resetOpacityPlayer(){
                for(i=0;i< elementos.length; i ++){
                elementos[i].style.opacity = 0.3;
                    
                }
            }
            
            // funcao para que quando clicar coloca a cor normal da imagem
            for(i=0;i< elementos.length; i ++){
                elementos[i].addEventListener('click',function(t){
                    resetOpacityPlayer();
                    t.target.style.opacity = 1;
                    playerOpt = t.target.getAttribute('opt');

                   inimigoJogar();
                });
            }