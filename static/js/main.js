document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                contentDiv.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
            });
    }

    document.getElementById('home').addEventListener('click', () => {
        contentDiv.innerHTML = '<h1>Bem-vindo ao Giramille I.A</h1><p>Selecione uma das opções no menu para carregar o conteúdo.</p>';
    });

    document.getElementById('tts-link').addEventListener('click', () => {
        loadContent('page_audio_sem_menu.html');
    });

    document.getElementById('tti-link').addEventListener('click', () => {
        loadContent('page_imagem_sem_menu.html');
    });

    // Carregar conteúdo inicial se desejado
    contentDiv.innerHTML = '<h1>Bem-vindo ao Giramille I.A</h1><p>Selecione uma das opções no menu para carregar o conteúdo.</p>';
});
