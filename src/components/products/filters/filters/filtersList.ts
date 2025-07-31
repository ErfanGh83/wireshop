export const brandNames = [
  { en: 'samsung', fa: 'سامسونگ' },
  { en: 'apple', fa: 'اپل' },
  { en: 'speed', fa: 'اسپید' },
  { en: 'thunderx', fa: 'تاند ایکس' }
]

export const categoryList = [
  { en: 'electronics', fa: 'الکترونیک' },
  { en: 'clothing', fa: 'پوشاک' },
  { en: 'home-appliances', fa: 'لوازم خانگی' },
  { en: 'books', fa: 'کتاب' },
  { en: 'sports', fa: 'ورزشی' },
  { en: 'beauty', fa: 'زیبایی' },
  { en: 'toys', fa: 'اسباب بازی' },
  { en: 'food', fa: 'غذایی' }
]

export const categories = [
  {
    fa: 'کابل شبکه',
    en: 'network cable',
    children: [
      {
        fa: 'نوع کابل',
        en: 'cable type',
        children: [
          { fa: 'CAT5', en: 'CAT5' },
          { fa: 'CAT6', en: 'CAT6' },
          { fa: 'CAT6a', en: 'CAT6a' },
          { fa: 'CAT7', en: 'CAT7' }
        ],
      },
      {
        fa: 'شیلد و نویزگیری',
        en: 'shielding',
        children: [
          { fa: 'بدون شیلد', en: 'UTP' },
          { fa: 'فویل دار', en: 'FTP' },
          { fa: 'شیلد دار', en: 'STP' },
          { fa: 'شیلد + فویل', en: 'SFTP' }
        ],
      },
      {
        fa: 'روکش',
        en: 'jacket',
        children: [
          { fa: 'PVC', en: 'PVC' },
          { fa: 'نسوز', en: 'LSZH' },
          { fa: 'بیرونی', en: '(outdoor)PE' },
          { fa: 'دوروکش', en: 'Double' }
        ],
      },
      {
        fa: 'جنس مغزی',
        en: 'core material',
        children: [
          { fa: 'مس', en: 'copper' },
          { fa: 'cca', en: 'cca' }
        ],
      },
      {
        fa: 'تست',
        en: 'test',
        children: [
          { fa: 'بدون تست', en: 'without-test' },
          {
            fa: 'با تست',
            en: 'with-test',
            children: [
              { fa: 'چنل', en: 'channel' },
              { fa: 'پرمنت', en: 'permanent' }
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
              { fa: 'باروکش پی وی سی', en: 'PVC' },
              { fa: 'نایلون', en: 'nylon' }
            ],
          },
          { fa: 'سیم مفتول', en: 'solid wire' },
          { fa: 'سیم ارت', en: 'ground wire' }
        ]
      },
      {
        fa: 'کابل برق',
        en: 'power cable',
        children: [
          { fa: 'کابل افشان', en: 'flexible cable' },
          { fa: 'کابل مفتول', en: 'solid cable' },
          { fa: 'کابل قدرت', en: 'power cable' },
          { fa: 'کابل اعلام حریق', en: 'fire alarm cable' },
          { fa: 'کابل فرمان AWG', en: 'AWG control cable' },
          { fa: 'کابل کولری', en: 'AC cable' },
          { fa: 'کابل آلومینیوم', en: 'aluminum cable' },
          {
            fa: 'کابل صنعتی',
            en: 'industrial cable',
            children: [
              { fa: 'فشار متوسط', en: 'medium voltage' },
              { fa: 'فشار قوی', en: 'high voltage' }
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
          { fa: 'RG59', en: 'RG59' },
          { fa: 'RG6', en: 'RG6' },
          { fa: 'RG11', en: 'RG11' },
          { fa: 'ترکیبی', en: 'combo' },
        ]
      },
      { fa: 'کابل آنتن', en: 'antenna cable' },
      { fa: 'کابل رادیو', en: 'radio cable' }
    ]
  },
  {
    fa: 'کابل فیبر نوری ',
    en: 'fiber optic cable',
    children: [
      { fa: 'سینگل مد', en: 'single mode' },
      { fa: 'مالی مد', en: 'multi mode' }
    ]
  },
  {
    fa: 'کابل مخابراتی',
    en: 'telecommunication cable',
    children: [
      { fa: 'کابل مخابراتی هوایی', en: 'aerial telecom cable' },
      { fa: 'کابل مخابراتی زمینی', en: 'underground telecom cable' },
      { fa: 'سیم های مخابراتی', en: 'telecom wires' }
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
          { fa: 'پچ کورد', en: 'patch cord' },
          { fa: 'پچ پنل', en: 'patch panel' },
          { fa: 'رک', en: 'rack' },
          { fa: 'ترانک', en: 'trunking' },
          { fa: 'اتصالات', en: 'connectors' },
          { fa: 'مدیریت کابل', en: 'cable management' },
        ]
      },
      {
        fa: 'سیم و کابل',
        en: 'wire & cable',
        children: [
          { fa: 'سینی', en: 'tray' },
          { fa: 'لوله', en: 'conduit' },
          { fa: 'داکت', en: 'duct' },
          { fa: 'تابلو برق', en: 'electrical panel' },
          { fa: 'اتصالات', en: 'connectors' }
        ]
      },
      { fa: 'کواکسیال', en: 'coaxial' },
      { fa: 'مخابراتی', en: 'telecommunication' },
      { fa: 'ابزارآلات', en: 'tools' }
    ]
  },
  {
    fa: 'متفرقه',
    en: 'miscellaneous'
  }
]

export type BrandOption = typeof brandNames[number]
export type CategoryOption = typeof categoryList[number]