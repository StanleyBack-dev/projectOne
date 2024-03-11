let currentState = '';

function encrypt() {
    const text = document.getElementById('text').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!/^[a-z]+$/.test(text)) {
        errorMessage.textContent = "Por favor ! Apenas palavras com letras minúsculas. Sem caracteres especiais. Sem números. Sem acentos.";
        return;
    }

    let result = '';
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'a':
                result += 'ai';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;
            default:
                result += text[i];
        }
    }

    currentState = result;
    document.getElementById('result').value = currentState;
    errorMessage.textContent = "";
}

function decrypt() {
    const text = document.getElementById('text').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!/^[a-z]+$/.test(text)) {
        errorMessage.textContent = "Apenas palavras com letras minúsculas. Sem caracteres especiais. Sem números. Sem acentos.";
        return;
    }

    let result = '';
    let i = 0;
    while (i < text.length) {
        let currentChar = text.substring(i, i + 5);

        switch (currentChar) {
            case 'enter':
                result += 'e';
                i += 5;
                break;
            case 'imes':
                result += 'i';
                i += 5;
                break;
            case 'ai':
                result += 'a';
                i += 2;
                break;
            case 'ober':
                result += 'o';
                i += 4;
                break;
            case 'ufat':
                result += 'u';
                i += 4;
                break;
            default:
                result += text[i];
                i++;
        }
    }

    currentState = result;
    document.getElementById('result').value = currentState;
    errorMessage.textContent = "";
}

function copyResult() {
  const resultTextarea = document.getElementById('result');
  resultTextarea.select();
  document.execCommand('copy');
}
