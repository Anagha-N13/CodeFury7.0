const disastersData = {
  cyclone: {
    title: "Cyclone",
    description: "A cyclone is a large-scale air mass that rotates around a strong center of low atmospheric pressure. It is characterized by strong winds and heavy rain.",
    cause: "Cyclones are caused by the formation of a low-pressure area over warm ocean waters, which leads to the development of intense wind and precipitation.",
    before: [
      "Secure loose objects in your surroundings to prevent them from becoming projectiles.",
      "Stock up on emergency supplies including water, non-perishable food, and medications.",
      "Stay informed via weather updates and have a battery-powered radio on hand.",
      "Identify a safe room in your home where you can stay during the cyclone."
    ],
    during: [
      "Stay indoors and keep away from windows to avoid injury from flying debris.",
      "Avoid using electrical appliances to prevent damage from power surges.",
      "Keep emergency kits handy with essential supplies like flashlights, first-aid, and important documents.",
      "If instructed to evacuate, do so immediately to avoid being trapped by floodwaters."
    ],
    after: [
      "Check your home for damage and be cautious of structural weaknesses.",
      "Avoid downed power lines and report them to authorities.",
      "Listen to local authorities for further instructions and updates on the situation.",
      "Assist neighbors, especially the elderly or disabled, if it is safe to do so."
    ],
    images: [
      require('../../Assets/Ananya/info/cyclone1.png'),
      require('../../Assets/Ananya/info/cyclone2.png'),
      require('../../Assets/Ananya/info/cyclone3.png'),
      require('../../Assets/Ananya/info/cyclone4.png')
    ]
  },
  floods: {
    title: "Flood",
    description: "Flooding is an overflow of water that submerges land that is usually dry. It can cause widespread damage and pose serious risks to life and property.",
    cause: "Floods are often caused by heavy rainfall, storm surges, or melting snow overwhelming rivers, dams, and drainage systems.",
    before: [
      "Move valuable items to higher ground to protect them from water damage.",
      "Create an emergency kit with supplies for at least three days.",
      "Know the flood risk in your area and have a plan for evacuation.",
      "Install check valves in your plumbing to prevent floodwaters from backing up into your drains."
    ],
    during: [
      "Avoid walking or driving through floodwaters, as they can be deeper and stronger than they appear.",
      "Move to higher ground or the highest floor in your home if you are trapped by floodwaters.",
      "Turn off utilities at the main switches or valves if instructed to do so by local authorities.",
      "Keep a battery-powered radio on hand for updates and instructions."
    ],
    after: [
      "Avoid areas that are still flooded, as they can be contaminated or structurally unsafe.",
      "Clean and disinfect everything that got wet to prevent mold and waterborne diseases.",
      "Document any damage for insurance purposes and contact your insurance company as soon as possible.",
      "Be wary of electrical hazards, especially if the power has been turned off."
    ],
    images: [
      require('../../Assets/Ananya/info/flood1.png'),
      require('../../Assets/Ananya/info/flood2.png'),
      require('../../Assets/Ananya/info/flood3.png'),
      require('../../Assets/Ananya/info/flood4.png')
    ]
  },
  tsunami: {
    title: "Tsunami",
    description: "A tsunami is a series of large ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides.",
    cause: "Tsunamis are usually caused by seismic activity on the ocean floor, such as an earthquake or a volcanic eruption.",
    before: [
      "Know the tsunami evacuation routes in your area and have a plan in place.",
      "Keep a battery-powered radio on hand to receive emergency alerts and instructions.",
      "If you are near the coast and feel an earthquake, move to higher ground immediately.",
      "Be aware of natural signs of a tsunami, such as a sudden retreat of the sea."
    ],
    during: [
      "Get to high ground as quickly as possible, even if no official warning has been issued.",
      "Stay away from the shore and do not attempt to watch the waves.",
      "If you cannot reach higher ground, go to the upper floors of a sturdy building.",
      "Keep listening to official alerts and updates, as tsunamis can have multiple waves over several hours."
    ],
    after: [
      "Listen to local authorities for updates and do not return to low-lying areas until it is declared safe.",
      "Avoid re-entering flooded areas as the water can still be dangerous and may be contaminated.",
      "Help those in need, especially the elderly, disabled, and children.",
      "Document any damage for insurance purposes and clean up debris carefully."
    ],
    images: [
      require('../../Assets/Ananya/info/tsunami1.png'),
      require('../../Assets/Ananya/info/tsunami2.png'),
      require('../../Assets/Ananya/info/tsunami3.png'),
      require('../../Assets/Ananya/info/tsunami4.png')
    ]
  },
  earthquake: {
    title: "Earthquake",
    description: "An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves.",
    cause: "Earthquakes are caused by the movement of tectonic plates beneath the Earth's surface.",
    before: [
      "Secure heavy items to walls to prevent them from falling during a quake.",
      "Create a family emergency plan that includes a safe meeting spot.",
      "Prepare an emergency kit with essential supplies like water, food, and first-aid.",
      "Identify safe spots in each room, such as under sturdy tables, where you can take cover."
    ],
    during: [
      "Drop, cover, and hold on. Protect your head and neck with your arms.",
      "Stay indoors until the shaking stops. If you are outside, move to an open area away from buildings.",
      "If you are driving, stop safely and stay inside the vehicle until the shaking stops.",
      "Be aware of the potential for aftershocks and move to a safe location if necessary."
    ],
    after: [
      "Be prepared for aftershocks, which can be just as dangerous as the initial quake.",
      "Check for gas leaks, electrical issues, and structural damage before re-entering buildings.",
      "Listen to local authorities for updates and follow their instructions.",
      "Help injured or trapped persons if it is safe to do so, and seek medical assistance if needed."
    ],
    images: [
      require('../../Assets/Ananya/info/earthquake1.png'),
      require('../../Assets/Ananya/info/earthquake2.png'),
      require('../../Assets/Ananya/info/earthquake3.png'),
      require('../../Assets/Ananya/info/earthquake4.png')
    ]
  },
  lightning: {
    title: "Lightning",
    description: "Lightning is a sudden electrostatic discharge during a thunderstorm that produces a bright flash and a loud sound known as thunder.",
    cause: "Lightning is caused by the buildup of static electricity within clouds, which is released as a discharge of electricity between clouds or between a cloud and the ground.",
    before: [
      "Unplug electrical devices to prevent damage from power surges.",
      "Stay indoors and avoid outdoor activities during a thunderstorm.",
      "If you are outside, seek shelter in a building or a hard-topped vehicle.",
      "Avoid standing near trees, poles, or other tall objects that could attract lightning."
    ],
    during: [
      "Avoid water, electronics, and windows to reduce the risk of injury.",
      "Do not use wired telephones, computers, or other electrical equipment.",
      "Stay inside until 30 minutes after the last sound of thunder.",
      "If you are in a vehicle, keep the windows closed and avoid touching metal parts."
    ],
    after: [
      "Check for fires or damage caused by lightning strikes.",
      "Avoid downed power lines and report them to authorities immediately.",
      "Assist those who may be injured by lightning, and seek medical help if needed.",
      "If your home was struck by lightning, have it inspected by a professional before re-entering."
    ],
    images: [
      require('../../Assets/Ananya/info/lightening.png'),
      require('../../Assets/Ananya/info/lightning2.png')
    ]
  },
  Radioactive: {
    title: "Nuclear/Radioactive Emergencies",
    description: "Nuclear emergencies involve the release of radioactive materials that can have serious health and environmental consequences.",
    cause: "Nuclear emergencies are typically caused by accidents at nuclear power plants, improper handling of radioactive materials, or the detonation of a nuclear weapon.",
    before: [
      "Identify your shelter locations, both at home and at work.",
      "Have an emergency kit ready with food, water, and essential supplies.",
      "Stay informed about the risks in your area and have a plan in place.",
      "Learn how to use potassium iodide (KI) tablets if they are recommended for your area."
    ],
    during: [
      "Go indoors immediately and stay there until you are told it is safe to leave.",
      "Close all windows, doors, and ventilation systems to prevent radioactive materials from entering.",
      "Listen to emergency broadcasts for instructions and updates.",
      "If you were outside, remove contaminated clothing and wash exposed skin thoroughly."
    ],
    after: [
      "Decontaminate by removing and discarding your clothes and washing your body thoroughly.",
      "Avoid consuming food or water that may have been contaminated.",
      "Follow the instructions of local authorities for evacuation or sheltering in place.",
      "Seek medical attention if you suspect exposure to radioactive materials."
    ],
    images: [
      require('../../Assets/Ananya/info/nuclear1.png'),
      require('../../Assets/Ananya/info/nuclear2.png'),
      require('../../Assets/Ananya/info/nuclear3.png'),
      require('../../Assets/Ananya/info/nuclear4.png')
    ]
  },
  forestFire: {
    title: "Forest Fire Precautions",
    description: "Forest fires, also known as wildfires, are uncontrolled fires that spread through vegetation and can cause significant damage to property and the environment.",
    cause: "Forest fires are often caused by human activities such as unattended campfires, discarded cigarettes, or natural causes like lightning.",
    before: [
      "Create a defensible space around your home by clearing away flammable vegetation.",
      "Have an evacuation plan in place and be prepared to leave immediately if necessary.",
      "Prepare an emergency kit with essentials like water, food, and protective clothing.",
      "Stay informed about fire risks in your area and heed any warnings or advisories."
    ],
    during: [
      "Follow evacuation orders immediately and do not hesitate to leave your home.",
      "Wear protective clothing, such as long sleeves, pants, and a mask, to reduce smoke inhalation.",
      "If you cannot evacuate, stay indoors and keep windows and doors closed.",
      "Keep a fire extinguisher handy and know how to use it in case of small fires."
    ],
    after: [
      "Be cautious of hot spots and smoldering debris, which can reignite.",
      "Avoid returning to your home until authorities say it is safe to do so.",
      "Document any damage for insurance purposes and begin cleaning up debris carefully.",
      "Seek medical help if you experience difficulty breathing or other symptoms related to smoke inhalation."
    ],
    images: [
      require('../../Assets/Ananya/info/forestfire1.png'),
      require('../../Assets/Ananya/info/forestfire2.png'),
      require('../../Assets/Ananya/info/forestfire3.png'),
      require('../../Assets/Ananya/info/forestfire4.png')
    ]
  },
  chemical: {
    title: "Chemical Emergencies",
    description: "Chemical emergencies involve the release of hazardous chemicals that can harm human health or the environment.",
    cause: "Chemical emergencies can be caused by industrial accidents, transportation incidents, or intentional releases of harmful substances.",
    before: [
      "Have a disaster supply kit ready with essentials like food, water, and medical supplies.",
      "Know your community's warning systems and evacuation routes.",
      "Stay informed about the chemicals used or stored in your area.",
      "Prepare a plan to shelter in place or evacuate if necessary."
    ],
    during: [
      "Follow the instructions of local authorities immediately and avoid areas that may be contaminated.",
      "If instructed to stay indoors, close all windows and doors, and turn off ventilation systems.",
      "If you are outside, move away from the source of the chemical release as quickly as possible.",
      "Cover your mouth and nose with a cloth to reduce inhalation of toxic substances."
    ],
    after: [
      "Avoid contact with spilled chemicals and clean up only when authorities say it is safe.",
      "Seek medical attention if you have been exposed to hazardous chemicals.",
      "Report any signs of chemical contamination in your area to local authorities.",
      "Dispose of contaminated materials according to official guidelines."
    ],
    images: [
      require('../../Assets/Ananya/info/chemical1.png'),
      require('../../Assets/Ananya/info/chemical2.png'),
      require('../../Assets/Ananya/info/chemical3.png'),
    ]
  }
};

export default disastersData;
