// form.js - Validação de formulário

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Função para validar e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Função para mostrar erro
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        input.classList.add('error');
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }
    
    // Função para limpar erro
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        input.classList.remove('error');
        errorMessage.classList.remove('visible');
    }
    
    // Função para validar campo
    function validateField(input, validationFunction, errorMessage) {
        if (!validationFunction(input.value.trim())) {
            showError(input, errorMessage);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }
    
    // Validar nome
    function validateName() {
        return validateField(
            nameInput,
            value => value.length > 0,
            'Por favor, informe seu nome.'
        );
    }
    
    // Validar e-mail
    function validateEmail() {
        return validateField(
            emailInput,
            value => isValidEmail(value),
            'Por favor, informe um e-mail válido.'
        );
    }
    
    // Validar mensagem
    function validateMessage() {
        return validateField(
            messageInput,
            value => value.length > 0,
            'Por favor, escreva uma mensagem.'
        );
    }
    
    // Adicionar eventos de validação em tempo real
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Limpar erros ao digitar
    nameInput.addEventListener('input', () => clearError(nameInput));
    emailInput.addEventListener('input', () => clearError(emailInput));
    messageInput.addEventListener('input', () => clearError(messageInput));
    
    // Validar formulário no envio
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar todos os campos
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            // Verificar se todos os campos são válidos
            if (isNameValid && isEmailValid && isMessageValid) {
                // Simulação de envio bem-sucedido
                alert('Mensagem enviada com sucesso!');
                
                // Limpar formulário
                contactForm.reset();
            }
        });
    }
});


// main.js - Arquivo principal de JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se a página foi carregada completamente
    console.log('Página carregada com sucesso!');
    
    // Função para animar elementos ao scroll
    function animateOnScroll() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Adicionar classe 'visible' aos elementos visíveis no carregamento inicial
    animateOnScroll();
    
    // Adicionar evento de scroll para animar elementos
    window.addEventListener('scroll', animateOnScroll);
    
    // Função para scroll suave ao clicar em links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.querySelector('.hamburger-menu').classList.remove('active');
                }
            }
        });
    });
    
    // Destacar seção atual no menu de navegação
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Verificar seção atual ao scroll
    window.addEventListener('scroll', highlightCurrentSection);
    
    // Verificar seção atual no carregamento inicial
    highlightCurrentSection();
    
    // Animação do indicador de scroll
    function animateScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }
    }
    
    // Verificar posição do scroll para animar o indicador
    window.addEventListener('scroll', animateScrollIndicator);
});


// menu.js - Controle do menu hambúrguer responsivo

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Função para alternar o estado do menu
    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    // Adicionar evento de clique ao botão do menu
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }
    
    // Adicionar estilo ao menu hambúrguer quando ativo
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                // Transformar em X quando ativo
                this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
                this.querySelector('span:nth-child(2)').style.opacity = '0';
                this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                // Voltar ao normal quando inativo
                this.querySelector('span:nth-child(1)').style.transform = 'none';
                this.querySelector('span:nth-child(2)').style.opacity = '1';
                this.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        });
    }
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu && navMenu.contains(event.target);
        const isClickOnHamburger = hamburgerMenu && hamburgerMenu.contains(event.target);
        
        if (navMenu && navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
            navMenu.classList.remove('active');
            
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.querySelector('span:nth-child(1)').style.transform = 'none';
                hamburgerMenu.querySelector('span:nth-child(2)').style.opacity = '1';
                hamburgerMenu.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        }
    });
    
    // Ajustar menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.querySelector('span:nth-child(1)').style.transform = 'none';
                hamburgerMenu.querySelector('span:nth-child(2)').style.opacity = '1';
                hamburgerMenu.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        }
    });
});



