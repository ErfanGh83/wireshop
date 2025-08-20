
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