<template>
  <DefaultLayout>
    <div class="panel-wrap">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>升级素材计算器</span>
          </div>
        </template>
        <div class="content">
          <div class="item">
            <p>
              <span>当前等级: {{ level[0] }}</span><span>目标等级: {{ level[1] }}</span>
            </p>
          </div>
          <el-slider v-model="level" range :min="1" :max="60" @change="handleChange" />
          <div class="item">
            <img src="../../assets/icon/Icon_Exp.png"></img>
            <p>经验累计：{{ sumExp }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_Gold.png"></img>
            <p>金条累计：{{ sumGold }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_T1.png"></img>
            <p>T1存量条累计：{{ t1 }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_T2.png"></img>
            <p>T2存量条累计：{{ t2 }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_T3.png"></img>
            <p>T3存量条累计：{{ t3 }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_T4.png"></img>
            <p>T4存量条累计：{{ t4 }}</p>
          </div>
          <div class="item">
            <img src="../../assets/icon/Icon_gunExp.png"></img>
            <p>图纸累计：{{ sumGunExp }} (武器和人形共用滑块)</p>
          </div>
        </div>
        <template #footer>
          <h2>心智螺旋</h2>
          <div class="spList">
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp1.png"></img><span>x 20</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp2.png"></img><span>x 20</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp3.png"></img><span>x 40</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp4.png"></img><span>x 80</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp5.png"></img><span>x 120</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_sp6.png"></img><span>x 160</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_gold.png"></img><span>x 37000</span>
            </div>
          </div>
          <h2>固键</h2>
          <div class="spList">
            <div class="spItem">
              <img src="../../assets/icon/Icon_core.png"></img><span>x 8(标准人形)/18(精英人形)</span>
            </div>
            <div class="spItem">
              <img src="../../assets/icon/Icon_gold.png"></img><span>x 46000</span>
            </div>
          </div>
        </template>
      </el-card>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref } from "vue";
import "./index.css";
import data from "../../data/data.json";
import DefaultLayout from "../../layouts/DefaultLayout.vue";
const { exp, gunExp, tp } = data.data;
const level = ref([1, 60]);
const sumExp = ref(575689);
const sumGold = ref(19000);
const t1 = ref(10);
const t2 = ref(24);
const t3 = ref(20);
const t4 = ref(5);
const sumGunExp = ref(667935);

const handleChange = () => {
  sumExp.value = 0;
  sumGold.value = 0;
  sumGunExp.value = 0;

  let goldMin = 0;
  let goldMax = 0;
  let t1Min = 0;
  let t1Max = 0;
  let t2Min = 0;
  let t2Max = 0;
  let t3Min = 0;
  let t3Max = 0;
  let t4Min = 0;
  let t4Max = 0;

  for (let i = level.value[0] - 1; i < level.value[1] - 1; i++) {
    sumExp.value = sumExp.value + exp[i];
  }
  for (let i = level.value[0] - 1; i < level.value[1] - 1; i++) {
    sumGunExp.value = sumGunExp.value + gunExp[i];
  }

  let tMax = parseInt((level.value[1] - 10) / 10);
  let tMin = parseInt((level.value[0] - 10) / 10);
  // Min
  for (let i = 0; i < tMin; i++) {
    goldMin = goldMin + tp[i][0];
    t1Min = t1Min + tp[i][1];
    t2Min = t2Min + tp[i][2];
    t3Min = t3Min + tp[i][3];
    t4Min = t4Min + tp[i][4];
  }
  // Max
  for (let i = 0; i < tMax; i++) {
    goldMax = goldMax + tp[i][0];
    t1Max = t1Max + tp[i][1];
    t2Max = t2Max + tp[i][2];
    t3Max = t3Max + tp[i][3];
    t4Max = t4Max + tp[i][4];
  }
  sumGold.value = goldMax - goldMin;
  t1.value = t1Max - t1Min;
  t2.value = t2Max - t2Min;
  t3.value = t3Max - t3Min;
  t4.value = t4Max - t4Min;
}
</script>
