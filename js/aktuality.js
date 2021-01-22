const news = [
    // { label: "", note: "", icon: ""},
    { label: "Odečet vodoměrů", note: "25. 1. 2021 18:00 - 19:30", icon: "insert_chart_outlined"},
    { label: "Revize plynovodu a spotřebičů", note: "14. 1. 2021 15:00 - 18:00", icon: "local_gas_station"},
    { label: "Odečet elektřiny", note: "9. 7. 2019 10:00 - 12:00", icon: "flash_on"},
    { label: "Členská schůze BD", note: "17. 6. 2020", icon: "group"},
    { label: "Kontrola spalinových cest + revize plynu", note: "29.5.2020", icon: "local_gas_station" },
    { label: "Odečet plynu", note: "17. 2. 2020 14:00 - 14:20", icon: "local_gas_station" },
    { label: "Odečet vodoměrů", note: "13.1. 2020 19:00 - 20:30", icon: "insert_chart_outlined" },
    { label: "Zateplení a malování průchodů", note: "Listopad 2019", icon: "build"},
    { label: "Členská schůze BD", note: "21. 10. 2019", icon: "group"},
    { label: "Odečet elektřiny", note: "1. 7. 2019", icon: "flash_on"},
    { label: "Členská schůze BD", note: "11. 3. 2019", icon: "group"},
    { label: "Malování společných prostor a výměna osvětlení", note: "20.2. - 10. 4. 2019", icon: "color_lens"},
    { label: "Rekonstrukce výtahu", note: "21.1. - 1.3.2019", icon: "build" },
    { label: "Odečet plynu", note: "8. 2. 2019 14:00 - 14:20", icon: "local_gas_station" },
    { label: "Odečet vodoměrů", note: "13.1. 2019 18:00 - 20:00", icon: "insert_chart_outlined" },
    { label: "Kontrola spalinových cest + revize plynu", note: "7. 1. 2019 14h - 18h", icon: "local_gas_station" },
    { label: "Členská schůze BD", note: "15. 10. 2018", icon: "group" },
    { label: "Instalace čipových zámků", note: "21.7.2016", icon: "lock_open" },
    { label: "Kontrola spalinových cest + revize plynu", note: "4.5.2016", icon: "local_gas_station" },
    { label: "Členská schůze", note: "25.4.2016 - příslušné dokumenty", icon: "group" },
    { label: "Členská schůze", note: "4.11.2015 - příslušné dokumenty", icon: "group" },
    { label: "Členská schůze", note: "29. 4. 2015", icon: "group" },
    { label: "Daňové přiznání pro rok 2014", note: "29.3.2015 - doplněno do dokumentů", icon: "cloud_upload" },
    { label: "Členská schůze", note: "21.1.2015", icon: "group" },
    { label: "Instalace vodoměrů", note: "7. - 16.1.2015", icon: "toys" },
    { label: "Smlouvy s představenstvem", note: "13.10.2014 - doplněno do dokumentů", icon: "cloud_upload" },
    { label: "Zápis ze schůze", note: "12.10.2014 - doplněno do dokumentů", icon: "cloud_upload" },
    { label: "Členská schůze", note: "30. 9. 2014", icon: "group" },
    { label: "Kupní smlouva o zřízení věcného břemene", note: "26.9.2014 - doplněno do dokumentů", icon: "cloud_upload" },
    { label: "Zápis do obchodního rejstříku", note: "9. 4. 2013", icon: "fiber_new" }
];

function writeTopNews() {
    for (var i = 0; i < 5; i++) {
        var n = news[i];
        document.writeln(createItem(n));
    }
}

function writeAll() {
    for (var i = 0; i < news.length; i++) {
        var n = news[i];
        document.writeln(createItem(n));
    }
}

function createItem(item) {
    return '<li class="mdc-list-item"> \
        <span class="mdc-list-item__graphic material-icons" aria-hidden="true">' + item.icon + '</span> \
        <span class="mdc-list-item__text"> \
            <span class="mdc-list-item__primary-text">' + item.label + '</span> \
            <span class="mdc-list-item__secondary-text">' + item.note + '</span> \
        </span> \
        </li>';
}
