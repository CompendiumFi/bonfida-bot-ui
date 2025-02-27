import { Pool } from '../pools';
import { PublicKey } from '@solana/web3.js';
import { ASSETS } from '../pools';

export const COMPETITION_BOTS: Pool[] = [
  {
    name: `CompendiumFi "Son of Sam"`,
    poolSeed: new PublicKey('HmNYssreA6VhUVjocB5q7SJfcdymu2Hvtv7vsRLX2HXA'),
    illustration: null,
    description:
      'This strategy uses multi-timeframe machine learning algorithms in order to enter and exit markets based on current trend. This strategy also has the ability to shift markets to ride momentum waves and will be used as a testing ground for future products in our pipeline. Strategy includes Solana , FTT, and USDC as the base pair.',
    mintAddress: new PublicKey('BrQhzQEpF7oEo8rn9mzp6XT4kokttyytfRYvvJbWrU9C'),
    initialPoolTokenUsdValue: 26,
  },
  {
    name: `Overhead Gains (Earthshaker)`,
    poolSeed: new PublicKey('3Xi6B6bpoSHk9qC441tQKBxMhXLvYzwFS3V947wEUFhk'),
    illustration: null,
    description:
      'Earthshaker is a multi-strategy trading algorithm, utilizing a balanced mix of technical indicators and pattern recognition. The strategy trades on strong signals from the market based on volume, price action, and on-chain analysis. It uses dynamic stop losses in order to preserve capital, while also maximize gains.',
    mintAddress: new PublicKey('8PBnSc3QGMQTS4AugvvQmBtD4kyj9EY4SfL8R4J5pDRD'),
    initialPoolTokenUsdValue: 64.91,
    mainAsset: 'BTC' as ASSETS,
  },
  {
    name: `Overhead Gains (Dreamcatcher)`,
    poolSeed: new PublicKey('GB2EUdLbQHbYw3mbm8GLzLHKsyo6LE7BqpmEVHAr8XcJ'),
    illustration: null,
    description:
      'Earthshaker is a multi-strategy trading algorithm, utilizing a balanced mix of technical indicators and pattern recognition. The strategy trades on strong signals from the market based on volume, price action, and on-chain analysis. It uses dynamic stop losses in order to preserve capital, while also maximize gains.',
    mintAddress: new PublicKey('2airCsQwvmUsnSpRF6dt2vm254hfQJqX3kS2oaUYwm4F'),
    initialPoolTokenUsdValue: 120,
    mainAsset: 'ETH' as ASSETS,
  },
  {
    name: `Overhead Gains (Fireshaper)`,
    poolSeed: new PublicKey('6nbesY9CGoA4yxTvw3ADHKVgjVkuabr181BdJCnobwDY'),
    illustration: null,
    description:
      'Fireshaper  is a multi-strategy trading algorithm, utilizing a balanced mix of technical indicators and pattern recognition. The strategy trades on strong signals from the market based on volume, price action, and on-chain analysis. It uses dynamic stop losses in order to preserve capital, while also maximize gains.',
    mintAddress: new PublicKey('HBBt2JpaYcd6zQZVa55FQn5hTT4LENXBXJvedCtLbyFa'),
    initialPoolTokenUsdValue: 42,
  },
  {
    name: `FTT/USDC - Super Guppy 2H TF`,
    poolSeed: new PublicKey('GnAGDkrdNbyTsnySxmQhvxhPSa4R2pcjM5hJr4qTrFRG'),
    illustration: null,
    description:
      'Trading FTT/USDC w/ signals coming from Supper guppy strategy (=using multiple exponential moving average based algo) operating on the 2H tf.',
    mintAddress: new PublicKey('4Ldrzf49sxqk6S4R3bbBhTYThQ7aXRyip8D4XWNDhxGH'),
    initialPoolTokenUsdValue: 28.83,
  },
  {
    name: `OpTeslaBot ETH/USDT 4H`,
    poolSeed: new PublicKey('BXWYUyNiT7DUWgcYMcV7BKECqFnUGhQ4yEty3Ut5YJuU'),
    illustration: null,
    description:
      'Fundamentally, OpTeslaBot utilizes the Moving Average (MA) and Exponential Moving Average (EMA) to determine a long or short position. The bot implements additional tweaks with the intent to ignore ranging markets and catch trends that yield higher returns.',
    mintAddress: new PublicKey('FPVcZRRfBo75cVuQcBXpbJPyAk1oMVNxN8W9RxwjNFra'),
    initialPoolTokenUsdValue: 66.51,
  },
  {
    name: `Dukun Cloud`,
    poolSeed: new PublicKey('9zzJCwJScSHWi9apYx3TWNtkaeSEnUJr4knP1ThhVk3X'),
    illustration: null,
    description: 'Using basic Ichimoku Cloud to Entry & Exit',
    mintAddress: new PublicKey('5SyhffVMHxn4DK1nxkUviCYyBD5XFDFR8MUuhS6gx4PZ'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `Nova Kapital`,
    poolSeed: new PublicKey('26aWL7YPvagsaWUZKZGcCUcqwRyx2SyzyzM1LNgRZwtz'),
    illustration: null,
    description:
      'Using mixed trend following strategy such as ATR, Market Movement, modified VWAP.',
    mintAddress: new PublicKey('4iuESxXfyNyN8HVfBd5NoNsZLRDfrnjcyMDHWwJJgkKS'),
    initialPoolTokenUsdValue: 80,
  },
  {
    name: `Kagamibot`,
    poolSeed: new PublicKey('4MnYvfVwi6wp4bQE3qx7q15FozQujPCZzkLu4oPFDXKr'),
    illustration: null,
    description: 'Supertrend变种 抓住特定交易信号低吸高抛',
    mintAddress: new PublicKey('CrWK54z7uJkHwDpfkVF8oCsE1wLGcVwnoMT437LcRV9B'),
    initialPoolTokenUsdValue: 50,
  },
  {
    name: `FIDACOMP SOL-bot`,
    poolSeed: new PublicKey('5T2zfmtMvxmcrFXXvnHncs7cf43Yt366PAsUip7uxDin'),
    illustration: null,
    description:
      'FIDACOMP SOL-bot is a short-term breakout trading algorithm. It is high risk/high reward in the hopes of taking home #1 spot in the competition!',
    mintAddress: new PublicKey('9HhKkQPLQwf8QLNbx43M4TmaLuzZsQevvY8wASMB4bgs'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `HD Research Bitcoin`,
    poolSeed: new PublicKey('3i3DGa7xCb43y4vDXsxxCkz9PzRtM71WiaMvRigEVwW5'),
    illustration: null,
    description:
      'A trend strategy created by HD Research. We focused on 30m chart so it can avoid big drawdown and make stable profit.',
    mintAddress: new PublicKey('J2v3YACcJ1SpUdBKP2YM7dfekdYySfe6nA9E241ePZME'),
    initialPoolTokenUsdValue: 100,
  },
  {
    name: `Francium-Media by TV`,
    poolSeed: new PublicKey('EiHUJMQJFXqofY2VvyrK5kEfi8nrjX1iSXfcQ57iy2QM'),
    illustration: null,
    description: 'Investment Strategy on Media',
    mintAddress: new PublicKey('E74EayWkijJ52G7RobYCw7TA4h8r9SkpAFV3jXvEKEMV'),
    initialPoolTokenUsdValue: 142.62,
  },
  {
    name: `Awesome_Bonfida`,
    poolSeed: new PublicKey('HAnUjzdBxD2twyzTDTtU9LKwU8GRgair47axEGQbTMBT'),
    illustration: null,
    description: 'Fida/USDC based on TD Signal',
    mintAddress: new PublicKey('2WoTseSWVX8Jopp2cP7fVtAQ3vnDm14XELuwyhGizwj8'),
    initialPoolTokenUsdValue: 131.38,
  },
  {
    name: `Bonfida007`,
    poolSeed: new PublicKey('8sttLgF6NzJ3GWfrf1LarSqrtvv9vrBatJPAb3wpdnyj'),
    illustration: null,
    description: 'SUSHI/USDC价格通道策略',
    mintAddress: new PublicKey('GGyRBYoXhSKw9J7jgjvZE9nv2TjnMKuQ5rmUFeBW7ug7'),
    initialPoolTokenUsdValue: 5,
  },
  {
    name: `TYCHE BTC 8/41`,
    poolSeed: new PublicKey('CitkcPD3WhpbDR4cEsnh1RmyhvGChkrwnLMVgxNNAL6R'),
    illustration: null,
    description:
      '1H Tyche strategy on BTC/USDC. Tyche is intelectual property of DAM.ex, learn more about it on the dedicated page',
    mintAddress: new PublicKey('G6K8p6GQdejaNCxmJtasUTK6wcfxB47UhPwyHgYi4Hst'),
    initialPoolTokenUsdValue: 0.76,
  },
  {
    name: `eth_swingtrader`,
    poolSeed: new PublicKey('9JJfyiQMuhoBeXqchizmDSv1bq7igsR7ooY2NysBhQKF'),
    illustration: null,
    description: 'A strategy based on the famous Bollinger indicators',
    mintAddress: new PublicKey('H3MemqqFHkCjcz6k9mC3hMNzeajgdTgbdCWHQU7cwCva'),
    initialPoolTokenUsdValue: 20,
  },
  {
    name: `FIDA/SOL/USDT SHORT SIDE STRATEGY`,
    poolSeed: new PublicKey('EEVHhNvFw5m3ABEJsaKNxsx18RGEQdtzyJ1DekE7QMSn'),
    illustration: null,
    description:
      'HOW CAN $200 USD SURVIVE IN EARLIER BEAR MKT. HAVE FUN GAINING POCKET MONEY',
    mintAddress: new PublicKey('9r52mUxcJpRSx9K5SBwZzhZPrMGaG4q2v9XYRqWjEP1N'),
    initialPoolTokenUsdValue: 66.54,
  },
  {
    name: `Stepper`,
    poolSeed: new PublicKey('DvsRbqYjALeW3LeczPnBxQeLqo1eeP89F3yWbuJtFVA6'),
    illustration: null,
    description:
      'Moving average along a RSI, filtered by a DCA 2% take profit and 3% deviation',
    mintAddress: new PublicKey('6h1YoLDV3MKJ4FdgDGjXhUSFRKayqvquuogpGtebSxg'),
    initialPoolTokenUsdValue: 96.25,
  },
  {
    name: `hamfida1`,
    poolSeed: new PublicKey('GKxkBGr1N7c4xgLZjGFJgwiWwZH5DN6weXQYtcF5ZbqP'),
    illustration: null,
    description: 'Mix of some strategy signaling by TV',
    mintAddress: new PublicKey('2papKYK5EfCpYKDXp6WkENYPpAtEHjPNb2SjqGZLk2m7'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `Corn Hustler`,
    poolSeed: new PublicKey('7KBPgMqgyNh7AipwfcSPUmUYd1zweybp22ZemGte7ZtJ'),
    illustration: null,
    description: 'Mix of some strategy signaling by TV',
    mintAddress: new PublicKey('3XVmrLdLvCnYz4yMfa7fYJnzKVtYp1YxgYcqWsFnvYqG'),
    initialPoolTokenUsdValue: 27.44,
  },
  {
    name: `Yummy Sushi`,
    poolSeed: new PublicKey('3wjcwLwc1UifSgTAn19qvpKqU6aNYxUvKwmg4NnbLuWe'),
    illustration: null,
    description: 'Smart hodl SUSHI',
    mintAddress: new PublicKey('2RNedNZs9TaqwuVyEbazUtfe7tr9zJXKwkFuBLepzfd5'),
    initialPoolTokenUsdValue: 9.04,
  },
  {
    name: `Aruza-Cenk-28`,
    poolSeed: new PublicKey('3QppyVyApA3e9sfmiNkfJjgmateBDjN528nNxTCqZT33'),
    illustration: null,
    description:
      'First time im setting up bot with ema scalper. My bot commands with 2 signals and work with TradingView web hook.',
    mintAddress: new PublicKey('2RNedNZs9TaqwuVyEbazUtfe7tr9zJXKwkFuBLepzfd5'),
    initialPoolTokenUsdValue: 0.809,
  },
  {
    name: `CsakCakk`,
    poolSeed: new PublicKey('FHBg4wswP9VD5vavJMJeVzCfLvahyEvYFdFCLiKCra9t'),
    illustration: null,
    description: 'ETH/BTC/USD Trading BOT',
    mintAddress: new PublicKey('2D5eHDu4vuj9EenHaEizmYxAPAKjd9AB1rccjLcje5pA'),
    initialPoolTokenUsdValue: 110.41,
  },
  {
    name: `Fools Gold ETH`,
    poolSeed: new PublicKey('4DpqEwKWn7XQQop5RAb7Nsbb53MEY4VcuKdptiPU1oUz'),
    illustration: null,
    description: 'Fools Gold is an ETH momentum strategy by 1337 Research.',
    mintAddress: new PublicKey('EZG33mwL4AQ6fYeNksMtMtRa8531xH4dErfMLnmgvRVY'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `Shogun ETH`,
    poolSeed: new PublicKey('HNx6vtmnBBLweBuebUDcVxKRNGySWjaDr66iTq34m2j8'),
    illustration: null,
    description: 'Shogun is an ETH trend strategy by 1337 Research',
    mintAddress: new PublicKey('9a1eoS4XvjDNMyHDhWmZENGBicnCt7YaXNhKZvMNZccQ'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `SRM never flinch`,
    poolSeed: new PublicKey('Cov97uBEhzYBi4USuywkruKttx41CbSGjWrJ9qKH2mQr'),
    illustration: null,
    description: 'Strong HODL SRM to the moon',
    mintAddress: new PublicKey('ysNUFdbD6SQ35x3GJU3rTXcC74A6wPDHKjgq47hKskJ'),
    initialPoolTokenUsdValue: 3.86,
  },
  {
    name: `AKG`,
    poolSeed: new PublicKey('CifHWYZhXtTUuM3SnAucGvRXqVnKvR3sV1Xyjozsrjd7'),
    illustration: null,
    description: 'Trade on ETH market',
    mintAddress: new PublicKey('26GoY9aF1227JsgmjxJ9AdnZVbYNbGeFSCodzzsu8ffD'),
    initialPoolTokenUsdValue: 950,
  },
  {
    name: `CryptoJ`,
    poolSeed: new PublicKey('F39VxYLKKiZ2Qp7HD1YeehfQZbEJ4KC9tpxJMKnskYAa'),
    illustration: null,
    description: 'Trade on ETH market',
    mintAddress: new PublicKey('GpFutdAUgzY7QVuyVb2pfqQuCebm6eJU1CCdvc8rPMTt'),
    initialPoolTokenUsdValue: 1757,
  },
  {
    name: `Seafood`,
    poolSeed: new PublicKey('8yjYAkak8xwin4BfyHTSQRjDAVLQFdbhqg8ukuetDsnM'),
    illustration: null,
    description:
      'It will buy & sell ETH according to decision which based on funding rate, market sentiment, news etc...',
    mintAddress: new PublicKey('9wRTc4KP1LXTzofHG9zM6sPCY1q7mKZMWtcyh6KWMyMj'),
    initialPoolTokenUsdValue: 100,
  },
  {
    name: `BTC Pikach`,
    poolSeed: new PublicKey('96qckGt8FkMkpaafshC9ZK99RbjdrmN1cj96Xq62v5ga'),
    illustration: null,
    description: 'Seek the opportunities to win more Pikachu plush on BTC',
    mintAddress: new PublicKey('GBNm8zWDTEwrkV5ZCeFSkc8KP3MAE1JoscRZjxBXDHyR'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `SOL Pikachu`,
    poolSeed: new PublicKey('BfYjh1txvxXhg5wckR1j74eEEGbfR1C7AqsxFmChooNs'),
    illustration: null,
    description: 'Seek the opportunities to win more Pikachu plush on SOL',
    mintAddress: new PublicKey('12VsbtrPCbZ66r6xvPB5LK11o9kfB7HGAkd6n9BX9tBo'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `Anonymous Leo`,
    poolSeed: new PublicKey('2TXg5L86sGbNSvFwMR1Hyo2UvM2uCD9aEe2bwDt1Hb4h'),
    illustration: null,
    description: 'Traded by Leooo',
    mintAddress: new PublicKey('HXnRVPZ69AaPU6CceaTmjXUsHYoPus1T24TUTuukKFQN'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `Unnamed Bot`,
    poolSeed: new PublicKey('KmiFrnRNo7NcUv7ZqKMiUvhQen7qfhKbCgmSHDygVLi'),
    illustration: null,
    description: '',
    mintAddress: new PublicKey('Ga4eJFK2mPokNDziM1X7CxqWZGvRSNjH3T2CDrnBhHjT'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `BbandsRSI`,
    poolSeed: new PublicKey('BrDUmLGwwFxs45XopjBMNuZio2AnrKkJKdV3Gf8Szv46'),
    illustration: null,
    description:
      'This is a Bollinger Bands and Relative Strength Index reversal trading strategy',
    mintAddress: new PublicKey('EjQ5gUZSsvxgrMgrZ67eMEoDv8m6YZJTUbbFymUDvkn1'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `RSI trade 25 75`,
    poolSeed: new PublicKey('PHm1arqMaTqDjmsPq7fWBNdyNx6j5244xx1XvTS2Q3Q'),
    illustration: null,
    description: 'RSI trade 25 75',
    mintAddress: new PublicKey('7DVGKUYY8oExcMYuPt5NPPbJqVQU2HLTYDZLn76w3Zjc'),
    initialPoolTokenUsdValue: 1.2,
  },
  {
    name: `FIDA RSI`,
    poolSeed: new PublicKey('D2Lp7FUWuddj488Tcred3QcPnHbE9Y6FyYLG5m9mGQMZ'),
    illustration: null,
    description: 'Simple but effective',
    mintAddress: new PublicKey('GNBZiMssmpXt2sx3jJqR7wbwcuvaMUJ2EyDFYo72aZ4f'),
    initialPoolTokenUsdValue: 3.17,
  },
  {
    name: `RobotTrade.AI ETH`,
    poolSeed: new PublicKey('CNVXygXKDFprKx2wRHYVbWmCQ3MWhvA4cwTejHdEgv61'),
    illustration: null,
    description:
      'Want to capture the volatility of the fast moving crypto markets, yet actually sleep at night? Let Robotrade.AI manage your trades using our cutting edge Trend Following Algorithms.',
    mintAddress: new PublicKey('AsuXSZo57wTxxf4v4nC7kL2cegqorvmcvQ6XZX1JG1jp'),
    initialPoolTokenUsdValue: 36.26,
  },
  {
    name: `Dzengo's 30m Bot`,
    poolSeed: new PublicKey('3QppyVyApA3e9sfmiNkfJjgmateBDjN528nNxTCqZT33'),
    illustration: null,
    description:
      'My bot command with 2 signals and work with tradingwiew web hook.',
    mintAddress: new PublicKey('AWxJ2CpEWuLWAAJHS2bj5ByhJ5EBQSsxneS91bf82hjk'),
    initialPoolTokenUsdValue: 0.81,
  },
  {
    name: `Na Bot`,
    poolSeed: new PublicKey('HTEkF3QLXce6fDNoWrgWFpbYHRV22jYGqChTJjfuugnr'),
    illustration: null,
    description: '',
    mintAddress: new PublicKey('Ftfkey73GjF1zRoKoi27nHuJz5fYcAJb5QcU5DDMa6ag'),
    initialPoolTokenUsdValue: 16.39,
  },
  {
    name: `First Bot`,
    poolSeed: new PublicKey('HK1FXRKRjueRq9pXVfNY6Lrk2MXCZUALcy2ef374QoRA'),
    illustration: null,
    description: 'buy low and sell high - 高抛低吸',
    mintAddress: new PublicKey('HKHMPT2Etr28c2TLRirLziKxzm5t65y6eNmxKGQMB8x8'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `9seed_trade_bot`,
    poolSeed: new PublicKey('Eh1ox13JMCtSVVLPFcVSb48hEh5GAk8o6gQwPuBgZDWD'),
    illustration: null,
    description: 'Reverse Strategy',
    mintAddress: new PublicKey('8Z1rNPEsZpKgmdq4Q7TRmqfGnKJCrnLdNg7gfHG9sgVq'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `DBC TK Strategy`,
    poolSeed: new PublicKey('CyWBGZLmZDaJXir3ZNgFgfKCypWdvw899G8rWQ9arkEA'),
    illustration: null,
    description: 'It trades ichi TK crosses.',
    mintAddress: new PublicKey('7j9qh1qS3HKrb96abb2Ug5B9C3iQfGDcv2ij4XFoa9y7'),
    initialPoolTokenUsdValue: 0.952,
  },
  {
    name: `Solmate`,
    poolSeed: new PublicKey('GHfAXZMWeqxKrXBCSxEWgTcqyUwSEzkhVUod3MLDAiYm'),
    illustration: null,
    description: 'All in SOL',
    mintAddress: new PublicKey('Hboi9dHvbddoxWHJ3DtFwoMUPZZ8AQseyQgTgZ1sM5M5'),
    initialPoolTokenUsdValue: 317.951,
  },
  {
    name: `Liuchaojin`,
    poolSeed: new PublicKey('4vEh7YN4mQu28CWaBJnrhyNAcmFx4vqQ6KzB3idUeFHn'),
    illustration: null,
    description: '',
    mintAddress: new PublicKey('J2BbHdN9SvPP17Yvg6zCfqgYZ7f9Y1XPf7QfaiJTj4Dw'),
    initialPoolTokenUsdValue: 5.87,
  },
  {
    name: `MultiContrarianStrategy`,
    poolSeed: new PublicKey('7xYcH8kCRYFchGbDWkHbte9dh5Mg6egFNgSdzrkbLCb6'),
    illustration: null,
    description: 'Extreme contrarian',
    mintAddress: new PublicKey('8Tz6xRg4X5uLfLrbuezjhZJhg95qUV1y6RuQerVavGig'),
    initialPoolTokenUsdValue: 10,
  },
  {
    name: `SOL-69`,
    poolSeed: new PublicKey('6Bd3jE8A9RaTf7pKPAT43k1XhFhzH2Ptr3Y2UoFYmJqi'),
    illustration: null,
    description:
      'SOL bot with placebo strategy which may work unbelievably in the long term',
    mintAddress: new PublicKey('ENd5qR6Xa2KK3YVwEumbVhZdxr1mgfUagzhaEpiMDyPy'),
    initialPoolTokenUsdValue: 167.058,
  },
  {
    name: `Final TF Bot`,
    poolSeed: new PublicKey('BVxdr99VgYXAPcYnxqKJWUpWwyhyJzijP6ZatPTMDq9G'),
    illustration: null,
    description:
      'Mean reversion strategy base on a unique way to calculate trend.',
    mintAddress: new PublicKey('5AuGjWVsGkFFsKUE1842doiV1FcjoYPfd3fMyp26gHhF'),
    initialPoolTokenUsdValue: 480.568,
  },
  {
    name: `TENDON`,
    poolSeed: new PublicKey('48cRebYNkoBfxGWWoeLouAAhTRDBDdKaNdiLCfnm3zbP'),
    illustration: null,
    description: '黃金交叉',
    mintAddress: new PublicKey('LpBHudWbCr9Yt8MHPt3ypL72w6rfLNZfXV9HrAbujMM'),
    initialPoolTokenUsdValue: 20,
  },
  {
    name: `Doka`,
    poolSeed: new PublicKey('ErGsNXDMtmCNrTUTpj5GqMY5KRafyNuSzKhsy9QWt8Sr'),
    illustration: null,
    description: 'DCA Daily',
    mintAddress: new PublicKey('EpX4A91ghpzeXb7mid8xyixggRdxS6ZchXQPPFixprap'),
    initialPoolTokenUsdValue: 20,
  },
  {
    name: `srmbot`,
    poolSeed: new PublicKey('CJbrB4zPL6wRLRSFfLewqUXuKH6a1jGBTwajw7SHcZbr'),
    illustration: null,
    description:
      'SRMUSDT, 1D 下穿(Crossing Down) 移动平均线(Moving Average) (21, close, 0)--Sell；SRMUSDT, 1D 上穿(Crossing Up) 移动平均线(Moving Average) (21, close, 0)--Buy',
    mintAddress: new PublicKey('Ajnazvnwd4CRj8GMsP3V9ZhPBHvJKo8QYQ2hRwP47THs'),
    initialPoolTokenUsdValue: 104.264,
  },
  {
    name: `TEMPERA`,
    poolSeed: new PublicKey('C4coStn5iLbDVwNtXYQ17TZLMrUkTnNsHxhDTxbLaGC6'),
    illustration: null,
    description: 'solo aleph',
    mintAddress: new PublicKey('7pzqvSpdPbaFAJ757Zj3RS8UYRaugV21XzLiiYv6chFP'),
    initialPoolTokenUsdValue: 279.442,
  },
  {
    name: `goodluck`,
    poolSeed: new PublicKey('8o6MsppAT7yzjkXd5zMPgqByqE6KZJNtnHDk8FX1KyCF'),
    illustration: null,
    description: 'TV',
    mintAddress: new PublicKey('5zuzKnZqpR9Nz51nUgejrX4Z3Mnrfxn7zXkYX1cXNqnz'),
    initialPoolTokenUsdValue: 997.44,
  },
  {
    name: `fida`,
    poolSeed: new PublicKey('HM4sVgDkNebzf1JWQKghhsU58cbHU3Kf1zm6iQw6zz4L'),
    illustration: null,
    description: 'buy or sell',
    mintAddress: new PublicKey('5R77rXBaS7SYT9sUGfXeySeX2TyhHmeRwEaHY2ccb16A'),
    initialPoolTokenUsdValue: 111.85,
  },
  {
    name: `fida`,
    poolSeed: new PublicKey('HM4sVgDkNebzf1JWQKghhsU58cbHU3Kf1zm6iQw6zz4L'),
    illustration: null,
    description: 'buy or sell',
    mintAddress: new PublicKey('5R77rXBaS7SYT9sUGfXeySeX2TyhHmeRwEaHY2ccb16A'),
    initialPoolTokenUsdValue: 111.85,
  },
  {
    name: `sushigogo`,
    poolSeed: new PublicKey('CkDrQX1L2PqpQsjVDp7HLmVJkvr6d3fuX1o6FQLsB5YR'),
    illustration: null,
    description: '通道内买卖 sushi',
    mintAddress: new PublicKey('128VhBmMJ8n4BCRk4BWMyUTTTdnQAmRVxiniUh36kivB'),
    initialPoolTokenUsdValue: 6212,
  },
  {
    name: `Ryto Granville Signal`,
    poolSeed: new PublicKey('E6oU7AiKvJHvusTXKGvQgvxSbdid2BcSe3JUT2VTC2fg'),
    illustration: null,
    description: 'A Bot trades by Granville rules.',
    mintAddress: new PublicKey('6guYuHQqc68vY8fqtd6KYSgPqqfagGSPYWu98E72fvA9'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `Na Bot 2`,
    poolSeed: new PublicKey('AkVrQXYdR11sh6sB9exxBwioDchggGM2k6gXjjKU9emb'),
    illustration: null,
    description: 'Simple + Smart = Na Bot 2',
    mintAddress: new PublicKey('3VBDeEvNTEMhW3jDbAbQFfacaWqt66Tj2WNW3seyN4SD'),
    initialPoolTokenUsdValue: 100.171,
  },
  {
    name: `2610`,
    poolSeed: new PublicKey('6GSB8fMZ2nTQ3G8jpLecS4Ky9kbagBB6feA72X8w6837'),
    illustration: null,
    description: '',
    mintAddress: new PublicKey('6ypuUiattNFWM5gk3vLNshLgqtvCZMTJ8LJ44oxFv8Cq'),
    initialPoolTokenUsdValue: 191.288,
  },
  {
    name: `ray`,
    poolSeed: new PublicKey('2y45kfqJNaPU4MsVhx5ibXEYc6o8ioNjYUytiCCRZDfK'),
    illustration: null,
    description: '',
    mintAddress: new PublicKey('4gkeiVJJr5CagrCsqBhLkdTfvL8ZUVQCRT1Tcm45tSvy'),
    initialPoolTokenUsdValue: 102.159,
  },
  {
    name: `OldSchool`,
    poolSeed: new PublicKey('7vv4qWGicKH9R4h63NkwshK5qYtTnVcdEVH3GPfiNVin'),
    illustration: null,
    description:
      'System to trade like I trade on FTX and BINANCE, buy and sell everything if time seams to me appropriate.',
    mintAddress: new PublicKey('2Kyiefimwb1zRoNxgrPVKWyp1wAJh9zSnBAX2AvAgYNz'),
    initialPoolTokenUsdValue: 0.886,
  },
  {
    name: `OldSchool 2`,
    poolSeed: new PublicKey('CpAkcyejcYjRnQLvGBGebPpgg9bDK5kzmN3MetyRoJp5'),
    illustration: null,
    description: 'System to manage my investment in UBXT by trades',
    mintAddress: new PublicKey('A6VcpLWtefrTKApnKLdBZgosS65dEHVJSpBnfgnaYPJv'),
    initialPoolTokenUsdValue: 700.634,
  },
  {
    name: `迪迦奥特`,
    poolSeed: new PublicKey('Hca2zb6HaHvJ4frssfpizrfKh9TCzDyAUo9GmXAFBaSZ'),
    illustration: null,
    description: '要保护好Solana星球，用光和我们的双手',
    mintAddress: new PublicKey('54qmJcfpsJqZkLTcxPEX9k4GKN3c7VP9eweBwFPi4j99'),
    initialPoolTokenUsdValue: 257.8,
  },
  {
    name: `OldSchool RAY`,
    poolSeed: new PublicKey('6k1Gy8Q5dvyFvCVhincjfG49bTfUsrNXQF4yD7EszLje'),
    illustration: null,
    description: 'system to trade on RAYUSD',
    mintAddress: new PublicKey('6c73N5jmqWMiJdU1neVm9vzvL1QTdMYpegDVowUpj8X1'),
    initialPoolTokenUsdValue: 1,
  },
  {
    name: `KuoYeh`,
    poolSeed: new PublicKey('GMT24XGeDTAr1ctRJh2x8xCiTaVmhxFMdEHGgGgNkRky'),
    illustration: null,
    description: `KuoYeh's strategy, a strategy developed by an experienced trader which considers both trend following and oscillation.`,
    mintAddress: new PublicKey('8z1LZRzSeHLqv6ZcVLcZbbFfw399hMp3rz286ZkMc29o'),
    initialPoolTokenUsdValue: 95.621,
  },
  {
    name: `SRM new`,
    poolSeed: new PublicKey('9etxii34HgBhqFAQbg7nkeA39cVS89zhcYobjhpDaVk7'),
    illustration: null,
    description: `New kind of RSI and MACD for trading`,
    mintAddress: new PublicKey('3BXmh36ctAW7STpFkvYWSM2oMndH3mwV32TxFyUgRj2y'),
    initialPoolTokenUsdValue: 9.369,
  },
  {
    name: `Na 16621`,
    poolSeed: new PublicKey('7Lz8r5Lbh236PPMMbTtng4162S1UX4oCEGZP7nNwYak2'),
    illustration: null,
    description: `Don't be shy if you want to explore`,
    mintAddress: new PublicKey('4Nv9CM7tTWmmqDL8P98qksTK7UX39Yi37vKqcy8doF22'),
    initialPoolTokenUsdValue: 147.816,
  },
  {
    name: `Yuan Bot(BTC/USDC)`,
    poolSeed: new PublicKey('DoqG6MSS9Re5WYZgxjkSeiwzN1sWMCF59LFLyEddGCAJ'),
    illustration: null,
    description: `基于Super Trend趋势，结合StochRSI信号过滤。`,
    mintAddress: new PublicKey('AtsnGXTnrdM4VsvsbR3oRvoyhB3Z3K4toutjpzfvtRL'),
    initialPoolTokenUsdValue: 99,
  },
];
