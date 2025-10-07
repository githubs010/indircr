(function() {
    // Defines the regular expression to find a UPC pattern (e.g., "upc: 123456789012").
    const upcPattern = /upc\s*:\s*(['"]?)([\d\s%27"“‘’”]{8,20})\1/i;

    // Searches the entire text content of the page for the UPC pattern.
    const match = document.body.innerText.match(upcPattern);

    // Extracts the captured UPC (the second group in the match) and removes all non-digit characters.
    // If no match is found, it safely returns null.
    const upc = match ? match[2]?.replace(/[^\d]/g, "") : null;

    // Checks if a valid UPC was found.
    if (upc) {
        // Copies the cleaned UPC to the clipboard.
        navigator.clipboard.writeText(upc);

        // Opens the UPC in three different lookup websites in new tabs.
        window.open(`https://www.barcodelookup.com/${upc}`, "_blank");
        window.open(`https://www.upcitemdb.com/upc/${upc}`, "_blank");
        window.open(`https://go-upc.com/search?q=${upc}`, "_blank");

    } else {
        // If no UPC is found, an alert is displayed.
        alert("❌ Valid UPC not found on page.");
    }
})();
