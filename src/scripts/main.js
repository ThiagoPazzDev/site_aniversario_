const aniversario = new Date('2025-07-31');

        function atualizarContagem() {
            const agora = new Date(); 
            const diferenca = aniversario - agora;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            const contagemSpan = document.getElementById('contagem');
            contagemSpan.innerHTML = `${dias} Dias, ${horas} Horas, ${minutos} Minutos e ${segundos} Segundos`;

            if (diferenca < 0) {
                clearInterval(contagemInterval); 
                contagemSpan.innerHTML = "Feliz Aniversário!"; 
            }
        }

        const contagemInterval = setInterval(atualizarContagem, 1000);

        atualizarContagem();
