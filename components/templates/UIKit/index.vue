<template>
  <div class="page">
    <MoleculesBreadcrumbs class="mb30">
      <AtomsBreadOption to="/ads"> Объявления </AtomsBreadOption>
      <AtomsBreadOption to="/ads/storages"> Склады </AtomsBreadOption>
      <AtomsBreadOption to="/ads/invest">
        Инвестиционные объекты
      </AtomsBreadOption>
    </MoleculesBreadcrumbs>

    <AtomsHeading type="h2" class="mb20"> TabsLine</AtomsHeading>

    <MoleculesTabsLine
      :tabs="tabs"
      class="mb30"
      :tab="activeTab"
      @change="(val) => (activeTab = val)"
    />
    <AtomsHeading type="h2"> LazyLoadImage</AtomsHeading>
    <AtomsLazyLoadImage
      :url="require('~/assets/img/result3.png')"
      caption="Aizhan"
      variant="half"
    />
    <AtomsAccordion :isOpen="isOpen" class="mb20" @click="isOpen = !isOpen">
      Accordion
    </AtomsAccordion>
    <template v-if="isOpen">
      <AtomsHeading type="h2" color="blue"> Switcher </AtomsHeading>

      <MoleculesSwitcher
        :names="switches"
        :value="selectedSwitcher"
        class="mb20"
        @change="(val) => (selectedSwitcher = val)"
      />
    </template>
    <AtomsButton class="mt30 mb30" @click="showMod"> Show Modal!</AtomsButton>
    <AtomsHeading type="h2"> Slider</AtomsHeading>
    <div class="slider-cont">
      <OrganismsSlider :options="options">
        <MoleculesSlide v-for="(slide, id) in slides" :key="id">
          <img :src="slide" alt="slide" />
        </MoleculesSlide>
      </OrganismsSlider>
      <div class="slider-pagination">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-2">3</a>
      </div>
      <div class="slider-nav">
        <button class="slider-previous">Previous</button>
        <button class="slider-next">Next</button>
      </div>
    </div>
    <AtomsHeading type="h2" class="mb20"> Toggle</AtomsHeading>

    <MoleculesToggle
      :label="['Активирован', 'Деактивирован']"
      class="card_tog"
    />
    <AtomsHeading type="h2" class="mb20 mt20"> SelectSearch</AtomsHeading>

    <MoleculesSelectSearch
      :options="categories"
      :model="text"
      placeholder="Поиск по фамилии, имени или ID"
      name="key"
      width="calc(100% - 100px)"
      @change="(val) => (text = val)"
    />
    <AtomsHeading type="h2" class="mb20 mt20"> Pagination</AtomsHeading>

    <MoleculesPagination
      :total-pages="10"
      route-name="result"
      :current-page="5"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {
        id: 3,
        name: 'Телефоны',
      },
      categories: [
        {
          id: 1,
          name: 'Телефоны и гаджеты',
        },
        {
          id: 2,
          name: 'гаджеты',
        },
        {
          id: 3,
          name: 'Телефоны',
        },
      ],
      selectedSwitcher: 'rent',
      switches: [
        {
          text: 'Сдать',
          value: 'rent',
        },
        {
          text: 'Продать',
          value: 'sell',
        },
      ],
      activeTab: '1',
      tabs: [
        { value: 'Бизнес-центр', name: '1' },
        { value: 'Отдельно стоящее здание', name: '2' },
        { value: 'Офис в квартире', name: '3' },
        { value: 'Коттеджи', name: '4' },
        { value: 'Сервисные офисы' },
        { value: 'Коворкинг', name: '6' },
      ],
      isOpen: false,
      options: {
        pagination: '.slider-pagination a',
        navigation: { previous: '.slider-previous', next: '.slider-next' },
        loop: true,
        slidesPerView: 1,
        id: 'main-slider',
      },
      slides: [
        require('~/assets/img/result3.png'),
        require('~/assets/img/result1.png'),
        require('~/assets/img/main.png'),
      ],
    }
  },
  methods: {
    showMod() {
      this.$modal.add({ title: 'Delete' })
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-pagination {
  margin: 1.5em 0;
  text-align: center;
}
img {
  margin: auto;
  object-fit: contain;
  height: 100%;
}
.slider-cont {
  position: relative;
}
.slider-pagination a {
  width: 2em;
  height: 2em;
  line-height: 2;
  text-align: center;
  border: 1px solid #ddd;
  color: #000;
  text-decoration: none;
  background: #f5f5f5;
  background: linear-gradient(#f5f5f5, #fff);
  display: inline-block;
  margin-right: 0.7em;
}

.slider-pagination a.current {
  border-color: #000;
  background: #fff;
  background: linear-gradient(#fff, #f5f5f5);
}

.slider-nav {
  height: 64px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -32px;
  z-index: 1000;
}

.slider-nav button {
  border: none;
  display: block;
  width: 64px;
  height: 64px;
  cursor: pointer;
  text-indent: -9999em;
  background-color: transparent;
  background-repeat: no-repeat;
}

.slider-nav button:focus {
  outline-style: none;
}

.slider-nav button.slider-previous {
  float: left;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjM4NTJGMDczOUNDMTFFNDg4ODNGQTA5MzIxODc0RTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjM4NTJGMDgzOUNDMTFFNDg4ODNGQTA5MzIxODc0RTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMzg1MkYwNTM5Q0MxMUU0ODg4M0ZBMDkzMjE4NzRFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzg1MkYwNjM5Q0MxMUU0ODg4M0ZBMDkzMjE4NzRFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt7VlVAAAANnSURBVHja7JvPaxpBFMc3WRFxQQSLaCrScy9C8CAYcgikStFWF/yx5uA/kVtPpfTUY889eDBChIReCu05olANlJ5K6Y9DokUqSA5BTGQ7T1jZurpq3Jndzc7AY9GQfe/zdX7Pmw1RFBkrl03G4sVGwgnP8wGn07k9Go22BoPBw6urq61erxfodDpb8He/39/2eDwXLper7XA4LlmWbV9fX5+fnJxc4I5tA1cTEARhezgcPm82m0+73e4DBP5olf9HQvz2er1/w+HwB7vd/r5SqZwbXoB0Ou1DoC8ajcYT9LSvCq0mBrJhJBL5hJ6vT09P/2gWNAiwru3v79uSyeQbFNwveCVOAx/gC3xqEfvaL8hms4eo7X7HDT5t4BN86yYAcv7Y5/N9IfGrq9UGiAFiISrAwcFBluO4H3qBTxvEAjERESCVSr3S81dXqw0QG1YBdnZ2KkaEl4sAMWIRwOjwdxXB1NVei+awVIdnJni5CMt0jAuHOiP19ncZHRYNkaoCwBhrVnjJgEGNce5yOJfLHfb7fZfZl7vAACwrrQVgnq3H9DaRSIi1Wk08OzsTo9GoptPmeWuHmQLAYoM0fKFQEG9vb0Wp1Ot1Td8PTEsJgIYPH+lefxoeSqvVwjE0+hYKEI/H35KEFwRBAQ+foTlo7QvYFgrgdru/6Q2Pxm8s/oBNVYB8Pr9NqvojX0ThpWYAjHMF4Hn+5X2FlwwY5woQDAY/4w4Ajcm6wYMB40wB0ul0AHf11xteagbAqhAABfEMp2M0J9cdXjJgVUyF4dAC13QUwTPlcplhWZaR+WOKxeL4e9JFzjoRAE5scDjLZDJjSJvNZgh4BatUFfb29t5pXdUQvHhzc2OIai83YFX0AaFQ6KOWTmKxmCHhwYBVIYDX6/2qpRNY0RkRHgxYF+4HWKbQJmDxTnDSBCA5QevaVa1WGbTWZxD05DuYC5RKJZh46Vbr5aybsjP4SxzOQASANZIIclabLKg2LofHx8fj59HR0WQ2KIkAhfSE6D9Wuhiiy2G6IUK3xOimKN0Wpwcj9GiMHo7OSIA0Y2bIrKqvllBJEyTU5sy7u7sCx3E/zbrXAbEDw1rJ0pZOkqJpcjRRkqbK0mRpmi5PL0zQKzP3+tKU5a/N0YuTJC5PW/LqrFmK5Y/H/wkwAIMW95o8rPwPAAAAAElFTkSuQmCC');
  display: none;
  margin-left: 1em;
}

.slider-nav button.slider-next {
  float: right;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjM4NTJGMDMzOUNDMTFFNDg4ODNGQTA5MzIxODc0RTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjM4NTJGMDQzOUNDMTFFNDg4ODNGQTA5MzIxODc0RTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMzg1MkYwMTM5Q0MxMUU0ODg4M0ZBMDkzMjE4NzRFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzg1MkYwMjM5Q0MxMUU0ODg4M0ZBMDkzMjE4NzRFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjHhc1UAAANtSURBVHja7FvPaxpBFDZZEXFBhBRZrYSeexEkB0HxIKRKMakuRLN68J/IradSeuqx5x5yEMFApJdCe1YUGgOlp1L645BoCQ2IhyD+YDtPqmx0dzVxZ3a3OwODMCF+7/ucmffezJsNURRtVm6bNos3OwkQnucDLpcrNB6P/f1+/2Gv1/NfX18HOp2OH/7u8/naW1tbF263u+10Oi8Zhmnf3Nycn56eXuC2bQPXEhAEITQYDJ6dnZ09vbq6eoCIP7rL/yMhfnm93j87OzvvHQ7Hu3K5fG54ATKZDIeIPm82m0/Qp+OupNXEQH0QDoc/os9X1Wr1t2ZGgwDr9t3dXfve3t5rZNxP+EqcHTAACzC1sH3tL8hms0do7X7DTXy+AyZg6yYAAn/McdxnEr+62mwAG8AWogIUCoUsy7Lf9SI+38EWsImIAOl0+qWev7rabADbsAoQjUbLRiQvFQFsxCKA0cnfVwRTT3stlsNKG56ZyEtFWGVjXOrqjLTb38c7LHORqgKAjzUr+WkHDmocFdPhXC531O123WZPd4EDcLlTLgBxtpbhbSQSEWu1mliv18VUKiXqETYr5Q6yAkCyoaUBjUZDnLbRaCTm83niIgCnlQRA7oPTetdvtVqitOkhwj/XyC0VIJlMvtEaHKY9kJ4XQRAEoiIAt6UCeDyerzjAkU/WXQTgpirA4eFhCGfQoyQCwiW2DICjogA8z7/AbYTeIgBHRQG2t7c/kTBCSQTkr7FjA0dZATKZTIBkzK+XCMARuC4IgAzaJ+2blURA8Ttu3P2FUBguLUiHqaVSyVYsFgF7NsYwzGQciYANV8p1JgDc2OgRq8uJYLfbJ+MHBwdYMG9xnU6FeDz+Vs+sTW45DIdDEYmgORZwXdgDgsHgB71TVyUREomEpjjAdUEAr9f7xQj5u5wIkElqiQFcl54HWKbRJWDxTXC2BKA4Qa9ZiMjbjo+PJzHAtCExbPl83nZycqI5npTrpuQO/tJI5GEcB/l5rpuSCKxtBPIQEMF4pVLBhnuLK02GaDpMD0TokRg9FKXH4vRihF6N0ctRmQJIM1aGyE19tYJKWiChFjPHYjGBZdkfZj3rANuBw1rF0pYukqJlcrRQkpbK0mJpWi5PH0zQJzP/9aMpyz+bow8nSTyetuTTWbM0y1+P/xVgABaO+MftZPsnAAAAAElFTkSuQmCC');
  margin-right: 1em;
}
</style>

<style>
.slide {
  text-align: center;
}
</style>
