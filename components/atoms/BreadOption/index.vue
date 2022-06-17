<template>
  <li>
    <nuxt-link :to="to">
      <!-- @slot Текст ссылки -->
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
/**
 * Хлебная крошка для навигации (одна ссылка)
 * @displayName BreadOption
 */
export default {
  name: 'BreadOption',
  props: {
    /**
     * Ссылка на страницу
     */
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  &:last-child a {
    color: $c-base;
  }

  > a {
    font-size: 12px;
    line-height: 14px;

    color: $c-grey;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &.nuxt-link-exact-active {
      color: $c-base;
      cursor: default;
    }
    &:active {
      transform: translateY(1px);
    }
  }

  + li {
    &::before {
      flex: none;
      content: '';

      @include block(6px, 11px);
      @include bg('icons/arrow-right-grey.svg', center center/contain);
      margin: 0 4px;
    }
  }

  &:last-of-type {
    overflow: hidden;
  }
}
</style>
