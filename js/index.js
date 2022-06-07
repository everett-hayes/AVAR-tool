let keyMapping = {
    а : 'a',
    б : 'b',
    в : 'w',
    г : 'ɡ',
    гъ : 'ʁ',
    гь : 'h',
    г1 : 'ʕ',
    д : 'd',
    е : 'je',
    ж : 'ʒ',
    з : 'z',
    и : 'i',
    й : 'j',
    к : 'k',
    къ : 'q',
    кь : 't͡ɫ’',
    к1 : 'к’',
    л : 'l',
    лъ : 'ɫ*',
    м : 'm',
    н : 'n',
    о : 'o',
    п : 'p',
    р : 'r',
    с : 's',
    т : 't',
    т1 : 't’',
    у : 'u',
    х : 'χ',
    хъ : 'qː',
    хь : 'xː',
    х1 : 'ħ',
    ц : 't͡s',
    ц1 : 't͡s’',
    ч : 't͡ʃ',
    ч1 : 't͡ʃ’',
    ш : 'ʃ',
    щ : 'ʃː',
    ъ : 'ʔ',
    э : 'e',
    ю : 'ju',
    я : 'ja'
}

function translate(char) {

    if (char == '\n') {
        return '<br>';
    }

    if (keyMapping.hasOwnProperty(char)) {
        return keyMapping[char];
    } else {
        return char;
    }
}

$('#input-text').keyup(function() {

    let text = $('#input-text').val();

    let translatedText = text.split('').map(ch => translate(ch)).join('');

    $('#output-text').html(translatedText);
})