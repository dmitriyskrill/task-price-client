const requiredRule = (v: any): boolean | string => !!v || 'Обязательное поле'
const emailRule = (v: string): boolean | string => /.+@.+\..+/.test(v) || 'Некорректный email'

export {
  requiredRule,
  emailRule
}