// ================================================================
//  WEDDING CONFIGURATION — your single source of truth
//  Edit this file to update ALL content on the site.
//  Lines marked with  ← CHANGE THIS  need your real information.
// ================================================================

export const wedding = {

  // ── COUPLE ────────────────────────────────────────────────────
  partner1: 'Daniela',
  partner2: 'Jedediah',

  // ── DATE ──────────────────────────────────────────────────────
  // Set dateTBD to false and fill in date + dateISO once you've booked your venue.
  // dateISO format: "YYYY-MM-DDTHH:MM:SS" using your ceremony start time.
  dateTBD: true,                       // ← Set to false once you have a date
  date:    'Date to Be Announced',     // ← Replace with e.g. 'October 18, 2027'
  dateISO: null,                       // ← Replace with e.g. '2027-10-18T17:00:00'

  // ── OUR STORY ─────────────────────────────────────────────────
  story: {
    intro: `We met at the beginning of the fall of 2024 at Texas Tech. Jed was almost done with his PhD and Dani was just starting that long journey. Both a little too busy, with different buildings and different schedules. Jed was in Economics, deep in research on Japanese economic history. Dani was in Chemical Engineering, working on sustainability. Different worlds, same campus, and then not so separate after all.`,

    body: `Our first date was September 21, 2024, at J&B Café in Lubbock. It was a rainy day. Jed picked Dani up at her apartment, and she handed him a small succulent she had been growing, because she had a good feeling about him. He quietly wondered what it would mean if the plant died before things even had a chance to start. Luckily, neither did. J&B was packed with people escaping the rain, so we grabbed a table outside, ordered a chai latte, a cold brew, and a blueberry muffin to share. A few minutes in, the rain came back and sent us running to the car, Tundry, where we kept talking and both knew something had started. A second date followed soon after. Jed had listened closely to how much Dani loved animals, so he took her to a corn maze on what turned out to be a blazing hot day. They made it through, ate corn on the cob, and stopped to watch animals and bugs along the way. Jed, unbothered by all of it, fought through the bugs to cut sunflowers for Dani because he knew she loved them.`,

    adventures: `Our first Thanksgiving together arrived in the fall. We cooked a turkey for the first time, made deviled eggs, mashed potatoes, and a pear dessert that turned out better than expected. We were grateful to have found each other and hopeful for many more years of celebrating together. Jed's family is in Las Vegas, and at the end of every semester he would head home. But this time he did not want to spend even a day without Dani, and she felt the same. So he invited her for December break, and a few days later they packed the car and hit the road from Texas to Nevada. Between laughs, one driving ticket, and a lot of love, they made it. From the moment they arrived, Jed's mom and his sister Autumn, along with family and friends, welcomed Dani with so much warmth that she felt part of the family right away. It was a beautiful Christmas and a hopeful New Year's. Dani brought traditions from Colombia, like eating 12 grapes at midnight for 12 wishes and making arepitas. On the drive back to Lubbock they stopped in Flagstaff, Arizona, fell in love with the mountains and everything around, and it has stayed in their hearts ever since. Around that same time, Jed met Dani's family over the phone. Between a few Spanish words, Dani's help with translation, and a lot of warmth on both sides, the conversation between Grandma Herminia, Mom Sandra, and Jed was sweet and genuine. Ever since, they always ask about him and say they cannot wait to meet him in person. Then came a moment that was equal parts exciting and bittersweet. Jed graduated, a milestone the whole family was incredibly proud of, but it also meant a new city. Jed moved to Omaha, Nebraska in the summer of 2025. To make the distance work, they held on to four things: God, love, communication, and respect. A nightly phone call became a tradition that has never been broken. Their second Thanksgiving came, and their first anniversary arrived on a snowy night in Omaha, celebrated together and felt deeply. Through the years they have traveled to meet in cities between theirs, finding ways to close the gap and make every visit count. The miles have never changed what matters most. They are always close in the ways that count.`,

    proposal: `[The proposal chapter — coming soon. ✨ Add it here once it happens!]`,
  },

  storyTimeline: [
    { year: 'Fall 2024',    label: 'The Beginning',        detail: 'Two PhD students at Texas Tech, different departments, different worlds — one unexpected spark in Lubbock, TX.',                        image: null },
    { year: 'Sep 21, 2024', label: 'First Date',            detail: 'J&B Café, a rainy afternoon. A chai latte, a cold brew, a blueberry muffin. We talked until we forgot there was anywhere else to be.', image: null },
    { year: 'Dec 2024',     label: 'Flagstaff & Las Vegas', detail: 'First road trip together — Lubbock to Flagstaff to Vegas. The first time Dani saw Jed\'s city.',                                        image: null },
    { year: 'Lubbock',      label: 'Lubbock Days',          detail: 'Coffee runs, late nights in the lab, Lubbock sunsets, and building our everyday life together.',                                          image: null },
    { year: '2025',         label: 'Jed\'s Graduation',     detail: 'We celebrated Jed finishing his PhD. One less person in the office, way more reason to celebrate.',                                       image: null },
    { year: '2025',         label: 'Omaha',                 detail: 'First time in Omaha together. New city, new memories, same us.',                                                                          image: null },
    { year: '2025',         label: 'Thanksgiving',          detail: 'First Thanksgiving together — good food, good people, and a lot to be thankful for.',                                                     image: null },
    { year: '2025',         label: 'Anniversary',           detail: 'September 21 came back around and we made it count.',                                                                                     image: null },
    { year: '2025–2026',    label: 'Denver',                detail: 'Denver made it onto the map. Mountains, good eats, and the usual suspects: the two of us.',                                               image: null },
    { year: '2026',         label: 'Vegas Again',           detail: 'Back in Las Vegas — the city that keeps pulling us in.',                                                                                  image: null },
    { year: '2026',         label: 'Tehachapi Trail',       detail: 'A windswept ridge, open skies, and two people who keep choosing the climb — and each other.',                                             image: null },
    { year: 'Coming Soon',  label: 'Las Vegas, Forever',    detail: 'We say "I do" in the city where one of us grew up, surrounded by everyone we love.',                                                      image: null },
  ],

  // ── CEREMONY ──────────────────────────────────────────────────
  ceremony: {
    time:    'Time To Be Announced',
    venue:   'Guardian Angel Cathedral',
    address: '302 Cathedral Way, Las Vegas, NV 89109',
    mapsUrl: 'https://maps.google.com/?q=Guardian+Angel+Cathedral+302+Cathedral+Way+Las+Vegas+NV+89109',
    notes:   'Parking and arrival details to be confirmed — check back soon!',
  },

  // ── RECEPTION ─────────────────────────────────────────────────
  reception: {
    time:    'Time To Be Announced',                                           // ← CHANGE THIS
    venue:   'Wedding Venue — Las Vegas, NV',                                  // ← CHANGE THIS
    address: 'Las Vegas, Nevada',                                              // ← CHANGE THIS
    mapsUrl: 'https://maps.google.com/?q=Las+Vegas+Nevada',                   // ← CHANGE THIS
    notes:   'Reception details to be announced once the venue is confirmed.',
  },

  // ── SCHEDULE ──────────────────────────────────────────────────
  schedule: [
    { time: 'TBD',      event: 'Guests Arrive',          detail: 'Find your seat and enjoy the pre-ceremony atmosphere.' },
    { time: 'TBD',      event: 'Ceremony',                detail: 'We say our vows at a Catholic Cathedral in Las Vegas.' },
    { time: 'TBD',      event: 'Cocktail Hour',           detail: 'Raise a glass with us and mingle before the reception.' },
    { time: 'TBD',      event: 'Reception Opens',         detail: 'The celebration continues at our reception venue.' },
    { time: 'TBD',      event: 'Dinner',                  detail: 'A seated dinner to kick off the evening.' },
    { time: 'TBD',      event: 'First Dance & Toasts',   detail: 'Special dances and heartfelt words from our wedding party.' },
    { time: 'TBD',      event: 'Dancing & Celebration',  detail: 'The floor is yours — let\'s celebrate!' },
    { time: 'TBD',      event: 'Send-Off',               detail: 'A perfect ending to a perfect night.' },
  ],

  // ── RSVP ──────────────────────────────────────────────────────
  // SETUP STEPS:
  //   1. Go to https://formspree.io and create a free account.
  //   2. Create a new form — name it "Wedding RSVP".
  //   3. Copy the form ID (looks like "xyzabc12") and paste it below.
  //   4. In Formspree, set the notification email to wherever you want RSVP emails.
  rsvp: {
    formspreeId: 'xpqgabnj',      // ← CHANGE THIS after Formspree setup
    deadline:    'To Be Announced',   // ← CHANGE THIS once you have a date
    mealChoices: [
      'Herb Roasted Chicken',
      'Grilled Atlantic Salmon',
      'Wild Mushroom Risotto (Vegetarian)',
    ],
  },

  // ── TRAVEL & ACCOMMODATIONS ───────────────────────────────────
  // Las Vegas has hundreds of hotels — update these once your venue is confirmed.
  hotels: [
    {
      name:        'Hotel TBD — Near Ceremony',
      distance:    'Details coming soon',
      rate:        'Group rate to be announced',
      phone:       '(555) 000-0001',
      bookingLink: '#',
      code:        null,
    },
    {
      name:        'Hotel TBD — Near Reception',
      distance:    'Details coming soon',
      rate:        'Group rate to be announced',
      phone:       '(555) 000-0002',
      bookingLink: '#',
      code:        null,
    },
  ],
  airports: [
    { name: 'Harry Reid International Airport (LAS)', distance: 'Las Vegas\'s main airport — likely 15–30 min from venue' },
  ],
  parking:        'Parking details will be shared once the venue is confirmed. Las Vegas venues typically offer on-site or nearby parking.',
  transportation: 'Las Vegas has excellent rideshare coverage (Uber/Lyft). We highly recommend using a rideshare so everyone can enjoy the celebration without worrying about driving.',

  // ── THINGS TO DO — LAS VEGAS ──────────────────────────────────
  thingsToDo: [
    {
      category: 'The Strip & Sights',
      icon: '✨',
      items: [
        { name: 'The Las Vegas Strip',           description: 'World-famous boulevard lined with iconic resorts, lights, and endless entertainment. Good for an evening walk — there\'s always something happening.', address: 'Las Vegas Blvd S' },
        { name: 'Fremont Street Experience',     description: 'The original Las Vegas downtown — a huge LED canopy overhead, live music, and a completely different vibe from the Strip.', address: 'Fremont St, Downtown' },
        { name: 'High Roller Observation Wheel', description: 'The world\'s tallest observation wheel. 360° views of the city, especially good at sunset or after dark.', address: 'The LINQ Promenade' },
      ],
    },
    {
      category: 'Food — Our Picks',
      icon: '🍽️',
      items: [
        { name: 'Chinatown (Spring Mountain Rd)', description: 'Our go-to part of the city for eating. Korean BBQ, ramen, boba, dim sum — it\'s all here and it\'s all good. Don\'t skip this part of Vegas.', address: 'Spring Mountain Rd, Las Vegas' },
        { name: 'Korean BBQ',                     description: 'Chinatown has several solid Korean BBQ spots. Great for groups, fun for everyone, and one of our personal favorites any time we\'re in Vegas.', address: 'Spring Mountain Rd, Las Vegas' },
        { name: 'Ethel M Chocolates',             description: 'A Henderson staple. Chocolate factory store with a beautiful cactus garden right outside. Worth the short drive, especially in the evening when the garden lights up.', address: '2 Cactus Garden Dr, Henderson, NV' },
      ],
    },
    {
      category: 'Nature & Hikes',
      icon: '🌵',
      items: [
        { name: 'Red Rock Canyon', description: 'Stunning red sandstone formations just 20 minutes from the Strip. Trails for all levels — we love it early in the morning before it gets hot.', address: '~20 min from Strip' },
        { name: 'Valley of Fire',  description: 'Vivid orange and red rock landscapes that feel like another planet. A must if you have an extra half-day and love being outside.', address: '~55 min from Strip' },
        { name: 'Calico Hills',    description: 'A shorter, more accessible section of Red Rock Canyon. Great for a morning hike without needing a full-day commitment.', address: 'Red Rock Canyon, NV' },
      ],
    },
  ],

  // ── REGISTRY & GIFTS ──────────────────────────────────────────
  registry: {
    message: 'You being there is honestly everything. If you\'d like to give a gift, we\'ve listed a few options below — including a honeymoon fund if you\'d rather give us an adventure to remember.',
    registries: [
      { name: 'Crate & Barrel',  description: 'Home & kitchen essentials',  url: '#', icon: '🏠' }, // ← Replace # with link
      { name: 'Williams Sonoma', description: 'Cookware & entertaining',     url: '#', icon: '🍳' }, // ← Replace # with link
      { name: 'Amazon',          description: 'A little of everything',      url: '#', icon: '📦' }, // ← Replace # with link
    ],
    honeyfund: {
      label:       'Honeymoon Fund',
      description: 'Help us make our next trip one to remember!',
      url:         '#',          // ← Replace with your Honeyfund / Venmo / PayPal link
      platform:    'Honeyfund',
    },
  },

  // ── WEDDING PARTY ─────────────────────────────────────────────
  // photo: provide a path like '/images/sophia.jpg' (put images in /public/images/)
  // or leave as null for the initials placeholder
  bridesmaids: [
    { name: 'Sophia Martinez', role: 'Maid of Honor', bio: 'Daniela\'s closest friend and the first person she called with the news. Has been planning this day almost as long as Daniela has.', photo: null },
    { name: 'Olivia Chen',     role: 'Bridesmaid',    bio: 'The group\'s voice of reason, unofficial trip planner, and the one who always knows exactly what to say.', photo: null },
    { name: 'Ava Thompson',    role: 'Bridesmaid',    bio: 'Partner in laughter and adventure. Known for her infectious energy and her ability to make any room feel like home.', photo: null },
  ],
  groomsmen: [
    { name: 'Elijah Brooks', role: 'Best Man',  bio: 'Jed\'s brother and the person who knows him best. Keeper of the best stories — and, thankfully, a man of great discretion.', photo: null },
    { name: 'Noah Williams', role: 'Groomsman', bio: 'The steadiest friend you could have. Brings calm to every storm and good energy to every room.', photo: null },
    { name: 'Lucas Patel',   role: 'Groomsman', bio: 'Eternal optimist and first on the dance floor. If the party is happening, Lucas made it happen.', photo: null },
  ],

  // ── DRESS CODE ────────────────────────────────────────────────
  dressCode: {
    title:       'Wear what makes you feel great',
    description: 'Whatever is comfortable and makes you feel like yourself — that\'s the dress code. Formal, cocktail, dressed-up casual, all great choices. Just keep in mind that Vegas can be really hot depending on when we lock in a date, so light fabrics are your friend. We just want you there and having fun.',
    colorNote:   'The only colors we ask you to skip are white, ivory, and red. White and ivory are for the bride, and we\'re asking everyone to steer clear of red too. Everything else is fair game — wear it.',
    doWear:      [
      'Whatever you\'re comfortable in',
      'Formal gowns or cocktail dresses',
      'Suits, tuxedos, or sharp separates',
      'Bold colors, prints, textures',
      'Light fabrics — Vegas in the summer is no joke',
    ],
    avoid: [
      'White or ivory (reserved for the bride)',
      'Red',
      'Champagne tones',
    ],
    notes: 'The ceremony is in a Catholic cathedral, so modest coverage is appreciated there. For the reception — have fun with it.',
  },

  // ── FAQ ───────────────────────────────────────────────────────
  faqs: [
    { q: 'Are children welcome?',
      a: 'Absolutely — yes! We love kids and we want the whole family there to celebrate with us. Little ones are very welcome.' },
    { q: 'Are plus-ones allowed?',
      a: 'Due to venue capacity, we are only able to accommodate guests listed on the invitation. If you\'ve been given a plus-one, they\'re listed on your envelope. Please RSVP for everyone in your party.' },
    { q: 'What is the dress code?',
      a: 'Wear whatever makes you feel your best! The only colors we ask you to avoid are white, ivory, and red. Everything else is fair game — formal, cocktail, or dressed-up casual, we just love that you\'re celebrating with us.' },
    { q: 'Is it a Catholic ceremony?',
      a: 'Yes — we\'re having a traditional Catholic ceremony at a cathedral in Las Vegas. The ceremony will follow Catholic mass structure. All guests of all faiths and backgrounds are warmly welcome.' },
    { q: 'Will there be an open bar?',
      a: 'Yes! We\'ll have a full open bar throughout cocktail hour and the reception. Please plan ahead for a safe ride — Las Vegas has excellent Uber/Lyft coverage.' },
    { q: 'Can I take photos during the ceremony?',
      a: 'We\'re having an unplugged ceremony — please put phones and cameras away so you can be fully present with us. Our photographers will capture everything beautifully. After the ceremony, snap away — and share them using our photo button on this site!' },
    { q: 'When should I RSVP?',
      a: 'We\'ll announce the RSVP deadline once our date is confirmed. Keep an eye on this page for updates!' },
    { q: 'What\'s there to do in Las Vegas?',
      a: 'So much! Check out our "Things to Do" section for our personal picks — from Red Rock Canyon hikes to legendary Strip restaurants. We\'re a little biased because Jed grew up here, so trust the list.' },
  ],

  // ── GALLERY ───────────────────────────────────────────────────
  // Replace null with a path like '/images/photo1.jpg'
  // Put your images in the /public/images/ folder.
  gallery: [
    { src: null, alt: 'First date at J&B Café, Lubbock — September 21, 2024', ratio: '4/3' },
    { src: null, alt: 'Lubbock sunsets',                                        ratio: '3/4' },
    { src: null, alt: 'December road trip — somewhere in the desert',           ratio: '4/3' },
    { src: null, alt: 'Flagstaff stop — December 2024',                         ratio: '1/1' },
    { src: null, alt: 'Arriving in Las Vegas',                                  ratio: '4/3' },
    { src: null, alt: 'Tehachapi Trail, 2026',                                  ratio: '3/4' },
    { src: null, alt: 'At the top of the trail',                                ratio: '4/3' },
    { src: null, alt: 'A regular Tuesday that turned into a great memory',      ratio: '1/1' },
    { src: null, alt: 'The two of us',                                          ratio: '4/3' },
  ],

  // ── GUEST PHOTO CAPTURE ───────────────────────────────────────
  // Guests tap a button → their phone camera opens immediately (no gallery access).
  // Photos upload straight to your Cloudinary media library.
  //
  // SETUP (free, ~5 minutes):
  //   1. Create a free account at https://cloudinary.com
  //   2. Copy your Cloud Name from the dashboard home page.
  //   3. Settings → Upload → Upload presets → Add upload preset
  //      Set "Signing mode" to Unsigned. Name it "wedding_photos". Save.
  //   4. Fill in cloudName below.
  photoShare: {
    enabled:      true,
    cloudName:    'YOUR_CLOUD_NAME',   // ← CHANGE THIS (from cloudinary.com dashboard)
    uploadPreset: 'wedding_photos',    // ← CHANGE THIS if you named your preset differently
    folder:       'wedding_photos',
    blurb:        'Tap the button and your camera opens instantly — snap a photo right here at the wedding and it goes straight into our collection. No app, no gallery browsing, just this moment.',
  },

  // ── FOOTER ────────────────────────────────────────────────────
  hashtag:      '#DanielaAndJedediah',   // ← Update to your custom hashtag
  contactEmail: 'hello@yourwedding.com', // ← CHANGE THIS to your email
  thankYouNote: 'Thank you for being part of our love story. We couldn\'t imagine this day without every single one of you.',
};
