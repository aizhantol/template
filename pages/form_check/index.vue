<template>
  <MoleculesForm :onSubmit="submit">
    <AtomsInput
      v-model="name"
      name="Имя"
      rules="required|max:3"
      :mask="'+7 (###) ###-##-##'"
    />
    <AtomsInput v-model="surname" name="Фамилия" rules="required|min:3" />
    <AtomsInput v-model="email" name="Почта" rules="required|email" />
    <MoleculesSelect :model="city" :options="list" required @change="onList" />
    <AtomsInput
      v-model="description"
      textarea
      name="Описание"
      rules="required|max:200|alpha"
    />
    <AtomsButton type="submit">submit</AtomsButton>
  </MoleculesForm>
</template>

<script>
/**
 * 'PAGES/form_check'
 * @displayName form_check
 */
export default {
  name: 'FormCheck',
  data: () => ({
    name: '3323',
    surname: 'a',
    email: '',
    city: '',
    description: '',
    list: [
      {
        id: 0,
        name: 'Выберите ваш город',
      },
      {
        id: 1,
        name: 'Москва',
      },
      {
        id: 2,
        name: 'Санкт-Петербург',
      },
      {
        id: 3,
        name: 'Новосибирск',
      },
      {
        id: 4,
        name: 'Екатеринбург',
      },
      {
        id: 5,
        name: 'Нижний Новгород',
      },
      {
        id: 6,
        name: 'Казань',
      },
      {
        id: 7,
        name: 'Челябинск',
      },
      {
        id: 8,
        name: 'Омск',
      },
      {
        id: 9,
        name: 'Самара',
      },
      {
        id: 10,
        name: 'Ростов-на-Дону',
      },
      {
        id: 11,
        name: 'Уфа',
      },
      {
        id: 12,
        name: 'Красноярск',
      },
      {
        id: 13,
        name: 'Пермь',
      },
      {
        id: 14,
        name: 'Воронеж',
      },
      {
        id: 15,
        name: 'Волгоград',
      },
      {
        id: 16,
        name: 'Краснодар',
      },
      {
        id: 17,
        name: 'Красноярск',
      },
    ],
  }),
  methods: {
    submit() {
      console.log('submit')
    },
    onList(e) {
      console.log(e)
      this.city = e
      console.log(this.city)
    },
  },
}
</script>

<style lang="scss" scoped></style>
