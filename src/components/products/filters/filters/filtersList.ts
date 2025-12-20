
export const categories = [
  {
    fa: 'کابل شبکه',
    en: 'network cable',
    children: [
      {
        fa: 'نوع کابل',
        en: 'cable type',
        children: [
          { id: 1, fa: 'CAT5', en: 'CAT5' },
          { id: 2, fa: 'CAT6', en: 'CAT6' },
          { id: 3, fa: 'CAT6a', en: 'CAT6a' },
          { id: 4, fa: 'CAT7', en: 'CAT7' }
        ],
      },
      {
        fa: 'شیلد و نویزگیری',
        en: 'shielding',
        children: [
          { id: 5, fa: 'بدون شیلد', en: 'UTP' },
          { id: 6, fa: 'فویل دار', en: 'FTP' },
          { id: 7, fa: 'شیلد دار', en: 'STP' },
          { id: 8, fa: 'شیلد + فویل', en: 'SFTP' }
        ],
      },
      {
        fa: 'روکش',
        en: 'jacket',
        children: [
          { id: 9, fa: 'PVC', en: 'PVC' },
          { id: 10, fa: 'نسوز', en: 'LSZH' },
          { id: 11, fa: 'بیرونی', en: '(outdoor)PE' },
          { id: 12, fa: 'دوروکش', en: 'Double' }
        ],
      },
      {
        fa: 'جنس مغزی',
        en: 'core material',
        children: [
          { id: 13, fa: 'مس', en: 'copper' },
          { id: 14, fa: 'cca', en: 'cca' }
        ],
      },
      {
        fa: 'تست',
        en: 'test',
        children: [
          { id: 15, fa: 'بدون تست', en: 'without-test' },
          {
            fa: 'با تست',
            en: 'with-test',
            children: [
              { id: 16, fa: 'چنل', en: 'channel' },
              { id: 17, fa: 'پرمنت', en: 'permanent' }
            ]
          }
        ],
      },
    ]
  },
  {
    fa: 'سیم و کابل برق',
    en: 'wire & power cable',
    children: [
      {
        fa: 'سیم برق',
        en: 'electrical wire',
        children: [
          {
            fa: 'سیم افشان',
            en: 'flexible wire',
            children: [
              { id: 18, fa: 'باروکش پی وی سی', en: 'PVC' },
              { id: 19, fa: 'نایلون', en: 'nylon' }
            ],
          },
          { id: 20, fa: 'سیم مفتول', en: 'solid wire' },
          { id: 21, fa: 'سیم ارت', en: 'ground wire' }
        ]
      },
      {
        fa: 'کابل برق',
        en: 'power cable',
        children: [
          { id: 22, fa: 'کابل افشان', en: 'flexible cable' },
          { id: 23, fa: 'کابل مفتول', en: 'solid cable' },
          { id: 24, fa: 'کابل قدرت', en: 'power cable' },
          { id: 25, fa: 'کابل اعلام حریق', en: 'fire alarm cable' },
          { id: 26, fa: 'کابل فرمان AWG', en: 'AWG control cable' },
          { id: 27, fa: 'کابل کولری', en: 'AC cable' },
          { id: 28, fa: 'کابل آلومینیوم', en: 'aluminum cable' },
          {
            fa: 'کابل صنعتی',
            en: 'industrial cable',
            children: [
              { id: 29, fa: 'فشار متوسط', en: 'medium voltage' },
              { id: 30, fa: 'فشار قوی', en: 'high voltage' }
            ]
          }
        ]
      },
    ],
  },
  {
    fa: 'کابل کواکسیال',
    en: 'coaxial cable',
    children: [
      {
        fa: 'کابل دوربین',
        en: 'CCTV cable',
        children: [
          { id: 31, fa: 'RG59', en: 'RG59' },
          { id: 32, fa: 'RG6', en: 'RG6' },
          { id: 33, fa: 'RG11', en: 'RG11' },
          { id: 34, fa: 'ترکیبی', en: 'combo' },
        ]
      },
      { id: 35, fa: 'کابل آنتن', en: 'antenna cable' },
      { id: 36, fa: 'کابل رادیو', en: 'radio cable' }
    ]
  },
  {
    fa: 'کابل فیبر نوری ',
    en: 'fiber optic cable',
    children: [
      { id: 37, fa: 'سینگل مد', en: 'single mode' },
      { id: 38, fa: 'مالی مد', en: 'multi mode' }
    ]
  },
  {
    fa: 'کابل مخابراتی',
    en: 'telecommunication cable',
    children: [
      { id: 39, fa: 'کابل مخابراتی هوایی', en: 'aerial telecom cable' },
      { id: 40, fa: 'کابل مخابراتی زمینی', en: 'underground telecom cable' },
      { id: 41, fa: 'سیم های مخابراتی', en: 'telecom wires' }
    ]
  },
  {
    fa: 'تجهیزات',
    en: 'equipment',
    children: [
      {
        fa: 'شبکه',
        en: 'network',
        children: [
          { id: 42, fa: 'پچ کورد', en: 'patch cord' },
          { id: 43, fa: 'پچ پنل', en: 'patch panel' },
          { id: 44, fa: 'رک', en: 'rack' },
          { id: 45, fa: 'ترانک', en: 'trunking' },
          { id: 46, fa: 'اتصالات', en: 'connectors' },
          { id: 47, fa: 'مدیریت کابل', en: 'cable management' },
        ]
      },
      {
        fa: 'سیم و کابل',
        en: 'wire & cable',
        children: [
          { id: 48, fa: 'سینی', en: 'tray' },
          { id: 49, fa: 'لوله', en: 'conduit' },
          { id: 50, fa: 'داکت', en: 'duct' },
          { id: 51, fa: 'تابلو برق', en: 'electrical panel' },
          { id: 52, fa: 'اتصالات', en: 'connectors' }
        ]
      },
      { id: 53, fa: 'کواکسیال', en: 'coaxial' },
      { id: 54, fa: 'مخابراتی', en: 'telecommunication' },
      { id: 55, fa: 'ابزارآلات', en: 'tools' }
    ]
  },
  {
    id: 56,
    fa: 'متفرقه',
    en: 'miscellaneous'
  }
]

