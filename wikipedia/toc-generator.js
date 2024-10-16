

document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("main-content");
    
    const tocList = document.getElementById("toc-list");

    const headings = mainContent.querySelectorAll("h2, h3");

    if (headings.length === 0) {
        return;
    }

    headings.forEach(heading => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${heading.id}`; 
        link.className = "style1"; 
        link.textContent = heading.textContent; 
        listItem.appendChild(link);

       
        tocList.appendChild(listItem);
    });
});
