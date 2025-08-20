
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