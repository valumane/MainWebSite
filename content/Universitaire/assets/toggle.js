function toggle(div_id, div_to_toggle) {
    const sujet = document.getElementById(div_id);
    const pdf = document.getElementById(div_to_toggle);

    const isHidden = window.getComputedStyle(pdf).display === "none";

    if (isHidden) {
        pdf.style.display = "block";
        sujet.textContent = "sujet (masquer)";
    } else {
        pdf.style.display = "none";
        sujet.textContent = "sujet (afficher)";
    }
}
