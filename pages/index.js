import Head from 'next/head'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

export default function Home() {
  const [now, setNow] = React.useState(moment())
  // let now = moment()

 React.useEffect(() => {
   const interval = setInterval(() => setNow(moment(), 1000))
   return () => {
     clearInterval(interval)
   }
 }, [])

 moment.updateLocale('sv', {
  durationLabelsStandard: {
      S: 'millisecond',
      SS: 'milliseconds',
      s: 'sekund',
      ss: 'sekunder',
      m: 'minut',
      mm: 'minuter',
      h: 'timme',
      hh: 'timmar',
      d: 'dag',
      dd: 'dagar',
      w: 'vecka',
      ww: 'veckor',
      M: 'månad',
      MM: 'månader',
      y: 'år',
      yy: 'år'
  },
  durationLabelsShort: {
      S: 'msec',
      SS: 'msecs',
      s: 'sec',
      ss: 'secs',
      m: 'min',
      mm: 'mins',
      h: 'hr',
      hh: 'hrs',
      d: 'dy',
      dd: 'dys',
      w: 'wk',
      ww: 'wks',
      M: 'mo',
      MM: 'mos',
      y: 'yr',
      yy: 'yrs'
  },
  durationTimeTemplates: {
      HMS: 'h:mm:ss',
      HM: 'h:mm',
      MS: 'm:ss'
  },
  durationLabelTypes: [
      { type: "standard", string: "__" },
      { type: "short", string: "_" }
  ],
  durationPluralKey: function (token, integerValue, decimalValue) {
      // Singular for a value of `1`, but not for `1.0`.
      if (integerValue === 1 && decimalValue === null) {
          return token;
      }

      return token + token;
  }
});

	let latestGold = moment('2001-10-21')

	// let diff = moment().subtract(latestGold)
	// var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(latestGold,"DD/MM/YYYY HH:mm:ss"));
	// var d = moment.duration(now.diff(latestGold)).format('')
	// let d = moment(latestGold).toNow('MM')

	var duration = moment
		.duration(-latestGold.diff(now))
		.format('Y [år], M [månader], D [dagar], H [timmar], m [minuter och] s [sekunder.]', { userLocale: 'sv', useToLocaleString: true })

	return (
		<div className="container">
			<Head>
				<title>Next Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h3>Det har gått</h3>
				<h2 className="description">{duration}</h2>
				<h3>sen bajen senast vann sitt första och enda guld.</h3>
				<p style={{marginTop: 50}}>Under den tiden har...</p>
				<p style={{marginTop: 30}}>
					Djurgården vunnit Allsvenskan <span>4 gånger</span> och Svenska Cupen <span>4 gånger</span>.
				</p>
				<p>
					AIK vunnit Allsvenskan <span>2 gånger</span> och Svenska Cupen <span>1 gång</span>.
				</p>
			</main>

			<style jsx>{`
				.container {
					height: 100vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

        .dif {
          margin-top: 50px;
        }

        span {
          font-weight: 500;
        }

				p {
					font-size: 1.5rem;
					font-weight: normal;
				}

				h2 {
					font-size: 2rem;
					font-weight: normal;
				}

			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
						Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
