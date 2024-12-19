let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];



let currentPlayer = 'cross' ;



function init () {
    render();
}

function render() {
    const container = document.getElementById("content");

    // Generate table HTML 
    let tableHTML = "<table>";
    for (let i = 0; i < 3; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = "";

            if (fields[index] === "circle") {
                symbol = generateAnimatedCircle(); // Kreis
            } else if (fields[index] === "cross") {
                symbol = generateAnimatedCross() ; // Kreuz
            }

            tableHTML += `<td onclick="handleClick(${index},this)">${symbol}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    // Set table HTML to container
    container.innerHTML = tableHTML;
}

function generateAnimatedCircle() {
    return `
        <svg width="70" height="70" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#00B0EF"
                stroke-width="2"
                stroke-dasharray="100.48" <!-- Umfang des Kreises -->
                stroke-dashoffset="100.48"
                transform="rotate(-90 18 18)"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="100.48"
                    to="0"
                    dur="0.2s"
                    repeatCount="1"
                    fill="freeze"
                />
            </circle>
        </svg>
    `;
}

function generateAnimatedCross() {
    return `
        <svg width="70" height="70" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <!-- Erste Linie -->
            <line 
                x1="8" y1="8" 
                x2="28" y2="28" 
                stroke="#FFC000" 
                stroke-width="2" 
                stroke-linecap="round"
                stroke-dasharray="28.28"
                stroke-dashoffset="28.28"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="28.28"
                    to="0"
                    dur="0.2s"
                    repeatCount="1"
                    fill="freeze"
                />
            </line>

            <!-- Zweite Linie -->
            <line 
                x1="28" y1="8" 
                x2="8" y2="28" 
                stroke="#FFC000" 
                stroke-width="2" 
                stroke-linecap="round"
                stroke-dasharray="28.28"
                stroke-dashoffset="28.28"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="28.28"
                    to="0"
                    dur="0.2s"
                    repeatCount="1"
                    fill="freeze"
                />
            </line>
        </svg>
    `;
}

function handleClick(index,cell){
    if(fields[index] !== null) {
        return;
    }

    fields[index] = currentPlayer;

    if (currentPlayer === "circle") {
        cell.innerHTML = generateAnimatedCircle();
    } else {
        cell.innerHTML = generateAnimatedCross();
    }

    // Onclick-Funktion von der Zelle entfernen
    cell.onclick = null;
    // Spieler wechseln
    currentPlayer = currentPlayer === "circle" ? "cross" : "circle";

}

