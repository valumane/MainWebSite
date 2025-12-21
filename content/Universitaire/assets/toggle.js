function toggle(div_to_toggle) {
    const pdf = document.getElementById(div_to_toggle);

    const isHidden = window.getComputedStyle(pdf).display === "none";

    if (isHidden) {
        pdf.style.display = "block";
    } else {
        pdf.style.display = "none";
    }
}
