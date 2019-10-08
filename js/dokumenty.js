// { date: "", name: "", note: "", size: "", file: ""},

const documents2019 = [
    { date: "8. 10. 2019", name: "Pozvánka na schůzi říjen 2019", note: "&nbsp;", size: "448 kB ", file: "pozvanka-2019-10-21.pdf"},
    { date: "28. 2. 2019", name: "Pozvánka na schůzi březen 2019", note: "&nbsp;", size: "104 kB ", file: "pozvanka-2019-03-11.pdf"},
];

const documents2018 = [
    { date: "15. 10. 2018", name: "Zápis schůze č.16", note: "Fixace úvěru, prodej bytu, opravy, úklid", size: "174 kB", file: "zapis-ze-schuze-BD-c16-dne-2018-10-15.pdf" },
    { date: "25. 9. 2018", name: "Pozvánka na schůzi říjen 2018", note: "&nbsp;", size: "105 kB", file: "pozvanka-2018-10-15.pdf" },
    { date: "23. 4. 2018", name: "Zápis schůze č.15", note: "Správa domu, vyúčtování služeb, kamery, výtah", size: "165 kB", file: "zapis-ze-schuze-BD-c15-dne-2018-04-23.pdf" },
    { date: "9. 4. 2018", name: "Pozvánka na schůzi duben 2018", note: "&nbsp;", size: "104 kB", file: "pozvanka-2018-04-23.pdf" }
];

const documents2017 = [
    { date: "30. 10. 2017", name: "Zápis schůze č.14", note: "Nová správa domů", size: "120 kB", file: "zapis-ze-schuze-BD-c14-dne-2017-10-30.pdf" },
    { date: "11. 10. 2017", name: "Pozvánka na schůzi říjen 2017", note: "&nbsp;", size: "105 kB", file: "pozvanka-2017-10-30.pdf" },
    { date: "10. 4. 2017", name: "Pozvánka na schůzi duben 2017", note: "&nbsp;", size: "105 kB", file: "pozvanka-2017-04-25.pdf" }
];

const documents2016 = [
    { date: "22. 11. 2016", name: "Zápis schůze č.12", note: "&nbsp;", size: "111 kB", file: "zapis-ze-schuze-BD-c12-dne-2016-11-22.pdf" },
    { date: "25. 10. 2016", name: "Pozvánka na schůzi listopad 2016", note: "&nbsp;", size: "115 kB", file: "pozvanka-2016-11-22.pdf" },
    { date: "27. 4. 2016", name: "Fond oprav 2014-2015", note: "&nbsp;", size: "490 kB", file: "Fond-oprav-2014-2015.pdf" },
    { date: "25. 4. 2016", name: "Zápis schůze č.11", note: "Výběr samo-zamykacích zámků, oprava střechy", size: "112 kB", file: "zapis-ze-schuze-BD-c11-dne-2016-04-25.pdf" },
    { date: "14. 4. 2016", name: "Pozvánka na schůzi duben 2016", note: "&nbsp;", size: "116 kB", file: "pozvanka-2016-04-25.pdf" }
];

const documents2015 = [
    { date: "20. 11. 2015", name: "Rozpis faktur 2015", note: "&nbsp;", size: "220 kB", file: "Rozpis-faktur-2015.pdf" },
    { date: "4. 11. 2015", name: "Zápis schůze č.10", note: "Oprava střechy, kamerový systém, opravy", size: "263 kB", file: "zapis-ze-schuze-BD-c10-dne-2015-11-04.pdf" },
    { date: "28. 6. 2015", name: "Domovní řád", note: "&nbsp;", size: "111 kB", file: "Domovni-rad.pdf" },
    { date: "29. 4. 2015", name: "Zápis schůze č.09", note: "Vyúčtován, zábrany proti parkování aut", size: "261 kB", file: "zapis-ze-schuze-BD-c09-dne-2015-04-29.pdf" },
    { date: "31. 1. 2015", name: "Účetní rozvaha 2015", note: "&nbsp;", size: "2 MB", file: "Ucetni-rozvaha-2015.pdf" },
    { date: "21. 1. 2015", name: "Zápis schůze č.08", note: "Nový člen kontrolní komise", size: "99 kB", file: "zapis-ze-schuze-BD-c08-dne-2015-01-21.pdf" }
]

