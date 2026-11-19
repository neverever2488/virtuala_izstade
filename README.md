# Gaming Through Time – virtuālā izstāde

Studentu projekts: vienas lapas virtuālā izstāde par astoņām ikoniskām videospēļu konsolēm, sākot ar Atari 2600 (1977) un beidzot ar Nintendo Switch (2017).

## Funkcijas

- Adaptīvs izkārtojums datoram, planšetdatoram un telefonam
- Hronoloģiska astoņu konsoļu galerija ar attēliem un īsiem aprakstiem
- Interaktīvs attēlu karuselis (sadaļa "A closer look")
- Pieejamības atbalsts: izlaišanas saite, ARIA atribūti, redzams fokuss, samazinātas kustības atbalsts

## Izmantotās tehnoloģijas

- **HTML5** – lapas struktūra un saturs
- **CSS3** – Flexbox, CSS Grid, pielāgotie mainīgie (custom properties), media queries
- **JavaScript (vanilla)** – karuseļa darbība, DOM manipulācijas, notikumu apstrādātāji

## Projekta struktūra

```
virtuala_izstade/
├── index.html      # lapas marķējums
├── style.css       # stili un adaptīvais izkārtojums
├── script.js       # karuseļa funkcionalitāte
├── README.md       # projekta apraksts
└── images/         # konsoļu fotogrāfijas un galvenā ilustrācija
```

## Kā palaist

1. Klonēt repozitoriju:
   ```
   git clone https://github.com/neverever2488/virtuala_izstade
   ```
2. Atvērt `index.html` pārlūkprogrammā vai izmantot VS Code paplašinājumu **Live Server** (labais klikšķis uz `index.html` → *Open with Live Server*).

Nav nepieciešama kompilēšana vai papildu atkarības.

## Karuselis (script.js)

Karuselis ņem slaidu datus no galerijas kartītēm (`data-title`, `data-year`, `data-caption` un kartītes attēls), tāpēc saturs tiek glabāts tikai vienā vietā.

| Vadības elements | Darbība |
| --- | --- |
| Pogas **Next** / **Previous** | Pāriet uz nākamo vai iepriekšējo konsoli (beigās atgriežas sākumā) |
| Poga **Play / Pause** | Ieslēdz vai aptur automātisko slaidrādi (ik pēc 4 sekundēm) |
| Taustiņi **← / →** | Maina slaidus, kad fokuss ir karuselī |
| Klikšķis uz galerijas kartītes | Atver attiecīgo konsoli karuselī |
| Peles kursors virs karuseļa | Īslaicīgi aptur automātisko slaidrādi |

Papildu detaļas: pie katras maiņas tiek atjaunots slaidu skaitītājs (`01 / 08`), nosaukums, gads, apraksts un atskaņošanas statuss; attēli tiek iepriekš ielādēti; slaidrāde apstājas, kad pārlūkprogrammas cilne ir paslēpta; pārejas efekts tiek izslēgts lietotājiem, kuri izvēlējušies samazinātu kustību.

## Izstādes konsoles

| Nr. | Konsole | Gads | Ražotājs |
| --- | --- | --- | --- |
| 01 | Atari 2600 | 1977 | Atari |
| 02 | Nintendo Entertainment System | 1985 | Nintendo |
| 03 | Sega Mega Drive | 1988 | Sega |
| 04 | Game Boy | 1989 | Nintendo |
| 05 | PlayStation | 1994 | Sony |
| 06 | Nintendo 64 | 1996 | Nintendo |
| 07 | Xbox 360 | 2005 | Microsoft |
| 08 | Nintendo Switch | 2017 | Nintendo |

Gads norāda sistēmas pirmo izlaišanu, izņemot NES, kam norādīta tā izlaišana Ziemeļamerikā 1985. gadā.

## Autori un avoti

- **Komanda:** Zahars Samanovs, Danila Korols 
Zahars veidoja script.js, Danila veidoja index.html un style.css
- Konsoļu fotogrāfijas:  
Atari 2600 - https://commons.wikimedia.org/wiki/File:Atari-2600-Wood-4Sw-Set.jpg
Game-Boy - https://commons.wikimedia.org/wiki/File:Game-Boy-FL.jpg
Mega-drive -  https://commons.wikimedia.org/wiki/File:Sega-Mega-Drive-JP-Mk1-Console-Set.jpg
Nintendo 64 - https://commons.wikimedia.org/wiki/File:Nintendo-64-wController-L.jpg
NES(Nintendo Entertainment System) - https://commons.wikimedia.org/wiki/File:NES-Console-Set.png
Playstation 1 - https://media.gamestop.com/i/gamestop/10122936/Sony-PlayStation-Console?w=1256\&h=664\&fmt=auto
Nintendo Switch - https://en.wikipedia.org/wiki/Nintendo_Switch#/media/File:Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg
Xbox 360 - https://commons.wikimedia.org/wiki/File:Xbox-360-Pro-wController.jpg


- Papildu informacija:

[Wikimedia Commons: video game consoles](https://commons.wikimedia.org/wiki/Category:Video_game_consoles)*
