document.addEventListener("DOMContentLoaded",function(){
    const textInput = document.getElementById("text-input");
    const charCount = document.getElementById("char-count");
    const wordCount = document.getElementById("word-count");
    const sentenceCount = document.getElementById("sentence-count");




    function updateCount(){
        const text = textInput.value.trim()
        charCount.textContent = text.length

        const words = text.match(/\b\w+\b/g)
        wordCount.textContent = words ? words.length : 0

        const sentences = text.match(/[.!?]+(?=\s|$)/g)
        sentenceCount.textContent = sentences ? sentences.length : 0
    }
    textInput.addEventListener("input",updateCount);
    textInput.addEventListener("paste",function(){
        setTimeout(updateCount,200)})


})