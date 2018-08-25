<template>
  <div v-if="availableParts" class="content">
       <div class="preview">
         <CollapsibleSection>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.torso.src"/>
          <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src"/>
        </div>
      </div>
         </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>
    <!-- <button class="add-to-cart" @click="addToCart()">Add to Cart</button> -->
    <div class="top-row">
      <PartSelector
      :parts="availableParts.heads"
      position="top"
      @partSelected="part => selectedRobot.head = part" />
      <!-- <div class="top part" :style="headBorderStyle"> -->
      <!-- <div class="top part" :class="{'sale-border': selectedRobot.head.onSale}"> -->
      <!-- <div class="top part" :class="[saleBorderClass]"> -->
      <!-- <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale! </span> -->
          <!-- <span v-show="selectedRobot.head.onSale" class="sale">Sale! </span> -->
        <!-- </div> -->
        <!-- <img src="./images/head-big-eye.png" title="head" /> -->
        <!-- <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="head" /> -->
        <!-- <img :src="availableParts.heads[selectedHeadIndex].src" title="head" /> -->
        <!-- <img :src="selectedRobot.head.src" title="head" /> -->
        <!-- <button class="prev-selector" v-on:click="selectPreviousHead()">&#9668;</button> -->
        <!-- <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" v-on:click="selectNextHead()">&#9658;</button>
      </div> -->
    </div>
    <div class="middle-row">
      <PartSelector
      :parts="availableParts.arms"
      position="left"
      @partSelected="part => selectedRobot.leftArm = part" />
      <PartSelector
      :parts="availableParts.torsos"
      position="center"
      @partSelected="part => selectedRobot.torso = part" />
      <PartSelector
      :parts="availableParts.arms"
      position="right"
      @partSelected="part => selectedRobot.rightArm = part" />
      <!-- <div class="left part"> -->
        <!-- <img src="./images/arm-articulated-claw.png" title="left arm" /> -->
        <!-- <img v-bind:src="availableParts.arms[selectedLeftArmIndex].src" title="head" /> -->
        <!-- <img v-bind:src="selectedRobot.leftArm.src" title="left arm" />
        <button class="prev-selector" v-on:click="selectPreviousLeftArm()">&#9650;</button>
        <button class="next-selector" v-on:click="selectNextLeftArm()">&#9660;</button>
      </div> -->
      <!-- <div class="center part"> -->
        <!-- <img src="./images/torso-flexible-gauged.png" title="left arm" /> -->
        <!-- <img v-bind:src="availableParts.torsos[selectedTorsosIndex].src" title="head" /> -->
        <!-- <img v-bind:src="selectedRobot.torso.src" title="torso" />
        <button class="prev-selector" v-on:click="selectPreviousTorso()">&#9650;</button>
        <button class="next-selector" v-on:click="selectNextTorso()">&#9660;</button>
      </div> -->
      <!-- <div class="right part"> -->
        <!-- <img src="./images/arm-dual-claw.png" title="left arm" /> -->
        <!-- <img v-bind:src="availableParts.arms[selectedRightArmIndex].src" title="head" /> -->
        <!-- <img v-bind:src="selectedRobot.rightArm.src" title="right arm" />
        <button class="prev-selector" v-on:click="selectPreviousRightArm()">&#9650;</button>
        <button class="next-selector" v-on:click="selectNextRightArm()">&#9660;</button>
      </div> -->
    </div>
    <div class="bottom-row">
      <PartSelector
      :parts="availableParts.bases"
      position="bottom"
      @partSelected="part => selectedRobot.base = part" />
      <!-- <div class="bottom part"> -->
        <!-- <img src="./images/base-single-wheel.png" title="left arm" /> -->
        <!-- <img v-bind:src="availableParts.bases[selectedBasesIndex].src" title="head" /> -->
        <!-- <img v-bind:src="selectedRobot.base.src" title="base" />
        <button class="prev-selector" v-on:click="selectPreviousBases()">&#9668;</button>
        <button class="next-selector" v-on:click="selectNextBases()">&#9658;</button>
      </div> -->
    </div>
    <!-- <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td>{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
// import availableParts from '../data/parts';
// import createdHookMixins from './created-hook-mixins';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

// function getPreviousValidIndex(index, length) {
//   const deprecatedindex = index - 1;
//   return deprecatedindex < 0 ? length - 1 : deprecatedindex;
// }

// function getNextValidIndex(index, length) {
//   const incrementedIndex = index + 1;
//   return incrementedIndex > length - 1 ? 0 : incrementedIndex;
// }

export default {
  name: 'RobotBuilder',
  created() {
    // this.$store.dispatch('getParts');
    this.$store.dispatch('robots/getParts');
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      /* eslint no-alert: 0 */
      /* eslint no-restricted-globals: 0 */
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      // availableParts,
      addedToCart: false,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
      // selectedHeadIndex: 0,
      // selectedLeftArmIndex: 0,
      // selectedTorsosIndex: 0,
      // selectedRightArmIndex: 0,
      // selectedBasesIndex: 0,
    };
  },
  // mixins: [createdHookMixins],
  computed: {
    availableParts() {
      // return this.$store.state.parts;
      return this.$store.state.robots.parts;
    },
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? '3px solid red'
          : '3px solid #aaa',
      };
    },
    // selectedRobot() {
    // return {
    //   head: availableParts.heads[this.selectedHeadIndex],
    //   leftArm: availableParts.arms[this.selectedLeftArmIndex],
    //   torso: availableParts.torsos[this.selectedTorsosIndex],
    //   rightArm: availableParts.arms[this.selectedRightArmIndex],
    //   base: availableParts.bases[this.selectedBasesIndex],
    // };
    // },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      // this.$store.commit('addRobotToCart', Object.assign({}, robot, { cost }));
      // this.$store.dispatch('addRobotToCart', Object.assign({}, robot, { cost }))
      //   .then(() => this.$router.push('/cart'));
      this.$store.dispatch('robots/addRobotToCart', Object.assign({}, robot, { cost }))
        .then(() => this.$router.push('/cart'));
      // this.cart.push(Object.assign({}, robot, { cost }));
      this.addedToCart = true;
    },
    // selectNextHead() {
    //   console.log('selectNextHead called');
    //   // this.selectedHeadIndex += 1;
    //   this.selectedHeadIndex = getNextValidIndex(
    //     this.selectedHeadIndex,
    //     availableParts.heads.length,
    //   );
    // },
    // selectPreviousHead() {
    //   console.log('selectPreviousHead called');
    //   // this.selectedHeadIndex -= 1;
    //   this.selectedHeadIndex = getPreviousValidIndex(
    //     this.selectedHeadIndex,
    //     availableParts.heads.length,
    //   );
    // },
    // selectNextLeftArm() {
    //   console.log('selectNextLeftArm called');
    //   // this.selectedHeadIndex += 1;
    //   this.selectedLeftArmIndex = getNextValidIndex(
    //     this.selectedLeftArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectPreviousLeftArm() {
    //   console.log('selectPreviousLeftArm called');
    //   // this.selectedHeadIndex -= 1;
    //   this.selectedLeftArmIndex = getPreviousValidIndex(
    //     this.selectedLeftArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectNextTorso() {
    //   console.log('selectNextTorso called');
    //   // this.selectedHeadIndex += 1;
    //   this.selectedTorsosIndex = getNextValidIndex(
    //     this.selectedTorsosIndex,
    //     availableParts.torsos.length,
    //   );
    // },
    // selectPreviousTorso() {
    //   console.log('selectPreviousTorso called');
    //   // this.selectedHeadIndex -= 1;
    //   this.selectedTorsosIndex = getPreviousValidIndex(
    //     this.selectedTorsosIndex,
    //     availableParts.torsos.length,
    //   );
    // },
    // selectNextRightArm() {
    //   console.log('selectNextRightArm called');
    //   // this.selectedHeadIndex += 1;
    //   this.selectedRightArmIndex = getNextValidIndex(
    //     this.selectedRightArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectPreviousRightArm() {
    //   console.log('selectPreviousRightArm called');
    //   // this.selectedHeadIndex -= 1;
    //   this.selectedRightArmIndex = getPreviousValidIndex(
    //     this.selectedRightArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectNextBases() {
    //   console.log('selectNextBases called');
    //   // this.selectedHeadIndex += 1;
    //   this.selectedBasesIndex = getNextValidIndex(
    //     this.selectedBasesIndex,
    //     availableParts.bases.length,
    //   );
    // },
    // selectPreviousBases() {
    //   console.log('selectPreviousBases called');
    //   // this.selectedHeadIndex -= 1;
    //   this.selectedBasesIndex = getPreviousValidIndex(
    //     this.selectedBasesIndex,
    //     availableParts.bases.length,
    //   );
    // },
  },
};
</script>

<style lang='scss' scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaaaaa;
}
// .part img {
//   width: 165px;
// }
.part {
  img {
    width: 165px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  // right: 30px;
  // width: 220px;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
// td,
// th {
//   text-align: left;
//   padding: 5px;
//   padding-right: 20px;
// }
// .cost {
//   text-align: right;
// }
.sale-border {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
