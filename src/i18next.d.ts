import 'i18next'
import en from '@/localization/translations/en'
import ua from '@/localization/translations/ua'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof en
      ua: typeof ua
    }
  }
}