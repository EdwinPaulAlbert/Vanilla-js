document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {
      year: 1687,
      title: "Laws of Motion and Gravity",
      description: "Isaac Newton's work laid the foundation for classical mechanics and our understanding of the universe.",
      imageURL: "https://praxilabs.com/en/blog/wp-content/uploads/2021/02/97-768x767.jpg"
    },
    {
      year: 1750,
      title: "Electricity",
      description: "Discoveries and refinements related to electricity by Franklin, Faraday, and Volta revolutionized technology and society.",
      imageURL: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7121027/electricity.jpg?quality=90&strip=all&crop=0%2C16.666666666667%2C100%2C66.666666666667&w=750"
    },
    {
      year: 1900,
      title: "Quantum Theory",
      description: "Max Planck's proposal of quantum theory marked a turning point in physics, leading to a new understanding of matter and energy.",
      imageURL: "https://engineering.stanford.edu/sites/default/files/styles/card_1192x596/public/media/image/istock-1270632735_0.jpg.webp?h=119335f7&itok=50cv8isG"
    },
    {
      year: 1905,
      title: "Special Relativity",
      description: "Einstein's special relativity redefined our understanding of space and time.",
      imageURL: "https://news.itmo.ru/images/news/big/p12761.jpg"
    },
    {
      year: 1911,
      title: "Discovery of the Atomic Nucleus",
      description: "Ernest Rutherford's experiments revealed the structure of the atom.",
      imageURL: "https://www.chemistryexplained.com/photos/atomic-nucleus-3435.jpg"
    },
    {
      year: 1912,
      title: "Discovery of Cosmic Rays",
      description: "Victor Hess's discovery opened a new window into understanding high-energy particles from space.",
      imageURL: "https://news.uchicago.edu/sites/default/files/styles/gallery/public/images/2023-12/cosmic-rays.jpg?h=944f5cba&itok=6SqVxWoM"
    },
    {
      year: 1915,
      title: "General Relativity",
      description: "Einstein's general relativity explained gravity as the curvature of spacetime.",
      imageURL: "https://cdn.mos.cms.futurecdn.net/ydwsrwtqwfCre2v6KPpJcn-650-80.jpg.webp"
    },
    {
      year: 1929,
      title: "Expansion of the Universe",
      description: "Edwin Hubble's observations showed the universe is expanding.",
      imageURL: "https://www.science-sparks.com/wp-content/uploads/2020/09/Diagram-of-the-expanding-universe.jpg.webp"
    },
    {
      year: 1932,
      title: "Discovery of the Neutron",
      description: "James Chadwick's discovery led to advances in nuclear physics.",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Quark_structure_neutron.svg/600px-Quark_structure_neutron.svg.png"
    },
    {
      year: 1942,
      title: "First Nuclear Reactor",
      description: "Enrico Fermi achieved the first self-sustaining nuclear chain reaction.",
      imageURL: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/2025-04/LEU-Plus%20Fuel%20Load%20at%20Vogtle_Westinghouse_.png?itok=uoD1LDG0"
    },
    {
      year: 1948,
      title: "Big Bang Theory Proposed",
      description: "Gamow, Alpher, and Herman proposed the Big Bang theory, explaining the origin of the universe.",
      imageURL: "https://scx1.b-cdn.net/csz/news/800a/2015/7-whatisthebig.jpg"
    },
    {
      year: 1961,
      title: "First Man in Space",
      description: "Yuri Gagarin's flight marked a milestone in human space exploration.",
      imageURL: "https://i.guim.co.uk/img/media/72013de3cfa3c284e9d6b7d5cbdbcce0dd0cd8e8/0_116_2344_1406/master/2344.jpg?width=620&dpr=1&s=none&crop=none"
    },
    {
      year: 1969,
      title: "First Man on the Moon",
      description: "Neil Armstrong's walk on the moon was a monumental achievement.",
      imageURL: "https://i.guim.co.uk/img/media/72013de3cfa3c284e9d6b7d5cbdbcce0dd0cd8e8/0_116_2344_1406/master/2344.jpg?width=620&dpr=1&s=none&crop=none"
    },
    {
      year: 2012,
      title: "Discovery of the Higgs Boson",
      description: "Physicists confirmed the existence of the Higgs boson, completing the Standard Model.",
      imageURL: "https://cms.cern/sites/default/files/field/image/Lucas-Higgs-CE0047H-nice2.jpg"
    },
    {
      year: 2015,
      title: "Observation of Gravitational Waves",
      description: "LIGO detected gravitational waves, confirming Einstein's prediction.",
      imageURL: "https://www.ligo.caltech.edu/system/pages/images/24/page/Gravity_Waves_StillImage.jpg?1699659823"
    },
    {
      year: 2019,
      title: "First Image of a Black Hole",
      description: "The Event Horizon Telescope captured the first image of a black hole.",
      imageURL: "https://cdn.thewire.in/wp-content/uploads/2021/04/03071257/Screenshot-2021-04-03-at-7.12.45-AM.png"
    }
  ];

  const timeline = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close-btn');

  const modalTitle = document.getElementById('modal-title');
  const modalYear = document.getElementById('modal-year');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');

  // Sort events by year
  events.sort((a, b) => a.year - b.year);

  // Render year + title
  events.forEach(event => {
    const marker = document.createElement('div');
    marker.className = 'event-marker';

    const yearText = document.createElement('div');
    yearText.textContent = event.year;
    yearText.style.fontWeight = 'bold';
    yearText.style.fontSize = '18px';

    const titleText = document.createElement('div');
    titleText.textContent = event.title;
    titleText.style.fontSize = '14px';
    titleText.style.marginTop = '5px';

    marker.appendChild(yearText);
    marker.appendChild(titleText);

    marker.addEventListener('click', () => {
      modalTitle.textContent = event.title;
      modalYear.textContent = event.year;
      modalImage.src = event.imageURL;
      modalImage.alt = event.title;
      modalDescription.textContent = event.description;
      modal.style.display = 'flex';
    });

    timeline.appendChild(marker);
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
