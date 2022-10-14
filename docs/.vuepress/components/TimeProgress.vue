<template>
  <div class="time-container">
    <div class="circle-box">
      <div class="circle" style="--clr: #ff2972">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" ref="hh"></circle>
        </svg>
        <div ref="hours">
          <span>{{ hoursText }}</span>
          <div class="tip">HOURS</div>
        </div>
      </div>
      <div class="circle" style="--clr: #fee800">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm" ref="mm"></circle>
        </svg>
        <div ref="minutes">
          <span>{{ minutesText }}</span>
          <div class="tip">MINUTES</div>
        </div>
      </div>
      <div class="circle" style="--clr: #04fc43">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss" ref="ss"></circle>
        </svg>
        <div ref="seconds">
          <span>{{ secondsText }}</span>
          <div class="tip">SECONDS</div>
        </div>
      </div>
      <div class="ap">
        <div ref="ampm">{{ apText }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hours = ref(null)
const minutes = ref(null)
const seconds = ref(null)
const ampm = ref(null)
const hh = ref(null)
const mm = ref(null)
const ss = ref(null)

const hoursText = ref('00')
const minutesText = ref('00')
const secondsText = ref('00')
const apText = ref('PM')

const setTime = () => {
  setInterval(() => {
    const h = `${new Date().getHours() % 12}`.padStart(2, 0)
    const m = `${new Date().getMinutes()}`.padStart(2, 0);
    const s = `${new Date().getSeconds()}`.padStart(2, 0);
    const am = h > - 12 ? 'PM' : 'AM';

    hoursText.value = h
    minutesText.value = m
    secondsText.value = s
    apText.value = h > - 12 ? 'PM' : 'AM';

    hh.value.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.value.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.value.style.strokeDashoffset = 440 - (440 * s) / 60;
  }, 1000);
}

onMounted(() => {
  setTime()
})

</script>

<style lang="scss" scoped>
.time-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .circle-box {
    display: flex;
    gap: 40px;
    color: #fff;

    .circle {
      position: relative;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        position: relative;
        width: 150px;
        height: 150px;
        transform: rotate(270deg);

        circle {
          width: 100%;
          height: 100%;
          fill: transparent;
          stroke: #191919;
          stroke-width: 4;
          transform: translate(5px, 5px);
        }

        circle:nth-child(2) {
          stroke: var(--clr);
          stroke-dasharray: 440;
        }
      }
    }

    div {
      position: absolute;
      text-align: center;
      font-weight: 500;
      font-size: 1.5em;

      .tip {
        position: absolute;
        font-size: 0.35em;
        font-weight: lighter;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .ap {
      position: relative;
      font-size: 1em;
      transform: translateY(-20px);
    }
  }
}
</style>