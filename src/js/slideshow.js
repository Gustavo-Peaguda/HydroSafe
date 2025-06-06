// slideshow.js - Controle do slideshow

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow .slide');
    const controles = document.querySelectorAll('.slideshow .slide-control');
    let indexAtualSlide = 0;
    const totalSlides = slides.length;

    // Encontra o índice do slide ativo inicial definido no HTML
    const slideAtivoInicial = document.querySelector('.slideshow .slide.active');
    if (slideAtivoInicial) {
        indexAtualSlide = Array.from(slides).indexOf(slideAtivoInicial);
        if (indexAtualSlide === -1) indexAtualSlide = 0; // Fallback para o primeiro se não encontrar
    }

    // Função para mostrar um slide específico
    function showSlide(index) {
        // Garante que o índice esteja dentro dos limites
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }

        // Remove a classe 'active' de todos os slides e controles
        slides.forEach(slide => slide.classList.remove('active'));
        controles.forEach(control => control.classList.remove('active'));

        // Adiciona a classe 'active' ao slide e controle atuais
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (controles[index]) {
            controles[index].classList.add('active');
        }

        // Atualiza o índice atual
       indexAtualSlide = index;
    }

    // Adiciona evento de clique aos controles
    controles.forEach(control => {
        control.addEventListener('click', function() {
            // Obtém o índice do data-attribute
            const index = parseInt(this.getAttribute('data-index'));
            if (!isNaN(index)) {
                showSlide(index);
            }
        });
    });

    // Garante que o estado inicial (definido no HTML) seja refletido nos controles
    if (controles[indexAtualSlide]) {
         controles.forEach(control => control.classList.remove('active')); // Limpa todos primeiro
         controles[indexAtualSlide].classList.add('active');
    }


    // Adiciona um intervalo de 5 segundos entre as imagens
    let slideInterval = setInterval(() => {
        showSlide(indexAtualSlide + 1);
    }, 5000); // Muda a cada 5 segundos

  

});