const documents2014 = [
    { date: "20. 11. 2014", name: "Fond oprav 2014	", note: "&nbsp;", size: "47 kB", file: "Fond-oprav-2014.pdf" },
    { date: "30. 10. 2014", name: "Kupní smlouva", note: "A smlouva o zřízení věcného břemene", size: "10 MB", file: "Kupni-smlouva.pdf" },
    { date: "30. 10. 2014", name: "Smlouva Lacina", note: "&nbsp;", size: "3 MB", file: "Smlouva-Lacina.pdf" },
    { date: "30. 10. 2014", name: "Smlouva Introvič", note: "&nbsp;", size: "3 MB", file: "Smlouva-Introvic.pdf" },
    { date: "30. 10. 2014", name: "Smlouva Divišová", note: "&nbsp;", size: "3 MB", file: "Smlouva-Divisova.pdf" },
    { date: "25. 10. 2014", name: "Stanovy BD SoPo", note: "&nbsp;", size: "162 kB", file: "Stanovy-aktualizovane.pdf" },
    { date: "30. 9. 2014", name: "Zápis schůze č.07", note: "Smlouvy představenstva, instalace vodoměrů", size: "274 kB", file: "zapis-ze-schuze-BD-c07-dne-2014-09-30.pdf" },
    { date: "25. 6. 2014", name: "Zápis schůze č.06", note: "Stanovy družstva", size: "160 kB", file: "zapis-ze-schuze-BD-c06-dne-2014-06-25.pdf" },
    { date: "12. 3. 2014", name: "Zápis schůze č.05", note: "Výběr správní firmy, pojišťovny, smlouvy členům", size: "151 kB", file: "zapis-ze-schuze-BD-c05-dne-2014-03-12.pdf" },
]

const documents2013 = [
    { date: "11. 12. 2013", name: "Zápis schůze č.04", note: "Volné byty, privatizace, nový člen BD", size: "150 kB", file: "zapis-ze-schuze-BD-c04-dne-2013-12-11.pdf" },
    { date: "6. 11. 2013", name: "Zápis schůze č.03", note: "Volné byty, smlouva o úvěru", size: "159 kB", file: "zapis-ze-schuze-BD-c03-dne-2013-11-06.pdf" },
    { date: "13. 8. 2013", name: "Zápis schůze č.02", note: "&nbsp;", size: "153 kB", file: "zapis-ze-schuze-BD-c02-dne-2013-08-13.pdf" }
];

function writeYear(year, documents) {
    document.write("<div class='mdc-layout-grid'>\
    <div class='mdc-layout-grid__inner'>");
    document.write('<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div class="mdc-typography--headline4 ">' + year + '</div></div>');

    for (var i = 0; i < documents.length; i++) {
        const d = documents[i];

        const cell = '<div class="mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop"> \
                        <div style="padding-top: 16px; padding-left: 16px; padding-right: 16px;"> \
                            <div class="mdc-typography--headline6">' + d.name + '</div> \
                            <div class="mdc-typography--caption">' + d.date + ' - ' + d.size + '</div> \
                            <div class="mdc-typography--body2">' + d.note + '</div> \
                        </div> \
                        <div class="mdc-card__actions"> \
                            <a class="mdc-button mdc-card__action mdc-card__action--button" href="dokumenty/' + d.file + '"> \
                                <span class="mdc-button__label">Stáhnout</span> \
                            </a> \
                        </div> \
                    </div>';

        document.write(cell);
    }

    document.write("</div>\
</div>");
}

writeYear(2019, documents2019);
writeYear(2018, documents2018);
writeYear(2017, documents2017);
writeYear(2016, documents2016);
writeYear(2015, documents2015);
writeYear(2014, documents2014);
writeYear(2013, documents2013);

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.querySelector('.mdc-checkbox__native-control').addEventListener('change', function (e) {
            console.log("checked!");
        });
    }
};