// theme.js - Personalização de tema

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do seletor de tema
    const themeOptions = document.querySelectorAll('.theme-option');
    const root = document.documentElement;
    
    // Função para aplicar tema
    function applyTheme(theme) {
        // Remover classe active de todas as opções
        themeOptions.forEach(option => {
            option.classList.remove('active');
        });
        
        // Adicionar classe active à opção selecionada
        document.querySelector(`.theme-${theme}`).classList.add('active');
        
        // Aplicar variáveis CSS de acordo com o tema
        switch (theme) {
            case 'blue':
                // Tema azul - corrigido para usar tons de azul
                root.style.setProperty('--primary-color', '#0056b3');
                root.style.setProperty('--secondary-color', '#00a0e3');
                root.style.setProperty('--accent-color', '#0091ff');
                root.style.setProperty('--dark-color', '#1d3557');
                root.style.setProperty('--light-color', '#f1faee');
                console.log('Tema azul aplicado');
                break;
                
            case 'dark':
                // Tema escuro - corrigido para usar tons escuros
                root.style.setProperty('--primary-color', '#1d3557');
                root.style.setProperty('--secondary-color', '#2c3e50');
                root.style.setProperty('--accent-color', '#34495e');
                root.style.setProperty('--dark-color', '#0f1a2b');
                root.style.setProperty('--light-color', '#e0e0e0');
                console.log('Tema escuro aplicado');
                break;
                
            case 'light':
                // Tema claro - corrigido para usar tons claros
                root.style.setProperty('--primary-color', '#BF5B04');
                root.style.setProperty('--secondary-color', '#BF5B04');
                root.style.setProperty('--accent-color', '#BF5B04');
                root.style.setProperty('--dark-color', '#734124');
                root.style.setProperty('--light-color', '#f8f9fa');
                console.log('Tema claro aplicado');
                break;
        }
        
        // Atualizar a cor de fundo dos botões de tema para refletir as cores corretas
        document.querySelector('.theme-blue').style.backgroundColor = '#0091ff';
        document.querySelector('.theme-dark').style.backgroundColor = '#34495e';
        document.querySelector('.theme-light').style.backgroundColor = '#BF5B04';
        
        // Salvar preferência no localStorage
        localStorage.setItem('preferredTheme', theme);
    }
    
    // Adicionar evento de clique às opções de tema
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
    
    // Verificar se há tema salvo no localStorage
    const savedTheme = localStorage.getItem('preferredTheme');
    
    if (savedTheme) {
        // Aplicar tema salvo
        applyTheme(savedTheme);
    } else {
        // Aplicar tema padrão (blue)
        applyTheme('blue');
    }
    
    // Garantir que as cores dos botões de tema estejam corretas no carregamento
    document.querySelector('.theme-blue').style.backgroundColor = '#0091ff';
    document.querySelector('.theme-dark').style.backgroundColor = '#34495e';
    document.querySelector('.theme-light').style.backgroundColor = '#BF5B04';
});

// simulacao.js - Simulação de níveis de água e risco de enchentes
// Adaptado do código Python para JavaScript puro

/**
 * Gera dias aleatórios entre 1 e 31 (ordenados)
 * @returns {Array} Array com 10 dias ordenados
 */
function gerarDiasAleatorios() {
    // Gerar números aleatórios entre 1 e 31
    const dias = [];
    const diasPossiveis = Array.from({length: 31}, (_, i) => i + 1);
    
    // Selecionar 10 dias aleatórios
    for (let i = 0; i < 10; i++) {
        const indiceAleatorio = Math.floor(Math.random() * diasPossiveis.length);
        dias.push(diasPossiveis.splice(indiceAleatorio, 1)[0]);
    }
    
    // Ordenar os dias
    return dias.sort((a, b) => a - b);
}

/**
 * Gera níveis de água aleatórios entre 1.0 e 3.5 metros
 * @returns {Array} Array com 10 níveis de água
 */
function gerarNiveisAleatorios() {
    const niveis = [];
    
    for (let i = 0; i < 10; i++) {
        // Gerar número aleatório entre 1.0 e 3.5
        const nivel = parseFloat((Math.random() * 2.5 + 1.0).toFixed(2));
        niveis.push(nivel);
    }
    
    return niveis;
}

/**
 * Classifica um nível de água em estável, alerta ou crítico
 * @param {number} nivel - Nível de água em metros
 * @returns {string} Classificação do nível
 */
function classificarNivel(nivel) {
    if (nivel <= 1.7) {
        return "estavel";
    } else if (nivel > 1.7 && nivel <= 2.0) {
        return "alerta";
    } else {
        return "critico";
    }
}

/**
 * Calcula a média dos níveis de água
 * @param {Array} niveis - Array com níveis de água
 * @returns {number} Média dos níveis
 */
function calcularMedia(niveis) {
    const soma = niveis.reduce((acc, nivel) => acc + nivel, 0);
    return parseFloat((soma / niveis.length).toFixed(2));
}

