document.getElementById('quizForm').addEventListener('change', function(){
    const respostas = ['Autismo é um transtorno', 'Nem todo autista é agitado'];
    const checks = Array.from(document.querySelectorAll('#quizForm input:checked')).map(e=>e.value);
    console.log('Respostas selecionadas:', checks);
});
