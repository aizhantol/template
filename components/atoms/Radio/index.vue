<template>
  <label :for="id" class="radio">
    <input
      :id="id"
      v-model="model"
      :value="value"
      :name="name"
      :disabled="disabled"
      type="radio"
      class="radio__field"
    />
    <span class="radio__indicator" />
    <span class="radio__message"><slot /></span>
  </label>
</template>

<script>
/**
 * @displayName Radio
 */
export default {
  name: 'Radio',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the radio
     */
    id: {
      type: [String, Number],
      default: '',
      required: true,
    },
    /**
     * Name
     */
    name: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value
     * @model
     */
    value: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        /**
         * Emit the value from radio
         * @type {function}
         */
        this.$emit('change', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/main.scss";
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  span.radio__indicator {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #999;
    border-radius: 50%;
    margin-right: 8px;
    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      background-color: $c-base;
      border-radius: 50%;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.radio__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.radio__indicator {
      border-color: #3c474c;
      &::before {
        background-color: #3c474c;
      }
    }
    &:disabled ~ span {
      color: #3c474c;
      opacity: 0.1;
    }
  }
}
</style>
