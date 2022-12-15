<template>
  <div class="w-full h-[70vh] relative z-0">
    <div class="w-full h-full absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 100"
      >
        <defs>
          <filter
            id="backdrop-filter-blur"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <!-- can't use xlink:href="#image": no support in FF -->
            <!-- <feImage
              x="0"
              y="0"
              width="300"
              height="300"
              xlink:href="http://unsplash.it/300/300?image=34"
            /> -->
            <!-- blur image -->
            <feGaussianBlur stdDeviation="3" />
            <!-- improve blur at the edges -->
            <feComponentTransfer result="blur">
              <feFuncA type="discrete" tableValues="1 1" />
            </feComponentTransfer>
            <!-- increase opacity of sourceGraphic -->
            <feComponentTransfer in="SourceGraphic" result="source">
              <feFuncA type="linear" slope="2" intercept="0" />
            </feComponentTransfer>
            <!-- Clip blur based on source -->
            <feComposite operator="in" in="blur" in2="source" />
            <!-- Merge -->
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div class="box effect -skew-x-6 blur-sm"></div>

      <img
        src="/img/stark_sirio.jpg"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div
      class="container grid grid-cols-2 gap-8 place-items-center h-full z-40 relative"
    >
      <!-- <multi-line-text text="CENTRO PORTE INFISSI"></multi-line-text> -->
      <section>
        <text-header level="1">Centro porte e finestre</text-header>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo
          ad et quo, quasi eos odio ipsum vero rem, sunt consequuntur, nulla
          voluptatibus dolor natus distinctio asperiores reprehenderit cum
          dicta.
        </h4>
        <button-link to="/"> Scopri di più </button-link>
      </section>
    </div>
    <!-- <div class="cell">3</div>
      <div class="cell">4</div> -->
  </div>
</template>
<style lang="postcss" scoped>
.box {
  @apply absolute w-full h-full inset-0 z-0;
}
.effect {
  @apply h-full w-[65%] -ml-6 p-4 bg-white bg-opacity-50 overflow-hidden;
}

/* support backdrop-filter */
@supports (
  (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))
) {
  .effect {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

/* no support backdrop-filter */
@supports (
  not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))
) {
  .effect {
    -webkit-filter: url(#backdrop-filter-blur);
    filter: url(#backdrop-filter-blur);
  }
}

svg {
  position: absolute;
}
</style>
