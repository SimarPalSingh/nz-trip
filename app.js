// NZ Trip Companion App - Logic & Comprehensive Data
// Designed for Simar & Sheen's New Zealand South Island Adventure
// Fully updated with Final Master Itinerary and Essential Logistics

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
      notes: "Central motel location. Walkable or short drive to Riverside Market and Avon River Walk."
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
      checkOut: "8:30 AM (8-Oct)",
      bookingRef: "Confirmed via Airbnb",
      badge: "Nights 6 to 9",
      notes: "Central base for Jetboat, Steamer Wharf, Arrowtown, Glenorchy, and early Milford coach pickup."
    },
    {
      id: "acc-6",
      city: "Twizel / Mount Cook & Lake Tekapo Base",
      name: "Twizel Alpine Home",
      dates: "8 – 11 Oct 2026 (3 Nights)",
      nights: 3,
      address: "15 Sealy Street, Twizel, Canterbury 7901, New Zealand",
      mapsQuery: "15 Sealy Street, Twizel, Canterbury 7901, New Zealand",
      platform: "Airbnb",
      cost: "541 AUD (Total)",
      checkIn: "3:00 PM – 10:00 PM (8-Oct)",
      checkOut: "Before 10:00 AM (11-Oct)",
      bookingRef: "Confirmed via Airbnb",
      badge: "Nights 10 to 12",
      notes: "Spacious stay in Twizel for 3 nights. Your single base for Mount Cook, Hooker Valley, Tasman Glacier, and Lake Tekapo day trip."
    }
  ],
  essentialDetails: [
    {
      id: "biosecurity",
      category: "Border & Customs",
      title: "Biosecurity at Arrival (Christchurch Airport)",
      icon: "🛃",
      summary: "Clean your boots before flying & declare outdoor gear to avoid an instant $400 NZD fine.",
      rules: [
        "Clean your outdoor footwear: All hiking boots, runners, and outdoor gear must be scrubbed completely free of visible mud, soil, grass, and seeds before packing.",
        "Declare on arrival: Tick 'Yes' on your passenger arrival card for outdoor footwear and food. Undeclared dirty gear or restricted food incurs an immediate $400 NZD instant fine."
      ],
      tag: "$400 Instant Fine Alert",
      alertType: "critical"
    },
    {
      id: "sandflies",
      category: "Pest Protection",
      title: "Sandflies & Repellent (West Coast & Fiordland)",
      icon: "🦟",
      summary: "Heavy-duty 40% DEET (Bushman aerosol) is required. Keep off watch faces, plastics, and camera lenses!",
      rules: [
        "Repellent Type: Standard herbal sprays do NOT work against West Coast and Fiordland sandflies; carry heavy-duty 40% DEET (Bushman aerosol).",
        "Application: Spray ankles, wrists, and exposed skin directly. Do not spray on sunglasses, watch screens, camera bodies, or technical gear, as DEET melts plastics and synthetics.",
        "Hotspots: Hokitika Gorge, Haast Pass stops, Blue Pools, and Milford Sound."
      ],
      tag: "40% DEET Bushman Spray",
      alertType: "warning"
    },
    {
      id: "fuel",
      category: "Fuel Strategy",
      title: "Fuel Dead Zones (Remote Alpine Corridors)",
      icon: "⛽",
      summary: "Top up in Springfield (Day 2), Fox Glacier (Day 5), and Twizel (Days 10–11). Remote passes have zero petrol!",
      rules: [
        "Arthur's Pass (Day 2): Fill your tank in Springfield before climbing the pass; fuel stops inside Arthur's Pass are scarce and expensive.",
        "Haast Pass (Day 5): Top up fully in Fox Glacier village before driving south. There is virtually no cell service and no reliable fuel between Haast and Makarora (~80 km).",
        "Lindis Pass / Mt Cook (Days 10–11): Top up in Twizel; Mount Cook Village has only an emergency, premium-priced automated pump."
      ],
      tag: "Springfield • Fox Glacier • Twizel",
      alertType: "warning"
    },
    {
      id: "offline_maps",
      category: "Navigation",
      title: "Offline Maps (All South Island Regions)",
      icon: "🗺️",
      summary: "Download entire South Island Google Maps offline before leaving Christchurch.",
      rules: [
        "Download offline Google Maps for the entire South Island onto both travelers' phones before leaving Christchurch.",
        "Cellular reception cuts out completely through Arthur's Pass (SH73), the Haast Pass corridor (SH6), the Milford Road (SH94), and parts of the Mount Cook Highway (SH80)."
      ],
      tag: "Download Offline Maps",
      alertType: "info"
    },
    {
      id: "mt_john",
      category: "Operating Hours",
      title: "Mt John Observatory Summit Road (Lake Tekapo - Day 12)",
      icon: "🔭",
      summary: "Private toll road ($8 NZD) closes to tourists at 5:00 PM daily for research telescopes. Visit 10:00 AM – 3:30 PM.",
      rules: [
        "The private toll road ($8 NZD per car) up to Mt John and the Astro Café closes to private tourist vehicles around 5:00 PM daily so that astronomical research telescopes can operate without light interference.",
        "Plan to visit between 10:00 AM and 3:30 PM for coffee, cake, and 360-degree basin views."
      ],
      tag: "Closes 5:00 PM Daily ($8 Toll)",
      alertType: "info"
    },
    {
      id: "clay_cliffs",
      category: "Cash Requirement",
      title: "Omarama Clay Cliffs Honesty Box (Day 10)",
      icon: "💵",
      summary: "Private farmland gate honesty box requires $5 NZD cash/coins. No EFTPOS or credit cards.",
      rules: [
        "The cliffs sit on private sheep-farming land along Henburn Road.",
        "The access gate has an honesty box that requires $5 NZD cash/coins (EFTPOS/cards are not accepted). Keep small NZD coins/notes in the glove box."
      ],
      tag: "$5 NZD Cash Honesty Box",
      alertType: "warning"
    },
    {
      id: "hooker_valley",
      category: "Track Access",
      title: "Hooker Valley Early Start (Mount Cook - Day 11)",
      icon: "🥾",
      summary: "White Horse Hill carpark fills completely by 9:00 AM. Arrive by 8:30 AM to guarantee parking!",
      rules: [
        "White Horse Hill carpark fills up completely by 9:00 AM – 9:30 AM in spring.",
        "Arriving around 8:30 AM guarantees parking at the trackhead, avoids walking along the roadside verges, and gets you across the suspension bridges before two-way foot traffic builds up."
      ],
      tag: "Arrive 8:30 AM Sharp",
      alertType: "critical"
    },
    {
      id: "layering",
      category: "Clothing & Weather",
      title: "Alpine Layering & Cabin Essentials (Entire Trip)",
      icon: "🧥",
      summary: "Spring weather can drop from 16°C to 2°C in minutes. Keep warm jackets & beanies inside the car cabin.",
      rules: [
        "Early October is mid-spring. Temperatures can shift from 16°C in sunshine down to 2°C with biting windchill across mountain passes (Arthur's Pass, Crown Range, Lindis Pass, and Mount Cook).",
        "Always keep a packable windproof/rainproof jacket, beanie, and light gloves inside the passenger cabin of the car rather than packed deep in the trunk."
      ],
      tag: "Keep Warm Gear in Car Cabin",
      alertType: "info"
    },
    {
      id: "live_portals",
      category: "Live Updates",
      title: "Road & Trail Status Portals",
      icon: "🌐",
      summary: "Daily status checkers for alpine pass road closures and DOC hiking trail conditions.",
      rules: [
        "Road Alerts: Check journeys.nzta.govt.nz daily before driving across mountain passes (Arthur's Pass, Crown Range, and Lindis Pass) for snow, black ice, or construction alerts.",
        "Track Status: Check doc.govt.nz for short-term trail closures, bridge maintenance, or weather slips (especially around Hokitika Gorge, Haast Pass, and Mount Cook tracks)."
      ],
      tag: "NZTA & DOC Daily Portals",
      alertType: "info",
      links: [
        { label: "NZTA Road Alerts", url: "https://www.journeys.nzta.govt.nz" },
        { label: "DOC Trail Status", url: "https://www.doc.govt.nz" }
      ]
    },
    {
      id: "crown_range_braking",
      category: "Mountain Driving",
      title: "Crown Range Steep Descent (Shift to Low Gear / M2)",
      icon: "🏔️",
      summary: "NZ's highest highway drops steeply into Queenstown. Downshift Mitsubishi ASX to manual mode / M2 to engine brake and prevent brake failure.",
      rules: [
        "When descending from Crown Range summit (1,121m) into Arrowtown/Queenstown, continuous 10% gradients will overheat and glaze disc brakes if you ride the brake pedal.",
        "Shift the automatic Mitsubishi ASX transmission selector into 'M' (Manual) or 'B' (Brake) mode and hold in 2nd gear (M2) so the engine restrains vehicle momentum.",
        "Pull over into marked slow-vehicle turnouts if cars gather behind you."
      ],
      tag: "Use Low Gear (M2 / B)",
      alertType: "warning"
    },
    {
      id: "one_lane_bridges",
      category: "Road Rules",
      title: "One-Lane Bridges (Arrow Priority Rules)",
      icon: "🌉",
      summary: "Dozens of single-lane bridges line SH6 (West Coast & Haast). Large white arrow = you have priority; small red arrow = give way.",
      rules: [
        "South Island highways feature historic single-lane bridges without traffic lights.",
        "Big White Arrow: You have right-of-way, but always slow down and confirm oncoming vehicles are yielding.",
        "Small Red Arrow inside Red Circle: You MUST yield and come to a complete stop before the bridge if another vehicle is approaching."
      ],
      tag: "White Arrow = Priority • Red = Give Way",
      alertType: "info"
    },
    {
      id: "kea_warning",
      category: "Wildlife Caution",
      title: "Kea Alpine Parrots (Otira Viaduct, Arthur's Pass & Kea Point)",
      icon: "🦜",
      summary: "The world's only alpine parrot loves dismantling cars. Never leave windows cracked, and never feed them.",
      rules: [
        "Kea are hyper-intelligent alpine parrots found at Otira Viaduct, Arthur's Pass, and Mount Cook.",
        "They actively chew and tear rubber window wipers, door weatherstripping, and roof antenna seals on parked vehicles.",
        "Keep car windows fully rolled up when parked, never feed them (human food causes fatal dependency), and shoo them gently from your rental car."
      ],
      tag: "Do Not Feed • Protect Car Wipers",
      alertType: "warning"
    },
    {
      id: "night_wildlife",
      category: "Night Driving",
      title: "Mackenzie Basin Night Wildlife (Twizel ↔ Tekapo SH8)",
      icon: "🦘",
      summary: "High concentration of nocturnal wallabies, hares, and possums on pitch-black SH8. Use high beams and avoid sudden swerves.",
      rules: [
        "When returning to Twizel after Lake Tekapo stargazing (Day 12), SH8 has zero streetlights.",
        "The open tussock plains have high densities of wild Bennett's wallabies, European hares, and possums that dart across headlights.",
        "Use high beams when there is no oncoming traffic, scan road shoulders, and brake firmly in a straight line rather than swerving into gravel verges."
      ],
      tag: "Nocturnal Wallaby Hazard",
      alertType: "warning"
    },
    {
      id: "airport_refuel",
      category: "Rental Return",
      title: "Airport Car Return Refuel Strategy (Russley Road)",
      icon: "⛽",
      summary: "APEX charges heavy penalties for non-full tanks. Fill up at NPD or BP on Russley Road, 2 km before the airport terminal.",
      rules: [
        "APEX requires the vehicle returned with a 100% full fuel tank before 3:00 PM on Day 13.",
        "Avoid airport terminal forecourt fuel stations which charge premium tourist markups.",
        "Top up at NPD Russley Road (self-service discount) or BP Connect Russley Road on SH1 (~5 minutes south of Christchurch Airport terminal)."
      ],
      tag: "NPD / BP Russley Road (2 km out)",
      alertType: "info"
    }
  ],
  days: [
    {
      dayNum: 1,
      date: "Tue, 29-Sep",
      title: "Christchurch Arrival & Port Hills Sunset",
      tagline: "Car pickup, heritage city walk, Riverside Market dinner & panoramic Port Hills sunset",
      route: "Christchurch Airport → Central City → Port Hills",
      driveTime: "~30 mins local driving",
      baseCity: "Christchurch",
      accommodationId: "acc-1",
      approxCost: "$0 (Free)",
      highlights: [
        "APEX Rental Car Pickup",
        "Avon River Promenade Walk",
        "Historic New Regent Street",
        "Canterbury Earthquake Memorial",
        "Riverside Market Food Hall",
        "Port Hills / Cashmere Lookouts"
      ],
      essentialRules: [
        {
          title: "Biosecurity Clean Footwear & Declare ($400 Fine Alert)",
          desc: "Clean all hiking footwear thoroughly before flying. Declare outdoor shoes and food on arrival card ('Yes'). Undeclared items incur an instant $400 NZD fine."
        }
      ],
      activities: [
        {
          time: "3:00 PM",
          name: "Pick up Rental Car at APEX Christchurch Airport",
          desc: "Collect confirmed Mitsubishi ASX SUV (Booking #4174153). Terminal collection, $0 Excess, authorized drivers Simar & Sheen.",
          cost: "Car Booked ($0 Excess)",
          type: "logistics",
          locationQuery: "Apex Car Rentals Christchurch Airport",
          freeParking: "APEX Rental Car customer depot at Christchurch Airport (100% Free reserved parking for rental car pickup & return).",
                    freeParkingQuery: "Apex Car Rentals Christchurch Airport",
          paidParking: "Christchurch Airport Short Stay Express Carpark (directly opposite terminal doors) if waiting or meeting passengers before collecting car.",
                    paidParkingCost: "~$8 for 30–60 mins ($35/day)",
                    paidParkingQuery: "Christchurch Airport Short Stay Express",
          parking: "FREE: APEX Airport Depot customer bays (free collection). PAID BACKUP: Airport Short Stay Express (~$8/hr).",
                    parkingQuery: "Apex Car Rentals Christchurch Airport"
        },
        {
          time: "Late Afternoon",
          name: "Heritage City Walk (Avon River, New Regent St & Earthquake Memorial)",
          desc: "Stroll the flat Avon River Promenade, walk past charming Spanish Mission-style New Regent Street, and visit the reflective Canterbury Earthquake National Memorial (100% Free open public sites).",
          cost: "100% FREE (Public City Walk)",
          type: "attraction",
          locationQuery: "Canterbury Earthquake National Memorial Christchurch",
          freeParking: "Christchurch Botanic Gardens Armagh St Carpark (Riccarton Ave / Armagh St bridge) — 100% FREE for up to 180 mins (3 hours)! Enjoy a scenic 7-minute flat stroll along the Avon River straight to the Earthquake Memorial & New Regent St. In addition, all Christchurch central council metered on-street bays become completely FREE after 5:00 PM.",
                    freeParkingQuery: "Christchurch Botanic Gardens Armagh St Carpark",
          paidParking: "Lichfield Street Carpark (33 Lichfield St, multi-level & covered) or West End Carpark (48 Hereford St) for central covered parking.",
                    paidParkingCost: "~$3.30/hr ($15 daily max; $5 flat rate after 5:00 PM)",
                    paidParkingQuery: "Lichfield Street Carpark Christchurch",
          parking: "FREE: Botanic Gardens Armagh St Carpark (180 mins free, 7-min river walk) or on-street after 5 PM. PAID: Lichfield St Carpark (~$3.30/hr, $15 max).",
                    parkingQuery: "Christchurch Botanic Gardens Armagh St Carpark"
        },
        {
          time: "6:00 PM",
          name: "Dinner at Riverside Market",
          desc: "Grab dinner from the vibrant local food stalls, artisan bakeries, and boutique eateries inside Riverside Market (96 Oxford Terrace). Free to enter and browse; pay per meal/drink.",
          cost: "Food & Drinks (~$20-$30)",
          type: "food",
          locationQuery: "Riverside Market Christchurch",
          freeParking: "Free on-street parking after 5:00 PM along Cambridge Terrace, Oxford Terrace, Montreal Street, and Tuam Street. Free 60–120 min bays are also available south of Tuam Street (4-min walk).",
                    freeParkingQuery: "Cambridge Terrace Christchurch",
          paidParking: "Lichfield Street Carpark (33 Lichfield St, multi-level & covered, directly behind Riverside Market with direct sheltered access).",
                    paidParkingCost: "~$3.30/hr ($5 flat evening rate after 5:00 PM)",
                    paidParkingQuery: "Lichfield Street Carpark Christchurch",
          parking: "FREE: On-street parking along Cambridge/Oxford Terrace (free after 5 PM) or south of Tuam St. PAID: Lichfield Street Carpark (~$3.30/hr, $5 night rate).",
                    parkingQuery: "Cambridge Terrace Christchurch"
        },
        {
          time: "7:15 PM",
          name: "Sunset Golden Hour at Port Hills Lookouts",
          desc: "Drive up to the Port Hills lookouts (Sign of the Takahe / Cashmere, Dyers Pass Rd) for spectacular sunset views across the Canterbury Plains and Southern Alps (100% Free public lookout reserve).",
          cost: "100% FREE (Public Viewpoint)",
          type: "viewpoint",
          locationQuery: "Sign of the Takahe Port Hills Christchurch",
          freeParking: "Sign of the Takahe Carpark (Dyers Pass Rd) for stone castle grounds, or continue 3 mins up to Sign of the Kiwi / Summit Road for elevated dual-harbour views (100% Free scenic public reserves).",
                    freeParkingQuery: "Sign of the Takahe Carpark Christchurch",
          parking: "FREE: Sign of the Takahe Carpark (Dyers Pass Rd) or Sign of the Kiwi / Summit Road scenic pull-ins (100% Free).",
                    parkingQuery: "Sign of the Takahe Carpark Christchurch"
        }
      ],
      tips: "Check into Belmont Motor Inn (172 Bealey Ave) after 2:00 PM. Enjoy the flat riverside stroll to shake off flight fatigue."
    },
    {
      dayNum: 2,
      date: "Wed, 30-Sep",
      title: "Christchurch to Hokitika (via Arthur's Pass)",
      tagline: "Castle Hill boulders, Otira Viaduct, Devils Punchbowl & turquoise Hokitika Gorge",
      route: "Christchurch → Castle Hill → Arthur's Pass → Hokitika Gorge → Hokitika",
      driveTime: "~3.5 – 4 hrs driving across SH73",
      baseCity: "Hokitika",
      accommodationId: "acc-2",
      approxCost: "$0 (Free)",
      highlights: [
        "Springfield Giant Donut & Fuel Stop",
        "Castle Hill (Kura Tāwhiti) Boulders",
        "Porters Pass Viewpoint",
        "Otira Viaduct Lookout",
        "Devils Punchbowl Waterfall (45m)",
        "Hokitika Gorge Swing Bridge",
        "Hokitika Beach Driftwood Sunset"
      ],
      essentialRules: [
        {
          title: "Fuel Stop: Top up in Springfield",
          desc: "Fill your petrol tank in Springfield before climbing Arthur's Pass (SH73); fuel inside the pass is scarce and expensive."
        },
        {
          title: "Kea Bird Warning at Otira Viaduct",
          desc: "Do NOT leave car windows cracked or feed keas. These inquisitive alpine parrots aggressively tear and chew windshield wipers and rubber door seals!"
        },
        {
          title: "Offline Maps & Sandfly Alert",
          desc: "No cell reception across Arthur's Pass (SH73). Hokitika Gorge is a major sandfly hotspot—apply 40% DEET Bushman repellent to ankles and wrists."
        }
      ],
      activities: [
        {
          time: "9:15 AM",
          name: "Springfield Giant Pink Donut & Final Fuel Top-up",
          desc: "Quick roadside photo stop at the quirky oversized Springfield Donut in the reserve playground. Top up petrol here before climbing Arthur's Pass (SH73).",
          cost: "FREE Photo / Fuel Top-up",
          type: "viewpoint",
          isScenicStop: true,
          locationQuery: "Springfield Donut Canterbury New Zealand",
          freeParking: "Free roadside pull-in bay beside the Springfield reserve and children's playground right on SH73.",
                    freeParkingQuery: "Springfield Donut Canterbury New Zealand",
          parking: "FREE: Roadside pull-in bay beside Springfield reserve playground right on SH73.",
                    parkingQuery: "Springfield Donut Canterbury New Zealand"
        },
        {
          time: "10:15 AM",
          name: "Drive Great Alpine Highway (SH73) & Castle Hill Walk",
          desc: "Wander the prehistoric limestone rock labyrinth of Kura Tāwhiti / Castle Hill (100% Free public DOC conservation reserve, no tickets or park permits required).",
          cost: "100% FREE (DOC Reserve)",
          type: "nature",
          locationQuery: "Kura Tawhiti Castle Hill Conservation Area",
          freeParking: "Dedicated official DOC Kura Tāwhiti carpark on the left of SH73 (100% Free, modern toilets on site, 5-min flat walking track to limestone formations).",
                    freeParkingQuery: "Castle Hill Car Park SH73 New Zealand",
          parking: "FREE: Official DOC Kura Tāwhiti carpark on SH73 (100% Free, toilets, trackhead).",
                    parkingQuery: "Castle Hill Car Park SH73 New Zealand"
        },
        {
          time: "11:45 AM",
          name: "Porters Pass & Otira Viaduct Lookout",
          desc: "Stop at the dramatic Otira Viaduct cantilever lookout over the gorge (100% Free roadside lookout). Watch out for wild kea alpine parrots—keep car windows shut!",
          cost: "100% FREE (Highway Lookout)",
          type: "viewpoint",
          locationQuery: "Otira Viaduct Lookout Arthurs Pass",
          freeParking: "Wide sealed pull-off at Otira Viaduct Lookout on right side of SH73 heading west (100% Free). Kea warning: keep all car windows shut!",
                    freeParkingQuery: "Otira Viaduct Lookout",
          parking: "FREE: Wide sealed pull-off at Otira Viaduct Lookout on right side of SH73 (100% Free).",
                    parkingQuery: "Otira Viaduct Lookout"
        },
        {
          time: "1:15 PM",
          name: "Devils Punchbowl Waterfall Track",
          desc: "Walk the 1-hour return beech forest track and footbridges to the base of the roaring 131m Devils Punchbowl waterfall (100% Free official DOC track in Arthur's Pass National Park).",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Devils Punchbowl Walking Track Arthurs Pass",
          freeParking: "Dedicated Punchbowl Road Carpark just off SH73 in Arthur's Pass village (100% Free DOC carpark with toilets and footbridge track entrance; do not park on highway shoulder).",
                    freeParkingQuery: "Devils Punchbowl Car Park Arthurs Pass",
          parking: "FREE: Dedicated Punchbowl Road Carpark off SH73 in Arthur's Pass village (100% Free).",
                    parkingQuery: "Devils Punchbowl Car Park Arthurs Pass"
        },
        {
          time: "3:45 PM",
          name: "Hokitika Gorge Turquoise Swing Bridge Walk",
          desc: "Cross curved suspension bridges over intensely milky-turquoise glacier-fed waters (100% Free DOC track). Apply 40% DEET Bushman repellent for sandflies.",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Hokitika Gorge Walk",
          freeParking: "Official DOC sealed carpark at the end of Kokatahi-Gorge Road (100% Free, modern flush toilets, picnic shelters, and trackhead).",
                    freeParkingQuery: "Hokitika Gorge Carpark",
          parking: "FREE: Official DOC sealed carpark at end of Kokatahi-Gorge Road (100% Free).",
                    parkingQuery: "Hokitika Gorge Carpark"
        },
        {
          time: "6:15 PM",
          name: "Hokitika Beach Sunset & Driftwood Sign",
          desc: "Step right onto Hokitika Beach to photograph the famous driftwood sign and enjoy a fiery Tasman Sea sunset (100% Free open public beach).",
          cost: "100% FREE (Public Beach)",
          type: "viewpoint",
          locationQuery: "Hokitika Beach Driftwood Sign",
          freeParking: "Beachside parking bays along Beach Street / Stafford Street, steps from the driftwood sign and 2 Weld Street stay (100% Free, no time restrictions).",
                    freeParkingQuery: "Hokitika Beach Driftwood Sign",
          parking: "FREE: Beachside parking bays along Beach Street / Stafford Street (100% Free).",
                    parkingQuery: "Hokitika Beach Driftwood Sign"
        }
      ],
      tips: "Check-in at 2 Weld Street is between 2:00 PM – 8:30 PM. Keep your 40% DEET handy for Hokitika Gorge!"
    },
    {
      dayNum: 3,
      date: "Thu, 01-Oct",
      title: "Hokitika to Franz Josef",
      tagline: "West Coast rainforest drive, 11:30 AM Glacier Heli Flight & wild glowworms",
      route: "Hokitika → Ross → Franz Josef Glacier",
      driveTime: "~1 hr 45 min south (135 km) on SH6",
      baseCity: "Franz Josef",
      accommodationId: "acc-3",
      approxCost: "Pre-booked item (Terrace Walk: $0)",
      highlights: [
        "Scenic West Coast Highway (SH6)",
        "Lake Ianthe Glassy Mirror Lake Stop",
        "11:30 AM Glacier Helicopter Flight",
        "Franz Josef Alpine Village",
        "Free Terrace Walk Glowing Glowworms"
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Drive South along West Coast Highway (SH6)",
          desc: "Cruise south past historic Ross gold country and ancient podocarp rainforest into Glacier Country (~1 hr 45 min drive).",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "9:45 AM",
          name: "Lake Ianthe Glassy Mirror Lake Stop",
          desc: "Stretch your legs at Lake Ianthe's tranquil picnic reserve and wooden jetty, famous for glassy surface reflections (100% Free roadside reserve).",
          cost: "100% FREE (Lake Stop)",
          type: "nature",
          isScenicStop: true,
          locationQuery: "Lake Ianthe Rest Area SH6",
          freeParking: "Spacious sealed rest area bay right off SH6 with picnic tables and lake edge jetty (100% Free).",
                    freeParkingQuery: "Lake Ianthe Rest Area SH6",
          parking: "FREE: Spacious sealed rest area bay right off SH6 (100% Free).",
                    parkingQuery: "Lake Ianthe Rest Area SH6"
        },
        {
          time: "10:45 AM",
          name: "Check in at Helicopter Flight Base",
          desc: "Check in at The Helicopter Line base (Main Road SH6) for weight checks and alpine safety briefing. Pre-booked commercial glacier experience.",
          cost: "Pre-booked Ticket",
          type: "logistics",
          locationQuery: "The Helicopter Line Franz Josef",
          freeParking: "Your accommodation at 9 Cron Street is only 200m / 3-min flat walk from The Helicopter Line base—leave your car at your chalet for free! Alternatively, free customer parking directly outside The Helicopter Line base.",
                    freeParkingQuery: "9 Cron Street Franz Josef Glacier",
          parking: "FREE: Free guest parking at 9 Cron Street chalet (200m walk) or free customer parking at Heli-base.",
                    parkingQuery: "9 Cron Street Franz Josef Glacier"
        },
        {
          time: "11:30 AM",
          name: "Franz Josef Glacier Helicopter Flight / Heli-Hike",
          desc: "Soar over ice pinnacles and deep blue crevasses with a spectacular alpine snow landing high on Franz Josef Glacier. Pre-booked commercial flight.",
          cost: "Pre-booked (~$300-$600)",
          type: "attraction",
          locationQuery: "Franz Josef Glacier New Zealand"
        },
        {
          time: "Afternoon",
          name: "Unwind in Franz Josef Alpine Village",
          desc: "Explore the relaxed alpine village, browse local galleries, or relax at a cafe (SnakeBite Brewery or Landing Bar). 100% Free to explore.",
          cost: "Coffee / Snacks Optional",
          type: "leisure",
          locationQuery: "Franz Josef Village New Zealand",
          freeParking: "Free street parking along Cron Street or Franz Josef village centre public carpark on Cowan St / Main Road (100% Free, no meters or fees anywhere in the village).",
                    freeParkingQuery: "Franz Josef Village Public Car Park",
          parking: "FREE: Street parking along Cron Street or village centre public carpark (100% Free).",
                    parkingQuery: "Franz Josef Village Public Car Park"
        },
        {
          time: "Night",
          name: "Free Terrace Walk Wild Glowworms",
          desc: "Walk the short 30-min flat rainforest Terrace Walk starting right behind the village. Wild glowworms illuminate mossy tree trunks and ferns along the stream banks naturally in the dark—100% free with no commercial tour needed (saves $60–$100+ vs commercial caves)!",
          cost: "100% FREE (Wild Glowworms)",
          type: "nature",
          locationQuery: "Terrace Walk Franz Josef",
          freeParking: "Walk from 9 Cron Street stay (3-min flat walk), or park at DOC Glacier Visitor Centre carpark on Cowan Street (100% Free).",
                    freeParkingQuery: "Terrace Walk Franz Josef",
          parking: "FREE: Walk from 9 Cron Street (3 mins) or DOC Glacier Visitor Centre carpark on Cowan St (100% Free).",
                    parkingQuery: "Terrace Walk Franz Josef"
        }
      ],
      tips: "Check-in at 9 Cron Street is after 2:00 PM. Bring a phone torch for the Terrace Walk path, but turn it off completely to see the glowworms glow!"
    },
    {
      dayNum: 4,
      date: "Fri, 02-Oct",
      title: "Franz Josef & Fox Glacier",
      tagline: "Weather backup flight window, Lake Matheson mirror loop & glacial valley walks",
      route: "Franz Josef Village ↔ Fox Glacier (Lake Matheson) & Glacier Valley",
      driveTime: "~30 mins local driving",
      baseCity: "Franz Josef",
      accommodationId: "acc-3",
      approxCost: "$0 (Free)",
      highlights: [
        "Heli Flight Backup Weather Window",
        "Lake Matheson Mirror Reflection Loop",
        "Peter's Pool Glacial Mirror Track",
        "Sentinel Rock Valley Viewpoint"
      ],
      activities: [
        {
          time: "All Day",
          name: "Automatic Backup Flight Window",
          desc: "Weather backup window reserved in case Day 3 helicopter flight was delayed or rescheduled due to alpine cloud cover.",
          cost: "Weather Contingency",
          type: "attraction"
        },
        {
          time: "Morning",
          name: "Lake Matheson Mirror-Reflection Loop (Fox Glacier)",
          desc: "Walk the easy 1.5-hr flat circuit around Lake Matheson (100% Free DOC track) for the world-famous mirror reflection of Aoraki / Mount Cook and Mount Tasman across the dark peat waters.",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Lake Matheson Fox Glacier",
          freeParking: "Spacious sealed visitor carpark at Matheson Cafe, end of Cook Flat Road (Fox Glacier) — 100% Free, modern DOC restrooms, gift shop, and cafe trackhead.",
                    freeParkingQuery: "Lake Matheson Carpark Fox Glacier",
          parking: "FREE: Spacious sealed visitor carpark at Matheson Cafe, end of Cook Flat Road (100% Free).",
                    parkingQuery: "Lake Matheson Carpark Fox Glacier"
        },
        {
          time: "Afternoon",
          name: "Peter's Pool Glacial Mirror Track",
          desc: "Easy 25-minute flat stroller-friendly walk through regenerating podocarp rainforest to a kettle lake reflecting the glacier valley (100% Free DOC track).",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Peters Pool Franz Josef",
          freeParking: "Glacier Access Road carpark (end of Franz Josef Glacier Access Rd) with wide parking bays and DOC trail signage (100% Free).",
                    freeParkingQuery: "Peters Pool Franz Josef",
          parking: "FREE: Glacier Access Road carpark at end of Franz Josef Glacier Access Rd (100% Free).",
                    parkingQuery: "Peters Pool Franz Josef"
        },
        {
          time: "Late Afternoon",
          name: "Sentinel Rock Lookout",
          desc: "Short 20-min climb up a glacial moraine ridge for elevated views of Franz Josef Glacier's terminal ice face and retreat markers (100% Free DOC track).",
          cost: "100% FREE (DOC Lookout)",
          type: "viewpoint",
          locationQuery: "Sentinel Rock Franz Josef",
          freeParking: "Shares the main Franz Josef Glacier Access Road carpark (100% Free). Clearly signposted fork off the main valley trail.",
                    freeParkingQuery: "Sentinel Rock Franz Josef",
          parking: "FREE: Shares the main Franz Josef Glacier Access Road carpark (100% Free).",
                    parkingQuery: "Sentinel Rock Franz Josef"
        }
      ],
      tips: "Early morning at Lake Matheson offers the calmest water for mirror reflections. Stop at Matheson Café for hot coffee."
    },
    {
      dayNum: 5,
      date: "Sat, 03-Oct",
      title: "Franz Josef to Wānaka (via Haast Pass)",
      tagline: "Fox Glacier roadside views, Haast Pass waterfalls, Makarora Blue Pools & That Wānaka Tree",
      route: "Franz Josef → Haast Pass → Makarora → Lake Hāwea → Wānaka",
      driveTime: "~4 hrs scenic drive (285 km) across SH6",
      baseCity: "Albert Town (Wānaka)",
      accommodationId: "acc-4",
      approxCost: "$0 (Free)",
      highlights: [
        "Fox Glacier Roadside Views",
        "Knights Point Coastal Lookout",
        "Haast Pass Waterfalls (Thunder Creek & Fantail Falls)",
        "Blue Pools Beech Forest Walk",
        "Lake Hāwea Lookouts (The Neck)",
        "That Wānaka Tree at Sunset"
      ],
      essentialRules: [
        {
          title: "Fuel Dead Zone: Top up in Fox Glacier Village",
          desc: "Top up your tank fully in Fox Glacier village before driving south. There is NO reliable fuel and no mobile signal between Haast and Makarora (~80 km)."
        },
        {
          title: "Sandfly Hotspots at Haast Pass & Blue Pools",
          desc: "Apply 40% DEET Bushman repellent before leaving the car. Do not spray on cameras or sunglasses."
        },
        {
          title: "One-Lane Bridges on SH6",
          desc: "Multiple single-lane bridges along Haast corridor. Big white arrow = you have right-of-way; small red arrow = give way to opposing traffic."
        }
      ],
      activities: [
        {
          time: "Morning",
          name: "Drive South on SH6 with Views of Fox Glacier",
          desc: "Depart Franz Josef driving south along highway SH6 with elevated roadside views over the Fox Glacier valley and lush podocarp rainforest.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "10:45 AM",
          name: "Knights Point Coastal Lookout (Roaring Forties & Fur Seals)",
          desc: "Stop at this panoramic cliff lookout over the crashing Roaring Forties ocean swells; look for fur seals on the rocks below (100% Free public lookout).",
          cost: "100% FREE (Coastal Lookout)",
          type: "viewpoint",
          isScenicStop: true,
          locationQuery: "Knights Point Lookout West Coast",
          freeParking: "Large sealed clifftop carpark right off SH6 with modern DOC restrooms and elevated ocean viewing platforms (100% Free).",
                    freeParkingQuery: "Knights Point Lookout West Coast",
          parking: "FREE: Large sealed clifftop carpark with modern DOC restrooms right off SH6 (100% Free).",
                    parkingQuery: "Knights Point Lookout West Coast"
        },
        {
          time: "Midday",
          name: "Haast Pass Waterfalls (Thunder Creek & Fantail Falls)",
          desc: "Two quick 2-minute flat walks off SH6: Thunder Creek Falls (28m sheer plunge) and Fantail Falls (graceful braided veil over beech forest riverbed). Both 100% Free DOC walks.",
          cost: "100% FREE (DOC Walks)",
          type: "nature",
          locationQuery: "Thunder Creek Falls Haast Pass",
          freeParking: "Dedicated DOC pull-in carparks right along SH6 for both Thunder Creek Falls (2-min walk) and Fantail Falls (2-min walk) (100% Free).",
                    freeParkingQuery: "Thunder Creek Falls Carpark Haast Pass",
          parking: "FREE: Dedicated DOC pull-in carparks right along SH6 for both waterfalls (100% Free).",
                    parkingQuery: "Thunder Creek Falls Carpark Haast Pass"
        },
        {
          time: "Early Afternoon",
          name: "Makarora Blue Pools Beech Forest Walk",
          desc: "Walk through lush silver beech forest to swing bridges over crystal-clear glacial pools where giant brown trout swim (100% Free official DOC track).",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Blue Pools Track Makarora",
          freeParking: "Makarora Blue Pools Carpark (large gravel DOC carpark off SH6, 100% Free. Follow the 30-min flat beech forest track across swing bridges).",
                    freeParkingQuery: "Blue Pools Carpark Makarora",
          parking: "FREE: Makarora Blue Pools Carpark off SH6 (100% Free).",
                    parkingQuery: "Blue Pools Carpark Makarora"
        },
        {
          time: "Late Afternoon",
          name: "Lake Hāwea & The Neck Lookouts",
          desc: "Admire the brilliant cobalt waters of Lake Hāwea and stop at The Neck, a dramatic 1,000-meter-wide ridge separating Lake Hāwea and Lake Wānaka (100% Free roadside stops).",
          cost: "100% FREE (Scenic Lookouts)",
          type: "viewpoint",
          locationQuery: "Lake Hawea Lookout The Neck",
          freeParking: "Elevated gravel lay-bys on the lake-side of SH6 at The Neck (where Lake Hāwea and Lake Wānaka are separated by 1 km of land) — 100% Free.",
                    freeParkingQuery: "The Neck Lake Hawea Lookout",
          parking: "FREE: Elevated gravel lay-bys on lake-side of SH6 at The Neck (100% Free).",
                    parkingQuery: "The Neck Lake Hawea Lookout"
        },
        {
          time: "Sunset",
          name: "Roys Bay Shoreline Stroll to 'That Wānaka Tree'",
          desc: "Stroll the flat lakeside path along Roys Bay to photograph 'That Wānaka Tree' growing solitary out of the lakebed against mountain backdrops (100% Free public lakefront).",
          cost: "100% FREE (Public Lakefront)",
          type: "viewpoint",
          locationQuery: "That Wanaka Tree Roys Bay",
          freeParking: "Wanaka Station Park Carpark (end of Homestead Close) or Roys Bay Carpark on Mt Aspiring Rd (100% Free public lakeside carparks, flat 2-minute stroll along the shoreline path).",
                    freeParkingQuery: "Wanaka Station Park Car Park",
          parking: "FREE: Wanaka Station Park Carpark or Roys Bay Carpark on Mt Aspiring Rd (100% Free, 2-min stroll).",
                    parkingQuery: "Wanaka Station Park Car Park"
        }
      ],
      tips: "Check-in at Albert Town Sanctuary (67 Frye Crescent) is after 2:00 PM. Enjoy dinner in Wānaka village."
    },
    {
      dayNum: 6,
      date: "Sun, 04-Oct",
      title: "Wānaka to Queenstown (via Kawarau Gorge)",
      tagline: "Crown Range alpine drive, Kawarau bungy bridge, Steamer Wharf & Queenstown Gardens",
      route: "Wānaka → Crown Range Road → Kawarau Gorge → Queenstown",
      driveTime: "~1.5 hrs scenic drive (85 km)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      approxCost: "$0 (Free) (Optional Lavender Farm: ~$15 NZD)",
      highlights: [
        "Wānaka Lakefront / Lavender Farm",
        "Historic Cardrona Hotel & Bra Fence",
        "Crown Range Alpine Drive & Lookouts",
        "Kawarau Gorge Suspension Bridge (Bungy Viewing)",
        "Steamer Wharf Waterfront Late Lunch",
        "Queenstown Gardens Peninsula Walk"
      ],
      essentialRules: [
        {
          title: "Crown Range Descent: Shift to Low Gear (M2 / B)",
          desc: "Crown Range is NZ's highest paved highway (1,121m). Descending into Queenstown has steep 10% grades—shift automatic ASX to 'M' (Manual) or 'B' mode and hold 2nd gear to engine-brake and prevent brake glaze/failure."
        },
        {
          title: "Crown Range Weather Check",
          desc: "Check journeys.nzta.govt.nz for weather, wind, or chain requirements before departing Wānaka."
        }
      ],
      activities: [
        {
          time: "9:30 AM",
          name: "Relaxed Wānaka Morning / Lavender Farm",
          desc: "Visit the fragrant Wānaka Lavender Farm (36 Morris Rd). The tearoom and lavender retail shop are 100% free to browse; walking into the flowering lavender fields and animal petting enclosures costs ~$12–$15 NZD per adult.",
          cost: "~$15 NZD (Shop Free)",
          type: "leisure",
          locationQuery: "Wanaka Lavender Farm",
          freeParking: "Free on-site customer carpark at Wanaka Lavender Farm (36 Morris Road, Albert Town) — 100% Free for farm visitors.",
                    freeParkingQuery: "Wanaka Lavender Farm Carpark",
          parking: "FREE: Free on-site customer carpark at Wanaka Lavender Farm (100% Free).",
                    parkingQuery: "Wanaka Lavender Farm Carpark"
        },
        {
          time: "11:15 AM",
          name: "Historic Cardrona Hotel (est. 1863) & Bra Fence",
          desc: "Photograph New Zealand's most iconic historic gold-rush hotel and the quirky Cardrona Bra Fence (100% Free photo stops). Grab a warm coffee or local craft beer by the courtyard fireplace if desired.",
          cost: "FREE Photo (Drinks Optional)",
          type: "attraction",
          isScenicStop: true,
          locationQuery: "Cardrona Hotel Crown Range Road",
          freeParking: "Ample roadside carparking directly in front of and opposite Cardrona Hotel on Crown Range Road (100% Free).",
                    freeParkingQuery: "Cardrona Hotel Crown Range Road",
          parking: "FREE: Roadside carparking directly in front of and opposite Cardrona Hotel (100% Free).",
                    parkingQuery: "Cardrona Hotel Crown Range Road"
        },
        {
          time: "12:00 PM",
          name: "Crown Range Alpine Drive & Summit Lookouts",
          desc: "Drive New Zealand's highest paved highway (1,121m summit saddle). Stop at multiple viewing bays for panoramic sweeps across Arrowtown and the Frankton Basin (100% Free public highway).",
          cost: "100% FREE (Alpine Pass)",
          type: "viewpoint",
          locationQuery: "Crown Range Summit Viewpoint",
          freeParking: "Summit Saddle viewing carparks at 1,121m elevation on both sides of Crown Range Road (100% Free panoramic alpine pull-ins).",
                    freeParkingQuery: "Crown Range Summit Viewpoint",
          parking: "FREE: Summit Saddle viewing carparks at 1,121m elevation on Crown Range Road (100% Free).",
                    parkingQuery: "Crown Range Summit Viewpoint"
        },
        {
          time: "1:00 PM",
          name: "Kawarau Gorge Suspension Bridge Bungy Detour",
          desc: "Visit the historic Kawarau Suspension Bridge, the birthplace of commercial bungy jumping. Walking into the AJ Hackett centre and out onto the viewing deck to watch jumpers is 100% free! (Actual bungy jump or zipride is optional paid activity).",
          cost: "100% FREE Viewing (Jumps Paid)",
          type: "attraction",
          locationQuery: "AJ Hackett Bungy Kawarau Suspension Bridge",
          freeParking: "Large free customer carpark at the AJ Hackett Bungy Centre (Gibbston Highway SH6, 100% Free access to viewing deck and historic suspension bridge).",
                    freeParkingQuery: "AJ Hackett Bungy Kawarau Bridge Carpark",
          parking: "FREE: Large customer carpark at AJ Hackett Bungy Centre (100% Free).",
                    parkingQuery: "AJ Hackett Bungy Kawarau Bridge Carpark"
        },
        {
          time: "2:00 PM",
          name: "Check in & Steamer Wharf Late Lunch",
          desc: "Check into your Queenstown base (Lower Shotover) and head into Steamer Wharf for a relaxed late lunch overlooking Lake Wakatipu.",
          cost: "Lunch (~$20-$30)",
          type: "food",
          locationQuery: "Steamer Wharf Queenstown",
          freeParking: "Park along Park Street by Queenstown Gardens perimeter (100% Free 2–4 hr parking bays, flat 7-min scenic stroll along the lake to Steamer Wharf; avoids Queenstown CBD parking fees!). Also: One Mile Carpark on Lake Esplanade (100% Free all day, 10-12 min walk).",
                    freeParkingQuery: "Park Street Queenstown Gardens Carpark",
          paidParking: "Man Street Carpark (22 Man St, multi-level covered carpark, 4-min walk to wharf) or Church Street Carpark.",
                    paidParkingCost: "~$4.50 – $5.00/hr ($30 daily max)",
                    paidParkingQuery: "Man Street Carpark Queenstown",
          parking: "FREE: Park Street by Queenstown Gardens (free 2–4 hrs, 7-min flat walk) or One Mile Carpark (free all-day). PAID: Man Street Carpark (~$4.50–$5/hr).",
                    parkingQuery: "Park Street Queenstown Gardens Carpark"
        },
        {
          time: "4:30 PM",
          name: "Leisurely Queenstown Gardens Peninsula Walk",
          desc: "Take a leisurely flat walk around Queenstown Gardens peninsula jutting into Lake Wakatipu, surrounded by rose gardens and towering Douglas fir pines (100% Free public council park).",
          cost: "100% FREE (Public Park)",
          type: "nature",
          locationQuery: "Queenstown Gardens",
          freeParking: "Park Street perimeter of Queenstown Gardens (100% Free on-street parking bays right at park entrance, 2–4 hr limit).",
                    freeParkingQuery: "Park Street Queenstown Gardens Carpark",
          paidParking: "Church Street Carpark or Ballarat Street Carpark (~4-min walk) if Park Street is full during busy weekend afternoons.",
                    paidParkingCost: "~$4.50/hr",
                    paidParkingQuery: "Church Street Carpark Queenstown",
          parking: "FREE: Park Street perimeter of Queenstown Gardens (100% Free, 2–4 hr bays). PAID BACKUP: Church St Carpark (~$4.50/hr).",
                    parkingQuery: "Park Street Queenstown Gardens Carpark"
        }
      ],
      tips: "Check-in at Lower Shotover (6 Nobles Lane) is after 3:00 PM. Steamer Wharf is great for afternoon drinks."
    },
    {
      dayNum: 7,
      date: "Mon, 05-Oct",
      title: "Queenstown",
      tagline: "Historic Arrowtown, high-speed jetboat, Steamer Wharf, Queenstown Ice Bar & Remarkables sunset",
      route: "Queenstown ↔ Arrowtown & Kelvin Peninsula",
      driveTime: "~45 mins local driving",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      approxCost: "Pre-booked items (Arrowtown & Kelvin Peninsula: $0)",
      highlights: [
        "Historic Arrowtown & Chinese Settlement",
        "11:00 AM High-Speed Jetboat Ride (Booked)",
        "Queenstown Central Dining & Mall",
        "4:00 PM Queenstown Ice Bar (Booked)",
        "Kelvin Heights / Jack's Point Sunset Drive"
      ],
      activities: [
        {
          time: "9:00 AM – 10:15 AM",
          name: "Historic Arrowtown & Chinese Settlement",
          desc: "Morning stroll around historic Arrowtown down preserved 19th-century tree-lined Buckingham Street and the heritage restored Chinese Settlement (100% Free public historic reserve).",
          cost: "100% FREE (Heritage Reserve)",
          type: "attraction",
          locationQuery: "Arrowtown Chinese Settlement",
          freeParking: "Ramshaw Lane Public Carpark (large free sealed carpark directly behind Buckingham Street along the Arrow River) or Roman Catholic Church / Merioneth St free overflow carpark (100% Free public council parking).",
                    freeParkingQuery: "Ramshaw Lane Carpark Arrowtown",
          parking: "FREE: Ramshaw Lane Public Carpark directly behind Buckingham Street (100% Free, no meters).",
                    parkingQuery: "Ramshaw Lane Carpark Arrowtown"
        },
        {
          time: "11:00 AM",
          name: "High-Speed Jetboat Ride",
          desc: "Hold on for exhilarating 360-degree spins skimming past canyon rock faces at Shotover Jet in Arthur's Point. Pre-booked commercial jetboat experience.",
          cost: "Pre-booked (~$150/pp)",
          type: "attraction",
          locationQuery: "Shotover Jet Arthurs Point Queenstown",
          freeParking: "Shotover Jet River Base carpark, Gorge Road, Arthur's Point (100% Free dedicated customer parking directly next to check-in terminal).",
                    freeParkingQuery: "Shotover Jet Arthurs Point Carpark",
          parking: "FREE: Shotover Jet River Base carpark, Gorge Road, Arthur's Point (100% Free on-site).",
                    parkingQuery: "Shotover Jet Arthurs Point Carpark"
        },
        {
          time: "12:30 PM – 2:00 PM",
          name: "Lunch in Queenstown Central",
          desc: "Enjoy lunch in Queenstown CBD (e.g. lakeside bakery, loaded bagels, or Fergburger / Fergbaker). Pay per meal.",
          cost: "Lunch (~$20-$30)",
          type: "food",
          locationQuery: "Queenstown Mall",
          freeParking: "Park along Park Street by Queenstown Gardens (100% Free 2–4 hr bays, flat 6-min lakeside stroll into Queenstown Mall / central restaurants).",
                    freeParkingQuery: "Park Street Queenstown Gardens Carpark",
          paidParking: "Man Street Carpark (22 Man St) or Church Street Carpark right in the downtown core.",
                    paidParkingCost: "~$4.50 – $5.00/hr",
                    paidParkingQuery: "Man Street Carpark Queenstown",
          parking: "FREE: Park Street by Queenstown Gardens (free 2–4 hrs, 6-min walk). PAID: Man St or Church St Carpark (~$4.50–$5/hr).",
                    parkingQuery: "Park Street Queenstown Gardens Carpark"
        },
        {
          time: "2:00 PM – 3:45 PM",
          name: "Downtime along Queenstown Mall / Steamer Wharf",
          desc: "Stroll along Queenstown Mall and Steamer Wharf to watch the historic TSS Earnslaw steamship dock. Free public stroll; optional shopping/drinks.",
          cost: "100% FREE (Leisure Stroll)",
          type: "leisure",
          locationQuery: "Steamer Wharf Queenstown",
          freeParking: "Free on-street parking bays along Park Street / Queenstown Gardens perimeter (free 2–4 hr bays, flat 5-min stroll).",
                    freeParkingQuery: "Park Street Queenstown Gardens Carpark",
          paidParking: "Church Street Carpark or Athol Street Carpark in the central business district.",
                    paidParkingCost: "~$4.50/hr (metered 8:00 AM – 6:00 PM)",
                    paidParkingQuery: "Church Street Carpark Queenstown",
          parking: "FREE: Park Street bays by Queenstown Gardens (free 2–4 hrs, 5-min walk). PAID: Church St / Athol St Carpark (~$4.50/hr).",
                    parkingQuery: "Park Street Queenstown Gardens Carpark"
        },
        {
          time: "4:00 PM – 4:45 PM",
          name: "Queenstown Ice Bar Experience",
          desc: "Chill out in sub-zero crystalline ice rooms with custom cocktails served in handcrafted ice glasses. Pre-booked commercial experience (winter coats and gloves included).",
          cost: "Pre-booked (~$40/pp)",
          type: "attraction",
          locationQuery: "Below Zero Ice Bar Queenstown",
          freeParking: "Park along Park Street by Queenstown Gardens (free 2–4 hrs, 6-min walk) or on-street metered bays which turn 100% FREE after 6:00 PM.",
                    freeParkingQuery: "Park Street Queenstown Gardens Carpark",
          paidParking: "Church Street Carpark (10 Church St, 1-min walk from Ice Bar) or Ballarat Street Carpark.",
                    paidParkingCost: "~$4.50/hr (metered until 6:00 PM)",
                    paidParkingQuery: "Church Street Carpark Queenstown",
          parking: "FREE: Park Street bays (free 2–4 hrs, 6-min walk) or street bays after 6 PM. PAID: Church Street Carpark (~$4.50/hr).",
                    parkingQuery: "Park Street Queenstown Gardens Carpark"
        },
        {
          time: "5:00 PM – 6:30 PM",
          name: "Kelvin Peninsula & Jack's Point Sunset Reflections",
          desc: "Take a scenic drive around Frankton Arm to Kelvin Peninsula / Jack's Point for stunning sunset reflections of the Remarkables mountain range across Lake Wakatipu (100% Free public reserve).",
          cost: "100% FREE (Scenic Drive & Walk)",
          type: "viewpoint",
          locationQuery: "Kelvin Peninsula Queenstown",
          freeParking: "Kelvin Heights Golf Course & Reserve carparks at the end of Peninsula Road for sunset views over Lake Wakatipu (100% Free public carparks).",
                    freeParkingQuery: "Kelvin Heights Peninsula Carpark Queenstown",
          parking: "FREE: Kelvin Heights Golf Course & Reserve carparks at end of Peninsula Road (100% Free).",
                    parkingQuery: "Kelvin Heights Peninsula Carpark Queenstown"
        }
      ],
      tips: "Dress warmly for the ice bar! Sunset reflections over Kelvin Heights are spectacular around 6:00 PM."
    },
    {
      dayNum: 8,
      date: "Tue, 06-Oct",
      title: "Queenstown to Glenorchy & Paradise",
      tagline: "Hugo Tunnel walk, Bob's Cove, Mrs Woolly's pies, iconic red boat shed & LOTR Paradise Valley",
      route: "Queenstown → Arthur's Point → Bob's Cove → Glenorchy → Paradise → Queenstown",
      driveTime: "~45 mins each way (45 km scenic drive)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      approxCost: "$0 (Free)",
      highlights: [
        "Arthur's Point Hugo Tunnel Forest Walk",
        "Bob's Cove Turquoise Bay & Bennett's Bluff",
        "Mrs Woolly's Gourmet Pie Lunch",
        "Glenorchy Red Boat Shed & Boardwalk",
        "Paradise Valley Scenic Alpine Drive"
      ],
      activities: [
        {
          time: "9:00 AM – 9:45 AM",
          name: "Arthur's Point Forest Walk & Historic Hugo Tunnel",
          desc: "Take an easy forest walk down the Lower Shotover Canyon track in Arthur's Point to the historic gold-mining tunnel and roaring riverbank (100% Free public reserve).",
          cost: "100% FREE (Historic Reserve)",
          type: "nature",
          locationQuery: "Arthurs Point Hugo Tunnel Queenstown",
          freeParking: "Oxenbridge Mill Carpark at the end of Gorge Road (Arthur's Point) or Edith Cavell Bridge parking area (100% Free DOC reserves).",
                    freeParkingQuery: "Oxenbridge Mill Carpark Arthurs Point",
          parking: "FREE: Oxenbridge Mill Carpark at end of Gorge Road or Edith Cavell Bridge area (100% Free).",
                    parkingQuery: "Oxenbridge Mill Carpark Arthurs Point"
        },
        {
          time: "10:00 AM",
          name: "Scenic Lake Drive, Bob's Cove & Bennett's Bluff",
          desc: "Drive the world-class lakefront road toward Glenorchy, stopping at Bob's Cove for a 30-min flat bushwalk down to a turquoise cove, followed by Bennett's Bluff elevated viewing platform (100% Free DOC trails).",
          cost: "100% FREE (DOC Track & Lookout)",
          type: "nature",
          locationQuery: "Bobs Cove Track Glenorchy Road",
          freeParking: "Bob's Cove trackhead carpark (Glenorchy-Queenstown Rd, 14 km from town) and Bennett's Bluff elevated carpark platform (lake side with safe pedestrian underpass) — 100% Free.",
                    freeParkingQuery: "Bennetts Bluff Lookout Carpark Glenorchy Road",
          parking: "FREE: Bob's Cove trackhead carpark and Bennett's Bluff elevated platform carpark (100% Free).",
                    parkingQuery: "Bennetts Bluff Lookout Carpark Glenorchy Road"
        },
        {
          time: "12:15 PM",
          name: "Arrive in Glenorchy & Lunch at Mrs Woolly's",
          desc: "Arrive in Glenorchy and grab famous savory gourmet pies, artisan sweet treats, and barista coffee at Mrs Woolly's General Store. Free to browse; pay per meal.",
          cost: "Lunch (~$15-$25)",
          type: "food",
          locationQuery: "Mrs Woollys General Store Glenorchy",
          freeParking: "Free customer parking directly outside Mrs Woolly's General Store on Oban Street, plus free unmetered angle street parking in town (100% Free).",
                    freeParkingQuery: "Mrs Woollys General Store Glenorchy",
          parking: "FREE: Customer parking directly outside Mrs Woolly's on Oban Street (100% Free).",
                    parkingQuery: "Mrs Woollys General Store Glenorchy"
        },
        {
          time: "1:15 PM",
          name: "Glenorchy Lagoon Boardwalk & Iconic Red Boat Shed",
          desc: "Walk the flat Glenorchy Lagoon boardwalk with reflective mountain waters and visit the iconic postcard-red lakefront boat shed on the wharf (100% Free public site).",
          cost: "100% FREE (Public Boardwalk)",
          type: "nature",
          locationQuery: "Glenorchy Wharf and Boat Shed",
          freeParking: "Glenorchy Wharf Carpark at the end of Mull Street (100% Free public parking right in front of the iconic red boat shed and lagoon boardwalk).",
                    freeParkingQuery: "Glenorchy Wharf Car Park",
          parking: "FREE: Glenorchy Wharf Carpark at end of Mull Street (100% Free public parking).",
                    parkingQuery: "Glenorchy Wharf Car Park"
        },
        {
          time: "2:00 PM – 4:00 PM",
          name: "Paradise Valley Scenic Alpine Drive",
          desc: "Drive into Paradise Valley along the border of Mount Aspiring National Park to admire vast river plains and snowcapped alpine backdrops (Isengard filming site; 100% Free public road).",
          cost: "100% FREE (Scenic Drive)",
          type: "drive",
          locationQuery: "Paradise Glenorchy New Zealand",
          freeParking: "Roadside gravel pull-in bays along Paradise Road and Mount Aspiring National Park trailhead parking past Dart River bridge (100% Free).",
                    freeParkingQuery: "Paradise Valley Glenorchy",
          parking: "FREE: Roadside pull-in bays along Paradise Road and Mount Aspiring trailhead (100% Free).",
                    parkingQuery: "Paradise Valley Glenorchy"
        }
      ],
      tips: "The road into Paradise Valley is unsealed but smooth and easily handled at moderate speeds in your SUV."
    },
    {
      dayNum: 9,
      date: "Wed, 07-Oct",
      title: "Queenstown to Milford Sound",
      tagline: "Milford Sound glass-roof coach, thundering waterfalls, Mitre Peak & Fiordland cruise",
      route: "Queenstown → Te Anau → Eglinton Valley → Homer Tunnel → Milford Sound",
      driveTime: "Full Day Guided Tour (Relax on coach)",
      baseCity: "Queenstown",
      accommodationId: "acc-5",
      approxCost: "Pre-booked item",
      isHighlightDay: true,
      alertMessage: "CRITICAL: Glass-roof coach departure is from Frankton Bus Shelter at 6:10 AM sharp!",
      highlights: [
        "6:10 AM Frankton Bus Shelter Coach Pickup",
        "Eglinton Valley & Mirror Lakes Stops",
        "Homer Tunnel Alpine Engineering",
        "1:00 PM Milford Sound Nature Cruise",
        "Mitre Peak & Stirling Falls Glacial Water"
      ],
      essentialRules: [
        {
          title: "Milford Sound Sandflies & DEET Rule",
          desc: "Milford Sound wharf has ferocious sandflies. Apply 40% DEET Bushman repellent to ankles and wrists before getting off the coach. Do not spray on camera lenses!"
        },
        {
          title: "Zero Cell Service on Milford Road (SH94)",
          desc: "Cellular reception cuts out completely past Te Anau along SH94. Rely on your driver guide and offline maps."
        }
      ],
      activities: [
        {
          time: "7:00 AM",
          name: "Milford Sound Glass-Roof Coach Departure",
          desc: "Depart Queenstown (Frankton Bus Shelter 6:10 AM pickup) on a premium glass-roof coach through Fiordland National Park, Eglinton Valley, Mirror Lakes, and the Homer Tunnel. Pre-booked commercial tour.",
          cost: "Pre-booked Tour",
          type: "logistics",
          locationQuery: "Frankton Bus Shelter Queenstown",
          freeParking: "Public commuter parking bays along Hawthorne Drive / Frankton (100% Free all-day parking near Frankton Bus Shelter) or arrange a quick 5-min drop-off from Lower Shotover accommodation (6:10 AM sharp!).",
                    freeParkingQuery: "Frankton Bus Shelter Queenstown",
          paidParking: "Queenstown Airport Park & Ride / Long Term Carpark (Brookes Road, Frankton) if commuter street spaces are filled.",
                    paidParkingCost: "~$25 – $30 per day",
                    paidParkingQuery: "Queenstown Airport Park and Ride",
          parking: "FREE: Hawthorne Drive commuter parking bays near Frankton Bus Shelter (free all day). PAID: Airport Park & Ride (~$25–$30/day).",
                    parkingQuery: "Frankton Bus Shelter Queenstown"
        },
        {
          time: "1:00 PM",
          name: "Milford Sound Nature Cruise",
          desc: "Board your scenic catamaran cruise past soaring glacier-carved cliffs (Mitre Peak), stand on the bow beneath thundering Stirling Falls, and spot wild fur seals and dolphins. Pre-booked commercial cruise.",
          cost: "Pre-booked Cruise",
          type: "attraction",
          locationQuery: "Milford Sound Visitor Terminal"
        },
        {
          time: "8:00 PM",
          name: "Return to Queenstown by Coach",
          desc: "Arrive back in Queenstown by coach after an unforgettable journey through Fiordland. Head out for a relaxed, casual dinner.",
          cost: "Dinner (~$25-$35)",
          type: "food",
          locationQuery: "Queenstown CBD"
        }
      ],
      tips: "Bring a waterproof jacket for standing on the cruise bow when the boat noses under waterfalls!"
    },
    {
      dayNum: 10,
      date: "Thu, 08-Oct",
      title: "Queenstown Checkout to Twizel (Mt Cook Afternoon)",
      tagline: "Lindis Pass, Omarama Clay Cliffs, Twizel check-in, Peter's Lookout salmon & Tasman Glacier",
      route: "Queenstown → Lindis Pass → Omarama → Twizel → Lake Pukaki → Mount Cook National Park → Twizel",
      driveTime: "~3 hrs scenic drive to Twizel + ~45 mins up Lake Pukaki",
      baseCity: "Twizel",
      accommodationId: "acc-6",
      approxCost: "~$5 NZD (Clay Cliffs cash donation)",
      highlights: [
        "Lindis Pass Summit Alpine Saddle",
        "Omarama Clay Cliffs Pinnacles ($5 cash)",
        "Twizel Base Check-in & Lunch",
        "Lake Pukaki & Mt Cook Alpine Salmon (Peter's Lookout)",
        "Tasman Glacier Lake / Jetty Track"
      ],
      essentialRules: [
        {
          title: "Cash Honesty Box for Omarama Clay Cliffs ($5 NZD)",
          desc: "The access gate on Henburn Road requires $5 NZD cash/coins (EFTPOS/cards are NOT accepted). Keep small coins/notes in the glove box. Close gate latches behind you!"
        },
        {
          title: "Fuel Stop: Top up in Twizel",
          desc: "Fill your petrol tank in Twizel. Mount Cook Village has only an emergency, premium-priced automated pump."
        }
      ],
      activities: [
        {
          time: "8:30 AM",
          name: "Check out of Queenstown & Drive Lindis Pass",
          desc: "Check out of Lower Shotover accommodation; drive northeast across the dramatic golden tussock mountain pass of the Lindis Pass summit (SH8, 100% Free public highway & lookout).",
          cost: "100% FREE (Alpine Pass)",
          type: "drive",
          locationQuery: "Lindis Pass Viewpoint",
          freeParking: "Sealed summit lookout carparks on both north and southbound sides of SH8 (100% Free scenic viewing pull-offs).",
                    freeParkingQuery: "Lindis Pass Viewpoint Carpark",
          parking: "FREE: Sealed summit lookout carparks on both sides of SH8 (100% Free).",
                    parkingQuery: "Lindis Pass Viewpoint Carpark"
        },
        {
          time: "11:00 AM",
          name: "Omarama Clay Cliffs Pinnacles",
          desc: "Stop at Omarama Clay Cliffs on Henburn Rd to explore towering pinnacles and sharp slot ravines. Note: Located on private sheep station land; requires a $5 NZD cash honesty box donation per vehicle at the farm gate (bring exact NZD cash/coins; latch gate closed behind you).",
          cost: "$5 NZD Cash (Private Land)",
          type: "nature",
          locationQuery: "Omarama Clay Cliffs",
          paidParking: "No free parking alternative available directly at site. The Clay Cliffs are located on private sheep station land accessed via unsealed Henburn Road. You must pay at the farm gate before proceeding to the gravel carpark at the canyon mouth.",
                    paidParkingCost: "$5 NZD cash honesty box per vehicle",
                    paidParkingQuery: "Omarama Clay Cliffs Carpark Henburn Road",
          noFreeParking: true,
          parking: "PAID ACCESS ONLY: No free parking available (private station land). Cost: $5 cash honesty box per vehicle at Henburn Rd access gate.",
                    parkingQuery: "Omarama Clay Cliffs Carpark Henburn Road"
        },
        {
          time: "12:15 PM",
          name: "Check into Twizel Lodging & Lunch",
          desc: "Arrive in Twizel, check into your accommodation at 15 Sealy Street, and have lunch in Twizel town centre.",
          cost: "Lunch (~$20)",
          type: "logistics",
          locationQuery: "15 Sealy Street Twizel",
          freeParking: "Spacious private driveway parking at 15 Sealy Street accommodation (100% Free, secure on-site parking).",
                    freeParkingQuery: "15 Sealy Street Twizel",
          parking: "FREE: Private driveway parking at 15 Sealy Street accommodation (100% Free).",
                    parkingQuery: "15 Sealy Street Twizel"
        },
        {
          time: "2:00 PM",
          name: "Peter's Lookout Lake Pukaki & Alpine Salmon",
          desc: "Stop at Peter's Lookout for 100% free panoramic views over turquoise Lake Pukaki and Mount Cook. Fresh King Salmon sashimi packs from the on-site Mount Cook Alpine Salmon trailer are available for purchase (~$25–$35 NZD).",
          cost: "FREE View / Salmon ~$30 NZD",
          type: "food",
          locationQuery: "Mount Cook Alpine Salmon Peters Lookout",
          freeParking: "Spacious scenic viewing carpark off SH80 overlooking Lake Pukaki; Mount Cook Alpine Salmon shop trailer on site (100% Free).",
                    freeParkingQuery: "Peters Lookout Lake Pukaki Carpark",
          parking: "FREE: Spacious scenic viewing carpark off SH80 overlooking Lake Pukaki (100% Free).",
                    parkingQuery: "Peters Lookout Lake Pukaki Carpark"
        },
        {
          time: "3:00 PM – 5:00 PM",
          name: "Tasman Glacier Lake / Jetty Track",
          desc: "Do the flat Tasman Glacier Lake / Jetty Track (Tasman Valley Rd, 100% Free DOC track) to see giant floating icebergs calved into the lake, or visit the Sir Edmund Hillary Alpine Centre. Drive back to Twizel for dinner.",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Tasman Glacier Track Mt Cook",
          freeParking: "Blue Lakes & Tasman Glacier Carpark (end of Tasman Valley Rd) — 100% Free DOC trackhead with modern flush toilets and trail map boards. Follow the flat Tasman Lake / Jetty Track (20 mins to iceberg lake shore) rather than the steep 300-stair view track!",
                    freeParkingQuery: "Tasman Glacier Carpark Mt Cook",
          parking: "FREE: Blue Lakes & Tasman Glacier Carpark at end of Tasman Valley Rd (100% Free DOC trackhead).",
                    parkingQuery: "Tasman Glacier Carpark Mt Cook"
        }
      ],
      tips: "Peter's Lookout on Lake Pukaki is an unforgettable photo spot with the salmon shop right on site!"
    },
    {
      dayNum: 11,
      date: "Fri, 09-Oct",
      title: "Full Day Mount Cook (Base: Twizel)",
      tagline: "Early Hooker Valley hike, 3 swing bridges, iceberg lake, Kea Point & Hermitage lounge",
      route: "Twizel ↔ White Horse Hill Carpark / Mount Cook Village (~45 mins each way)",
      driveTime: "~1.5 hrs return along Lake Pukaki (SH80)",
      baseCity: "Twizel",
      accommodationId: "acc-6",
      approxCost: "$0 (Free)",
      isHighlightDay: true,
      highlights: [
        "Early 8:30 AM White Horse Hill Arrival",
        "Hooker Valley Track (10 km flat return)",
        "3 Iconic Suspension Bridges",
        "Hooker Glacier Iceberg Lake",
        "Kea Point Track & Hermitage Hotel Lounge"
      ],
      essentialRules: [
        {
          title: "Hooker Valley 8:30 AM Carpark Rule",
          desc: "White Horse Hill carpark fills up completely by 9:00 AM – 9:30 AM. Arriving around 8:30 AM guarantees parking at the trackhead, avoids roadside parking walks, and beats two-way foot traffic."
        },
        {
          title: "Alpine Windproof Layering",
          desc: "Hooker Valley can have biting valley winds even in bright sunshine. Carry windproof jackets and beanies."
        }
      ],
      activities: [
        {
          time: "8:00 AM",
          name: "Depart Twizel Early for White Horse Hill Carpark",
          desc: "Depart Twizel early (~45 mins) to secure free parking at White Horse Hill carpark before peak crowds fill the lot by 9:00 AM.",
          cost: "100% FREE (DOC Trackhead)",
          type: "drive",
          locationQuery: "White Horse Hill Campground Mt Cook",
          freeParking: "White Horse Hill Campground & Day-use Carpark (end of Hooker Valley Rd). 100% Free DOC public carpark. Arrive by 8:30 AM sharp to guarantee a spot at the trackhead; avoids having to park miles down the road verges!",
                    freeParkingQuery: "White Horse Hill Campground Mt Cook",
          parking: "FREE: White Horse Hill Campground & Day-use Carpark (100% Free DOC parking). Arrive by 8:30 AM!",
                    parkingQuery: "White Horse Hill Campground Mt Cook"
        },
        {
          time: "8:45 AM – 12:30 PM",
          name: "Hike the World-Famous Hooker Valley Track",
          desc: "Hike the world-renowned Hooker Valley Track (10 km flat return, 3 suspension swing bridges, ending at the glacier lake with floating icebergs directly beneath the towering face of Aoraki / Mount Cook). 100% Free official DOC track in Mount Cook National Park with zero entrance fees.",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Hooker Valley Track Mt Cook",
          freeParking: "Direct trackhead at White Horse Hill Carpark (100% Free DOC parking with toilets, picnic shelter, and potable water).",
                    freeParkingQuery: "White Horse Hill Campground Mt Cook",
          parking: "FREE: Direct trackhead at White Horse Hill carpark (100% Free DOC parking).",
                    parkingQuery: "White Horse Hill Campground Mt Cook"
        },
        {
          time: "12:30 PM – 1:30 PM",
          name: "Picnic Lunch at White Horse Hill Shelter / Village",
          desc: "Picnic lunch at White Horse Hill shelter or Mount Cook Village cafes.",
          cost: "Picnic / Cafe",
          type: "food",
          locationQuery: "Mount Cook Village New Zealand",
          freeParking: "Mount Cook Village public visitor carparks beside Old Mountaineers Cafe, Sir Edmund Hillary Alpine Centre, and Hermitage Hotel (100% Free public visitor bays).",
                    freeParkingQuery: "Mount Cook Village Public Carpark",
          parking: "FREE: Mount Cook Village public visitor carparks beside Old Mountaineers Cafe & Hermitage Hotel (100% Free).",
                    parkingQuery: "Mount Cook Village Public Carpark"
        },
        {
          time: "1:30 PM – 3:30 PM",
          name: "Kea Point Track or Hermitage Hotel Lounge",
          desc: "Afternoon easy walk along Kea Point Track (1 hr return, 100% Free DOC track) for Mueller Glacier moraine views, or relax with a hot drink at the Hermitage Hotel alpine lounge.",
          cost: "100% FREE (DOC Track)",
          type: "nature",
          locationQuery: "Kea Point Track Mt Cook",
          freeParking: "White Horse Hill carpark (direct trail link to Kea Point) or Hermitage Hotel public visitor parking bays in Mount Cook Village (100% Free).",
                    freeParkingQuery: "The Hermitage Hotel Mount Cook Carpark",
          parking: "FREE: White Horse Hill carpark (trail connects) or Hermitage Hotel public visitor parking (100% Free).",
                    parkingQuery: "The Hermitage Hotel Mount Cook Carpark"
        },
        {
          time: "Late Afternoon",
          name: "Scenic Drive back along Lake Pukaki to Twizel",
          desc: "Drive back down along Lake Pukaki to Twizel for a relaxing dinner at Shawty's Cafe or Ministry of Works.",
          cost: "Dinner (~$25-$35)",
          type: "food",
          locationQuery: "Twizel Town Centre",
          freeParking: "Twizel Market Place centre (ample free parking in front of shops, four square supermarket, and cafes; 100% Free, no time restrictions).",
                    freeParkingQuery: "Twizel Market Place",
          parking: "FREE: Twizel Market Place centre (ample free parking, 100% Free).",
                    parkingQuery: "Twizel Market Place"
        }
      ],
      tips: "Hooker Valley track is mostly flat gravel and boardwalks. Dress in windproof layers as the valley breezes can be brisk."
    },
    {
      dayNum: 12,
      date: "Sat, 10-Oct",
      title: "Lake Tekapo Day Trip (Base: Twizel)",
      tagline: "Mt John Summit Road, Astro Café, Church of the Good Shepherd, Lake Alexandrina & Dark Sky stargazing",
      route: "Twizel ↔ Lake Tekapo day trip (~40 mins each way on SH8, 55 km)",
      driveTime: "~1 hr 20 mins return scenic drive",
      baseCity: "Twizel / Lake Tekapo",
      accommodationId: "acc-6",
      approxCost: "~$8 NZD (Mt John toll)",
      highlights: [
        "Twizel Base (15 Sealy St) Stay",
        "Mt John Observatory Summit Road & Astro Café",
        "Church of the Good Shepherd & Sheepdog Statue",
        "Lake Alexandrina Shoreline Stroll",
        "Free Dark Sky Reserve Shoreline Stargazing"
      ],
      essentialRules: [
        {
          title: "Mt John Summit Road Closes at 5:00 PM Daily",
          desc: "The private toll road ($8 NZD per car) closes to tourist vehicles around 5:00 PM so research telescopes can operate without light interference. Visit between 10:00 AM and 3:30 PM."
        },
        {
          title: "Night Driving Wildlife on SH8 (Twizel Return)",
          desc: "When returning to Twizel after stargazing, SH8 is pitch black with high densities of nocturnal wallabies and hares. Use high beams and avoid sudden swerving."
        }
      ],
      activities: [
        {
          time: "9:30 AM",
          name: "Scenic Morning Drive from Twizel to Lake Tekapo",
          desc: "Depart your Twizel accommodation and take the easy 40-minute drive northeast along SH8 into Lake Tekapo.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "10:30 AM",
          name: "Mt John Observatory Summit Road & Astro Café",
          desc: "Head up to the summit of Mt John for 360-degree panoramic basin views and coffee at the glass Astro Café. Driving up Godley Peaks Road costs an $8 NZD vehicle toll at the barrier gate; hiking up via the Tekapo Springs trackhead is 100% free.",
          cost: "$8 Vehicle Toll (or Free Hike)",
          type: "viewpoint",
          locationQuery: "Astro Cafe Mount John Tekapo",
          freeParking: "Tekapo Springs / Mt John Trackhead Carpark (end of Lakeside Drive). 100% Free public carpark; hike up the scenic Mt John Summit Track (45–60 min moderate walk with panoramic lake views straight to Astro Café).",
                    freeParkingQuery: "Mt John Summit Trackhead Tekapo Springs",
          paidParking: "Drive directly to the summit Astro Café carpark via Godley Peaks Road private access road.",
                    paidParkingCost: "$8 NZD vehicle toll (payable at the automated barrier gate by card/cash; open 9:00 AM – 5:00 PM)",
                    paidParkingQuery: "Mt John Observatory Carpark Tekapo",
          parking: "FREE: Tekapo Springs trackhead carpark (free parking, 45-min scenic hike). PAID DRIVE: Godley Peaks Rd summit road ($8 vehicle toll at gate).",
                    parkingQuery: "Mt John Summit Trackhead Tekapo Springs"
        },
        {
          time: "12:30 PM",
          name: "Lunch in Lake Tekapo Village Centre",
          desc: "Enjoy a relaxed lunch in the Lake Tekapo village centre cafes or lakeside bakeries.",
          cost: "Lunch (~$20)",
          type: "food",
          locationQuery: "Lake Tekapo Village",
          freeParking: "Tekapo Village Centre public carparks along State Highway 8 / Hamilton Drive (100% Free public council parking, ample space, no meters).",
                    freeParkingQuery: "Lake Tekapo Village",
          parking: "FREE: Tekapo Village Centre public carparks along SH8 / Hamilton Drive (100% Free).",
                    parkingQuery: "Lake Tekapo Village"
        },
        {
          time: "2:00 PM",
          name: "Church of the Good Shepherd & Sheepdog Memorial",
          desc: "Visit the iconic stone Church of the Good Shepherd on Pioneer Drive and the bronze Sheepdog Memorial on the turquoise waterfront (100% Free open public site).",
          cost: "100% FREE (Lakeside Grounds)",
          type: "attraction",
          locationQuery: "Church of the Good Shepherd Lake Tekapo",
          freeParking: "Official visitor carpark on Pioneer Drive (100% Free public council parking, 2-min walk along footbridge; overflow free parking across footbridge at Village Centre).",
                    freeParkingQuery: "Church of the Good Shepherd Carpark Tekapo",
          parking: "FREE: Official visitor carpark on Pioneer Drive (100% Free, 2-min walk across footbridge).",
                    parkingQuery: "Church of the Good Shepherd Carpark Tekapo"
        },
        {
          time: "Late Afternoon",
          name: "Lake Alexandrina Easy Shoreline Walk",
          desc: "Drive 10 minutes west to quiet Lake Alexandrina (10 km from Tekapo) for an easy, peaceful shoreline walk away from the crowds (100% Free public wildlife reserve).",
          cost: "100% FREE (Public Reserve)",
          type: "nature",
          locationQuery: "Lake Alexandrina New Zealand",
          freeParking: "Peaceful gravel parking bays at the Lake Alexandrina South Outlet reserve (100% Free public conservation reserve, tranquil non-motorized waters).",
                    freeParkingQuery: "Lake Alexandrina South Outlet Carpark",
          parking: "FREE: Peaceful gravel parking bays at Lake Alexandrina South Outlet reserve (100% Free).",
                    parkingQuery: "Lake Alexandrina South Outlet Carpark"
        },
        {
          time: "Night",
          name: "Free Stargazing on Dark Lake Tekapo Shore",
          desc: "Enjoy world-class stargazing along the dark Lake Tekapo shoreline or Cowans Hill reserve inside the UNESCO International Dark Sky Reserve—completely free without needing an expensive commercial tour (~$150+).",
          cost: "100% FREE Stargazing",
          type: "nature",
          locationQuery: "Lake Tekapo Shoreline Stargazing",
          freeParking: "Cowans Hill reserve carpark or Tekapo lakefront parking off Pioneer Drive (100% Free public parking. Remember: dim headlights upon approach to preserve night vision).",
                    freeParkingQuery: "Cowans Hill Carpark Lake Tekapo",
          parking: "FREE: Cowans Hill reserve carpark or Tekapo lakefront parking off Pioneer Drive (100% Free).",
                    parkingQuery: "Cowans Hill Carpark Lake Tekapo"
        },
        {
          time: "Late Night",
          name: "Scenic Return Drive to Twizel Base (15 Sealy Street)",
          desc: "Take the quiet, easy 40-minute drive back down along SH8 to your Twizel Airbnb (15 Sealy Street) to sleep.",
          cost: "FREE",
          type: "drive",
          locationQuery: "15 Sealy Street Twizel",
          freeParking: "Private driveway parking at 15 Sealy Street accommodation in Twizel (100% Free).",
                    freeParkingQuery: "15 Sealy Street Twizel",
          parking: "FREE: Private driveway parking at 15 Sealy Street accommodation (100% Free).",
                    parkingQuery: "15 Sealy Street Twizel"
        }
      ],
      tips: "Tonight you sleep at your Twizel Airbnb (15 Sealy Street) for your 3rd night. Pack your bags tonight for tomorrow morning's final checkout and drive to Christchurch Airport."
    },
    {
      dayNum: 13,
      date: "Sun, 11-Oct",
      title: "Twizel Checkout to Christchurch Airport (via Fairlie & Geraldine)",
      tagline: "Fairlie Bakehouse pies, Geraldine artisan cheeses, Canterbury Plains & Christchurch flight",
      route: "Twizel (SH8) → Fairlie → Geraldine (SH79) → Christchurch Airport (CHC)",
      driveTime: "~3.5 hrs drive across Canterbury Plains (285 km)",
      baseCity: "Departure (Christchurch Airport)",
      accommodationId: null,
      approxCost: "$0 (Free)",
      highlights: [
        "Twizel 15 Sealy Street Checkout",
        "Fairlie Bakehouse Gourmet Savory Pies",
        "Artisan Country Village of Geraldine",
        "The Geraldine Cheese Company Tasting",
        "3:00 PM Rental Car Return at APEX CHC"
      ],
      essentialRules: [
        {
          title: "Car Return Cutoff: 3:00 PM at APEX CHC",
          desc: "Allow 3.5 hours driving time from Twizel to Christchurch Airport plus stops and 30 minutes for refuel, vehicle inspection, and flight check-in."
        },
        {
          title: "Refuel at NPD / BP Russley Road (2 km Out)",
          desc: "APEX charges steep fees for non-full tanks. Top up at NPD or BP on Russley Road 2 km before the airport terminal rather than expensive airport forecourt stations."
        }
      ],
      activities: [
        {
          time: "9:00 AM",
          name: "Check out of Twizel Base (15 Sealy Street)",
          desc: "Check out of 15 Sealy Street, Twizel and head northeast past Lake Tekapo toward Christchurch via scenic highways SH8 and SH79.",
          cost: "FREE",
          type: "drive",
          locationQuery: "15 Sealy Street Twizel"
        },
        {
          time: "10:30 AM",
          name: "Stop at Fairlie Bakehouse for Famous Savory Pies",
          desc: "Stop at the legendary Fairlie Bakehouse (74 Main St, Fairlie) for famous slow-cooked pork belly with crackling or venison pies.",
          cost: "Pies ~$10-$12 NZD",
          type: "food",
          locationQuery: "Fairlie Bakehouse",
          freeParking: "Main Street parking bays in Fairlie right outside the bakery (74 Main St) or along Regent Street (100% Free angle & parallel street parking).",
                    freeParkingQuery: "Fairlie Bakehouse 74 Main St Fairlie",
          parking: "FREE: Main Street parking bays in Fairlie right outside bakery or along Regent St (100% Free).",
                    parkingQuery: "Fairlie Bakehouse 74 Main St Fairlie"
        },
        {
          time: "11:30 AM – 1:00 PM",
          name: "Geraldine Artisan Village & Free Food Tastings",
          desc: "Stop in the artisan country village of Geraldine to browse The Geraldine Cheese Company and Barker's Foodstore. Free tasting bars offer complimentary samples of gourmet cheeses, chutneys, and syrups; pay only if you choose to buy lunch or retail goodies.",
          cost: "FREE Tastings (Lunch Optional)",
          type: "attraction",
          locationQuery: "The Geraldine Cheese Company Geraldine",
          freeParking: "Geraldine Domain Carpark on Cox Street or Talbot Street public carpark (both 100% Free public council carparks, right beside Barker's & Cheese Co).",
                    freeParkingQuery: "Talbot Street Carpark Geraldine",
          parking: "FREE: Geraldine Domain Carpark on Cox Street or Talbot Street public carpark (100% Free).",
                    parkingQuery: "Talbot Street Carpark Geraldine"
        },
        {
          time: "1:00 PM – 3:00 PM",
          name: "Drive across the Canterbury Plains to Christchurch",
          desc: "Drive across the wide Canterbury Plains into Christchurch with scenic pastoral views.",
          cost: "FREE",
          type: "drive"
        },
        {
          time: "3:00 PM",
          name: "Arrive at Christchurch Airport (CHC) & Return Rental Car",
          desc: "Arrive at Christchurch Airport (CHC), refuel tank at NPD Russley Rd, return rental car to APEX terminal depot before 3:00 PM (Booking #4174153), and check in for your flight home!",
          cost: "Rental Return",
          type: "logistics",
          locationQuery: "Apex Car Rentals Christchurch Airport",
          freeParking: "APEX Car Rentals Christchurch Airport Depot (free customer return bays inside depot grounds). Refuel at NPD Russley Rd or BP Connect Russley Rd (2 km before airport) for local rates before returning.",
                    freeParkingQuery: "Apex Car Rentals Christchurch Airport",
          paidParking: "Christchurch Airport Short Stay Express (~$8 for 30–60 mins, $35/day) if stopping directly at passenger curbside terminal drop-off before returning vehicle.",
                    paidParkingCost: "~$8 (30–60m) / $35 daily",
                    paidParkingQuery: "Christchurch Airport Short Stay Express",
          parking: "FREE: APEX Depot return bays (free return). PAID OPTION: Airport Short Stay Express (~$8/hr) if curbside drop-off is needed.",
                    parkingQuery: "Apex Car Rentals Christchurch Airport"
        }
      ],
      tips: "Check out of 15 Sealy Street Twizel by 9:00 AM. Total drive to Christchurch Airport is ~3.5 hrs plus stops. Refuel before car return."
    }
  ],
  packingChecklist: [
    { id: "p1", category: "Apparel & Gear", item: "Raincoats x 2 (Waterproof / Windproof)", checked: false, note: "Crucial for West Coast & Milford Sound waterfalls" },
    { id: "p2", category: "Apparel & Gear", item: "Scrubbed Clean Hiking Shoes / Runners", checked: false, note: "Biosecurity rule: Must be scrubbed 100% free of mud, soil & seeds to avoid $400 NZD instant fine at CHC Airport!" },
    { id: "p3", category: "Apparel & Gear", item: "Cabin Packable Jackets, Beanies & Light Gloves", checked: false, note: "Keep in passenger cabin (not trunk) for sudden mountain pass temperature drops (16°C down to 2°C)" },
    { id: "p4", category: "Apparel & Gear", item: "Thermal Base Layers & Warm Fleece", checked: false, note: "Alpine mornings & Dark Sky stargazing" },
    { id: "p5", category: "Apparel & Gear", item: "Sunglasses & UV Sunscreen", checked: false, note: "Glacier heli ride & high spring UV index" },
    { id: "p6", category: "Health & Pest", item: "Heavy-Duty 40% DEET (Bushman Aerosol)", checked: false, note: "Herbal sprays do NOT work against sandflies. Hokitika, Haast, Blue Pools, Milford. Keep off camera lenses, watch screens, & plastics!" },
    { id: "p7", category: "Documents & Cash", item: "Driver's Licenses (Simar & Sheen)", checked: false, note: "Required by APEX Car Rentals (both registered drivers)" },
    { id: "p8", category: "Documents & Cash", item: "Passports & NZeTA / Visas", checked: false, note: "International travel essentials" },
    { id: "p9", category: "Documents & Cash", item: "$5 NZD Cash / Coins in Glove Box", checked: false, note: "Required for Omarama Clay Cliffs honesty box (private farmland, no cards/EFTPOS)" },
    { id: "p10", category: "Electronics & Nav", item: "Offline Google Maps Downloaded on Both Phones", checked: false, note: "Full South Island offline maps before leaving CHC (zero cell signal on SH73, SH6, SH94, SH80)" },
    { id: "p11", category: "Electronics & Nav", item: "Car Phone Mount & USB-C / Lightning Cables", checked: false, note: "For in-car GPS navigation in Mitsubishi ASX" },
    { id: "p12", category: "Electronics & Nav", item: "Camera / Drone & Extra Memory Cards", checked: false, note: "Epic South Island landscapes" },
    { id: "p13", category: "Electronics & Nav", item: "Power Bank Portable Battery", checked: false, note: "For long scenic day drives" },
    { id: "p14", category: "Apparel & Gear", item: "Swimwear for Hot Pools / Tekapo Springs", checked: false, note: "Tekapo springs or relaxation" }
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
    this.themeMode = localStorage.getItem('nz_theme_mode') || 'light';

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
    this.initTheme();
    this.registerServiceWorker();
    this.startCountdownTimer();
    this.setupEventListeners();
    this.renderDayPills();
    this.renderCurrentView();
    this.updateStatsBar();
  }

  initTheme() {
    this.applyTheme(this.themeMode);
  }

  applyTheme(theme) {
    this.themeMode = theme;
    localStorage.setItem('nz_theme_mode', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#f1f5f9' : '#0b1120');
    }

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      if (theme === 'light') {
        btn.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-label">Daylight</span>`;
        btn.setAttribute('title', 'Switch to Night Theme (Dark)');
      } else {
        btn.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-label">Night</span>`;
        btn.setAttribute('title', 'Switch to Daylight Outdoor Theme (Light)');
      }
    }
  }

  toggleTheme() {
    const next = this.themeMode === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
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
      let displayCity = day.baseCity;
      if (day.dayNum === 5) {
        displayCity = "Wānaka";
      } else if (day.dayNum === 13) {
        displayCity = "Christchurch";
      } else if (displayCity.includes('(')) {
        displayCity = displayCity.split('(')[0].trim();
      } else if (displayCity.includes('/')) {
        displayCity = displayCity.split('/')[0].trim();
      }

      html += `
        <button class="day-pill ${isSelected ? 'selected' : ''}" onclick="window.nzApp.selectDay(${day.dayNum})">
          <span class="pill-day">Day ${day.dayNum}</span>
          <span class="pill-date">${day.date.split(',')[1] || day.date}</span>
          <span class="pill-loc">${displayCity}</span>
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
    const displayActivities = day.activities || [];

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
            ${act.isScenicStop ? `<div class="scenic-stop-badge">📸 5-Min Scenic Stop</div>` : ''}
            <div class="activity-cost-badge ${this.getCostBadgeClass(act.cost)}">${act.cost}</div>
          </div>
            <div class="activity-body">
              <h4 class="activity-name">${act.name}</h4>
              <p class="activity-desc">${act.desc}</p>
              ${this.renderParkingBox(act)}
            </div>
          ${mapsUrl ? `
            <div class="activity-actions">
              <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-maps-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                Navigate Destination
              </a>
            </div>
          ` : ''}
        </div>
      `;
    });

    let essentialRulesHtml = '';
    if (day.essentialRules && day.essentialRules.length > 0) {
      essentialRulesHtml = `
        <div class="day-essential-rules-box">
          <div class="essential-header">
            <span class="badge-alert">⚡ Essential Field Alert</span>
            <h4>Critical Rules for Today</h4>
          </div>
          <div class="essential-rules-list">
            ${day.essentialRules.map(r => `
              <div class="essential-rule-item">
                <div class="rule-bullet">⚠️</div>
                <div>
                  <strong>${r.title}</strong>
                  <p>${r.desc}</p>
                </div>
              </div>
            `).join('')}
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

        ${essentialRulesHtml}

        <div class="highlights-pill-wrap">
          ${(day.highlights || []).map(h => `<span class="highlight-chip">✨ ${h}</span>`).join('')}
        </div>
      </div>

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



  getCostBadgeClass(costStr) {
    if (!costStr) return 'cost-paid';
    const c = costStr.toUpperCase();
    if (c.includes('PRE-BOOKED') || c.includes('BOOKED')) return 'cost-booked';
    if (c.includes('100% FREE') || c === 'FREE') return 'cost-free';
    if (c.includes('TOLL') || c.includes('HONESTY') || c.includes('CASH') || c.includes('~$15') || c.includes('~$5') || c.includes('~$8') || c.includes('FREE VIEW') || c.includes('FREE PHOTO') || c.includes('FREE TASTINGS') || c.includes('FREE VIEWING')) return 'cost-nominal';
    return 'cost-paid';
  }

  renderParkingBox(act) {
    if (!act.parking && !act.freeParking && !act.paidParking) return '';

    const freeDesc = act.freeParking;
    const freeQuery = act.freeParkingQuery || (act.freeParking ? act.parkingQuery : null);
    const paidDesc = act.paidParking;
    const paidCost = act.paidParkingCost;
    const paidQuery = act.paidParkingQuery;
    const noFree = act.noFreeParking;

    let quickBadge = '';
    if (noFree) {
      quickBadge = `<span class="parking-summary-chip chip-paid-only">⚠️ Paid Only</span>`;
    } else if (freeDesc) {
      quickBadge = `<span class="parking-summary-chip chip-free">🟢 Free Carpark</span>`;
    } else {
      quickBadge = `<span class="parking-summary-chip chip-info">ℹ️ Carpark Info</span>`;
    }

    let innerContent = '';
    if (freeDesc || paidDesc || noFree) {
      innerContent = `
        <div class="activity-parking-box">
          <div class="parking-header">
            <span class="parking-icon">🅿️</span>
            <strong>Parking & Access Guide</strong>
          </div>

          ${noFree ? `
            <div class="parking-tier parking-tier-paid-only">
              <div class="parking-tier-header">
                <span class="parking-tier-badge badge-paid-only">⚠️ Paid Option Only (No Free Parking)</span>
                ${paidCost ? `<span class="parking-cost-pill pill-paid-only">${paidCost}</span>` : ''}
              </div>
              <div class="parking-desc">${paidDesc || act.parking}</div>
              ${paidQuery ? `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(paidQuery)}" target="_blank" rel="noopener" class="btn-parking-map btn-paid-map">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  Navigate to Carpark (${paidCost ? paidCost.split(' ')[0] : 'Paid'})
                </a>
              ` : ''}
            </div>
          ` : `
            ${freeDesc ? `
              <div class="parking-tier parking-tier-free">
                <div class="parking-tier-header">
                  <span class="parking-tier-badge badge-free">🟢 Free Parking (Suggested First)</span>
                </div>
                <div class="parking-desc">${freeDesc}</div>
                ${freeQuery ? `
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(freeQuery)}" target="_blank" rel="noopener" class="btn-parking-map btn-free-map">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    Navigate to Free Parking
                  </a>
                ` : ''}
              </div>
            ` : ''}

            ${paidDesc ? `
              <div class="parking-tier parking-tier-paid">
                <div class="parking-tier-header">
                  <span class="parking-tier-badge badge-paid">🟡 Paid Option (Backup / Closer)</span>
                  ${paidCost ? `<span class="parking-cost-pill">${paidCost}</span>` : ''}
                </div>
                <div class="parking-desc">${paidDesc}</div>
                ${paidQuery ? `
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(paidQuery)}" target="_blank" rel="noopener" class="btn-parking-map btn-paid-map">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    Navigate to Paid Carpark
                  </a>
                ` : ''}
              </div>
            ` : (freeDesc && !paidDesc ? `
              <div class="parking-no-paid-note">
                <span>✓ 100% Free public access — no paid parking required in this area.</span>
              </div>
            ` : '')}
          `}
        </div>
      `;
    } else {
      innerContent = `
        <div class="activity-parking-box">
          <div class="parking-header">
            <span class="parking-icon">🅿️</span>
            <strong>Parking & Access:</strong>
          </div>
          <div class="parking-desc">${act.parking}</div>
          ${act.parkingQuery ? `
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.parkingQuery)}" target="_blank" rel="noopener" class="btn-parking-map">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Navigate to Carpark
            </a>
          ` : ''}
        </div>
      `;
    }

    return `
      <details class="parking-accordion">
        <summary class="parking-summary" title="Click to view/hide parking info">
          <div class="parking-summary-left">
            <span class="parking-sign-badge">🅿️</span>
            <span class="parking-summary-title">Parking Guide</span>
            ${quickBadge}
          </div>
          <div class="parking-summary-right">
            <span class="parking-action-toggle"></span>
            <svg class="parking-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </summary>
        <div class="parking-accordion-content">
          ${innerContent}
          <div class="parking-collapse-row">
            <button type="button" class="btn-parking-close" onclick="this.closest('details').removeAttribute('open')">
              ▲ Hide Parking Info
            </button>
          </div>
        </div>
      </details>
    `;
  }

  setDay10Option(option) {
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
      console.error("Gemini Co-Pilot error:", err);
      let errorDisplay = `⚠️ ${err.message}`;
      if (err.message.includes('Invalid API key') || err.message.includes('key not valid')) {
        errorDisplay += `\n\nPlease check or update your API key in the settings below or at https://aistudio.google.com/app/apikey.`;
      }
      this.chatHistory.push({
        role: 'model',
        text: errorDisplay,
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
    let candidateList = [];

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(this.geminiApiKey)}`);
      if (res.ok) {
        const data = await res.json();
        const available = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace(/^models\//, ''));

        if (available.length > 0) {
          const preferences = [
            'gemini-2.0-flash',
            'gemini-1.5-flash',
            'gemini-2.0-flash-lite',
            'gemini-1.5-flash-8b',
            'gemini-1.5-pro',
            'gemini-2.0-flash-exp',
            'gemini-pro'
          ];
          for (const pref of preferences) {
            if (available.includes(pref) && !candidateList.includes(pref)) candidateList.push(pref);
          }
          for (const m of available) {
            if (!candidateList.includes(m)) candidateList.push(m);
          }
        }
      }
    } catch (e) {
      console.warn("Could not query model list, using standard fallbacks:", e);
    }

    if (candidateList.length === 0) {
      // Standard robust fallback hierarchy
      candidateList = [
        'gemini-2.0-flash',
        'gemini-1.5-flash',
        'gemini-2.0-flash-lite',
        'gemini-1.5-flash-8b',
        'gemini-1.5-pro',
        'gemini-pro'
      ];
    }

    // If a cached model is present, place it first, but keep all other models as live fallbacks
    if (this.cachedModel) {
      return [this.cachedModel, ...candidateList.filter(m => m !== this.cachedModel)];
    }
    return candidateList;
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
Keep in mind essential trip rules: Biosecurity footwear clean on arrival, 40% DEET Bushman repellent for sandflies (Hokitika/Haast/Milford), Springfield/Fox Glacier/Twizel fuel stops, offline Google Maps everywhere, Omarama Clay Cliffs $5 cash honesty box, Hooker Valley 8:30 AM early arrival rule, Mt John 5 PM toll road closing, and alpine layering.
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
    let attemptedModels = [];

    for (const model of candidateModels) {
      attemptedModels.push(model);

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
            const errMsg = (errData && errData.error && errData.error.message) ? errData.error.message : `HTTP ${res.status}`;
            lastError = errMsg;

            // If invalid key or permission error, don't keep trying models with invalid credentials
            if (res.status === 400 && (errMsg.includes('API_KEY_INVALID') || errMsg.includes('key not valid'))) {
              throw new Error("Invalid API key. Please check your Gemini API key.");
            }
            if (res.status === 403) {
              throw new Error(errMsg);
            }

            // If 503 (high demand / capacity exceeded), 429 (rate-limit for this model), 500, or 404:
            console.warn(`Gemini model '${model}' returned ${res.status} (${errMsg}). Trying alternate model...`);
            if (this.cachedModel === model) {
              this.cachedModel = null;
            }
            // Break from endpoint loop (v1beta/v1) for this model and fall back to next model
            break;
          }
        } catch (err) {
          if (err.message && (err.message.includes('Invalid API key') || err.message.includes('API_KEY_INVALID'))) {
            throw err;
          }
          console.warn(`Error connecting to model '${model}':`, err.message);
          lastError = err.message;
          if (this.cachedModel === model) {
            this.cachedModel = null;
          }
          break;
        }
      }
    }

    if (lastError && (lastError.includes('high demand') || lastError.includes('demand') || lastError.includes('Resource has been exhausted') || lastError.includes('quota') || lastError.includes('503'))) {
      throw new Error(`Google's Gemini servers are experiencing temporary high traffic across models (${attemptedModels.slice(0, 3).join(', ')}). Please wait a few seconds and try again.`);
    }

    throw new Error(lastError || "Could not reach Gemini models. Please check your internet connection.");
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
        <p class="view-subtitle">All accommodations across Christchurch, Hokitika, Franz Josef, Wānaka, Queenstown, Twizel & Lake Tekapo.</p>
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
        <p class="view-subtitle">Vehicle rental confirmations, driver details, coach tour, and essential field rules.</p>
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
          <strong>🚗 Essential NZ Mountain Driving & Road Logistics:</strong>
          <ul>
            <li>Drive on the <strong>LEFT</strong> side of the road at all times.</li>
            <li><strong>Crown Range Descent:</strong> Shift Mitsubishi ASX into manual mode / low gear (<strong>M2 / B</strong>) to engine brake down steep switchbacks—riding foot brakes will cause brake glazing and brake failure!</li>
            <li><strong>One-Lane Wooden Bridges:</strong> Big white arrow = you have right-of-way; small red arrow = you MUST yield and give way to oncoming traffic.</li>
            <li><strong>Kea Parrot Warning:</strong> Do NOT feed keas at Otira Viaduct, Arthur's Pass or Mt Cook. Keep car windows shut when parked; keas aggressively strip rubber wiper blades and door weatherstripping.</li>
            <li><strong>Night Wildlife (SH8):</strong> Watch for nocturnal wallabies and hares crossing dark highways between Twizel and Lake Tekapo.</li>
            <li><strong>Airport Refuel Strategy:</strong> APEX requires a 100% full tank. Refuel at NPD or BP on Russley Road (2 km before terminal) to avoid expensive airport forecourt surcharges.</li>
            <li>Use designated slow-vehicle turnouts on alpine passes to let faster traffic overtake courteously.</li>
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

      <!-- Essential Operational & Field Details Section -->
      <div class="essential-section-wrap">
        <div class="view-header-box" style="margin-top: 2rem; margin-bottom: 1.25rem;">
          <h2 class="view-title">⚡ Essential Travel, Operational & Logistical Details</h2>
          <p class="view-subtitle">Official biosecurity rules, 40% DEET repellent protocols, remote fuel dead zones, and road access times.</p>
        </div>

        <div class="essential-details-grid">
          ${(TRIP_DATA.essentialDetails || []).map(item => `
            <div class="essential-detail-card ${item.alertType || ''}">
              <div class="essential-card-header">
                <span class="essential-card-icon">${item.icon}</span>
                <div>
                  <div class="essential-category-tag">${item.category}</div>
                  <h4 class="essential-card-title">${item.title}</h4>
                </div>
              </div>
              <p class="essential-card-summary">${item.summary}</p>
              <div class="essential-rules-box">
                <ul class="essential-rules-bullets">
                  ${item.rules.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
              <div class="essential-card-footer">
                <span class="essential-card-tag-pill">${item.tag}</span>
                ${item.links ? `
                  <div class="essential-portal-links">
                    ${item.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn-portal-link">${l.label} ↗</a>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
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
          <span class="stat-lbl">Confirmed Stays</span>
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
              <td>Milford Sound Glass-Roof Coach & Nature Cruise</td>
              <td><span class="pill-booked">Confirmed (Day 9)</span></td>
              <td>460 AUD</td>
            </tr>
            <tr>
              <td>Franz Josef Glacier Helicopter Flight / Heli-Hike</td>
              <td><span class="pill-booked">Confirmed (Day 3)</span></td>
              <td>Pre-booked</td>
            </tr>
            <tr>
              <td>Queenstown High-Speed Jetboat Ride</td>
              <td><span class="pill-booked">Confirmed (Day 7)</span></td>
              <td>Pre-booked</td>
            </tr>
            <tr>
              <td>Queenstown Ice Bar Experience</td>
              <td><span class="pill-booked">Confirmed (Day 7)</span></td>
              <td>Pre-booked</td>
            </tr>
            <tr>
              <td>Omarama Clay Cliffs Access Gate</td>
              <td><span class="pill-planned">Day 10</span></td>
              <td>$5 NZD Cash (Honesty Box)</td>
            </tr>
            <tr>
              <td>Mt John Observatory Summit Toll Road</td>
              <td><span class="pill-planned">Day 12</span></td>
              <td>$8 NZD per car (closes 5 PM)</td>
            </tr>
            <tr>
              <td>Hooker Valley, Blue Pools, Hokitika Gorge, Lake Matheson</td>
              <td><span class="pill-free">Always Free</span></td>
              <td>$0 NZD</td>
            </tr>
            <tr>
              <td>Castle Hill, Devils Punchbowl, Lake Alexandrina, Port Hills</td>
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
      const acts = day.activities || [];
      acts.forEach((act, idx) => {
        if (
          act.name.toLowerCase().includes(term) ||
          act.desc.toLowerCase().includes(term) ||
          (act.parking && act.parking.toLowerCase().includes(term)) ||
          (act.freeParking && act.freeParking.toLowerCase().includes(term)) ||
          (act.paidParking && act.paidParking.toLowerCase().includes(term)) ||
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
          <p>Try searching for words like "Parking", "Salmon", "Hooker", "Gondola", "Heli", "Pies", or "Lake".</p>
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
              ${act.isScenicStop ? `<div class="scenic-stop-badge">📸 5-Min Scenic Stop</div>` : ''}
              <div class="activity-cost-badge ${this.getCostBadgeClass(act.cost)}">${act.cost}</div>
            </div>
            <div class="activity-body">
              <h4 class="activity-name">${act.name}</h4>
              <p class="activity-desc">${act.desc}</p>
              ${this.renderParkingBox(act)}
            </div>
            ${mapsUrl ? `
              <div class="activity-actions">
                <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-maps-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  Navigate Destination
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
      const acts = d.activities || [];
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
