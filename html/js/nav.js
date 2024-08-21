document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll(".taba");

    const showTab = (tabNumber) => {
        tabs.forEach((tab, index) => {
            const isActive = index + 1 === tabNumber;
            tab.classList.toggle('-n', isActive);
            contents[index].classList.toggle('-n', isActive);
        });
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => showTab(index + 1));
    });

    showTab(1);
});