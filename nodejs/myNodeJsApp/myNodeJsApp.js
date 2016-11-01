var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
//过滤敏感词
function censon(inStr){
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx],"****");
	}
}


function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWord(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;//把模块中的函数开放给调用者使用
exports.getCensoredWords = getCensoredWords;
exports.addCensoreWord = addCensoreWord
