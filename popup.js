
(() => {
    const downloadButton = document.getElementById("download");
    downloadButton.addEventListener("click", function () {
        var inputtext = document.getElementById("input").value
        var filename = document.getElementById("filename").value || "filename.txt"

        saveFile(inputtext, filename)

    }, false)

    function saveFile(contents, filename) {
        if (contents === "") {
            alert("Input is empty. Please paste some content before downloading.");
            return;
        }
        var filename_ = filename || "file.txt"

        var blob = new Blob([contents], { "type": "text/plain" })

        var msSaveBlob = window.navigator.msSaveBlob
        if (msSaveBlob) {
            msSaveBlob(blob, filename)
        } else {
            var a = document.createElement("a")
            a.href = URL.createObjectURL(blob)
            a.target = "_blank"
            a.download = filename
            a.click()
            URL.revokeObjectURL(a.href)
        }
    }

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        document.getElementById("input").value = "";
    });
})()
