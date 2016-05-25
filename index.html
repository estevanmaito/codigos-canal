<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speech Recognition App</title>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <style>
        body {
            font-size: 40px;
        }

        .luz-apagada {
            color: white;
            background-color: black;
        }
    </style>
</head>
<body>
    
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <p>Este site utiliza comandos por voz. Diga "luz" para mudar a cor de fundo.</p>
                <p>É necessário ter um microfone.</p>
            </div>
        </div>

        <button class="btn btn-success btn-lg" id="speakBtn">Falar</button>

    </div>

    <script>
        window.addEventListener('DOMContentLoaded', function() {
            var speakBtn = document.querySelector('#speakBtn');

            // testa se o navegador suporta o reconhecimento de voz
            if (window.SpeechRecognition || window.webkitSpeechRecognition) {

                // captura a voz
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

                var recognition = new SpeechRecognition();

                // inicia reconhecimento
                speakBtn.addEventListener('click', function(e) {
                    recognition.start();
                }, false);

                // resultado do reconhecimento
                recognition.addEventListener('result', function(e) {
                    console.log(e);
                    var result = e.results[0][0].transcript;
                    console.log(result);
                    if (result.toLowerCase() === 'luz') {
                        document.body.classList.toggle('luz-apagada');
                    }
                    // window.location.href = 'http://' + result;
                }, false);
            } else {
                alert('Este navegador não suporta esta funcionalidade ainda!');
            }

        }, false);
    </script>
</body>
</html>