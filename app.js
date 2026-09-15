// NZ Trip Companion App - Logic & Comprehensive Data
// Designed for Simar & Sheen's New Zealand South Island Adventure

const TRIP_DATA = {
  tripTitle: "New Zealand South Island Odyssey",
  travelers: "Simar & Sheen",
  startDate: "2026-09-29T15:00:00", // Car pickup time
  endDate: "2026-10-11T15:00:00",
  carRental: {
    company: "APEX Car Rentals",
    location: "Christchurch Airport",
    contactPerson: "Hamish",
    bookingNumber: "4174153",
    status: "Fully Confirmed",
    vehicle: "Mitsubishi ASX or similar Small SUV",
    pickup: "Tue, 29 Sept 2026, 3:00 PM",
    dropoff: "Sun, 11 Oct 2026, 3:00 PM",
    excess: "$0 Excess (No roadside assist)",
    drivers: "Simar Singh, Sheen Hangloo (Extra Driver)",
    notes: "Direct airport terminal collection. Perfect compact SUV for alpine roads."
  },
  accommodations: [
    {
      id: "acc-1",
      city: "Christchurch",
      name: "Belmont Motor Inn",
      dates: "29 Sep 2026 (1 Night)",
      nights: 1,
      address: "172 Bealey Avenue, Christchurch 8013, New Zealand",
      mapsQuery: "Belmont Motor Inn, 172 Bealey Avenue, Christchurch, New Zealand",
      platform: "Agoda",
      cost: "102 AUD",
      checkIn: "After 2:00 PM",
      checkOut: "Before 10:00 AM",
      bookingRef: "wcYpUPpr2wLM96ALV0m2pg==",
      bookingUrl: "https://www.agoda.com/en-au/account/editbooking.html?bookingId=wcYpUPpr2wLM96ALV0m2pg%3D%3D",
      emailLink: "https://mail.google.com/mail/u/0/?hl=en#label/NZ+Trip/FMfcgzQgMMHNDJStHbfnZrXWNxbvWSGd",
      badge: "Night 1",
      notes: "Central motel location. Walkable or short drive to Riverside Market and Tram."
    },
    {
      id: "acc-2",
      city: "Hokitika",
      name: "2 Weld Street Residence",
      dates: "30 Sep 2026 (1 Night)",
      nights: 1,
      address: "2 Weld Street, 7810 Hokitika, New Zealand",
      mapsQuery: "2 Weld Street, 7810 Hokitika, New Zealand",
      platform: "Direct / Confirmed",
      cost: "112.50 AUD",
      checkIn: "2:00 PM – 8:30 PM",
      checkOut: "7:00 AM – 10:00 AM",
      bookingRef: "Confirmed in Gmail",
      emailLink: "https://mail.google.com/mail/u/0/?hl=en#label/NZ+Trip/FMfcgzQgMMCkNqkRnLbwpfftRfPPGGSJ",
      badge: "Night 2",
      notes: "Right by Hokitika beach driftwood sign and central dining."
    },
    {
      id: "acc-3",
      city: "Franz Josef",
      name: "9 Cron Street Chalet / Stay",
      dates: "1 – 3 Oct 2026 (2 Nights)",
      nights: 2,
      address: "9 Cron Street, Franz Josef Glacier, New Zealand",
      mapsQuery: "9 Cron Street, Franz Josef Glacier, New Zealand",
      platform: "Agoda",
      cost: "207 AUD (Total)",
      checkIn: "After 2:00 PM",
      checkOut: "Before 10:00 AM",
      bookingRef: "Confirmed via Agoda",
      emailLink: "https://mail.google.com/mail/u/0/?hl=en#label/NZ+Trip/FMfcgzQgMgQDhmxWcbqVVrZpdPBZFFTj",
      badge: "Nights 3 & 4",
      notes: "Close to heli-base (11:30 AM flight) and starting point of Terrace Walk glowworms."
    },
    {
      id: "acc-4",
      city: "Albert Town (Wānaka)",
      name: "Albert Town Sanctuary",
      dates: "3 Oct 2026 (1 Night)",
      nights: 1,
      address: "67 Frye Crescent, Albert Town, Otago 9305, New Zealand",
      mapsQuery: "67 Frye Crescent, Albert Town, Otago 9305, New Zealand",
      platform: "Airbnb",
      cost: "145 AUD",
      checkIn: "After 2:00 PM",
      checkOut: "Before 10:00 AM",
      bookingRef: "Confirmed via Airbnb",
      badge: "Night 5",
      notes: "Quiet riverside setting just 7 mins drive to Wānaka Lakefront and That Wānaka Tree."
    },
    {
      id: "acc-5",
      city: "Queenstown",
      name: "Lower Shotover Retreat",
      dates: "4 – 8 Oct 2026 (4 Nights)",
      nights: 4,
      address: "6 Nobles Lane, Lower Shotover, Queenstown, Otago 9304, New Zealand",
      mapsQuery: "6 Nobles Lane Lower Shotover, Queenstown Otago 9304, New Zealand",
      platform: "Airbnb",
      cost: "688 AUD (Total)",
      checkIn: "After 3:00 PM",
      checkOut: "Before 10:00 AM",
      bookingRef: "Confirmed via Airbnb",
      badge: "Nights 6 to 9",
      alert: "Note: Check whether Queenstown stay ends 8-Oct morning or 9-Oct morning relative to Mount Cook booking.",
      notes: "Central base for Jetboat, Skyline Gondola, Glenorchy, and early Milford coach pickup."
    },
    {
      id: "acc-6",
      city: "Twizel / Mount Cook Village",
      name: "Twizel Alpine Home",
      dates: "8 – 11 Oct 2026 (3 Nights)",
      nights: 3,
      address: "15 Sealy Street, Twizel, Canterbury 7901, New Zealand",
      mapsQuery: "15 Sealy Street, Twizel, Canterbury 7901, New Zealand",
      platform: "Airbnb",
      cost: "541 AUD (Total)",
      checkIn: "3:00 PM – 10:00 PM",
      checkOut: "Before 10:00 AM",
      bookingRef: "Confirmed via Airbnb",
      badge: "Nights 10 to 12",
      alert: "Check dates: Booked 8-11 Oct (3 nights). Ideal staging base for Hooker Valley & Tekapo.",
      notes: "Spacious stay near Lake Ruataniwha and direct gateway to Aoraki / Mount Cook & Lake Tekapo."
    }
  ],
  days: [
    {
      dayNum: 1,
      date: "Tue, 29-Sep",
      title: "Arrive in Christchurch & Sunset Port Hills",
      tagline: "Car pickup, historic tram, riverside dinner & panoramic golden hour",
      route: "Christchurch Airport → Central City → Port Hills",
      driveTime: "~30 mins local driving",
      baseCity: "Christchurch",
      accommodationId: "acc-1",
      highlights: [
        "Christchurch Tram Loop",
        "New Regent Street",
        "Avon River Stroll",
        "Earthquake Memorial",
        "Riverside Market Dinner",
        "Port Hills Sunset Lookout"
      ],
      activities: [
        {
          time: "3:00 PM",
          name: "Pick up Rental Car at APEX Christchurch Airport",
          desc: "Collect confirmed Mitsubishi ASX SUV (Booking #4174153). Hamish contact. $0 Excess.",
          cost: "Car Booked",
          type: "logistics",
          locationQuery: "Apex Car Rentals Christchurch Airport"
        },
        {
          time: "3:45 PM – 5:30 PM",
          name: "Park in City Centre & Historic Tram Loop",
          desc: "Take a scenic loop on the vintage Christchurch Tram (~50 mins) past Spanish-style New Regent Street, followed by an easy flat stroll along the weeping willows of the Avon River to the Canterbury Earthquake National Memorial.",
          cost: "~$45 NZD (or Avon Punting ~$45-50)",
          type: "attraction",
          locationQuery: "Christchurch Tramway New Regent Street"
        },
        {
          time: "6:00 PM",
          name: "Dinner at Riverside Market",
          desc: "Vibrant indoor boutique food hall with local artisan eateries, craft beers, and fresh snacks.",
          cost: "Food & Drinks",
          type: "food",
          locationQuery: "Riverside Market Christchurch"
        },
        {
          time: "7:15 PM",
          name: "Sunset Golden Hour Drive to Port Hills Lookout",
          desc: "Drive up the Sign of the Takahe / Summit Road for breath-taking panoramic views across the illuminated city and snowcapped Southern Alps.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Sign of the Takahe Port Hills Christchurch"
        }
      ],
      tips: "Check into Belmont Motor Inn (172 Bealey Ave) after 2pm. Keep your parking receipt handy in the city."
    },
    {
      dayNum: 2,
      date: "Wed, 30-Sep",
      title: "The Great Alpine Pass: Christchurch to Hokitika",
      tagline: "Castle Hill limestone boulders, Otira Viaduct, Devils Punchbowl & turquoise gorge",
      route: "Christchurch → Castle Hill → Arthur's Pass → Hokitika Gorge → Hokitika",
      driveTime: "~3.5 – 4 hrs driving across SH 73",
      baseCity: "Hokitika",
      accommodationId: "acc-2",
      highlights: [
        "Castle Hill (Kura Tāwhiti)",
        "Porters Pass Viewpoint",
        "Otira Viaduct Lookout",
        "Devils Punchbowl Waterfall",
        "Hokitika Gorge Swing Bridge",
        "Hokitika Beach Sunset"
      ],
      activities: [
        {
          time: "8:00 AM",
          name: "Depart Christchurch early on SH 73",
          desc: "Hit the scenic Great Alpine Highway early to maximize daytime stops.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "9:30 AM",
          name: "Castle Hill (Kura Tāwhiti) Boulder Walk",
          desc: "Easy, flat 15–20 min stroll amidst gigantic weathered limestone boulders where scenes of Narnia were filmed.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Kura Tawhiti Castle Hill Conservation Area"
        },
        {
          time: "11:30 AM",
          name: "Porters Pass & Otira Viaduct Lookout",
          desc: "Marvel at the engineering feat of the Otira Viaduct perched between sheer cliffs. Stop in Arthur's Pass village for a warm bakery lunch.",
          cost: "FREE (Lunch ~$20)",
          type: "viewpoint",
          locationQuery: "Otira Viaduct Lookout Arthurs Pass"
        },
        {
          time: "1:30 PM",
          name: "Devils Punchbowl Waterfall Walk",
          desc: "Invigorating 45–60 min return walk through lush beech forest to the base of a roaring 131-metre cascading waterfall.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Devils Punchbowl Walking Track Arthurs Pass"
        },
        {
          time: "3:30 PM",
          name: "Hokitika Gorge Turquoise River Walk",
          desc: "Cross the swing bridge overlooking unreal electric-turquoise glacial waters and native podocarp forest loop track.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Hokitika Gorge Walk"
        },
        {
          time: "6:30 PM",
          name: "Sunset & Dinner at Hokitika Beach Driftwood Sign",
          desc: "Grab West Coast fish & chips or pizza and watch the Tasman Sea sunset beside the famous driftwood letters.",
          cost: "FREE (Dinner)",
          type: "viewpoint",
          locationQuery: "Hokitika Beach Driftwood Sign"
        }
      ],
      tips: "Check-in at 2 Weld Street is between 2:00 PM – 8:30 PM. Keep your insect repellent handy for West Coast sandflies."
    },
    {
      dayNum: 3,
      date: "Thu, 01-Oct",
      title: "Wild West Coast & Franz Josef Glacier Heli Flight",
      tagline: "Glacial flight, rainforest drive, and magical nighttime wild glowworms",
      route: "Hokitika → Ross → Franz Josef Glacier",
      driveTime: "~1.75 hrs south (135 km)",
      baseCity: "Franz Josef",
      accommodationId: "acc-3",
      highlights: [
        "Scenic West Coast Highway",
        "11:30 AM Glacier Helicopter Flight",
        "Franz Josef Alpine Village",
        "Terrace Walk Glowing Glowworms"
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Coastal Scenic Drive to Franz Josef",
          desc: "Cruise south with views of native rainforest on one side and the Tasman Sea on the other.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "10:30 AM",
          name: "Arrive in Village & Report to Heli-Base",
          desc: "Drop bags at 9 Cron Street and report to the helicopter base by 11:00 AM sharp for safety briefing.",
          cost: "Logistics",
          type: "logistics",
          locationQuery: "The Helicopter Line Franz Josef"
        },
        {
          time: "11:30 AM",
          name: "Franz Josef Glacier Helicopter Flight / Heli-Hike",
          desc: "Soar over dramatic ice pinnacles, crevasses, and snowfields with a breathtaking glacier snow landing.",
          cost: "~$300 – $550 NZD pp",
          type: "attraction",
          locationQuery: "Franz Josef Glacier Heli Base"
        },
        {
          time: "2:30 PM",
          name: "Village Stroll & Waiho Hot Tubs Soak",
          desc: "Unwind at local village cafes or book a private wood-fired freshwater tub among lush forest.",
          cost: "Optional (~$50 NZD)",
          type: "nature",
          locationQuery: "Waiho Hot Tubs Franz Josef"
        },
        {
          time: "8:00 PM",
          name: "Terrace Walk Wild Glowworm Stroll",
          desc: "Short, flat 30-min walk directly from the village edge into dense native bush. Switch off torches to see hundreds of fairy glowworms twinkling like constellations.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Terrace Walk Franz Josef"
        }
      ],
      tips: "Stay 2 nights at 9 Cron Street. If clouds delay the 11:30 AM heli flight, don't worry—tomorrow is your built-in backup window!"
    },
    {
      dayNum: 4,
      date: "Fri, 02-Oct",
      title: "Glacier Valley Wonders & Mirror Lake Reflections",
      tagline: "Backup flight window, Peter's Pool, Sentinel Rock & Lake Matheson",
      route: "Franz Josef Glacier Valley & Fox Glacier Loop",
      driveTime: "~30 mins local",
      baseCity: "Franz Josef",
      accommodationId: "acc-3",
      highlights: [
        "Heli Flight Backup Window",
        "Peter's Pool Glacial Mirror Track",
        "Sentinel Rock Valley Viewpoint",
        "Lake Matheson Mirror Reflections",
        "Waiho River Glacial Plain"
      ],
      activities: [
        {
          time: "Morning",
          name: "Heli Flight Backup Window / Glacier Valley Walks",
          desc: "If yesterday was weathered out, take your rescheduled flight this morning. If already completed, enjoy a relaxed morning with flat walks to Peter's Pool (kettle lake reflecting the mountains).",
          cost: "FREE",
          type: "nature",
          locationQuery: "Peters Pool Franz Josef Glacier"
        },
        {
          time: "11:30 AM",
          name: "Sentinel Rock Lookout",
          desc: "Short 15-minute gentle climb for sweeping panoramic views across the Franz Josef glacier retreat valley.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Sentinel Rock Walk Franz Josef"
        },
        {
          time: "1:30 PM",
          name: "Fox Glacier & Lake Matheson Mirror Walk",
          desc: "Take a 25-min scenic drive south to Fox Glacier. Walk the famous 1-hour Lake Matheson loop track, celebrated for postcard mirror reflections of Aoraki / Mount Cook & Mount Tasman on calm water.",
          cost: "FREE (Cafe lunch ~$25)",
          type: "nature",
          locationQuery: "Lake Matheson Walk Fox Glacier"
        },
        {
          time: "5:00 PM",
          name: "Cozy Dinner in Franz Josef Village",
          desc: "Enjoy hearty pub fare or craft pizza at SnakeBite Brewery or Alice May.",
          cost: "Dinner",
          type: "food",
          locationQuery: "Franz Josef Glacier Village"
        }
      ],
      tips: "Lake Matheson is calmest early in the morning or late afternoon for the mirror effect. Bring camera!"
    },
    {
      dayNum: 5,
      date: "Sat, 03-Oct",
      title: "Haast Alpine Pass to Pristine Wānaka",
      tagline: "Fox Glacier viewpoints, crystal Blue Pools, Lake Hāwea & That Wānaka Tree",
      route: "Franz Josef → Haast Pass → Blue Pools → Lake Hāwea → Wānaka",
      driveTime: "~4 hrs scenic drive (285 km)",
      baseCity: "Albert Town (Wānaka)",
      accommodationId: "acc-4",
      highlights: [
        "Fox Glacier Roadside Views",
        "Haast Pass Mountain Highway",
        "Blue Pools & Thunder Creek Falls",
        "Lake Hāwea Roadside Lookouts",
        "That Wānaka Tree at Sunset"
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Drive South over Haast Pass",
          desc: "Witness the transition from dense temperate rainforest to rugged river gorges and tussock alpine valleys.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "11:30 AM",
          name: "Blue Pools & Thunder Creek Falls Walk",
          desc: "Easy, flat 30-min walk through ancient beech forest over swing bridges to the crystal-clear, vivid blue glacial pools of the Makarora River.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Blue Pools Track Makarora Haast Pass"
        },
        {
          time: "2:45 PM",
          name: "Lake Hāwea Scenic Lookouts",
          desc: "Drive alongside the massive expanses of Lake Hāwea, pulling into roadside bays for zero-hiking, jaw-dropping panoramic views.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Lake Hawea Lookout"
        },
        {
          time: "4:15 PM",
          name: "That Wānaka Tree on Lake Shoreline",
          desc: "Visit New Zealand's most photographed willow tree growing directly out of the shallows of Lake Wānaka (easy flat 5-min walk along beach).",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "That Wanaka Tree"
        },
        {
          time: "6:30 PM",
          name: "Lakeside Dinner in Wānaka",
          desc: "Dine along the vibrant lakefront (Big Fig, Francesca's Italian, or Red Star Burger).",
          cost: "Dinner",
          type: "food",
          locationQuery: "Wanaka Lakefront"
        }
      ],
      tips: "Stay at 67 Frye Crescent in Albert Town (just 7 mins from Wānaka central). Check in after 2pm."
    },
    {
      dayNum: 6,
      date: "Sun, 04-Oct",
      title: "Crown Range Alpine Road into Queenstown",
      tagline: "Lavender farm, Cardrona Hotel, Crown Range Saddle & lakeside gardens",
      route: "Wānaka → Cardrona → Crown Range Road → Lower Shotover / Queenstown",
      driveTime: "~1.25 hrs drive (70 km)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      highlights: [
        "Wānaka Lavender Farm",
        "Cardrona Bra Fence & Historic 1863 Hotel",
        "Crown Range Summit Lookout (The Saddle)",
        "Arrow Junction Lookout",
        "Queenstown Gardens Lake Wakatipu",
        "Patagonia Chocolates Churros"
      ],
      activities: [
        {
          time: "9:30 AM",
          name: "Wānaka Lavender Farm Experience",
          desc: "Stroll beautiful spring gardens, meet alpaca & Highland cattle, and taste their signature lavender honey ice cream.",
          cost: "~$10–$15 NZD",
          type: "attraction",
          locationQuery: "Wanaka Lavender Farm"
        },
        {
          time: "11:30 AM",
          name: "Cardrona Bra Fence & 1863 Historic Hotel",
          desc: "Quirky photo stop at the world-famous bra fence, then step back in time at NZ's oldest pub, the Cardrona Hotel.",
          cost: "FREE",
          type: "attraction",
          locationQuery: "Cardrona Hotel Otago"
        },
        {
          time: "12:15 PM",
          name: "Crown Range Summit Saddle & Arrow Junction",
          desc: "Cross New Zealand's highest paved highway (1,076m) with sweeping views over the Queenstown basin and Remarkables range.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Crown Range Summit Lookout"
        },
        {
          time: "1:30 PM",
          name: "Check into Queenstown Base & Steamer Wharf Lunch",
          desc: "Check into 6 Nobles Lane (Lower Shotover). Head into town for a relaxed lunch by Steamer Wharf.",
          cost: "Lunch",
          type: "food",
          locationQuery: "Steamer Wharf Queenstown"
        },
        {
          time: "4:00 PM",
          name: "Queenstown Gardens Peninsula Walk",
          desc: "Tranquil stroll around the forested peninsula jutting into Lake Wakatipu with mountain views across to Walter Peak.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Queenstown Gardens"
        },
        {
          time: "7:00 PM",
          name: "Patagonia Chocolates by the Wharf",
          desc: "Indulge in artisanal hot chocolate, award-winning gelato, or freshly fried Spanish churros with dulce de leche.",
          cost: "~$15 NZD",
          type: "food",
          locationQuery: "Patagonia Chocolates Queenstown"
        }
      ],
      tips: "Queenstown accommodation starts today (Stay: 4–8 Oct, 4 nights at 6 Nobles Lane). Check-in after 3pm."
    },
    {
      dayNum: 7,
      date: "Mon, 05-Oct",
      title: "Queenstown Thrills: Jetboat, Gondola, Luge & Ice Bar",
      tagline: "Historic Arrowtown, Shotover Jet, loaded bagels, Bob's Peak Luge & sub-zero drinks",
      route: "Arrowtown → Queenstown Wharf → Skyline Bob's Peak → Town Center",
      driveTime: "~20 mins local",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      highlights: [
        "Historic Arrowtown & Chinese Settlement",
        "11:00 AM High-Speed Jetboat Ride",
        "Balls and Bangles Gourmet Bagels",
        "Skyline Gondola & Alpine Luge Rides",
        "4:00 PM Below Zero / Queenstown Ice Bar"
      ],
      activities: [
        {
          time: "9:00 AM",
          name: "Arrowtown Historic Miners Settlement",
          desc: "Charming stroll down tree-lined heritage streets and preserved 19th-century Chinese miners' stone huts.",
          cost: "FREE",
          type: "attraction",
          locationQuery: "Arrowtown Chinese Settlement"
        },
        {
          time: "11:00 AM",
          name: "High-Speed Jetboat Experience",
          desc: "Heart-pounding 360-degree spins skim inches away from rugged canyon rock faces along the Shotover/Kawarau River.",
          cost: "~$82–$149 NZD pp",
          type: "attraction",
          locationQuery: "Shotover Jet Queenstown"
        },
        {
          time: "12:30 PM",
          name: "Balls and Bangles / Fergburger Lunch",
          desc: "Gourmet loaded bagels, sweet dough creations, or world-famous Fergburger right in town.",
          cost: "~$20–$25 NZD",
          type: "food",
          locationQuery: "Balls and Bangles Queenstown"
        },
        {
          time: "2:00 PM",
          name: "Skyline Gondola & 3 Luge Rides",
          desc: "Ride the cable car 450m up to Bob's Peak, then race down the scenic gravity luge tracks with full Remarkables vistas.",
          cost: "~$70–$99 NZD pp",
          type: "attraction",
          locationQuery: "Skyline Queenstown Brecon Street"
        },
        {
          time: "4:00 PM",
          name: "Queenstown Ice Bar / Below Zero Ice Lounge",
          desc: "Don polar jackets and gloves in a -10°C lounge made completely of handcrafted ice sculptures with signature drinks.",
          cost: "~$35–$45 NZD pp",
          type: "attraction",
          locationQuery: "Below Zero Ice Bar Queenstown"
        },
        {
          time: "7:00 PM",
          name: "Waterfront Dinner & Craft Beer",
          desc: "Relax along the lively Queenstown waterfront promenade.",
          cost: "Dinner",
          type: "food",
          locationQuery: "Queenstown Waterfront"
        }
      ],
      tips: "Book your Gondola + Luge time slot in advance to avoid queues at the Brecon Street terminal."
    },
    {
      dayNum: 8,
      date: "Tue, 06-Oct",
      title: "Scenic Glenorchy, Mrs Woolly's & Paradise Valley",
      tagline: "Lake Wakatipu shoreline, Bob's Cove, legendary meat pies & LOTR Isengard scenery",
      route: "Queenstown → Bob's Cove → Glenorchy → Paradise Valley → Queenstown",
      driveTime: "~45 mins each way (45 km)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      highlights: [
        "Bob's Cove Turquoise Bay Walk",
        "Bennett's Bluff Lookout",
        "Mrs Woolly's Gourmet Pies",
        "Glenorchy Red Shed & Jetty",
        "Paradise Valley & LOTR Backdrops"
      ],
      activities: [
        {
          time: "9:00 AM",
          name: "Drive to Glenorchy & Bob's Cove Walk",
          desc: "Drive one of the world's most scenic lakefront roads. Stop at Bob's Cove for an easy 30-min flat bushwalk down to a secluded azure cove.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Bobs Cove Track Queenstown"
        },
        {
          time: "11:15 AM",
          name: "Bennett's Bluff Lookout",
          desc: "Spectacular elevated viewpoint looking north up the lake toward Mount Alfred and the Humboldt Mountains.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Bennetts Bluff Lookout Glenorchy Road"
        },
        {
          time: "12:00 PM",
          name: "Hot Gourmet Pies at Mrs Woolly's General Store",
          desc: "Savor award-winning gourmet hot pies and artisan bakery goodies in Glenorchy village.",
          cost: "~$15–$20 NZD",
          type: "food",
          locationQuery: "Mrs Woollys General Store Glenorchy"
        },
        {
          time: "1:00 PM",
          name: "Glenorchy Lagoon Walkway & Red Jetty",
          desc: "Stroll the wooden boardwalk loop through wetlands with mirror reflections and photograph the iconic red heritage shed on the wharf.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Glenorchy Red Boat Shed"
        },
        {
          time: "2:00 PM",
          name: "Drive into Paradise Valley (Isengard)",
          desc: "A stunning 20-min scenic drive on unsealed road into ancient beech forests and river plains featured as Isengard and Lothlórien in Lord of the Rings.",
          cost: "FREE",
          type: "drive",
          locationQuery: "Paradise Valley Glenorchy"
        },
        {
          time: "5:00 PM",
          name: "Return to Queenstown for Evening Relaxation",
          desc: "Take in the afternoon sun along Lake Wakatipu.",
          cost: "FREE",
          type: "viewpoint"
        }
      ],
      tips: "Zero hiking required in Paradise Valley for incredible vistas right from the car!"
    },
    {
      dayNum: 9,
      date: "Wed, 07-Oct",
      title: "Milford Sound: The Eighth Wonder of the World",
      tagline: "Glass-roof coach, thundering waterfalls, Mitre Peak & Fiordland wildlife",
      route: "Queenstown → Te Anau → Eglinton Valley → Homer Tunnel → Milford Sound",
      driveTime: "Full Day Guided Tour (Relax on coach)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      isHighlightDay: true,
      alertMessage: "CRITICAL: Glass-roof coach departure is from Frankton Bus Shelter at 6:10 AM sharp!",
      highlights: [
        "6:10 AM Frankton Bus Shelter Pickup",
        "Eglinton Valley & Mirror Lakes",
        "Homer Tunnel Alpine Descent",
        "1:00 PM Milford Sound Nature Cruise",
        "Mitre Peak & Stirling Falls Spray",
        "Seals, Dolphins & Fiordland Penguins"
      ],
      activities: [
        {
          time: "6:10 AM SHARP",
          name: "Board Glass-Roof Coach at Frankton Bus Shelter",
          desc: "Do not be late! Sit back and marvel as the glass roof gives 360-degree views of vertical granite peaks along the Milford Road.",
          cost: "Booked ($460 AUD total)",
          type: "tour",
          locationQuery: "Frankton Bus Shelter Queenstown"
        },
        {
          time: "9:30 AM",
          name: "Scenic Stops: Te Anau, Eglinton Valley & Mirror Lakes",
          desc: "Morning coffee break in Te Anau, followed by photo stops at the vast glacial tussock valley of Eglinton and calm mirror ponds.",
          cost: "Included",
          type: "viewpoint",
          locationQuery: "Mirror Lakes Milford Road"
        },
        {
          time: "1:00 PM",
          name: "Milford Sound Nature Cruise",
          desc: "Cruise directly beneath sheer 1,200m cliffs and feel the mist of Stirling Falls on the front deck. Watch for New Zealand fur seals basking on rocks.",
          cost: "Included in Tour",
          type: "attraction",
          locationQuery: "Milford Sound Visitor Terminal"
        },
        {
          time: "8:00 PM",
          name: "Return to Queenstown & Casual Dinner",
          desc: "Arrive back in Queenstown refreshed after letting the professional coach driver handle the mountain curves. Enjoy a relaxing hot dinner.",
          cost: "Dinner",
          type: "food",
          locationQuery: "Queenstown Town Centre"
        }
      ],
      tips: "Bring your waterproof jacket on the boat for the waterfall spray! Wear layers as Fiordland weather can change quickly."
    },
    {
      dayNum: 10,
      date: "Thu, 08-Oct",
      title: "Queenstown Heritage Cruise OR Mount Cook Transit",
      tagline: "TSS Earnslaw steamship & Kelvin Heights OR departure for Mount Cook",
      route: "Option A: Queenstown local | Option B: Queenstown → Lindis Pass → Twizel",
      driveTime: "Option A: Local | Option B: ~3 hrs drive (200 km)",
      baseCity: "Queenstown (or Twizel)",
      accommodationId: "acc-5",
      isDiscrepancyDay: true,
      highlights: [
        "TSS Earnslaw Vintage Steamship Cruise",
        "Queenstown Waterfront & Steamer Wharf",
        "Kelvin Heights & Remarkables Reflections",
        "Arthur's Point Trail & Hugo Tunnel",
        "Option: Early Drive to Mount Cook"
      ],
      activities: [
        {
          time: "10:00 AM",
          name: "TSS Earnslaw Vintage Steamship Cruise",
          desc: "Cruise Lake Wakatipu on the 112-year-old 'Lady of the Lake'. Watch coal stokers feed the fiery steam engines in the open engine room.",
          cost: "~$115–$119 NZD",
          type: "attraction",
          locationQuery: "RealNZ TSS Earnslaw Queenstown"
        },
        {
          time: "12:00 PM",
          name: "Waterfront Lunch & Bakery Stroll",
          desc: "Casual fish & chips or bakery treats along the beach.",
          cost: "~$25 NZD",
          type: "food"
        },
        {
          time: "1:30 PM",
          name: "Scenic Drive to Kelvin Heights / Jack's Point",
          desc: "Zero-hiking scenic drive along the quiet side of Lake Wakatipu for dramatic Remarkables reflections in the water.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Kelvin Heights Peninsula Queenstown"
        },
        {
          time: "4:00 PM",
          name: "Arthur's Point Trail to Historic Hugo Tunnel",
          desc: "Pleasant trail leading down to the historic gold-mining tunnel by the river.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Arthurs Point Queenstown"
        }
      ],
      options: {
        current: "A",
        optionA: {
          title: "Option A: Full Queenstown Relaxation & Lake Cruise",
          desc: "Keep 4th night in Queenstown. Ride TSS Earnslaw, explore Kelvin Heights & Hugo Tunnel.",
          activities: [
            {
              time: "10:00 AM",
              name: "TSS Earnslaw Vintage Steamship Cruise",
              desc: "Cruise Lake Wakatipu on the 112-year-old 'Lady of the Lake'. Watch coal stokers feed the fiery steam engines in the open engine room.",
              cost: "~$115–$119 NZD",
              type: "attraction",
              locationQuery: "RealNZ TSS Earnslaw Queenstown"
            },
            {
              time: "12:00 PM",
              name: "Waterfront Lunch & Bakery Stroll",
              desc: "Casual fish & chips or bakery treats along the beach.",
              cost: "~$25 NZD",
              type: "food"
            },
            {
              time: "1:30 PM",
              name: "Scenic Drive to Kelvin Heights / Jack's Point",
              desc: "Zero-hiking scenic drive along the quiet side of Lake Wakatipu for dramatic Remarkables reflections in the water.",
              cost: "FREE",
              type: "viewpoint",
              locationQuery: "Kelvin Heights Peninsula Queenstown"
            },
            {
              time: "4:00 PM",
              name: "Arthur's Point Trail to Historic Hugo Tunnel",
              desc: "Pleasant trail leading down to the historic gold-mining tunnel by the river.",
              cost: "FREE",
              type: "nature",
              locationQuery: "Arthurs Point Queenstown"
            }
          ]
        },
        optionB: {
          title: "Option B: Check Out to Mount Cook / Twizel Today",
          desc: "If your Airbnb booking at 15 Sealy St Twizel starts today (8-Oct), check out of Queenstown this morning and head over the Lindis Pass.",
          activities: [
            {
              time: "9:00 AM",
              name: "Check out of Queenstown & Drive Lindis Pass",
              desc: "Ascend through golden tussock hill country with views over the vast Mackenzie basin.",
              cost: "FREE",
              type: "drive",
              locationQuery: "Lindis Pass Viewpoint"
            },
            {
              time: "12:00 PM",
              name: "Omarama Clay Cliffs & Lake Pukaki",
              desc: "Walk inside towering gravel pinnacles ($5 NZD) and taste fresh alpine salmon at Lake Pukaki.",
              cost: "~$5–$30 NZD",
              type: "nature",
              locationQuery: "Clay Cliffs Omarama"
            },
            {
              time: "3:30 PM",
              name: "Check into 15 Sealy Street, Twizel",
              desc: "Check into your spacious 3-night stay in Twizel. Relax and prepare for Hooker Valley tomorrow.",
              cost: "Accommodation",
              type: "logistics",
              locationQuery: "15 Sealy Street Twizel"
            }
          ]
        }
      },
      tips: "You have an Airbnb booked at 15 Sealy St Twizel for 8-11 Oct (3 nights). Use the toggle above to switch between itineraries based on your preferred check-out day!"
    },
    {
      dayNum: 11,
      date: "Fri, 09-Oct",
      title: "Alpine Salmon, Lindis Pass & Tasman Glacier Lake",
      tagline: "Golden tussocks, razor-sharp pinnacles, fresh lake sashimi & floating icebergs",
      route: "Queenstown → Lindis Pass → Omarama → Lake Pukaki → Mount Cook Village",
      driveTime: "~3 hrs scenic drive (210 km)",
      baseCity: "Twizel / Mount Cook",
      accommodationId: "acc-6",
      highlights: [
        "Lindis Pass Alpine Lookout",
        "Omarama Clay Cliffs Pinnacles",
        "Mt Cook Alpine Salmon at Peter's Lookout",
        "Electric-Blue Lake Pukaki",
        "Tasman Glacier Lake / Jetty Track"
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Drive Lindis Pass Alpine Lookout",
          desc: "Ascend into dramatic tussock-covered alpine peaks with panoramic viewing platforms.",
          cost: "FREE",
          type: "viewpoint",
          locationQuery: "Lindis Pass Viewpoint"
        },
        {
          time: "11:30 AM",
          name: "Omarama Clay Cliffs Pinnacles",
          desc: "Fascinating geological formation of towering, razor-sharp silt and gravel pinnacles and narrow slot ravines.",
          cost: "$5 NZD donation at gate",
          type: "nature",
          locationQuery: "Omarama Clay Cliffs"
        },
        {
          time: "1:00 PM",
          name: "Lake Pukaki & Mt Cook Alpine Salmon Feast",
          desc: "Stop at Peter's Lookout overlooking the neon-blue waters of Lake Pukaki directly toward Mount Cook. Feast on world-famous fresh alpine salmon sashimi.",
          cost: "~$30 NZD",
          type: "food",
          locationQuery: "Mount Cook Alpine Salmon Peters Lookout"
        },
        {
          time: "3:30 PM",
          name: "Tasman Glacier Lake / Jetty Track",
          desc: "Easy, flat 20-min track to the jetty at the terminal lake to watch giant milky-grey and blue icebergs calved from NZ's longest glacier.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Tasman Glacier Track Mt Cook"
        },
        {
          time: "6:00 PM",
          name: "Check into Twizel Base (15 Sealy Street)",
          desc: "Settle into your home for the next few days. Cook a warm dinner or visit Shawty's Cafe in Twizel.",
          cost: "Airbnb",
          type: "logistics",
          locationQuery: "15 Sealy Street Twizel"
        }
      ],
      tips: "Peter's Lookout on Lake Pukaki is an unforgettable photo spot with the salmon shop right on site!"
    },
    {
      dayNum: 12,
      date: "Sat, 10-Oct",
      title: "Hooker Valley Epic & Dark Sky Stargazing Reserve",
      tagline: "3 suspension bridges, Mount Cook foot, Church of Good Shepherd & stargazing",
      route: "Twizel → Aoraki / Mount Cook Village → Lake Tekapo",
      driveTime: "~1 hr 15 mins driving (105 km)",
      baseCity: "Lake Tekapo / Twizel",
      accommodationId: "acc-6",
      isHighlightDay: true,
      highlights: [
        "Hooker Valley Track (10km return)",
        "3 Iconic Swing Bridges",
        "Icebergs at Hooker Glacier Lake",
        "Church of the Good Shepherd Tekapo",
        "8:30 PM Dark Sky Telescope Stargazing"
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Hooker Valley Track (World Famous Walk)",
          desc: "Mostly flat, highly rewarding 10km return track crossing three massive suspension swing bridges over roaring glacial rivers. Finishes right at Hooker Lake with floating icebergs directly beneath the towering face of Aoraki / Mount Cook (~3 hrs return).",
          cost: "FREE",
          type: "nature",
          locationQuery: "Hooker Valley Track Mt Cook"
        },
        {
          time: "1:30 PM",
          name: "Drive to Lake Tekapo & Church of the Good Shepherd",
          desc: "Photograph the iconic stone church built on the turquoise lakefront in 1935, framing mountain views through its altar window.",
          cost: "FREE",
          type: "attraction",
          locationQuery: "Church of the Good Shepherd Lake Tekapo"
        },
        {
          time: "4:00 PM",
          name: "Tekapo Springs Hot Pools or Lakefront Stroll",
          desc: "Soak your legs in tiered thermal pools overlooking the lake, or stroll the shore.",
          cost: "Optional (~$35 NZD)",
          type: "nature",
          locationQuery: "Tekapo Springs"
        },
        {
          time: "8:30 PM",
          name: "Dark Sky Project Guided Stargazing",
          desc: "Inside the UNESCO International Dark Sky Reserve. Gaze through research-grade telescopes at the Southern Cross, Magellanic Clouds, and distant nebulae.",
          cost: "~$129 NZD pp",
          type: "attraction",
          locationQuery: "Dark Sky Project Lake Tekapo"
        }
      ],
      tips: "Hooker Valley track is well-graded gravel with no steep climbs. Dress in windproof layers as the valley breezes can be brisk."
    },
    {
      dayNum: 13,
      date: "Sun, 11-Oct",
      title: "Lake Alexandrina, Geraldine Artisan Town & CHC Airport",
      tagline: "Quiet morning lake, cheese tasting, car return and flight home",
      route: "Lake Tekapo → Fairlie → Geraldine → Christchurch Airport",
      driveTime: "~3 hrs drive (225 km)",
      baseCity: "Departure (Christchurch Airport)",
      accommodationId: null,
      highlights: [
        "Lake Alexandrina Morning Stroll",
        "Fairlie Bakehouse Gourmet Pies",
        "Artisan Country Village of Geraldine",
        "The Geraldine Cheese Company",
        "3:00 PM Car Return at APEX CHC Airport"
      ],
      activities: [
        {
          time: "9:00 AM",
          name: "Quiet Morning Stroll at Lake Alexandrina",
          desc: "A hidden gem just 10 mins from Tekapo. Tranquil non-motorized lake with abundant birdlife and reflections.",
          cost: "FREE",
          type: "nature",
          locationQuery: "Lake Alexandrina New Zealand"
        },
        {
          time: "10:30 AM",
          name: "Fairlie Bakehouse Quick Pie Stop",
          desc: "Pick up famous pork belly or venison pies on the drive through Fairlie.",
          cost: "~$10 NZD",
          type: "food",
          locationQuery: "Fairlie Bakehouse"
        },
        {
          time: "12:00 PM",
          name: "Artisan Village of Geraldine & Cheese Tasting",
          desc: "Stroll through leafy Geraldine. Sample award-winning sheep, goat, and cow cheeses at The Geraldine Cheese Company and browse Barker's Foodstore.",
          cost: "FREE (Samples & Lunch)",
          type: "attraction",
          locationQuery: "The Geraldine Cheese Company"
        },
        {
          time: "2:30 PM – 3:00 PM",
          name: "Return Mitsubishi ASX to APEX Christchurch Airport",
          desc: "Refuel tank, return vehicle before 3:00 PM cutoff (Booking #4174153). Head into the terminal for your flight home!",
          cost: "Rental Return",
          type: "logistics",
          locationQuery: "Apex Car Rentals Christchurch Airport"
        }
      ],
      tips: "Allow 3 hours drive from Tekapo to Christchurch Airport plus 30 mins for car return and luggage check-in."
    }
  ],
  packingChecklist: [
    { id: "p1", category: "Apparel & Gear", item: "Raincoats x 2 (Waterproof / Windproof)", checked: false, note: "Crucial for West Coast & Milford Sound" },
    { id: "p2", category: "Apparel & Gear", item: "Good Sturdy Shoes for Hikes", checked: false, note: "Hooker Valley, Devils Punchbowl, Hokitika Gorge" },
    { id: "p3", category: "Apparel & Gear", item: "Thermal Base Layers & Warm Fleece", checked: false, note: "Alpine mornings & Dark Sky stargazing" },
    { id: "p4", category: "Apparel & Gear", item: "Warm Beanies, Gloves & Sunglasses", checked: false, note: "Glacier heli ride & snow glare" },
    { id: "p5", category: "Documents & Auto", item: "Driver's Licenses (Simar & Sheen)", checked: false, note: "Required by APEX Car Rentals" },
    { id: "p6", category: "Documents & Auto", item: "Passports & NZeTA / Visas", checked: false, note: "International travel essentials" },
    { id: "p7", category: "Documents & Auto", item: "Car Phone Mount & USB-C / Lightning Cables", checked: false, note: "For in-car GPS navigation" },
    { id: "p8", category: "Health & Care", item: "Insect Repellent (DEET) for Sandflies", checked: false, note: "Essential for Hokitika, Haast & Milford" },
    { id: "p9", category: "Health & Care", item: "Sunscreen & Lip Balm", checked: false, note: "NZ UV index is high even when cool" },
    { id: "p10", category: "Electronics", item: "Camera / Drone & Extra Memory Cards", checked: false, note: "Epic South Island landscapes" },
    { id: "p11", category: "Electronics", item: "Power Bank Portable Battery", checked: false, note: "For long scenic day drives" },
    { id: "p12", category: "Apparel & Gear", item: "Swimwear for Hot Pools / Tekapo Springs", checked: false, note: "Waiho or Tekapo springs" }
  ]
};

