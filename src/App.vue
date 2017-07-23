<template>
<div class="app">
  <div class="header">
    <h1>Alis web vue</h1>
  </div>
    <div class="content"> 
      <div class="block">
        <div class="demonstration">Показать последние книги за выбранный период</div>
        <el-date-picker class="vadim"
          lang="ru"
          v-model="value"
          type="datetimerange"
          :picker-options="pickerOptions"
          placeholder="Выбрать период"
          align="center">
        </el-date-picker>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Неделю',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 7));
            picker.$emit('pick', [start, end]);
          },
        }, {
          text: 'Месяц',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 30));
            picker.$emit('pick', [start, end]);
          },
        }, {
          text: 'Три месяца',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 90));
            picker.$emit('pick', [start, end]);
          },
        }],
      },
      value: '',
    };
  },
};
</script>

<style >

.app {
  background: lightgreen;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
}

.header {
  height: 30%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center; 
}

h1 {
  text-align: center;
}

</style>