export const backendCategories = [

  // 🔹 Wire & Power Cable
  {
    fa: "سیم و کابل برق",
    en: "wire & power cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-flexible wire-PVC", fa: "سیم برق افشان PVC", en: "electrical wire-flexible wire-PVC" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-flexible wire-nylon", fa: "سیم برق افشان نایلونی", en: "electrical wire-flexible wire-nylon" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-solid wire", fa: "سیم برق مفتولی", en: "electrical wire-solid wire" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-ground wire", fa: "سیم ارت", en: "electrical wire-ground wire" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-flexible cable", fa: "کابل افشان", en: "power cable-flexible cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-solid cable", fa: "کابل مفتولی", en: "power cable-solid cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-power cable", fa: "کابل برق", en: "power cable-power cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-fire alarm cable", fa: "کابل اعلام حریق", en: "power cable-fire alarm cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-AWG control cable", fa: "کابل کنترل AWG", en: "power cable-AWG control cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-AC cable", fa: "کابل کولر", en: "power cable-AC cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-aluminum cable", fa: "کابل آلومینیومی", en: "power cable-aluminum cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-industrial cable-medium voltage", fa: "کابل صنعتی فشار متوسط", en: "power cable-industrial cable-medium voltage" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-industrial cable-high voltage", fa: "کابل صنعتی فشار قوی", en: "power cable-industrial cable-high voltage" }
        ]
      }
    ]
  },

  // 🔹 Network Cable
  {
    fa: "کابل شبکه",
    en: "network cable",
    children: [
      {
        fa: "روکش",
        en: "jacket",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|PVC", fa: "PVC", en: "PVC" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|LSZH", fa: "LSZH", en: "LSZH" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|(outdoor)PE", fa: "PE (بیرونی)", en: "(outdoor)PE" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|Double", fa: "دوبل", en: "Double" }
        ]
      },
      {
        fa: "جنس مغزی",
        en: "core material",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|8144706b-7830-4916-a3c6-658e830ce3bd|copper", fa: "مس", en: "copper" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|8144706b-7830-4916-a3c6-658e830ce3bd|cca", fa: "cca", en: "cca" }
        ]
      },
      {
        fa: "تست",
        en: "test",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|without-test", fa: "بدون تست", en: "without-test" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|with-test-channel", fa: "با تست چنل", en: "with-test-channel" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|with-test-permanent", fa: "با تست پرمننت", en: "with-test-permanent" }
        ]
      },
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT5", fa: "CAT5", en: "CAT5" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT6", fa: "CAT6", en: "CAT6" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT6a", fa: "CAT6a", en: "CAT6a" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT7", fa: "CAT7", en: "CAT7" }
        ]
      },
      {
        fa: "شیلد",
        en: "shielding",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|UTP", fa: "UTP", en: "UTP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|FTP", fa: "FTP", en: "FTP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|STP", fa: "STP", en: "STP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|SFTP", fa: "SFTP", en: "SFTP" }
        ]
      }
    ]
  },

  // 🔹 Fiber Optic Cable
  {
    fa: "کابل فیبر نوری",
    en: "fiber optic cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "d0167d24-263c-4793-a468-9740f7d5eb2f|775cd291-48af-417a-af58-c8aff0111cdf|single mode", fa: "تک مد", en: "single mode" },
          { id: "d0167d24-263c-4793-a468-9740f7d5eb2f|775cd291-48af-417a-af58-c8aff0111cdf|multi mode", fa: "مالتی مد", en: "multi mode" }
        ]
      }
    ]
  },

  // 🔹 Telecommunication Cable
  {
    fa: "کابل مخابراتی",
    en: "telecommunication cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "8f1de3da-f360-48d9-a07f-50347811d225|775cd291-48af-417a-af58-c8aff0111cdf|aerial telecom cable", fa: "کابل مخابراتی هوایی", en: "aerial telecom cable" },
          { id: "8f1de3da-f360-48d9-a07f-50347811d225|775cd291-48af-417a-af58-c8aff0111cdf|underground telecom cable", fa: "کابل مخابراتی زمینی", en: "underground telecom cable" },
          { id: "8f1de3da-f360-48d9-a07f-50347811d225|775cd291-48af-417a-af58-c8aff0111cdf|telecom wires", fa: "سیم مخابراتی", en: "telecom wires" }
        ]
      }
    ]
  },

  // 🔹 Coaxial Cable
  {
    fa: "کابل کواکسیال",
    en: "coaxial cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG59", fa: "کابل RG59", en: "CCTV cable-RG59" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG6", fa: "کابل RG6", en: "CCTV cable-RG6" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG11", fa: "کابل RG11", en: "CCTV cable-RG11" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-combo", fa: "کابل کواکسیال ترکیبی", en: "CCTV cable-combo" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|antenna cable", fa: "کابل آنتن", en: "antenna cable" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|radio cable", fa: "کابل رادیو", en: "radio cable" }
        ]
      }
    ]
  },

  // 🔹 Equipment
  // 🔹 Equipment
  {
    fa: "تجهیزات",
    en: "equipment",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-patch cord", fa: "پچ کورد شبکه", en: "network patch cord" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-patch panel", fa: "پچ پنل شبکه", en: "network patch panel" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-rack", fa: "رک شبکه", en: "network rack" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-trunking", fa: "ترانکینگ شبکه", en: "network trunking" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-connectors", fa: "کانکتور شبکه", en: "network connectors" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-cable management", fa: "مدیریت کابل شبکه", en: "network cable management" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-tray", fa: "سینی کابل", en: "cable tray" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-conduit", fa: "لوله برق", en: "conduit" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-duct", fa: "داکت", en: "duct" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-electrical panel", fa: "تابلو برق", en: "electrical panel" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-connectors", fa: "کانکتور کابل", en: "cable connectors" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|coaxial", fa: "کواکسیال", en: "coaxial" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|telecommunication", fa: "مخابراتی", en: "telecommunication" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|tools", fa: "ابزار", en: "tools" }
        ]
      }
    ]
  },
  {
    fa: "سیم و کابل برق",
    en: "wire & power cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-flexible wire-PVC", fa: "سیم افشان PVC", en: "electrical wire - flexible wire - PVC" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-flexible wire-nylon", fa: "سیم افشان نایلونی", en: "electrical wire - flexible wire - nylon" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-solid wire", fa: "سیم مفتولی", en: "electrical wire - solid wire" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|electrical wire-ground wire", fa: "سیم ارت", en: "electrical wire - ground wire" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-flexible cable", fa: "کابل افشان", en: "power cable - flexible cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-solid cable", fa: "کابل مفتولی", en: "power cable - solid cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-power cable", fa: "کابل برق", en: "power cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-fire alarm cable", fa: "کابل اعلام حریق", en: "fire alarm cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-AWG control cable", fa: "کابل کنترل AWG", en: "AWG control cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-AC cable", fa: "کابل کولر", en: "AC cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-aluminum cable", fa: "کابل آلومینیومی", en: "aluminum cable" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-industrial cable-medium voltage", fa: "کابل صنعتی فشار متوسط", en: "industrial cable - medium voltage" },
          { id: "247b24a4-887d-416f-82c2-460aecbcb9b6|775cd291-48af-417a-af58-c8aff0111cdf|power cable-industrial cable-high voltage", fa: "کابل صنعتی فشار قوی", en: "industrial cable - high voltage" }
        ]
      }
    ]
  },
  {
    fa: "کابل شبکه",
    en: "network cable",
    children: [
      {
        fa: "روکش",
        en: "jacket",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|PVC", fa: "PVC", en: "PVC" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|LSZH", fa: "LSZH", en: "LSZH" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|(outdoor)PE", fa: "PE (بیرونی)", en: "PE (outdoor)" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|2fa1992c-269c-4892-9547-1065af1ce48b|Double", fa: "دوبل", en: "Double" }
        ]
      },
      {
        fa: "جنس مغزی",
        en: "core material",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|8144706b-7830-4916-a3c6-658e830ce3bd|copper", fa: "مس", en: "copper" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|8144706b-7830-4916-a3c6-658e830ce3bd|cca", fa: "CCA", en: "CCA" }
        ]
      },
      {
        fa: "تست",
        en: "test",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|without-test", fa: "بدون تست", en: "without test" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|with-test-channel", fa: "با تست (channel)", en: "with test (channel)" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|05f1aa3f-b26f-4819-b1ba-5b0628244e3e|with-test-permanent", fa: "با تست (permanent)", en: "with test (permanent)" }
        ]
      },
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT5", fa: "CAT5", en: "CAT5" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT6", fa: "CAT6", en: "CAT6" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT6a", fa: "CAT6a", en: "CAT6a" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|775cd291-48af-417a-af58-c8aff0111cdf|CAT7", fa: "CAT7", en: "CAT7" }
        ]
      },
      {
        fa: "شیلدینگ",
        en: "shielding",
        children: [
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|UTP", fa: "UTP", en: "UTP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|FTP", fa: "FTP", en: "FTP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|STP", fa: "STP", en: "STP" },
          { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251|f64f85d9-684f-4186-9fc4-b6be0e432ee5|SFTP", fa: "SFTP", en: "SFTP" }
        ]
      }
    ]
  },
  {
    fa: "تجهیزات",
    en: "equipment",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-patch cord", fa: "پچ کورد شبکه", en: "network patch cord" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-patch panel", fa: "پچ پنل شبکه", en: "network patch panel" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-rack", fa: "رک شبکه", en: "network rack" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-trunking", fa: "ترانکینگ شبکه", en: "network trunking" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-connectors", fa: "کانکتور شبکه", en: "network connectors" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|network-cable management", fa: "مدیریت کابل شبکه", en: "network cable management" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-tray", fa: "سینی کابل", en: "cable tray" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-conduit", fa: "لوله برق", en: "conduit" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-duct", fa: "داکت", en: "duct" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-electrical panel", fa: "تابلو برق", en: "electrical panel" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|wire & cable-connectors", fa: "کانکتور کابل", en: "cable connectors" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|coaxial", fa: "کواکسیال", en: "coaxial" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|telecommunication", fa: "مخابراتی", en: "telecommunication" },
          { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4|775cd291-48af-417a-af58-c8aff0111cdf|tools", fa: "ابزار", en: "tools" }
        ]
      }
    ]
  },
  {
    fa: "کابل کواکسیال",
    en: "coaxial cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG59", fa: "کابل دوربین مداربسته RG59", en: "CCTV cable - RG59" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG6", fa: "کابل دوربین مداربسته RG6", en: "CCTV cable - RG6" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-RG11", fa: "کابل دوربین مداربسته RG11", en: "CCTV cable - RG11" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|CCTV cable-combo", fa: "کابل کومبو", en: "CCTV combo cable" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|antenna cable", fa: "کابل آنتن", en: "antenna cable" },
          { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd|775cd291-48af-417a-af58-c8aff0111cdf|radio cable", fa: "کابل رادیویی", en: "radio cable" }
        ]
      }
    ]
  },
  {
    fa: "کابل فیبر نوری",
    en: "fiber optic cable",
    children: [
      {
        fa: "نوع",
        en: "type",
        children: [
          { id: "d0167d24-263c-4793-a468-9740f7d5eb2f|775cd291-48af-417a-af58-c8aff0111cdf|single mode", fa: "تک حالته (SM)", en: "single mode" },
          { id: "d0167d24-263c-4793-a468-9740f7d5eb2f|775cd291-48af-417a-af58-c8aff0111cdf|multi mode", fa: "چند حالته (MM)", en: "multi mode" }
        ]
      }
    ]
  },
]


