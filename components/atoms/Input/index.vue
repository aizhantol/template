<template>
  <label
    ref="field"
    :class="{
      'is-focused': isFocus,
      'has-value': value,
      'has-error': error.length,
      'is-disabled': disabled,
      'is-required': isRequired,
      'has-hint': hint,
      'textarea': textarea,
      'show-error': showError,
    }"
    :for="name"
    class="input validate-me"
  >
    <!-- Placeholder for input type "animate" -->
    <span class="placeholder">{{ placeholder }}</span>

    <!--    Mask, rules-->
    <input
      v-if="!textarea"
      :id="id"
      v-model="model"
      :type="getType"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
      @input="validateCheck"
      @keydown="onKey"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    >
    <textarea
      v-else
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
      @input="validateCheck"
      @keydown="onKey"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    />

    <!-- Clear icon for clearable input -->
    <span v-if="clearable" class="clear" @click="clear">
      <img src="~icons/delete.svg" alt="delete icon">
    </span>

    <!-- Eye icon for password show toggle -->
    <span v-if="type === 'password' && !clearable" class="password" @click="togglePasswordType">
      <img :src="`~icons/${passordType}-password.svg`">
    </span>

    <!-- Error text show under input -->
    <template v-if="error.length">
      <span v-for="(err, index) in error" :key="index" class="errors">
        <img src="~icons/error_input.svg" alt="error icon">
        <span class="errors_text">
          {{ err.message }}
        </span>
      </span>
    </template>

    <!-- Hint text show under input -->
    <span v-if="hint" class="hint">{{ hint }}</span>
  </label>
</template>

<script>
/**
 * Обычный тег input работающий через v-model.
 * @displayName Input
 */
export default {
  name: 'Input',
  props: {
    /**
     * Сюда пробрасывать переменную через v-model
     * @model
     * @type [string, number]
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * Название поля, которое будет выводится в ошибке
     * @type {string}
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Текстовая заглушка для поля
     * @type {string}
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Тип инпута
     * @type {string}
     * @see Посмотреть в [MDN](https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input#attr-type)
     * @values 'text', 'number', 'password', 'email'
     */
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const types = ['text', 'number', 'password']
        if (!types.includes(value)) {
          console.log(
            '\x1B[31m INPUT',
            'Разрешено использовать только такие типы: ',
            types.join(', ')
          )
        }
        return types.includes(value)
      },
    },
    /**
     * Текст(Помощи) выводиться под полем
     * @type {string}
     */
    hint: {
      type: String,
      default: '',
    },
    /**
     * id для инпута
     * @type {string}
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Условие(отключенный) для отключения поля
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Условие(очищаемый) для удаления значения поля
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * Условие(textarea) для textarea
     * @type {Boolean}
     */
    textarea: {
      type: Boolean,
      default: false
    },
    /**
     * Правлиа для поля
     * @format "value|value|value..."
     * @value ["max:Number", "min:Number", "required", "pattern:RegExp", "email", "url", "number", "date", "time", "datetime", "tel", "color", "alpha", "alpha_spaces", "confirmed:String(id поля для проверки на сходство)"]
     * @type {String}
     */
    rules: {
      type: String,
      default: null
    },
    /**
     * Маска для поля
     * @format [
     *          String,
     *          String[],
     *          {
     *            mask: [String, String[]],
     *            custom: [{
     *              symbol: Char,
     *              pattern: RegExp,
     *              transform: Function,
     *            }]
     *          }
     *      ]
     * @type {String, Array, Object}
     */
    mask: {
      type: [String, Array, Object],
      default: null
    }
  },
  data() {
    return {
      error: [],
      showError: false,
      passordType: 'hide',
      isFocus: false,
      formatRules: null,
      selection: null
    }
  },
  computed: {
    getType() {
      if (this.type === 'password') {
        return this.passordType === 'hide' ? 'text' : this.type
      } else {
        return this.type
      }
    },
    /**
     * Model для записи данных из input
     * @type {function}
     * @see Посмотреть в [MDN](https://vuejs.org/v2/guide/computed.html#Computed-Setter)
     */
    model: {
      get() {
        return this.value
      },
      set(value) {
        /**
         * Emit для записи нового значения из html tag input
         * @type {function}
         * @property 'value'
         */
        this.$emit('input', this.mask ? this.maskValue(value) : value)
        if (this.selection) {
          setTimeout(() => this.$refs.field.querySelector(['input', 'textarea']).setSelectionRange(this.selection, this.selection))
        }
      },
    },
  },
  created() {
    this.showError = !!this.value

    if (this.mask) {
      this.$emit('input', this.$services.mask.mask(this.mask, this.value))
    }

    if (this.rules) {
      this.formatRules = this.rules.split('|').map(rule => {
        const [key, value] = rule.split(':')
        return rule.includes(':') ? { name: key, value } : { name: key, key }
      })
      this.error = this.$services.validate.validate(this.formatRules, this.value)
    }
  },
  methods: {
    isRequired() {
      return this.rules.includes('required')
    },
    togglePasswordType() {
      this.passordType = this.passordType === 'open' ? 'hide' : 'open'
    },
    validateCheck(e) {
      this.error = this.$services.validate.validate(this.formatRules, e.target.value)
      this.showError = true
    },
    onKey(e) {
      if (e.key === 'Backspace') {
        this.selection = this.$refs.field.querySelector(['input', 'textarea']).selectionStart - 1
      } else {
        this.selection = null
      }
    },
    maskValue(value) {
      return this.$services.mask.mask(this.mask, value)
    },
    onFocus () {
      this.$emit('focus')
      this.isFocus = true
    },
    onBlur() {
      this.$emit('blur')
      this.showError = true
      this.isFocus = false
    },
    clear() {
      this.$emit('input', null)
      this.$emit('clear')
    },
  },
}
</script>

<style scoped lang="scss">
.input {
  display: block;
  position: relative;

  .clear {
    display: none;
    position: absolute;
    top: 16px;
    right: 20px;
    cursor: pointer;
  }

  &.has-value:not(.textarea) {
    .clear {
      display: block;
    }
  }

  .hint {
    opacity: .7;
  }

  input {
    width: 100%;
    height: 56px;
    padding: 16px 20px;
    border-radius: 4px;
    border: 1px solid blue;
    transition: 1.2s ease-in-out;

    &:hover {
      border: 1px solid  darkblue;
    }

    &:focus {
      border: 1px solid midnightblue;
    }
  }

  &.is-disabled {
    ~ .clear {
      display: none;
    }

    .placeholder {
      opacity: .5;
    }
  }

  .placeholder {
    cursor: text;
  }

  .errors {
    margin-top: 8px;
    display: none;
    color: red;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }

  &.has-error.show-error {
    input, textarea {
      background: #FFF5F5;
      border: 1px solid #FFD8D8;
    }

    .errors {
      display: flex;
    }
  }
}
</style>