// Application State Management
class NZTripApp {
  constructor() {
    this.currentDay = 1;
    this.activeTab = 'timeline';
    this.searchTerm = '';
    this.day10Option = localStorage.getItem('nz_day10_option') || 'A';
    this.checkedActivities = JSON.parse(localStorage.getItem('nz_checked_activities') || '{}');
    this.packingList = this.loadPackingList();
    this.geminiApiKey = localStorage.getItem('nz_gemini_api_key') || '';
    this.copilotDay = 1;
    this.copilotLoading = false;
    this.chatHistory = this.loadChatHistory();

    this.init();
  }

  loadChatHistory() {
    try {
      return JSON.parse(localStorage.getItem('nz_copilot_chat') || '[]');
    } catch(e) {
      return [];
    }
  }

  init() {
    this.registerServiceWorker();
    this.startCountdownTimer();
    this.setupEventListeners();
    this.renderDayPills();
    this.renderCurrentView();
    this.updateStatsBar();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('NZ Trip Service Worker registered'))
        .catch(err => console.log('SW registration note:', err));
    }
  }

  loadPackingList() {
    const saved = localStorage.getItem('nz_packing_list');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [...TRIP_DATA.packingChecklist];
  }

  savePackingList() {
    localStorage.setItem('nz_packing_list', JSON.stringify(this.packingList));
  }

  saveCheckedActivities() {
    localStorage.setItem('nz_checked_activities', JSON.stringify(this.checkedActivities));
  }

  startCountdownTimer() {
    const target = new Date(TRIP_DATA.startDate).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;

      const countdownEl = document.getElementById('tripCountdown');
      if (!countdownEl) return;

      if (diff <= 0) {
        // Check if trip is in progress
        const endTarget = new Date(TRIP_DATA.endDate).getTime();
        if (now < endTarget) {
          countdownEl.innerHTML = `
            <div class="countdown-badge active-trip">
              <span class="pulse-dot"></span>
              <strong>Trip is LIVE! Enjoy Aotearoa! 🇳🇿</strong>
            </div>
          `;
        } else {
          countdownEl.innerHTML = `
            <div class="countdown-badge">
              <span>Journey Completed ❤️ Lifetime Memories!</span>
            </div>
          `;
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `
        <div class="countdown-card">
          <div class="count-box"><span class="num">${days}</span><span class="lbl">Days</span></div>
          <div class="count-sep">:</div>
          <div class="count-box"><span class="num">${String(hours).padStart(2, '0')}</span><span class="lbl">Hours</span></div>
          <div class="count-sep">:</div>
          <div class="count-box"><span class="num">${String(mins).padStart(2, '0')}</span><span class="lbl">Mins</span></div>
          <div class="count-sep">:</div>
          <div class="count-box"><span class="num">${String(secs).padStart(2, '0')}</span><span class="lbl">Secs</span></div>
        </div>
      `;
    };

    update();
    setInterval(update, 1000);
  }

  setupEventListeners() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll('[data-tab]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Search Input
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase().trim();
        this.renderCurrentView();
      });
    }

    // Clear Search Button
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchTerm = '';
        this.renderCurrentView();
      });
    }

    // Add Custom Checklist Item
    const addPackingBtn = document.getElementById('addPackingBtn');
    const packingInput = document.getElementById('newPackingInput');
    if (addPackingBtn && packingInput) {
      const handleAdd = () => {
        const val = packingInput.value.trim();
        if (!val) return;
        this.packingList.unshift({
          id: 'custom-' + Date.now(),
          category: 'Personal Custom',
          item: val,
          checked: false,
          note: 'Added by user'
        });
        this.savePackingList();
        packingInput.value = '';
        this.renderChecklistView();
      };
      addPackingBtn.addEventListener('click', handleAdd);
      packingInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAdd();
      });
    }
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('[data-tab]').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const dayPillsContainer = document.getElementById('dayPillsSection');
    if (dayPillsContainer) {
      dayPillsContainer.style.display = (tabName === 'timeline') ? 'block' : 'none';
    }

    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderDayPills() {
    const container = document.getElementById('dayPillsContainer');
    if (!container) return;

    let html = '';
    TRIP_DATA.days.forEach(day => {
      const isSelected = day.dayNum === this.currentDay;
      html += `
        <button class="day-pill ${isSelected ? 'selected' : ''}" onclick="window.nzApp.selectDay(${day.dayNum})">
          <span class="pill-day">Day ${day.dayNum}</span>
          <span class="pill-date">${day.date.split(',')[1] || day.date}</span>
          <span class="pill-loc">${day.baseCity.split('(')[0]}</span>
        </button>
      `;
    });

    container.innerHTML = html;
  }

  selectDay(dayNum) {
    this.currentDay = parseInt(dayNum, 10);
    this.renderDayPills();
    if (this.activeTab !== 'timeline') {
      this.switchTab('timeline');
    } else {
      this.renderTimelineView();
    }
    setTimeout(() => {
      const selectedPill = document.querySelector('.day-pill.selected');
      if (selectedPill) {
        selectedPill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }, 50);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  renderCurrentView() {
    const viewContainer = document.getElementById('mainViewContainer');
    if (!viewContainer) return;

    switch (this.activeTab) {
      case 'timeline':
        this.renderTimelineView();
        break;
      case 'copilot':
        this.renderCopilotView();
        break;
      case 'stays':
        this.renderStaysView();
        break;
      case 'car':
        this.renderCarView();
        break;
      case 'checklist':
        this.renderChecklistView();
        break;
      case 'overview':
        this.renderOverviewView();
        break;
      default:
        this.renderTimelineView();
    }
  }

  renderTimelineView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    if (this.searchTerm) {
      this.renderSearchResults();
      return;
    }

    const day = TRIP_DATA.days.find(d => d.dayNum === this.currentDay) || TRIP_DATA.days[0];
    const stay = day.accommodationId ? TRIP_DATA.accommodations.find(a => a.id === day.accommodationId) : null;

    let activitiesHtml = '';

    // Handle Day 10 options
    let displayActivities = day.activities;
    if (day.dayNum === 10 && day.options) {
      const activeOption = day.options[this.day10Option === 'A' ? 'optionA' : 'optionB'];
      displayActivities = activeOption.activities;
    }

    displayActivities.forEach((act, idx) => {
      const actKey = `d${day.dayNum}_a${idx}`;
      const isChecked = !!this.checkedActivities[actKey];
      const mapsUrl = act.locationQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.locationQuery)}` : null;

      activitiesHtml += `
        <div class="activity-card ${isChecked ? 'completed' : ''}">
          <div class="activity-header">
            <label class="custom-checkbox-container">
              <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="window.nzApp.toggleActivityCheck('${actKey}')">
              <span class="checkmark"></span>
            </label>
            <div class="activity-time-badge">${act.time}</div>
            <div class="activity-cost-badge ${act.cost.includes('FREE') ? 'cost-free' : 'cost-paid'}">${act.cost}</div>
          </div>
          <div class="activity-body">
            <h4 class="activity-name">${act.name}</h4>
            <p class="activity-desc">${act.desc}</p>
          </div>
          ${mapsUrl ? `
            <div class="activity-actions">
              <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-maps-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                Navigate (Google Maps)
              </a>
            </div>
          ` : ''}
        </div>
      `;
    });

    let day10ToggleHtml = '';
    if (day.dayNum === 10) {
      day10ToggleHtml = `
        <div class="day10-toggle-box">
          <div class="toggle-header">
            <span class="badge-alert">⚠️ Schedule Decision</span>
            <h4>Queenstown vs Mount Cook Itinerary Toggle</h4>
          </div>
          <p class="toggle-expl">
            Your documents have two variants for Day 10 (8-Oct): Spend the day relaxing in Queenstown (TSS Earnslaw steamship & Lake Wakatipu) OR depart for Twizel / Mount Cook if your 3-night Airbnb starts on the 8th.
          </p>
          <div class="toggle-buttons">
            <button class="toggle-btn ${this.day10Option === 'A' ? 'active' : ''}" onclick="window.nzApp.setDay10Option('A')">
              <strong>Option A</strong>: Queenstown Cruise & Chill
            </button>
            <button class="toggle-btn ${this.day10Option === 'B' ? 'active' : ''}" onclick="window.nzApp.setDay10Option('B')">
              <strong>Option B</strong>: Depart for Mount Cook Today
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="day-hero-card">
        <div class="day-hero-top">
          <div class="day-tag">Day ${day.dayNum} of 13</div>
          <div class="day-date-display">${day.date}</div>
        </div>
        <h2 class="day-title">${day.title}</h2>
        <p class="day-tagline">${day.tagline}</p>
        
        <div class="day-meta-row">
          <div class="meta-item">
            <span class="meta-icon">🚗</span>
            <div class="meta-content">
              <span class="meta-lbl">Route</span>
              <span class="meta-val">${day.route}</span>
            </div>
          </div>
          <div class="meta-item">
            <span class="meta-icon">⏱️</span>
            <div class="meta-content">
              <span class="meta-lbl">Drive Time</span>
              <span class="meta-val">${day.driveTime}</span>
            </div>
          </div>
        </div>

        ${day.alertMessage ? `
          <div class="critical-alert-banner">
            <span class="alert-icon">⚡</span>
            <div><strong>IMPORTANT:</strong> ${day.alertMessage}</div>
          </div>
        ` : ''}

        <div class="highlights-pill-wrap">
          ${(day.highlights || []).map(h => `<span class="highlight-chip">✨ ${h}</span>`).join('')}
        </div>
      </div>

      ${day10ToggleHtml}

      <div class="timeline-section">
        <div class="section-title-row">
          <h3 class="section-title">Daily Schedule</h3>
          <span class="items-count">${displayActivities.length} stops</span>
        </div>
        <div class="activities-timeline">
          ${activitiesHtml}
        </div>
      </div>

      ${stay ? `
        <div class="night-stay-banner">
          <div class="stay-banner-header">
            <span class="stay-banner-icon">🏨</span>
            <div>
              <span class="stay-banner-sub">Tonight's Accommodation</span>
              <h4 class="stay-banner-title">${stay.name} (${stay.city})</h4>
            </div>
          </div>
          <p class="stay-banner-addr">📍 ${stay.address}</p>
          <div class="stay-banner-badges">
            <span class="badge-chip">Check-in: ${stay.checkIn}</span>
            <span class="badge-chip">Check-out: ${stay.checkOut}</span>
            <span class="badge-chip platform-chip">${stay.platform}</span>
          </div>
          <div class="stay-banner-actions">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.mapsQuery)}" target="_blank" rel="noopener" class="btn-action-glow">
              Open in Google Maps
            </a>
            ${stay.emailLink ? `
              <a href="${stay.emailLink}" target="_blank" rel="noopener" class="btn-action-ghost">
                Gmail Confirmation
              </a>
            ` : ''}
          </div>
        </div>
      ` : ''}

      <div class="day-navigation-footer">
        ${day.dayNum > 1 ? `
          <button class="btn-day-nav prev" onclick="window.nzApp.selectDay(${day.dayNum - 1})">
            ← Day ${day.dayNum - 1}
          </button>
        ` : `<div></div>`}
        ${day.dayNum < 13 ? `
          <button class="btn-day-nav next" onclick="window.nzApp.selectDay(${day.dayNum + 1})">
            Day ${day.dayNum + 1} →
          </button>
        ` : `<div></div>`}
      </div>
    `;
  }

  setDay10Option(option) {
    this.day10Option = option;
    localStorage.setItem('nz_day10_option', option);
    this.renderTimelineView();
  }

  toggleActivityCheck(key) {
    this.checkedActivities[key] = !this.checkedActivities[key];
    this.saveCheckedActivities();
    this.renderTimelineView();
    this.updateStatsBar();
  }

  /* ==========================================================================
     GEMINI AI ROAD CO-PILOT (100% Client-Side Local Storage)
     ========================================================================== */

  saveGeminiKey(key) {
    if (!key || !key.trim()) return;
    this.geminiApiKey = key.trim();
    localStorage.setItem('nz_gemini_api_key', this.geminiApiKey);
    this.renderCopilotView();
  }

  removeGeminiKey() {
    if (confirm("Remove your Gemini API key from this device?")) {
      this.geminiApiKey = '';
      localStorage.removeItem('nz_gemini_api_key');
      this.renderCopilotView();
    }
  }

  clearCopilotChat() {
    this.chatHistory = [];
    localStorage.removeItem('nz_copilot_chat');
    this.renderCopilotView();
  }

  setCopilotDay(d) {
    this.copilotDay = parseInt(d, 10);
    this.renderCopilotView();
  }

  formatMarkdown(text) {
    if (!text) return '';
    let str = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown links: [text](https://...)
    str = str.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Headers
    str = str.replace(/^###\s+(.*)$/gm, '<h4>$1</h4>');
    str = str.replace(/^##\s+(.*)$/gm, '<h3>$1</h3>');
    str = str.replace(/^#\s+(.*)$/gm, '<h2>$1</h2>');

    // Bold **text**
    str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic *text*
    str = str.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');

    // Unordered bullet lists: match contiguous block of lines starting with *, -, or •
    str = str.replace(/((?:^[ \t]*[-*•]\s+.*(?:\r?\n|$))+)/gm, (match) => {
      const items = match.trim().split(/\r?\n/).map(line => {
        const item = line.replace(/^[ \t]*[-*•]\s+/, '').trim();
        return `<li>${item}</li>`;
      }).join('');
      return `<ul>${items}</ul>\n`;
    });

    // Ordered lists: match contiguous block of lines starting with 1., 2., etc.
    str = str.replace(/((?:^[ \t]*\d+\.\s+.*(?:\r?\n|$))+)/gm, (match) => {
      const items = match.trim().split(/\r?\n/).map(line => {
        const item = line.replace(/^[ \t]*\d+\.\s+/, '').trim();
        return `<li>${item}</li>`;
      }).join('');
      return `<ol>${items}</ol>\n`;
    });

    // Paragraphs: split by double newlines
    const paragraphs = str.split(/\n\n+/);
    str = paragraphs.map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<h2') || p.startsWith('<h3') || p.startsWith('<h4')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).filter(Boolean).join('');

    return str;
  }

  async sendCopilotMessage(promptText) {
    const text = promptText || (document.getElementById('copilotInput') ? document.getElementById('copilotInput').value.trim() : '');
    if (!text) return;

    if (!this.geminiApiKey) {
      alert('Please enter and save your Gemini API key first.');
      return;
    }

    const userMsg = {
      role: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.chatHistory.push(userMsg);
    this.copilotLoading = true;
    this.renderCopilotView();

    setTimeout(() => {
      const chatArea = document.getElementById('copilotMessagesArea');
      if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
    }, 50);

    try {
      const responseText = await this.callGeminiAPI(text);
      this.chatHistory.push({
        role: 'model',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      localStorage.setItem('nz_copilot_chat', JSON.stringify(this.chatHistory));
    } catch (err) {
      console.error(err);
      this.chatHistory.push({
        role: 'model',
        text: `⚠️ Error calling Gemini API: ${err.message}\n\nPlease check that your API key is valid at https://aistudio.google.com/app/apikey.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      });
    } finally {
      this.copilotLoading = false;
      this.renderCopilotView();
      setTimeout(() => {
        const chatArea = document.getElementById('copilotMessagesArea');
        if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
      }, 50);
    }
  }

  async getAvailableModels() {
    if (this.cachedModel) return [this.cachedModel];

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(this.geminiApiKey)}`);
      if (res.ok) {
        const data = await res.json();
        const available = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace(/^models\//, ''));

        if (available.length > 0) {
          const preferences = [
            'gemini-2.5-flash',
            'gemini-3.8-flash',
            'gemini-2.0-flash',
            'gemini-2.0-flash-exp',
            'gemini-1.5-flash-latest',
            'gemini-1.5-flash',
            'gemini-1.5-pro-latest',
            'gemini-1.5-pro',
            'gemini-pro'
          ];
          const sorted = [];
          for (const pref of preferences) {
            if (available.includes(pref)) sorted.push(pref);
          }
          for (const m of available) {
            if (!sorted.includes(m)) sorted.push(m);
          }
          return sorted;
        }
      }
    } catch (e) {
      console.warn("Could not list models:", e);
    }

    // Default fallback order if listModels is unavailable
    return [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash-latest',
      'gemini-1.5-pro-latest',
      'gemini-pro'
    ];
  }

  async callGeminiAPI(userQuery) {
    const day = TRIP_DATA.days.find(d => d.dayNum === this.copilotDay) || TRIP_DATA.days[0];
    const stay = day.accommodationId ? TRIP_DATA.accommodations.find(a => a.id === day.accommodationId) : null;
    const car = TRIP_DATA.carRental;

    const systemInstruction = `You are the expert New Zealand South Island road trip co-pilot for Simar and Sheen. They are on a 13-day road trip from 29 Sep to 11 Oct 2026 driving a ${car.vehicle} SUV from APEX Car Rentals.
