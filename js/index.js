let singleKeyMapping = {
    ' ' : ' ', // because I'm lazy this must be here
    а : 'a',
    б : 'b',
    в : 'w',
    г : 'ɡ',
    д : 'd',
    е : 'е',
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
    э : 'е',
    ю : 'ju',
    я : 'ja'
}

let doubleKeyMapping = {
    ' ' : { // start of word case
        е : ' jе'
    },
    у : {
        е : 'ujе'
    },
    е : {
        е : 'еjе'
    },
    а : {
        е : 'ajе'
    },
    о : {
        е : 'ojе'
    },
    э : {
        е : 'ejе'
    },
    я : {
        е : 'jajе'
    },
    и : {
        е : 'ijе'
    },
    ю : {
        е : 'jujе'
    },
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

    if (arr.length == 0) return "";

    for (let i = 0; i < arr.length; i++) {

        let char = arr[i];

        if (char == '\n') {
            output.push("<br>");
        } else if (doubleKeyMapping.hasOwnProperty(char) && i != arr.length - 1) {

            // we have to check if we are looking at a possible edge case
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

    // starting character edge case
    if (arr[0] == 'е') output[0] = 'jе';

    return output.join("");
}

$('#input-text').keyup(function() {

    let text = $('#input-text').val();

    let translatedText = translateText(text);

    $('#output-text').html(translatedText);
})