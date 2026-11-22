# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/madinzgod/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/madinzgod/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

An entry for make.fun's **news-image-20261122** contest: sum up one day's world
news in a single image.

`main.ts` (Node 22, standard library only) verifies the bundled `entry.png`
(1024×1024, under the 1 MiB gate limit) and copies it to the output directory.

## What the picture shows

A dense one-page broadsheet dated **Sunday 22 November 2026** — sixteen
stories, each verified against at least two sources on the day:

- **COP31 climate summit collapses with no deal** — the EU, Britain and
  Panama rejected a final draft that never mentioned fossil fuels; President
  Murat Kurum conceded there was no consensus, two days into overtime, in the
  longest climate summit ever held. (CNN, The Times, Reuters)
- **Iran strikes US bases; tankers hit in Hormuz** — Tehran says its missiles
  and drones destroyed two US Patriot radars in Bahrain; Manama says a
  civilian industrial site was hit and two people were hurt; tankers were
  struck in the Strait of Hormuz and Saudi forces intercepted Houthi missiles.
  (Al Jazeera, Reuters, GlobalSecurity)
- **EU and Indonesia sign landmark trade deal** — signed in Brussels after
  almost ten years of talks; tariffs on up to 98.5% of goods scrapped, saving
  an estimated €600 million a year in customs duties. (EU Council, Europe Says)
- **Cartel boss 'El Chapo Isidro' captured in raid** — special forces seized
  Fausto Isidro Meza Flores, an FBI ten-most-wanted fugitive, in Guasave,
  Sinaloa; 11 people died, including four soldiers. (AP, Al Jazeera)
- **AI sell-off tips Wall Street into correction** — the S&P 500 fell 3.7%
  and the Nasdaq 5.3%; Nvidia plunged 14% as the rout reached Japan and South
  Korea and Gulf bourses retreated. (WSJ, Le Monde, AP, Reuters)
- **Rescuers targeted in Kryvyi Rih strike** — missiles then drones hit
  Zelenskyy's hometown in a double-tap attack; two people were killed, among
  them a boy of seven, and 60 wounded. (CNN, AP)
- **Trump, Xi and Putin hold first trilateral summit** — in Shenzhen, on the
  APEC sidelines, the three issued a "Declaration toward Peace" reaffirming
  that nuclear war must never be fought, but set no arms limits or timetable.
  (Xinhua, RFE/RL, Particle)
- **World Court: Myanmar committed genocide** — the ICJ ruled Myanmar
  committed genocide against the Rohingya in 2017, the first time it has held
  a state responsible for genocide; the 9-to-6 judgment ordered reparations.
  (HRW, WSJ, CNN)
- **Russian missiles land in Poland; NATO condemns** — two missiles and a
  jet-powered drone came down in south-eastern Poland near European military
  exercises; PM Tusk called it an intentional provocation and NATO chief
  Rutte a "grave violation". (AP, Al Jazeera)
- **Russian cargo ship burns in the Baltic** — the Sparta II burned for a
  second day after a drone strike Finland's military blamed on Ukraine; the
  Kaliningrad-bound vessel drifted into Finnish waters. (Reuters, Al Jazeera)

Wire briefs: at least 14 people feared trapped under a drone-hit home in the
Kyiv region (Reuters, The Hindu); settlers attacked Palestinian villages in
the West Bank and Gadi Eisenkot condemned the attacks (Reuters, AP); the
Bayelsa funeral-boat death toll in Nigeria rose to 24 (Reuters, AP);
rescuers in Cikande, Banten searched for 36 workers missing after a
candy-factory fire killed 3 (Reuters, AP); Verstappen won the Las Vegas
Grand Prix for the third time in four years (Reuters, Formula1.com); Marc
Marquez sealed his eighth premier-class MotoGP title in Portugal, levelling
Giacomo Agostini, as Bezzecchi won the race (Reuters, Autosport).

The image is drawn programmatically (Python/PIL) so every word renders
exactly as written — no generated text. All artwork is original; no
photographs or third-party artwork are used.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=nnk13219&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
