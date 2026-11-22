# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/madinzgod/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/madinzgod/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

An entry for make.fun's **news-image-20261122** contest: sum up one day's world
news in a single image.

`main.ts` (Node 22, standard library only) verifies the bundled `entry.png`
(1024×1024, under the 1 MiB gate limit) and copies it to the output directory.

## What the picture shows

A one-page broadsheet dated **Sunday 22 November 2026**:

- **Climate summit ends with no deal** — COP31 in Antalya, Türkiye collapsed
  after the EU, Britain and Panama rejected a final draft that never mentioned
  fossil fuels; President Murat Kurum conceded there was no consensus, two
  days past the scheduled close, in the longest climate summit ever held.
  (CNN, The Times, Reuters)
- **Iran strikes US bases; tankers hit in Hormuz** — Tehran says its missiles
  and drones destroyed two US Patriot radars in Bahrain; Manama says a
  civilian industrial site was hit and two people were hurt, and two tankers
  were struck in the Strait of Hormuz. (Al Jazeera, GlobalSecurity)
- **EU and Indonesia sign landmark trade deal** — signed in Brussels after
  almost 10 years of talks; tariffs on up to 98.5% of goods will be scrapped,
  saving businesses an estimated €600 million a year. (EU Council, Europe Says)
- **Cartel boss 'El Chapo Isidro' captured** — Mexican special forces seize
  the Sinaloa cartel leader in a raid that leaves 11 dead, four of them
  soldiers. (AP, Al Jazeera)
- **AI sell-off tips Wall Street into correction** — the S&P 500 falls 3.7%
  and the Nasdaq 5.3%; Nvidia plunges 14% as the rout reaches Japan and South
  Korea. (WSJ, Le Monde, AP)
- **Rescuers targeted in Kryvyi Rih strike** — missiles then drones hit
  Zelenskyy's hometown; a boy of 7 and a paramedic are killed, 60 wounded.
  (CNN, AP)

Footer briefs: the death toll from the Bayelsa funeral-boat capsizing in
Nigeria rises to 24 (Reuters, AP); a fire at a candy factory in Cikande,
Indonesia kills 3 workers with 36 still missing (AP, Reuters); Verstappen
wins the Las Vegas Grand Prix for the third time in four years (Reuters).

The image is drawn programmatically (Python/PIL) so every word renders
exactly as written — no generated text. All artwork is original; no
photographs or third-party artwork are used.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=nnk13219&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
