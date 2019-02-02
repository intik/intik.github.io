document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        initMobileAppBar();
        initMobileMenu();
    }
};

function initMobileAppBar() {
    const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    /* const topAppBar = */
    new MDCTopAppBar(topAppBarElement);
}

function initMobileMenu() {
    const MDCMenu = mdc.menu.MDCMenu;

    const menu = new MDCMenu(document.querySelector('.mdc-menu'));

    const menuButton = document.querySelector('#menuButton');
    menuButton.addEventListener('click', function () { menu.open = true });

    document.querySelector('.mdc-menu').addEventListener('MDCMenu:selected', function (e) {
        switch (e.detail.index) {
            case 0:
                window.location.href = 'index.html';
                break;
            case 1:
                window.location.href = 'dokumenty.html';
                break;
            case 2:
                window.location.href = 'aktuality.html';
                break;
            case 3:
                window.location.href = 'predstavenstvo.html';
                break;
            case 4:
                window.location.href = 'adresar.html';
                break;
        }
    });

}