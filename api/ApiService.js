async function getWords(query, lang) {
    try {
        //Check not null/empty
        let word = query.toLowerCase().trim();
        console.log('query->: ' + word);
        console.log('lang->: ' + lang);
      //  const URL = `http://192.168.1.2:8080/lexicon/words/${lang}?word=${word}`;
        const URL = 'http://eurobaluchi.com/lexicon/rest-api/search.php?lang='+lang+'&word='+word;
        console.log('URL: ' + URL);
        let response = await fetch(
            URL,
        );
        let responseJson = await response.json();
        console.log(JSON.stringify(responseJson));
        let resp = { words: responseJson };
        return resp;
    } catch (error) {
        console.error(error);
    }
}

const validateLang = (lang) =>{
    switch(lang) {
        case "eng":
          return "eng";
        case "bcc":
          return "bcc";
        case "latin-com":
            return "latin-com";
        default:
          return "english";
      }

};
export { getWords, validateLang }