const data = [
  {
    title: 'Plot Armor',
    artist: "Let's Rally",
    role: 'Producing, Engineering, Mixing',
    display_year: '2022',
    release_date: 'June 2 2022',
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
    title: 'This Is Our Youth',
    artist: 'Party Harding',
    display_year: '2021',
    release_date: 'May 28 2021',
    role: 'Engineering, Mixing, Mastering',
    image: 'PH_ThisIsOurYouth.jpeg',
    link: 'https://partyharding.bandcamp.com/album/this-is-our-youth-2',
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
    title: 'Gone too Soon',
    artist: 'Bowling Alley Oop',
    role: 'Producing, Engineering, Mixing',
    display_year: '2024',
    release_date: 'February 23 2024',
    image: 'BAO_GoneTooSoon.jpeg',
    link: 'https://open.spotify.com/track/0UfOmRUg6EZjUakibqylW3?si=LoHFLLdhTqWCnuvGoeLl8Q&nd=1&dlsi=c283460481c148f9',
  },
  {
    title: 'Quarter Life Crisis',
    artist: 'Sean Andres',
    role: 'Mixing, Mastering',
    display_year: '2023',
    release_date: 'November 11 2023',
    image: 'SA_QuarterLife.jpg',
    link: 'https://seanandres.bandcamp.com/album/quarter-life-crisis',
  },
  {
    title: 'Ars Poetica',
    artist: 'Ruth in the Bardo',
    role: 'Engineering',
    display_year: '2023',
    release_date: 'August 8 2023',
    image: 'RB_ArsPoet.jpg',
    link: 'https://ruthinthebardo.bandcamp.com/album/ars-poetica',
  },
  {
    title: 'Tailspin',
    artist: 'Zoe Lemon',
    role: 'Producing, Engineering, Mixing',
    display_year: '2023',
    release_date: 'August 1 2023',
    image: 'ZL_Tailspin.jpeg',
    link: 'https://open.spotify.com/album/6fg3L4OumDfYWjeKopwm8L?si=ozO357mJT0GVtvh2l2zssw&nd=1&dlsi=977a15d66ff44134',
  },
  {
    title: 'Felt like Forever',
    artist: 'Attic Posture',
    role: 'Producing, Engineering, Mixing',
    display_year: '2022',
    release_date: 'August 26 2022',
    image: 'AP_FeltForever.jpg',
    link: 'https://atticposture.bandcamp.com/album/felt-like-forever-ep',
  },
];

export const sortedData = data
  ?.map((album) => {
    return { ...album, date: new Date(album.release_date) };
  })
  .sort((a, b) => b.date - a.date);