/**
 * Gera um relatório estatístico dos níveis de água
 * @param {Array} niveis - Array com níveis de água
 * @returns {Object} Objeto com estatísticas
 */
function gerarRelatorioEstatistico(niveis) {
    let diasCriticos = 0;
    let diasAlerta = 0;
    let diasEstaveis = 0;
    
    niveis.forEach(nivel => {
        if (nivel > 2.0) {
            diasCriticos++;
        } else if (nivel > 1.7 && nivel <= 2.0) {
            diasAlerta++;
        } else {
            diasEstaveis++;
        }
    });
    
    const porcentagemCriticos = parseFloat(((diasCriticos / niveis.length) * 100).toFixed(2));
    const porcentagemAlerta = parseFloat(((diasAlerta / niveis.length) * 100).toFixed(2));
    const porcentagemEstaveis = parseFloat(((diasEstaveis / niveis.length) * 100).toFixed(2));
    
    const media = calcularMedia(niveis);
    const maiorNivel = Math.max(...niveis);
    const menorNivel = Math.min(...niveis);
    
    return {
        media,
        maiorNivel,
        menorNivel,
        diasCriticos,
        diasAlerta,
        diasEstaveis,
        porcentagemCriticos,
        porcentagemAlerta,
        porcentagemEstaveis
    };
}

/**
 * Avalia o risco geral de enchente com base na média dos níveis
 * @param {number} media - Média dos níveis de água
 * @returns {Object} Objeto com informações sobre o risco
 */
function avaliarRiscoEnchente(media) {
    let mensagem = "";
    let classe = "";
    
    if (media <= 1.7) {
        mensagem = "Fique tranquilo, o nível do rio está controlado! Não há risco de enchente.";
        classe = "estavel";
    } else if (media > 1.7 && media <= 2.0) {
        mensagem = "Tome cuidado! O nível do rio está em alerta. É possível que ele aumente e se torne crítico.";
        classe = "alerta";
    } else {
        mensagem = "Nível do rio em estado crítico. Dirija-se a um local seguro imediatamente!";
        classe = "critico";
    }
    
    return {
        mensagem,
        classe
    };
}

/**
 * Simula leituras de níveis de água para 10 dias
 * @returns {Object} Objeto com dias, níveis e relatório
 */
function simularLeituras() {
    const dias = gerarDiasAleatorios();
    const niveis = gerarNiveisAleatorios();
    const relatorio = gerarRelatorioEstatistico(niveis);
    const avaliacao = avaliarRiscoEnchente(relatorio.media);
    
    return {
        dias,
        niveis,
        relatorio,
        avaliacao
    };
}

/**
 * Cria e exibe o gráfico de níveis de água
 * @param {HTMLElement} container - Elemento onde o gráfico será exibido
 * @param {Object} dados - Dados da simulação
 */
