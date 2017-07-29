<template>
  <div class="pagination">
    <div class="pagination-left">
      <a href="#" v-if="hasPrev()" @click.prevent="changePage(prevPage)">Предыдущая</a>
    </div>
    <div class="pagination-mid">
      <ul>
        <li v-if="hasFirst()"><a href="#" @click.prevent="changePage(1)">1</a></li>
        <li v-if="hasFirst()">...</li>
        <li v-for="page in pages" :key="page">
          <a href="#" @click.prevent="changePage(page)" :class="{ current: current == page }">
            {{ page }}
          </a>
        </li>
        <li v-if="hasLast()">...</li>
        <li v-if="hasLast()"><a href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a></li>
      </ul>
    </div>
    <div class="pagination-right">
      <a href="#" v-if="hasNext()" @click.prevent="changePage(nextPage)">Следующая</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paginator',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 8,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    pages() {
      const pages = [];
      /* eslint-disable no-plusplus */
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }

      return pages;
    },
    rangeStart() {
      const start = this.current - this.pageRange;

      return (start > 0) ? start : 1;
    },
    rangeEnd() {
      const end = this.current + this.pageRange;

      return (end < this.totalPages) ? end : this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage() {
      return this.current + 1;
    },
    prevPage() {
      return this.current - 1;
    },
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev() {
      return this.current > 1;
    },
    hasNext() {
      return this.current < this.totalPages;
    },
    changePage(page) {
      this.$emit('page-changed', page);
    },
  },
};
</script>

<style scoped>
.pagination {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto 30px;
  padding: 0 15px;
  max-width: 1280px;
}

.pagination-left, 
.pagination-right {
  width: 20%;
}

.pagination-left {
  float: left;
}

.pagination-right {
  float: right;
}

.pagination-right a {
  float: right;
}

.pagination a,
.pagination span {
  display: block;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 42px;
  height: 44px;
  color: #73ea4c;
  font-size: 18px;
}

.pagination a {
  padding: 0 20px;
  max-width: 160px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-decoration: none;
  margin: 0 6px;
  transition: all .2s ease-in-out;
}

.pagination a:hover,
.pagination a.current {
  border-color: #73ea4c;
  color: #73ea4c;
}

.pagination-mid {
  display: flex;
  justify-content: center;
  width: 60%;
}

.pagination-mid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination-mid li {
  display: inline-block;
}
</style>
