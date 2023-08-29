function showMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    let matchMediaQuery = window.matchMedia("(max-width: 767px)");
    if (matchMediaQuery.matches) {
        console
        pop.style.cssText = "position: absolute; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; top: 0px;";
    } else {
        pop.style.cssText = "display: none; overflow: hidden;";
    }
    matchMediaQuery.addListener(showMenu);
}

function closeMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    pop.style.cssText = "display: none; overflow: hidden;";
}

// $(window).resize(function () {
//     if (document.body.clientWidth < 768) {
//         console.log(document.getElementById("case8").style.height);
//         document.getElementById("case7").style.height = document.getElementById("case8").style.height;
//     }

// });