Current Trip Context:
- Day ${day.dayNum} (${day.date}): "${day.title}"
- Route: ${day.route}
- Estimated drive time: ${day.driveTime}
- Key planned highlights: ${(day.highlights || []).join(', ')}
${stay ? `- Tonight's stay: ${stay.name} in ${stay.city} (${stay.address}). Check-in: ${stay.checkIn}` : ''}

Your Mission:
Give concise, highly practical, actionable advice tailored for on-the-road travelers.
- State specific distances, approximate drive times, exact names for Google Maps search, reputable bakeries/cafes, scenic roadside viewpoints, petrol stops, or bad-weather alternatives.
- Use clean formatting with **bold** for place names, section titles (###), and bullet points.
- Provide thorough, complete answers without cutting off. Conclude with a helpful travel tip.`;

    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [
            { text: systemInstruction },
            { text: `Traveler's question for Day ${day.dayNum} (${day.baseCity}): ${userQuery}` }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 4096
      }
    };

    const candidateModels = await this.getAvailableModels();
    let lastError = null;

    for (const model of candidateModels) {
      // Try v1beta then v1
      const endpoints = [
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(this.geminiApiKey)}`,
        `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${encodeURIComponent(this.geminiApiKey)}`
      ];

      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
          });

          if (res.ok) {
            const data = await res.json();
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
              const parts = data.candidates[0].content.parts;
              // Filter out thought parts if present, fallback to all parts if needed
              const nonThoughtParts = parts.filter(p => p.text && !p.thought);
              const validParts = nonThoughtParts.length > 0 ? nonThoughtParts : parts;
              const reply = validParts.map(p => p.text || '').join('\n').trim();
              if (reply) {
                this.cachedModel = model;
                return reply;
              }
            }
          } else {
            const errData = await res.json().catch(() => ({}));
            lastError = (errData && errData.error && errData.error.message) ? errData.error.message : `HTTP ${res.status}`;
            // If it is 404 (model not found), continue loop to try next model
            if (res.status !== 404) {
              // Authentication or permission errors
              throw new Error(lastError);
            }
          }
        } catch (err) {
          if (err.message && !err.message.includes('404') && !err.message.includes('not found')) {
            throw err;
          }
          lastError = err.message;
        }
      }
    }

    throw new Error(lastError || "Could not find a supported Gemini model for this API key.");
  }

  renderCopilotView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const day = TRIP_DATA.days.find(d => d.dayNum === this.copilotDay) || TRIP_DATA.days[0];
    const maskedKey = this.geminiApiKey ? `${this.geminiApiKey.slice(0, 6)}••••••••${this.geminiApiKey.slice(-4)}` : '';

    // If API Key is NOT configured
    if (!this.geminiApiKey) {
      container.innerHTML = `
        <div class="view-header-box">
          <h2 class="view-title">✨ Gemini Road Co-Pilot</h2>
          <p class="view-subtitle">AI-powered on-the-route searches, scenic detours, food stops & weather backups.</p>
        </div>

        <div class="copilot-key-card">
          <div class="key-card-header">
            <div class="security-shield-icon">🔒</div>
            <div>
              <h3>Private Gemini API Setup</h3>
              <p class="security-guarantee-text">
                <strong>100% Private &amp; Secure:</strong> Your key is stored strictly on this phone's browser memory (<code>localStorage</code>). It is <em>never</em> sent to GitHub or any server other than Google's official Gemini endpoint.
              </p>
            </div>
          </div>

          <div class="key-input-group">
            <label for="geminiKeyInput" class="key-input-lbl">Enter Google Gemini API Key</label>
            <div class="key-input-row">
              <input type="password" id="geminiKeyInput" placeholder="Paste your AIzaSy... key here" class="key-input-field" autocomplete="off">
              <button class="btn-toggle-key-vis" onclick="
                const f = document.getElementById('geminiKeyInput');
                f.type = f.type === 'password' ? 'text' : 'password';
                this.textContent = f.type === 'password' ? '👁️' : '🙈';
              " title="Show/Hide Key">👁️</button>
            </div>
            <button class="btn-action-glow btn-save-key" onclick="
              const val = document.getElementById('geminiKeyInput').value;
              window.nzApp.saveGeminiKey(val);
            ">
              Save Securely to Phone
            </button>
          </div>

          <div class="key-help-box">
            <h4>💡 How to get a free API key in 10 seconds:</h4>
            <ol>
              <li>Open <strong><a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio (aistudio.google.com/app/apikey)</a></strong> in your browser.</li>
              <li>Sign in with your Google account.</li>
              <li>Click <strong>"Create API Key"</strong> &rarr; copy the key.</li>
              <li>Paste it into the box above and tap <strong>Save Securely</strong>.</li>
            </ol>
            <p class="key-note">Works with both free Google accounts and paid Google One AI subscriptions.</p>
          </div>
        </div>
      `;
      return;
    }

    // If API Key IS configured: Full Chat Interface
    let chatHtml = '';
    if (this.chatHistory.length === 0) {
      chatHtml = `
        <div class="copilot-welcome-card">
          <div class="welcome-icon">🇳🇿✨</div>
          <h4>Kia Ora, Simar & Sheen!</h4>
          <p>I am your South Island road trip co-pilot. I know your full 13-day itinerary, today's route, driving times, and tonight's accommodation.</p>
          <p class="welcome-sub">Tap any question below or ask me anything as you drive!</p>
        </div>
      `;
    } else {
      this.chatHistory.forEach(msg => {
        const isUser = msg.role === 'user';
        chatHtml += `
          <div class="copilot-msg ${isUser ? 'user-msg' : 'ai-msg'} ${msg.isError ? 'error-msg' : ''}">
            <div class="msg-header">
              <span class="msg-sender">${isUser ? '👤 You' : '✨ Gemini Co-Pilot'}</span>
              <span class="msg-time">${msg.time}</span>
            </div>
            <div class="msg-content">
              ${isUser ? `<p>${msg.text}</p>` : this.formatMarkdown(msg.text)}
            </div>
          </div>
        `;
      });
    }

    if (this.copilotLoading) {
      chatHtml += `
        <div class="copilot-msg ai-msg loading-msg">
          <div class="msg-header">
            <span class="msg-sender">✨ Gemini Co-Pilot</span>
            <span class="msg-time">Thinking...</span>
          </div>
          <div class="shimmer-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="loading-subtext">Searching route recommendations for Day ${day.dayNum} (${day.baseCity})...</div>
        </div>
      `;
    }

    // Render active day context options
    const dayOptions = TRIP_DATA.days.map(d => `
      <option value="${d.dayNum}" ${d.dayNum === this.copilotDay ? 'selected' : ''}>
        Day ${d.dayNum} (${d.date}): ${d.baseCity}
      </option>
    `).join('');

    container.innerHTML = `
      <div class="copilot-container">
        <!-- Top Status Bar with Privacy Badge & Key Settings -->
        <div class="copilot-top-bar">
          <div class="security-status-badge">
            <span class="lock-dot"></span>
            <span>Gemini Connected (Key: ${maskedKey})</span>
          </div>
          <div class="top-bar-actions">
            <button class="btn-sm-ghost" onclick="window.nzApp.clearCopilotChat()" title="Clear Chat History">Clear Chat</button>
            <button class="btn-sm-ghost btn-remove-key" onclick="window.nzApp.removeGeminiKey()" title="Remove API Key">Remove Key</button>
          </div>
        </div>

        <!-- Route Context Selector -->
        <div class="copilot-context-bar">
          <div class="context-info">
            <span class="context-lbl">📍 Active Route Context:</span>
            <select class="context-select" onchange="window.nzApp.setCopilotDay(this.value)">
              ${dayOptions}
            </select>
          </div>
          <div class="context-route-sub">
            🛣️ <strong>${day.route}</strong> (${day.driveTime})
          </div>
        </div>

        <!-- Quick 1-Tap Prompt Chips -->
        <div class="copilot-chips-wrap">
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('What are the best hidden scenic lookouts, photo spots, or short 10-minute walks right along our drive today?')">
            📸 Scenic Stops on Way
          </button>
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('What are the top-rated local cafes, coffee spots, and famous bakeries along this route?')">
            ☕ Best Coffee & Bakeries
          </button>
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('Where can we find famous gourmet meat pies near our route today?')">
            🥧 Famous Pies Nearby
          </button>
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('If it starts raining today, what are the best indoor backup activities, cozy spots, or alternative plans?')">
            ☔ Rainy Day Backups
          </button>
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('Are there any long stretches without petrol stations or restrooms along today\'s drive? Where should we fill up?')">
            ⛽ Petrol & Rest Stops
          </button>
          <button class="copilot-chip" onclick="window.nzApp.sendCopilotMessage('What are the best sunset viewpoints or cozy dinner recommendations near tonight\'s accommodation?')">
            🌅 Sunset & Dinner Spots
          </button>
        </div>

        <!-- Chat Stream Area -->
        <div class="copilot-messages-area" id="copilotMessagesArea">
          ${chatHtml}
        </div>

        <!-- Sticky Chat Input Bar -->
        <div class="copilot-input-bar">
          <input 
            type="text" 
            id="copilotInput" 
            placeholder="Ask about stops, food, parking, weather along Day ${day.dayNum}..." 
            class="copilot-input-field" 
            autocomplete="off"
            onkeypress="if(event.key === 'Enter') window.nzApp.sendCopilotMessage()"
          >
          <button class="btn-copilot-send" onclick="window.nzApp.sendCopilotMessage()" title="Send Question">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  renderStaysView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    let cardsHtml = '';
    TRIP_DATA.accommodations.forEach(stay => {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.mapsQuery)}`;

      cardsHtml += `
        <div class="stay-card" id="${stay.id}">
          <div class="stay-header">
            <div class="stay-badge-pill">${stay.badge}</div>
            <div class="stay-cost-pill">${stay.cost}</div>
          </div>
          <h3 class="stay-hotel-name">${stay.name}</h3>
          <div class="stay-location-tag">📍 ${stay.city}</div>
          
          <div class="stay-details-grid">
            <div class="stay-detail-box">
              <span class="detail-label">Dates & Nights</span>
              <span class="detail-value">${stay.dates} (${stay.nights} ${stay.nights === 1 ? 'night' : 'nights'})</span>
            </div>
            <div class="stay-detail-box">
              <span class="detail-label">Booking Platform</span>
              <span class="detail-value">${stay.platform}</span>
            </div>
            <div class="stay-detail-box">
              <span class="detail-label">Check-In</span>
              <span class="detail-value">${stay.checkIn}</span>
            </div>
            <div class="stay-detail-box">
              <span class="detail-label">Check-Out</span>
              <span class="detail-value">${stay.checkOut}</span>
            </div>
          </div>

          <div class="stay-address-row">
            <strong>Address:</strong> ${stay.address}
          </div>

          ${stay.alert ? `
            <div class="stay-alert-box">
              <span>⚠️</span> ${stay.alert}
            </div>
          ` : ''}

          <div class="stay-notes-box">
            💡 ${stay.notes}
          </div>

          <div class="stay-actions-row">
            <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-action-glow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Google Maps Directions
            </a>
            ${stay.bookingUrl ? `
              <a href="${stay.bookingUrl}" target="_blank" rel="noopener" class="btn-action-ghost">
                Edit Booking
              </a>
            ` : ''}
            ${stay.emailLink ? `
              <a href="${stay.emailLink}" target="_blank" rel="noopener" class="btn-action-ghost">
                Open Email
              </a>
            ` : ''}
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="view-header-box">
        <h2 class="view-title">Accommodations Vault</h2>
        <p class="view-subtitle">All 6 pre-booked accommodations across Christchurch, Hokitika, Franz Josef, Wānaka, Queenstown & Twizel.</p>
      </div>
      <div class="stays-grid">
        ${cardsHtml}
      </div>
    `;
  }

  renderCarView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const car = TRIP_DATA.carRental;
    container.innerHTML = `
      <div class="view-header-box">
        <h2 class="view-title">Transport & Road Trip Logistics</h2>
        <p class="view-subtitle">Vehicle rental confirmations, driver details, and key coach transfers.</p>
      </div>

      <div class="car-highlight-card">
        <div class="car-status-badge">
          <span class="pulse-dot"></span>
          ${car.status}
        </div>
        <h3 class="car-title">${car.company} — ${car.vehicle}</h3>
        <p class="car-subtitle">Booking Number: <strong>${car.bookingNumber}</strong> | Contact: ${car.contactPerson}</p>

        <div class="car-specs-grid">
          <div class="spec-card">
            <span class="spec-label">Pick-up</span>
            <span class="spec-main">${car.pickup}</span>
            <span class="spec-sub">APEX Christchurch Airport Terminal</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Drop-off</span>
            <span class="spec-main">${car.dropoff}</span>
            <span class="spec-sub">APEX Christchurch Airport Terminal</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Excess & Insurance</span>
            <span class="spec-main">${car.excess}</span>
            <span class="spec-sub">Zero liability worry-free driving</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Registered Drivers</span>
            <span class="spec-main">${car.drivers}</span>
            <span class="spec-sub">Both authorized to drive</span>
          </div>
        </div>

        <div class="car-tip-box">
          <strong>🚗 Essential NZ Driving Rules:</strong>
          <ul>
            <li>Drive on the <strong>LEFT</strong> side of the road at all times.</li>
            <li>Use designated slow vehicle bays on alpine passes (Arthur's Pass, Crown Range) to let faster traffic overtake.</li>
            <li>Take extra caution with one-lane wooden bridges (check the priority arrow signs).</li>
            <li>Keep a full tank of fuel before leaving Franz Josef or Haast (limited service stations).</li>
          </ul>
        </div>

        <div class="car-actions">
          <a href="https://www.google.com/maps/search/?api=1&query=Apex+Car+Rentals+Christchurch+Airport" target="_blank" rel="noopener" class="btn-action-glow">
            Navigate to APEX CHC Airport
          </a>
        </div>
      </div>

      <div class="coach-warning-card">
        <div class="coach-icon">🚌</div>
        <div class="coach-content">
          <span class="badge-alert">Crucial Tour Reminder</span>
          <h4>Milford Sound Glass-Roof Coach Tour (Day 9, 7-Oct)</h4>
          <p>Pickup point: <strong>Frankton Bus Shelter at 6:10 AM sharp!</strong></p>
          <p class="coach-sub">Tour is fully booked ($460 AUD). The coach driver will navigate the tricky Homer Tunnel and winding Milford Road while you relax under the glass ceiling.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Frankton+Bus+Shelter+Queenstown" target="_blank" rel="noopener" class="btn-maps-link">
            Map to Frankton Bus Shelter
          </a>
        </div>
      </div>
    `;
  }

  renderChecklistView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    let itemsHtml = '';
    this.packingList.forEach((item, idx) => {
      itemsHtml += `
        <div class="checklist-item ${item.checked ? 'done' : ''}">
          <label class="custom-checkbox-container">
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="window.nzApp.toggleChecklistItem(${idx})">
            <span class="checkmark"></span>
          </label>
          <div class="checklist-item-content">
            <span class="checklist-item-title">${item.item}</span>
            <div class="checklist-item-meta">
              <span class="checklist-tag">${item.category}</span>
              ${item.note ? `<span class="checklist-note">${item.note}</span>` : ''}
            </div>
          </div>
          <button class="btn-delete-item" onclick="window.nzApp.deleteChecklistItem(${idx})" title="Remove item">✕</button>
        </div>
      `;
    });

    const completedCount = this.packingList.filter(i => i.checked).length;
    const totalCount = this.packingList.length;
    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    container.innerHTML = `
      <div class="view-header-box">
        <h2 class="view-title">Packing & Road Trip Gear</h2>
        <p class="view-subtitle">Check items off before you fly out. State is saved directly to your phone.</p>
        
        <div class="progress-container">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <span class="progress-text">${completedCount} of ${totalCount} packed (${percent}%)</span>
        </div>
      </div>

      <div class="add-item-bar">
        <input type="text" id="newPackingInput" placeholder="Add gear, grocery or shopping item..." class="add-item-input">
        <button id="addPackingBtn" class="btn-add-item" onclick="window.nzApp.addCustomItem()">+ Add Item</button>
      </div>

      <div class="checklist-container">
        ${itemsHtml}
      </div>
    `;
  }

  toggleChecklistItem(index) {
    if (this.packingList[index]) {
      this.packingList[index].checked = !this.packingList[index].checked;
      this.savePackingList();
      this.renderChecklistView();
    }
  }

  deleteChecklistItem(index) {
    this.packingList.splice(index, 1);
    this.savePackingList();
    this.renderChecklistView();
  }

  addCustomItem() {
    const input = document.getElementById('newPackingInput');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    this.packingList.unshift({
      id: 'custom-' + Date.now(),
      category: 'Custom',
      item: val,
      checked: false,
      note: 'User added'
    });
    this.savePackingList();
    input.value = '';
    this.renderChecklistView();
  }

  renderOverviewView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    let totalAccomAUD = 0;
    TRIP_DATA.accommodations.forEach(a => {
      const match = a.cost.match(/(\d+(\.\d+)?)/);
      if (match) totalAccomAUD += parseFloat(match[1]);
    });

    container.innerHTML = `
      <div class="view-header-box">
        <h2 class="view-title">Trip Summary & Budget Overview</h2>
        <p class="view-subtitle">Key costs, booked activities, and phone offline tips.</p>
      </div>

      <div class="overview-stats-grid">
        <div class="stat-card">
          <span class="stat-num">13</span>
          <span class="stat-lbl">Epic Days</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">6</span>
          <span class="stat-lbl">Towns & Stays</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">~$1,850</span>
          <span class="stat-lbl">Accommodation (AUD)</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">~2,100 km</span>
          <span class="stat-lbl">Scenic Driving</span>
        </div>
      </div>

      <div class="overview-section-card">
        <h3>Activities & Bookings Summary</h3>
        <table class="simple-table">
          <thead>
            <tr>
              <th>Experience</th>
              <th>Status</th>
              <th>Cost Approx</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Milford Sound Glass-Roof Day Tour</td>
              <td><span class="pill-booked">Confirmed</span></td>
              <td>460 AUD</td>
            </tr>
            <tr>
              <td>Franz Josef Glacier Helicopter Flight</td>
              <td><span class="pill-planned">Planned Day 3</span></td>
              <td>~$300–$550 NZD pp</td>
            </tr>
            <tr>
              <td>Queenstown Jetboat (Shotover/KJet)</td>
              <td><span class="pill-planned">Planned Day 7</span></td>
              <td>~$82–$149 NZD pp</td>
            </tr>
            <tr>
              <td>Skyline Gondola & Alpine Luge</td>
              <td><span class="pill-planned">Planned Day 7</span></td>
              <td>~$70–$99 NZD pp</td>
            </tr>
            <tr>
              <td>Below Zero Ice Bar Lounge</td>
              <td><span class="pill-planned">Planned Day 7</span></td>
              <td>~$35–$45 NZD pp</td>
            </tr>
            <tr>
              <td>TSS Earnslaw Lake Wakatipu Cruise</td>
              <td><span class="pill-planned">Planned Day 10</span></td>
              <td>~$115–$119 NZD pp</td>
            </tr>
            <tr>
              <td>Dark Sky Project Stargazing (Tekapo)</td>
              <td><span class="pill-planned">Planned Day 12</span></td>
              <td>~$129 NZD pp</td>
            </tr>
            <tr>
              <td>Hooker Valley & Blue Pools & Hokitika Gorge</td>
              <td><span class="pill-free">Always Free</span></td>
              <td>$0 NZD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="overview-section-card">
        <h3>📱 How to Install & Run this on Your Phone</h3>
        <div class="guide-steps">
          <div class="guide-step">
            <span class="step-num">1</span>
            <div>
              <strong>Host for Free on GitHub Pages (Recommended)</strong>
              <p>Push this folder to a GitHub repository, go to <em>Settings → Pages</em>, and pick the <code>main</code> branch. You will get a live HTTPS URL!</p>
            </div>
          </div>
          <div class="guide-step">
            <span class="step-num">2</span>
            <div>
              <strong>Add to Home Screen (iOS Safari / Android Chrome)</strong>
              <p>Open your URL on your phone. In Safari, tap the <strong>Share</strong> button and choose <strong>"Add to Home Screen"</strong>. It installs with the native icon and launches full screen without URL bars!</p>
            </div>
          </div>
          <div class="guide-step">
            <span class="step-num">3</span>
            <div>
              <strong>Offline Mode Works Everywhere</strong>
              <p>The integrated Service Worker caches all itinerary stops, check-in instructions, and car details so you can consult it even in remote mountain valleys without mobile data.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSearchResults() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const term = this.searchTerm;
    const matchedActivities = [];

    TRIP_DATA.days.forEach(day => {
      const acts = (day.options && this.day10Option === 'B') ? day.options.optionB.activities : (day.activities || []);
      acts.forEach((act, idx) => {
        if (
          act.name.toLowerCase().includes(term) ||
          act.desc.toLowerCase().includes(term) ||
          act.cost.toLowerCase().includes(term) ||
          day.title.toLowerCase().includes(term) ||
          day.baseCity.toLowerCase().includes(term)
        ) {
          matchedActivities.push({ day, act, idx });
        }
      });
    });

    if (matchedActivities.length === 0) {
      container.innerHTML = `
        <div class="search-empty-state">
          <h3>No results found for "${term}"</h3>
          <p>Try searching for words like "Salmon", "Hooker", "Gondola", "Heli", "Pies", or "Lake".</p>
        </div>
      `;
      return;
    }

    let resultsHtml = '';
    matchedActivities.forEach(({ day, act, idx }) => {
      const actKey = `d${day.dayNum}_a${idx}`;
      const isChecked = !!this.checkedActivities[actKey];
      const mapsUrl = act.locationQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.locationQuery)}` : null;

      resultsHtml += `
        <div class="search-result-item">
          <div class="search-result-day" onclick="window.nzApp.selectDay(${day.dayNum})">
            Day ${day.dayNum} (${day.date}): ${day.baseCity}
          </div>
          <div class="activity-card ${isChecked ? 'completed' : ''}">
            <div class="activity-header">
              <label class="custom-checkbox-container">
                <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="window.nzApp.toggleActivityCheck('${actKey}')">
                <span class="checkmark"></span>
              </label>
              <div class="activity-time-badge">${act.time}</div>
              <div class="activity-cost-badge ${act.cost.includes('FREE') ? 'cost-free' : 'cost-paid'}">${act.cost}</div>
            </div>
            <div class="activity-body">
              <h4 class="activity-name">${act.name}</h4>
              <p class="activity-desc">${act.desc}</p>
            </div>
            ${mapsUrl ? `
              <div class="activity-actions">
                <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-maps-link">
                  Open in Google Maps
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="search-header-result">
        <h3>Found ${matchedActivities.length} matching stop${matchedActivities.length > 1 ? 's' : ''} for "${term}"</h3>
      </div>
      <div class="search-results-list">
        ${resultsHtml}
      </div>
    `;
  }

  updateStatsBar() {
    let totalActs = 0;
    TRIP_DATA.days.forEach(d => {
      const acts = (d.options && this.day10Option === 'B') ? d.options.optionB.activities : (d.activities || []);
      totalActs += acts.length;
    });
    const checkedCount = Object.values(this.checkedActivities).filter(Boolean).length;

    const statsEl = document.getElementById('quickTripProgress');
    if (statsEl) {
      statsEl.innerHTML = `<strong>${checkedCount}</strong> of ${totalActs} stops completed`;
    }
  }
}

// Global bootstrap with immediate execution safeguard
function initNZApp() {
  if (!window.nzApp) {
    window.nzApp = new NZTripApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNZApp);
} else {
  initNZApp();
}
