
function getHistory(){
   return document.getElementsByClassName("history_value").innertText;

}

function printHistory(num){
    document.getElementsByClassName("history_value").innertText=num
}

printHistory("9*9")
