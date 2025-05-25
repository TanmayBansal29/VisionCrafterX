function formatResponseHTML(text) {
    const lines = text.split('\n').filter(line => line.trim() !== "")

    let html = `<ol> class="list-decimal list-inside space-y-2`
    lines.forEach(line => {
        html += `<li>${line}</li>`
    });
    html+= `</ol>`

    return html
}