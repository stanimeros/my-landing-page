import React from 'react';

function Translator({ code, value, classNames }) {
  if (!code || !value || code==='EN'){ 
    //console.log("Error",code,value);
    return <span className={classNames}>{value}</span>; 
  }
  value = value.trim();
  const id = translationData.find(item => item.value === value)?.id;
  if (id){
    const translation = translationData.find(item => item.id === id && item.code === code);
    if (translation){
      return <span className={classNames}>{translation.value}</span>;
    }else{
      return <span className={classNames}>{translateAllWords(code, value)}</span>;
    }
  } else {
    return <span className={classNames}>{translateAllWords(code, value)}</span>;
  }
}

function translateAllWords(code, value) {
  var wordsArray = value.split(" ");
  var translatedWordsArray = [];
  for (var i = 0; i < wordsArray.length; i++){
    const id = translationData.find(item => item.value === wordsArray[i])?.id;
    if (id){
      const translation = translationData.find(item => item.id === id && item.code === code);
      translatedWordsArray.push(translation ? translation.value : wordsArray[i]);
    }else{
      translatedWordsArray.push(wordsArray[i]);
    }
  }
  return translatedWordsArray.join(" ");
}

export default Translator;

const translationData = [
  { id:1, code: `EN`, value: `Account` },
  { id:2, code: `EN`, value: `Sign In` },
  { id:3, code: `EN`, value: `Welcome to Reserwave` },
  { id:4, code: `EN`, value: `Your journey to discovering, reserving, and enjoying experiences starts here.` },
  { id:5, code: `EN`, value: `Sign Up` },
  { id:6, code: `EN`, value: `Submit` },
  { id:7, code: `EN`, value: `Password` },
  { id:8, code: `EN`, value: `First Name` },
  { id:9, code: `EN`, value: `Last Name` },
  { id:10, code: `EN`, value: `Phone` },
  { id:1, code: `EL`, value: `Λογαριασμός` },
  { id:2, code: `EL`, value: `Σύνδεση` },
  { id:3, code: `EL`, value: `Καλώς ήλθατε στο Reserwave` },
  { id:4, code: `EL`, value: `Το ταξίδι σας για να ανακαλύψετε, να κλείσετε και να απολαύσετε εμπειρίες ξεκινά εδώ.` },
  { id:5, code: `EL`, value: `Εγγραφή` },
  { id:6, code: `EL`, value: `Ολοκλήρωση` },
  { id:7, code: `EL`, value: `Κωδικός` },
  { id:8, code: `EL`, value: `Όνομα` },
  { id:9, code: `EL`, value: `Επίθετο` },
  { id:10, code: `EL`, value: `Κινητό` },
];