export const brands = [
  { en: "لگراند", fa: "لگراند" },
  { en: "نگزنس", fa: "نگزنس" },
  { en: "بلدن", fa: "بلدن" },

  { en: "افشار نژاد خراسان", fa: "افشار نژاد خراسان" },
  { en: "سیمیا", fa: "سیمیا" },
  { en: "همدان", fa: "همدان" },
  { en: "سیمپود", fa: "سیمپود" },
  { en: "کرمان رادین", fa: "کرمان رادین" },
  { en: "لینکو", fa: "لینکو" },
  { en: "ایوان A1", fa: "ایوان A1" },
  { en: "البرز", fa: "البرز" },
  { en: "سمنان", fa: "سمنان" },
  { en: "شیرکوه", fa: "شیرکوه" },
  { en: "آرین ابهر", fa: "آرین ابهر" },
  { en: "پژواک همدان", fa: "پژواک همدان" },
  { en: "زرتافت کرمان", fa: "زرتافت کرمان" },
  { en: "مسین", fa: "مسین" },

  { en: "خاورنو", fa: "خاورنو" },
  { en: "ساوه", fa: "ساوه" },
  { en: "منصوریان", fa: "منصوریان" },
  { en: "آرین", fa: "آرین" },
  { en: "شایان", fa: "شایان" },

  { en: "کرمان", fa: "کرمان" },
  { en: "نگین البرز", fa: "نگین البرز" },

  { en: "Amp", fa: "Amp" },
  { en: "Knet", fa: "Knet" },
  { en: "تایکونت", fa: "تایکونت" },
  { en: "الگونت", fa: "الگونت" },

  { en: "دانوب", fa: "دانوب" },

  { en: "tp-link", fa: "TP-Link" },
  { en: "pks", fa: "PKS" },
  { en: "D-link", fa: "D-Link" },

  { en: "زیمنس", fa: "زیمنس" }
];


