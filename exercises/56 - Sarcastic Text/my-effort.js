  sarcastic = document.getElementById('sarcastic');
  text = document.getElementById('text-to-amend').innerHTML;

function isSarcastic() {
    if(sarcastic.checked === true){
    //   console.log(text);
    console.log(alternateUpperCase(text));
    document.getElementById('text-to-amend').innerHTML = alternateUpperCase(text);
    } else {
    document.getElementById('text-to-amend').innerHTML = text;
    console.log('not sarcastic text');
    }
}

function unableToStructureSentence() {
    if(unable.checked === true){
        console.log('person cant speak');
        document.getElementById('text-to-amend').innerHTML = randomPauses(text);
    } else {
        document.getElementById('text-to-amend').innerHTML = text;
        console.log('not sarcastic text');
    }
}

if (document.querySelector('input[name="filter"]')) {
    document.querySelectorAll('input[name="filter"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
            isSarcastic();
            unableToStructureSentence();
      });
    });
  }

  function alternateUpperCase(sentence) {
    var outputString = "";
    for(var i = 0; i < sentence.length; i++){
        if (i % 2 != 0) {
            outputString += sentence[i].toUpperCase();
        }
        else {
            outputString += sentence[i].toLowerCase();
         }   
    }
    return outputString;
  }

  function randomPauses(sentence) {
      words = sentence.split(' ');
      newSentence = '';
      for(var i = 1; i < words.length; i++){
          if(i % 3 != 0) {
            newSentence += words[i] + ' ';
          } else {
            newSentence += words[i] + '... ';
          }
      }
      return newSentence;
  }

  isSarcastic();