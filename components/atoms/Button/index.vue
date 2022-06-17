<template>
  <!--
    triggered on click
    @event click
  -->
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="to"
    :class="['btn', type && `btn--${type}`, fullWidth && `btn--full-width`]"
    :disabled="disabled"
    :style="{ width: width, height: height, color: color }"
    :type="typeBtn"
    @click="(e) => $emit('click', e)"
  >
    <!--
      @slot slot for button content
    -->
    <slot />
  </component>
</template>

<script>
/**
 * Common button component
 * @displayName Button
 */
export default {
  name: 'Button',
  props: {
    /**
     * type of button appearance
     * @values default, small, small-outline, outline, inline, icon, icon-white, back
     */
    type: {
      type: String,
      default: 'default',
    },
    /**
     * boolean flag that declares that button is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** to attribute for link if button is link */
    to: {
      type: String,
      default: '',
    },
    /**
     * width/height value for icon type buttons and only height value for non-icon type buttons
     */
    width: {
      type: [Number, String],
      default: '',
    },
    height: {
      type: [Number, String],
      default: '',
    },
    color: {
      type: [Number, String],
      default: '',
    },
    /** boolean flag which tells that button expands to full width */
    fullWidth: {
      type: Boolean,
      default: false,
    },
    typeBtn: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 1px solid transparent;
  outline: none;
  background-color: $c-main;
  padding: 9px 30px;
  color: #fbfbfb;
  border-radius: 10px;
  font-size: rem(16);
  transition: $t-primary;
  cursor: pointer;
  &:hover {
    background-color: #0077b3;
  }
  &:focus {
    background-color: #0077b3;
  }
  &:disabled {
    opacity: 0.5;
  }

  svg {
    color: inherit;
    margin-right: 12px;
    @include size(20px, 20px);
  }

  &--small {
    height: 28px;
    padding: 5px;
    font-size: rem(14);
    border-radius: 5px;
  }

  &--small-outline {
    height: 28px;
    padding: 5px;
    font-size: rem(14);
    border-radius: 5px;
    background-color: #fff;
    border-color: $c-base;
    color: $c-base;
    &:hover {
      background-color: #e6f7ff;
    }
    &:disabled {
      background-color: transparent;
      border-color: #c4c4c4;
      color: #c4c4c4;
    }
  }

  &--outline {
    background-color: #fff;
    border-color: $c-main;
    color: $c-main;
    font-weight: 600;
    &:hover {
      background-color: #e6f7ff;
    }
  }

  &--inline {
    padding: 0;
    background-color: transparent;
    color: $c-base;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: transparent;
      color: $c-base;
    }
  }

  &--text {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
    color: $c-text;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: transparent;
      color: $c-text;
    }
  }

  &--icon,
  &--icon-white {
    padding: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include size(28px, 28px);
    svg {
      margin: 0;
    }
  }
  &--icon-white {
    background-color: transparent;
    border-color: $c-base;
    color: $c-base;
    &:hover {
      background-color: #e6f7ff;
    }
    &:focus {
      background-color: #00a3f2;
      border-color: transparent;
      color: #fff;
    }
    &:disabled {
      background-color: transparent;
      border-color: #c4c4c4;
      color: #c4c4c4;
    }
  }

  &--back {
    background-color: transparent;
    padding: 0;
    color: $c-base;
    box-shadow: none;
    padding-left: 18px;
    font-size: rem(14);
    @include size(74px, 28px);
    &:hover,
    &:focus {
      background-color: transparent;
    }
    &:active {
      opacity: 0.5;
    }

    span {
      position: relative;
      color: inherit;
      z-index: 1;
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: contain;
      margin: 0;
      transform: translate(-20%, -20%);
      z-index: 0;
      @include size(auto, auto);
    }
  }
  &--secondary {
    background-color: $c-base;
    font-weight: 600;
    color: #ffffff;

    &:hover {
      background-color: $c-success;
    }
    &:focus {
      background-color: $c-success;
    }
  }
  &--full-width {
    width: 100%;
  }
}
</style>