function criarGrafico(container, dados) {
    // Limpar o container
    container.innerHTML = '';
    
    // Criar o elemento do gráfico
    const graficoElement = document.createElement('div');
    graficoElement.className = 'grafico-container';
    
  
    // Criar o gráfico de barras
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    
    // Encontrar o valor máximo para escala
    const maxNivel = Math.max(...dados.niveis);
    const escala = 300 / maxNivel; // 300px é a altura máxima da barra
    
    // Criar barras para cada dia
    dados.dias.forEach((dia, index) => {
        const nivel = dados.niveis[index];
        const classificacao = classificarNivel(nivel);
        
        // Container da barra
        const barContainer = document.createElement('div');
        barContainer.className = 'barra-container';
        
        // Barra
        const barra = document.createElement('div');
        barra.className = `barra ${classificacao}`;
        barra.style.height = `${nivel * escala}px`;
        
        // Valor do nível
        const valorNivel = document.createElement('div');
        valorNivel.className = 'valor-nivel';
        valorNivel.textContent = `${nivel}m`;
        
        // Dia
        const diaElement = document.createElement('div');
        diaElement.className = 'dia';
        diaElement.textContent = dia < 10 ? `0${dia}` : dia;
        
        // Adicionar elementos
        barContainer.appendChild(barra);
        barContainer.appendChild(valorNivel);
        barContainer.appendChild(diaElement);
        grafico.appendChild(barContainer);
    });
    
    graficoElement.appendChild(grafico);
    
    // Criar legenda
    const legenda = document.createElement('div');
    legenda.className = 'legenda';
    
    const legendaEstavel = document.createElement('div');
    legendaEstavel.className = 'legenda-item';
    legendaEstavel.innerHTML = '<span class="legenda-cor estavel"></span> Estável (≤ 1.7m)';
    
    const legendaAlerta = document.createElement('div');
    legendaAlerta.className = 'legenda-item';
    legendaAlerta.innerHTML = '<span class="legenda-cor alerta"></span> Alerta (1.7m - 2.0m)';
    
    const legendaCritico = document.createElement('div');
    legendaCritico.className = 'legenda-item';
    legendaCritico.innerHTML = '<span class="legenda-cor critico"></span> Crítico (> 2.0m)';
    
    legenda.appendChild(legendaEstavel);
    legenda.appendChild(legendaAlerta);
    legenda.appendChild(legendaCritico);
    
    graficoElement.appendChild(legenda);
    
    // Criar relatório
    const relatorioElement = document.createElement('div');
    relatorioElement.className = 'relatorio';
    
    const mediaElement = document.createElement('div');
    mediaElement.className = `media ${dados.avaliacao.classe}`;
    mediaElement.innerHTML = `<strong>Média:</strong> ${dados.relatorio.media}m`;
    
    const avaliacaoElement = document.createElement('div');
    avaliacaoElement.className = `avaliacao ${dados.avaliacao.classe}`;
    avaliacaoElement.textContent = dados.avaliacao.mensagem;
    
    const estatisticasElement = document.createElement('div');
    estatisticasElement.className = 'estatisticas';
    estatisticasElement.innerHTML = `
        <div><strong>Dias em nível crítico:</strong> ${dados.relatorio.diasCriticos} (${dados.relatorio.porcentagemCriticos}%)</div>
        <div><strong>Dias em alerta:</strong> ${dados.relatorio.diasAlerta} (${dados.relatorio.porcentagemAlerta}%)</div>
        <div><strong>Dias estáveis:</strong> ${dados.relatorio.diasEstaveis} (${dados.relatorio.porcentagemEstaveis}%)</div>
        <div><strong>Maior nível registrado:</strong> ${dados.relatorio.maiorNivel}m</div>
        <div><strong>Menor nível registrado:</strong> ${dados.relatorio.menorNivel}m</div>
    `;
    
    relatorioElement.appendChild(mediaElement);
    relatorioElement.appendChild(avaliacaoElement);
    relatorioElement.appendChild(estatisticasElement);
    
    graficoElement.appendChild(relatorioElement);
    
    // Adicionar o gráfico ao container
    container.appendChild(graficoElement);
}

// Exportar funções para uso global
window.HydroSafe = {
    simularLeituras,
    criarGrafico
};

// Inicializar a simulação quando o documento estiver carregado
        document.addEventListener('DOMContentLoaded', function() {
            const simulateButton = document.getElementById('simulate-button');
            const simulationPlaceholder = document.querySelector('.simulation-placeholder');
            const graficoContainer = document.getElementById('grafico-container');
            
            if (simulateButton) {
                simulateButton.addEventListener('click', function() {
                    // Simular leituras de níveis de água
                    const dados = HydroSafe.simularLeituras();
                    
                    // Esconder completamente o placeholder (incluindo ícone e botão)
                    simulationPlaceholder.style.display = 'none';
                    graficoContainer.classList.remove('hidden');
                    
                    // Criar e exibir o gráfico
                    HydroSafe.criarGrafico(graficoContainer, dados);
                    
                    // Adicionar botão para nova simulação
                    const novaSimulacaoBtn = document.createElement('button');
                    novaSimulacaoBtn.textContent = 'Nova Simulação';
                    novaSimulacaoBtn.className = 'simulation-button';
                    novaSimulacaoBtn.style.position = 'relative';
                    novaSimulacaoBtn.style.transform = 'none';
                    novaSimulacaoBtn.style.left = '0';
                    novaSimulacaoBtn.style.marginTop = '20px';
                    
                    novaSimulacaoBtn.addEventListener('click', function() {
                        // Gerar nova simulação
                        const novosDados = HydroSafe.simularLeituras();
                        
                        // Atualizar o gráfico
                        graficoContainer.innerHTML = '';
                        HydroSafe.criarGrafico(graficoContainer, novosDados);
                        
                        // Adicionar o botão novamente
                        graficoContainer.appendChild(novaSimulacaoBtn);
                    });
                    
                    graficoContainer.appendChild(novaSimulacaoBtn);
                });
            }
        });