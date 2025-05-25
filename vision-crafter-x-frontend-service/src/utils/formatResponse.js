function formatResponseHTML(text) {
    const lines = text.split('\n').filter(line => line.trim() !== "")

    let html = `<ol>`
    lines.forEach(line => {
        html += `<li>${line}</li>`
    });
    html+= `</ol>`

    return html
}