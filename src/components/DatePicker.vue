<template>
  <div class="container"> 
    <el-date-picker
      v-model="value"
      type="daterange"
      :picker-options="pickerOptions"
      placeholder="Выбрать период"
      align="center">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'datepicker',
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

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center; 
}
</style>
