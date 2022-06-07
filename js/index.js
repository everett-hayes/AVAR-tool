let checkExtensions = ['г', 'к', 'л', 'т', 'х', 'ц', 'ч'];

let singleKeyMapping = {
    а : 'a',
    б : 'b',
    в : 'w',
    г : 'ɡ',
    д : 'd',
    е : 'je',
    ж : 'ʒ',
    з : 'z',
    и : 'i',
    й : 'j',
    к : 'k',
    л : 'l',
    м : 'm',
    н : 'n',
    о : 'o',
    п : 'p',
    р : 'r',
    с : 's',
    т : 't',
    у : 'u',
    х : 'χ',
    ц : 't͡s',
    ч : 't͡ʃ',
    ш : 'ʃ',
    щ : 'ʃː',
    ъ : 'ʔ',
    э : 'e',
    ю : 'ju',
    я : 'ja'
}

let doubleKeyMapping = {
    г : {
        '1' : 'ʕ',
        ъ : 'ʁ',
        ь : 'h'
    },
    к : {
        ъ : 'q',
        ь : 't͡ɫ’',
        '1' : 'к’',
    },
    л : {
        ъ : 'ɫ*'
    },
    т : {
        '1' : 't’'
    },
    х : {
        ъ : 'qː',
        ь : 'xː',
        '1' : 'ħ',
    },
    ц : {
        '1' : 't͡s’'
    },
    ч : {
        '1' : 't͡ʃ’'
    }
}

// returns a translated string
function translateText(str) {

    let output = [];
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {

        let char = arr[i];

        if (char == '\n') {
            output.push("<br>");
        } else if (doubleKeyMapping.hasOwnProperty(char) && i != arr.length - 1) {

            let nextChar = arr[i+1];

            if (doubleKeyMapping[arr[i]].hasOwnProperty(nextChar)) {
                output.push(doubleKeyMapping[char][nextChar]);
                i++; // advance an extra forward
            } else {
                output.push(singleKeyMapping[char]);
            }
        } else if (singleKeyMapping.hasOwnProperty(char)) {
            output.push(singleKeyMapping[char]);
        } else {
            output.push(char);
        }
    }

    return output.join("");
}


// let keyMapping = {
//     а : 'a',
//     б : 'b',
//     в : 'w',
//     г : 'ɡ',
//     г1 : 'ʕ',
//     гъ : 'ʁ',
//     гь : 'h',
//     д : 'd',
//     е : 'je',
//     ж : 'ʒ',
//     з : 'z',
//     и : 'i',
//     й : 'j',
//     к : 'k',
//     къ : 'q',
//     кь : 't͡ɫ’',
//     к1 : 'к’',
//     л : 'l',
//     лъ : 'ɫ*',
//     м : 'm',
//     н : 'n',
//     о : 'o',
//     п : 'p',
//     р : 'r',
//     с : 's',
//     т : 't',
//     т1 : 't’',
//     у : 'u',
//     х : 'χ',
//     хъ : 'qː',
//     хь : 'xː',
//     х1 : 'ħ',
//     ц : 't͡s',
//     ц1 : 't͡s’',
//     ч : 't͡ʃ',
//     ч1 : 't͡ʃ’',
//     ш : 'ʃ',
//     щ : 'ʃː',
//     ъ : 'ʔ',
//     э : 'e',
//     ю : 'ju',
//     я : 'ja'
// }

// check each character

$('#input-text').keyup(function() {

    let text = $('#input-text').val();

    let translatedText = translateText(text);

    $('#output-text').html(translatedText);
})