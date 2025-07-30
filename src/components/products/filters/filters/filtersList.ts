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

// Helper types
export type BrandOption = typeof brandNames[number]
export type CategoryOption = typeof categoryList[number]