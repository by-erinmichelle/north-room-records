const data = [
  {
    title: 'Ruth in the Bardo',
    artist: 'name',
    display_year: '2023',
    release_date: 'June 2 2023',
    role: 'Producing, Engineering',
    image: 'LFD_FallingInLoveWithYou.jpeg',
    link: 'bandcamp.com/song',
  },
  {
    title: 'Plot Armor',
    artist: "Let's Rally",
    role: 'Engineering, Mixing',
    display_year: '2023',
    release_date: 'June 2 2023',
    image: 'RP_PlotArmor.jpeg',
    link: 'https://letsrally.bandcamp.com/album/plot-armor ',
  },
  {
    title: "Cryin' with the Homies",
    artist: 'Coach Mike',
    display_year: '2022',
    release_date: 'October 28 2022',
    role: 'Producing, Engineering, Mixing, Mastering',
    image: 'CM_CryinWithTheHomies.jpeg',
    link: 'https://coachmike.bandcamp.com/track/cryin-with-the-homies',
  },
  {
    title: 'Felt Like Forever EP',
    artist: 'Attic Posture',
    role: 'Producing, Engineering, Mixing, Mastering',
    display_year: '2022',
    release_date: 'August 26 2022',
    image: 'AP_FeltLikeForever.jpeg',
    link: 'https://atticposture.bandcamp.com/album/felt-like-forever-ep',
  },
  {
    title: 'This Is Our Youth',
    artist: 'Party Harding',
    display_year: '2021',
    release_date: 'May 28 2021',
    role: 'Engineering, Mixing, Mastering',
    image: 'PH_ThisIsOurYouth.jpeg',
    link: 'https://partyharding.bandcamp.com/album/this-is-our-youth-2',
  },
  {
    title: 'Close Enough EP',
    artist: 'Sweet Jams',
    role: 'Engineering',
    display_year: '2015',
    release_date: 'October 4 2015',
    image: 'SJ_CloseEnough.jpeg',
    link: 'https://sweetlyjamming.bandcamp.com/album/close-enough-ep',
  },
  {
    title: 'Close My Eyes',
    artist: 'Sweet Jams',
    display_year: '2023',
    release_date: 'January 10 2023',
    role: 'Engineering',
    image: 'SJ_CloseMyEyes.jpeg',
    link: 'https://sweetlyjamming.bandcamp.com/track/close-my-eyes',
  },
  {
    title: 'Falling In Love With You',
    artist: 'Love For Dinner',
    role: 'Producing, Mixing',
    display_year: '2018',
    release_date: 'April 18 2018',
    image: 'LFD_FallingInLoveWithYou.jpeg',
    link: 'https://lovefordinner.bandcamp.com/track/falling-in-love-with-you',
  },
];

export const sortedData = data
  ?.map((album) => {
    return { ...album, date: new Date(album.release_date) };
  })
  .sort((a, b) => b.date - a.date);