export const newCategories = [
  {
    "id": "f7a4a542-de4c-4b60-b4c3-b2012ca34506",
    "name": "کواکسیال",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "RG11 (دوربین/آنتن حرفه‌ای)",
          "RG59 (دوربین)",
          "RG6 (دوربین/آنتن)",
          "کابل آنتن Outdoor",
          "کابل آنتن تلویزیون",
          "کابل ترکیبی دوربین",
          "کابل رادیو (HF/VHF/UHF)"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "CCTV، تلویزیون محلی",
          "آنتن تلویزیون، ماهواره، سیستم‌های تصویری با کیفیت بالاتر",
          "انتقال حرفه‌ای سیگنال در متراژ زیاد",
          "دریافت سیگنال تلویزیون خانگی / دیجیتال",
          "دریافت سیگنال قوی‌تر در فضای بیرونی",
          "دوربین مدار بسته (تصویر + برق)",
          "رادیو بی‌سیم، آنتن‌های خودرو، تجهیزات RF"
        ]
      },
      {
        "id": "c361221c-b08f-471b-9b74-6c487b081ca4",
        "name": "امپدانس",
        "values": [
          "50 Ω (عموماً)",
          "75 Ω",
          "75 Ω (تصویر)"
        ]
      },
      {
        "id": "18a78e95-29d7-42db-86ee-0e501507253b",
        "name": "رشته مرکزی",
        "values": [
          "AWG 18 (~1.02 mm)",
          "AWG 20 (~0.80 mm)",
          "بزرگتر از RG6 (هادی ضخیم‌تر)",
          "ضخیم‌تر از RG6",
          "متنوع (مثل RG58, RG8X, LMR)",
          "مثل RG59 یا RG6 + رشته برق 18–20 AWG",
          "مثل RG6 (~AWG 18)"
        ]
      },
      {
        "id": "b2d5ada8-2265-44e0-9892-af1381851a9e",
        "name": "دی‌الکتریک",
        "values": [
          "PE فوم یا PE معمولی",
          "PE یا فوم PE با کیفیت بالا",
          "Solid PE یا فوم PE",
          "تصویر: مثل RG59/6 + کابل برق داخلی",
          "دی‌الکتریک مقاوم‌تر (رطوبت/UV)",
          "عایق ضخیم‌تر برای افت کمتر",
          "فوم PE / PE معمولی"
        ]
      },
      {
        "id": "d1224b6e-09b2-4e39-b705-9a5710c2b74f",
        "name": "شیلد",
        "values": [
          "شیلد تصویر مطابق مدل",
          "شیلد چندلایه برای کاهش نویز",
          "شیلد چندلایه قوی",
          "شیلد قوی‌تر، گاهی Quad Shield",
          "فویل + براش ~70–90%",
          "فویل + براش ساده",
          "فویل + براش / گاهی Quad Shield"
        ]
      },
      {
        "id": "9a867f31-9c7f-4aaa-8eab-1a067c2f5d2c",
        "name": "روکش بیرونی",
        "values": [
          "PVC سفید یا مشکی",
          "PVC (گاهی ضد آب / UV)",
          "PVC مشکی/سفید",
          "PVC مقاوم یا Outdoor",
          "PVC یا PE مقاوم بیرونی",
          "PVC یا ضد UV (Outdoor)",
          "PVC یا غلاف ضد UV و ضد آب"
        ]
      },
      {
        "id": "34c065c4-ed1e-4238-95b6-d905795f396b",
        "name": "طول پیشنهادی",
        "values": [
          "100–200 متر",
          "بسته به قدرت و فرکانس (متوسط تا زیاد)",
          "تا 100 متر برای CCTV داخلی",
          "تا متراژ متوسط (برای دوربین‌ها)",
          "متراژ زیاد روی پشت‌بام و دکل‌ها",
          "متراژ متوسط تا زیاد",
          "مسافت طولانی / Backbone"
        ]
      },
      {
        "id": "483d1745-480f-4d4e-b18c-33e1accea9ba",
        "name": "کانکتورهای رایج",
        "values": [
          "BNC / فیش F",
          "BNC + فیش برق",
          "F-type / IEC male-female",
          "F-type یا خاص",
          "F-type یا کانکتورهای آنتنی",
          "N / TNC / SMA",
          "کانکتور F"
        ]
      }
    ]
  },
  {
    "id": "8dfc8f5b-fdfa-4746-9f81-fee77a69d642",

    "name": "ابزار کابل شبکه",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",

        "name": "نوع",
        "values": [
          "دستی",
          "دیجیتال"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "تست صحت اتصال کابل‌های شبکه",
          "نصب کانکتورهای شبکه"
        ]
      }
    ]
  },
  {
    "id": "1635b7ea-5207-4c92-b360-30fff6e9eb65",

    "name": "کابل و سیم‌کشی تابلو برق",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "نگهداری تجهیزات برقی"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "1000x1200mm",
          "600x800mm",
          "800x1000mm"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "PVC",
          "فولاد گالوانیزه"
        ]
      }
    ]
  },
  {
    "id": "f6e6df8f-8697-495e-ac27-792591bb6605",
    "name": "ابزار کواکسیال",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "دستی",
          "دیجیتال"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "تست صحت اتصال کابل‌های کواکسیال",
          "نصب کانکتورهای کواکسیال"
        ]
      }
    ]
  },
  {
    "id": "d1dc65fd-1183-4b9a-a027-72af0a2e76b8",
    "name": "رک شبکه",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "نگهداری تجهیزات شبکه",
          "نگهداری تجهیزات شبکه در فضاهای محدود"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "فلزی"
        ]
      },
      {
        "id": "249283f1-150c-4c8b-a3b9-fdbeeeb3b291",
        "name": "سایز",
        "values": [
          "12U",
          "15U",
          "18U",
          "6U",
          "9U"
        ]
      }
    ]
  },
  {
    "id": "48d0943b-9667-4422-8064-7a489f2d3737",
    "name": "ابزار مخابراتی",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "دستی",
          "دیجیتال"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "تست صحت اتصال کابل‌های تلفن",
          "نصب کانکتورهای IDC"
        ]
      }
    ]
  },
  {
    "id": "2cb55b82-645d-487c-a0f0-b9bf32a22b78",
    "name": "ابزار دستی عمومی",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",

        "name": "نوع",
        "values": [
          "PVC",
          "استاندارد",
          "پلاستیکی",
          "دستی",
          "سوزنی"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "اتصال فیش به کابل‌ها",
          "برش دقیق سیم و کابل",
          "عایق‌بندی و محافظت از اتصالات سیم‌ها",
          "عبور سیم از داخل لوله‌ها",
          "نصب کانکتورهای شبکه و مخابرات",
          "نگه‌داشتن و جابجایی قطعات کوچک"
        ]
      }
    ]
  },
  {
    "id": "1f9f0a5e-5784-4c0a-bdec-a3964d0c9f92",
    "name": "ابزار دستی فازمتر",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "دستی",
          "دیجیتال"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",

        "name": "کاربرد",
        "values": [
          "تشخیص ولتاژ در مدار"
        ]
      }
    ]
  },
  {
    "id": "e1526fce-c93d-4b92-a06f-9cb092045e6b",
    "name": "اتصالات شبکه",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "STP",
          "UTP"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "اتصال کابل‌های شبکه به دستگاه‌ها",
          "اتصال کابل‌های شبکه به دیوار یا پنل"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "پلاستیکی",
          "فلزی"
        ]
      }
    ]
  },
  {
    "id": "8bdaac84-41ee-4746-b393-5ac73f949948",
    "name": "سیم و کابل برق",
    "attributes": [
      {
        "id": "44490a08-01fd-4a71-af9f-8cb692f7b1b9",
        "name": "گروه اصلی",
        "values": [
          "سیم برق",
          "کابل برق"
        ]
      },
      {
        "id": "8a64c426-f705-4868-9fef-f14a79f6d91f",

        "name": "زیرگروه",
        "values": [
          "سیم ارت",
          "سیم افشان",
          "سیم مفتول",
          "سیم نایلون",
          "کابل افشان",
          "کابل صنعتی فشار قوی",
          "کابل صنعتی فشار متوسط",
          "کابل فرمان (کنترل)",
          "کابل قدرت",
          "کابل کولری",
          "کابل مفتول آلومینیوم NA2XY",
          "کابل مفتول آلومینیومNAYY",
          "کابل مفتول مسی"
        ]
      },
      {
        "id": "f224454a-807b-4ad6-9ba8-1ac9845cb07c",
        "name": "برند",
        "values": [
          "آرین ابهر",
          "افشارنژاد خراسان",
          "البرز",
          "پژواک همدان",
          "زرتافته کرمان",
          "زرتافه کرمان",
          "سمنان",
          "سیمپود",
          "شیر کوه",
          "کارا کابل ایوان",
          "کرمان",
          "کرمان رادین",
          "لینکو",
          "مسین",
          "نگین البرز"
        ]
      },
      {
        "id": "e4d7be18-e799-407f-815e-d3e0d43556eb",
        "name": "سایز رایج",
        "values": [
          "10*1",
          "10*1.5",
          "1*0.5",
          "1*0.75",
          "1*1",
          "1*10",
          "1*120",
          "1*1.5",
          "1*16",
          "12*1",
          "12*1.5",
          "12*2.5",
          "1*2.5",
          "1*25",
          "1*35",
          "1*4",
          "1*50",
          "1*6",
          "1*70",
          "19*1.5",
          "19*2.5",
          "1*95",
          "2*0.35",
          "2*0.50",
          "2*0.50 تخت",
          "2*0.75",
          "2*0.75 تخت",
          "2*1",
          "2*10",
          "2*1.5",
          "2*16",
          "2*2.5",
          "2*25",
          "2*35",
          "2*4",
          "24*1.5",
          "24*2.5",
          "2*6",
          "3*0.75",
          "3*1",
          "3*10",
          "3*120",
          "3*120+70",
          "3*1.5",
          "3*150",
          "3*16",
          "3*185",
          "3*240",
          "3*2.5",
          "3*25",
          "3*25+16",
          "3*300",
          "3*35",
          "3*35+16",
          "3*4",
          "3*400",
          "3*500",
          "3*50+25",
          "3*6",
          "3*630",
          "3*70",
          "3*70+3",
          "3*95",
          "3*95+50",
          "4*0.75",
          "4*1",
          "4*10",
          "4*120",
          "4*1.5",
          "4*150",
          "4*16",
          "4*185",
          "4*240",
          "4*2.5",
          "4*25",
          "4*300",
          "4*35",
          "4*4",
          "4*400",
          "4*50",
          "4*500",
          "4*6",
          "4*630",
          "4*70",
          "4*95",
          "5*1",
          "5*10",
          "5*1.5",
          "5*16",
          "5*2.5",
          "5*4",
          "5*6",
          "7*1",
          "7*1.5",
          "7*3"
        ]
      },
      {
        "id": "681f2235-0cb7-4651-9e40-522296693124",
        "name": "رنگ",
        "values": [
          "آبی",
          "زرد",
          "سبز",
          "سفید",
          "شفاف",
          "طوسی",
          "قرمز",
          "قهوه‌ای",
          "مشکی"
        ]
      }
    ]
  },
  {
    "id": "08d6a200-941b-422a-bc8a-61b72fe8f156",
    "name": "مخابرات",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "سیم‌های مخابراتی",
          "کابل زمینی",
          "کابل هوایی"
        ]
      },
      {
        "id": "fbae1234-b83e-4bf7-860e-6790244b05a6",
        "name": "جنس رسانا",
        "values": [
          "آلومینیوم",
          "مس"
        ]
      },
      {
        "id": "1f1f7da2-bdd8-4853-98bd-731934370202",
        "name": "روکش عایق",
        "values": [
          "PE",
          "PVC",
          "XLPE"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "استفاده در داخل ساختمان‌ها",
          "نصب بر روی تیرهای برق یا دکل‌ها",
          "نصب در زیر زمین یا داخل لوله‌ها"
        ]
      }
    ]
  },
  {
    "id": "6756f798-abb4-4487-9f0e-8bf3d7791ca2",
    "name": "اتصالات کابل و سیم‌کشی",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "تغییر اندازه لوله‌ها",
          "تغییر مسیر کابل‌ها",
          "تقسیم مسیر کابل‌ها",
          "مسدود کردن انتهای لوله‌ها"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "20mm",
          "25mm",
          "32mm",
          "40mm"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "PVC"
        ]
      }
    ]
  },
  {
    "id": "97f69b55-febe-4c0b-9a60-0ee933b8e01d",
    "name": "داکت سیم‌کشی",

    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "مدیریت کابل‌ها در محیط‌های داخلی",
          "مدیریت کابل‌ها در محیط‌های صنعتی"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "100x100mm",
          "50x50mm",
          "75x75mm"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "PVC",
          "فولاد گالوانیزه"
        ]
      }
    ]
  },
  {
    "id": "373d81c9-e48b-4e32-937c-2222c69dd8e1",
    "name": "پچ پنل شبکه",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "STP",
          "UTP"
        ]
      },
      {
        "id": "1f1f7da2-bdd8-4853-98bd-731934370202",
        "name": "روکش عایق",
        "values": [
          "فلزی"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "مدیریت و سازماندهی کابل‌های شبکه"
        ]
      }
    ]
  },
  {
    "id": "d30d6469-3cb2-400a-a268-a7b4e3975538",
    "name": "لوله سیم‌کشی",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",

        "name": "کاربرد",
        "values": [
          "محافظت از کابل‌ها در محیط‌های داخلی",
          "محافظت از کابل‌ها در محیط‌های صنعتی"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "20mm",
          "25mm",
          "32mm",
          "40mm"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "PVC",
          "فولاد گالوانیزه"
        ]
      }
    ]
  },
  {
    "id": "81c5fae4-374f-487e-86c6-df4f4b3b47d1",
    "name": "کانکتور مخابراتی",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "فلزی"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",

        "name": "کاربرد",
        "values": [
          "اتصال کابل‌های تلفن به دستگاه‌ها",
          "اتصال کابل‌های مخابراتی به دستگاه‌ها"
        ]
      }
    ]
  },
  {
    "id": "5f065580-5930-452e-93d7-6f0f6d0bfe01",
    "name": "فیبر نوری",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "Multi Mode (چندحالته)",
          "Single Mode (تک‌حالته)"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "شبکه‌های بین شهری، دیتا سنترها",
          "شبکه‌های محلی، ارتباطات داخلی"
        ]
      },
      {
        "id": "1b60794e-d4c1-43cc-82af-dcfdfa345717",
        "name": "قطر هسته",
        "values": [
          "50–100 µm",
          "8–10 µm"
        ]
      },
      {
        "id": "779f1c98-1745-4e57-adf1-b3e6cf8c3fac",
        "name": "نوع نور",
        "values": [
          "LED",
          "لیزر (Laser)"
        ]
      },
      {
        "id": "b81d4500-3298-4b8b-8362-e51a2c963834",
        "name": "طول موج",
        "values": [
          "1310/1550 nm",
          "850 nm"
        ]
      },
      {
        "id": "f8dfab09-2647-4803-a3ad-2e2708cc80b1",
        "name": "فاصله انتقال",
        "values": [
          "بیش از 10 km",
          "تا 2 km"
        ]
      },
      {
        "id": "db16d6dd-b5a3-4cef-9e71-0fc91932dc49",
        "name": "پهنای‌باند",
        "values": [
          "بسیار بالا",
          "کمتر از تک‌حالته"
        ]
      },
      {
        "id": "7cf30b72-72ab-4838-a2da-f32d61976944",
        "name": "رنگ روکش",
        "values": [
          "زرد",
          "سبز",
          "نارنجی"
        ]
      }
    ]
  },
  {
    "id": "289e18a1-fc18-4ce7-893e-a352ac52a224",
    "name": "ترانکینگ شبکه",
    "attributes": [
      {
        "id": "681f2235-0cb7-4651-9e40-522296693124",
        "name": "رنگ",
        "values": [
          "سفید",
          "نقره‌ای"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "مدیریت کابل‌ها در محیط‌های داخلی",
          "مدیریت کابل‌ها در محیط‌های صنعتی"
        ]
      },
      {
        "id": "249283f1-150c-4c8b-a3b9-fdbeeeb3b291",
        "name": "سایز",
        "values": [
          "100x100mm",
          "50x50mm",
          "75x75mm"
        ]
      }
    ]
  },
  {
    "id": "17ace9ac-fe96-4915-b296-b2b016056674",
    "name": "مدیریت کابل شبکه",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "پلاستیکی",
          "فلزی",
          "کاغذی"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "شناسایی و نام‌گذاری کابل‌ها",
          "نگهداری و سازماندهی کابل‌ها"
        ]
      }
    ]
  },
  {
    "id": "f645799c-f73d-48c6-baf5-ab91c31d28c8",
    "name": "پچ‌کورد شبکه",
    "attributes": [
      {
        "id": "681f2235-0cb7-4651-9e40-522296693124",
        "name": "رنگ",
        "values": [
          "آبی",
          "سبز",
          "قرمز",
          "مشکی"
        ]
      },
      {
        "id": "1f1f7da2-bdd8-4853-98bd-731934370202",
        "name": "روکش عایق",
        "values": [
          "PVC"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "اتصال دستگاه‌ها به شبکه",
          "اتصال دستگاه‌ها به شبکه با سرعت بالا",
          "اتصال دستگاه‌ها به شبکه با سرعت بسیار بالا",
          "اتصال دستگاه‌ها به شبکه با سرعت بسیار بالا و محافظت در برابر نویز"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "0.5m",
          "10m",
          "15m",
          "1m",
          "20m",
          "3m",
          "5m"
        ]
      }
    ]
  },
  {
    "id": "d8799351-877d-4374-a9e4-f9ba5bfeb46e",
    "name": "سینی کابل",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "نگهداری کابل‌ها در محیط‌های داخلی",
          "نگهداری کابل‌ها در محیط‌های صنعتی"
        ]
      },
      {
        "id": "d5521c4b-c4d7-47c1-b1cc-7a78741a7948",
        "name": "طول",
        "values": [
          "100x100mm",
          "50x50mm",
          "75x75mm"
        ]
      },
      {
        "id": "ffdde525-b1ec-41ee-80db-2e5ac1b838a3",
        "name": "جنس",
        "values": [
          "PVC",
          "فولاد گالوانیزه"
        ]
      }
    ]
  },
  {
    "id": "217ed5e7-bd87-45c7-a717-5e7d4d052f80",

    "name": "پیچ‌گوشتی",
    "attributes": [
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "باز و بسته کردن پیچ‌های چهارسو",
          "باز و بسته کردن پیچ‌های دوسو",
          "باز و بسته کردن پیچ‌های ستاره‌ای",
          "باز و بسته کردن پیچ‌های شش‌ضلعی"
        ]
      },
      {
        "id": "249283f1-150c-4c8b-a3b9-fdbeeeb3b291",
        "name": "سایز",
        "values": [
          "سایزهای مختلف"
        ]
      }
    ]
  },
  {
    "id": "7f5a2738-43aa-4ff0-8476-2d5f1855139d",
    "name": "انبردست",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "استاندارد"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "برش و خم‌کاری سیم‌ها",
          "بریدن سیم‌ها با دقت",
          "کار در فضاهای باریک و خم کردن سیم‌ها",
          "نگه‌داشتن و خم‌کردن قطعات کوچک"
        ]
      }
    ]
  },
  {
    "id": "6bb3991b-d3d9-4137-93af-bd4a1dad8be8",
    "name": "شبکه",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "CAT5e",
          "CAT6",
          "CAT6a",
          "CAT7"
        ]
      },
      {
        "id": "f224454a-807b-4ad6-9ba8-1ac9845cb07c",
        "name": "برند",
        "values": [
          "Belden",
          "D-Link",
          "Legrand",
          "Nexans"
        ]
      },
      {
        "id": "1f1f7da2-bdd8-4853-98bd-731934370202",
        "name": "روکش عایق",
        "values": [
          "LSZH",
          " PE(Outdoor)",
          "PE(Outdoor)",
          " PVC",
          "PVC"
        ]
      },
      {
        "id": "d1224b6e-09b2-4e39-b705-9a5710c2b74f",
        "name": "شیلد",
        "values": [
          "FTP",
          "SFTP",
          "STP",
          "UTP"
        ]
      },
      {
        "id": "8d7e8d20-9590-460b-9fc4-bcfc1c329194",
        "name": "سایز رسانا",
        "values": [
          "0.40",
          "0.45",
          "0.50",
          "0.50,0.58",
          "0.58",
          "0.60"
        ]
      },
      {
        "id": "0728f4c4-c35e-4097-9a07-2955c956aa33",
        "name": "جنس هسته",
        "values": [
          " CCA",
          "CCA",
          "مس"
        ]
      },
      {
        "id": "dff7b803-d69a-4fbe-b7c5-598c089b744a",
        "name": "نوع تست",
        "values": [
          "بدون تست",
          "تست پرمنت",
          "تست چنل"
        ]
      }
    ]
  },
  {
    "id": "fd066e17-db14-4193-a752-f97c1f171a20",
    "name": "کانکتور کواکسیال",
    "attributes": [
      {
        "id": "ee590518-1cab-4139-ae37-80cbd9988592",
        "name": "نوع",
        "values": [
          "فلزی"
        ]
      },
      {
        "id": "51c5c658-570a-456f-9ae4-8594687a41c7",
        "name": "کاربرد",
        "values": [
          "اتصال کابل‌های کواکسیال به دستگاه‌ها"
        ]
      }
    ]
  }
]