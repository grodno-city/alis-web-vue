<template>
<div>
  <section class="grid">
    <div class="card" v-for="book in books" :key="book.id">
      <div class="card-body">
        <img :src="book.urls.small" alt="">
      </div>
      <div class="card-footer media">
         <div class="media-body">
          <span>Название книги</span>
        </div>
      </div>
    </div>
  </section>

   <app-pagination
    :current="currentPage" 
    :total="totalBooks" 
    :perPage="perPage" 
    @page-changed="fetchBooks"
  >
  </app-pagination>
</div>
</template>

<script>
import Pagination from './Pagination';

// https://unsplash.com/developers
const appId = 'UUID';

export default {
  name: 'content',
  components: {
    'app-pagination': Pagination,
  },
  data() {
    return {
      currentPage: 1,
      books: [],
      totalBooks: 0,
      perPage: 9,
    };
  },
  methods: {
    fetchBooks(page) {
      const options = {
        params: {
          client_id: appId,
          page,
          perPage: this.perPage,
        },
      };
      // this is mock api for write experemental pagination
      this.$http.get('https://api.unsplash.com/photos', options).then((res) => {
        this.books = res.data.slice(0, 9);

        this.totalBooks = parseInt(res.headers.get('x-total'), 10);

        this.currentPage = page;
      });
    },
  },
  created() {
    this.fetchBooks(this.currentPage);
  },
};
</script>

<style scoped>
.grid {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.card {
  width: 30%;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 20px 40px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  border-radius: 2px;
  line-height: 0;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,.2)
}

.card-body {
  width: 100%;
  height: 215px;
  overflow: hidden;
  background-color: #eee;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-footer {
  width: 100%;
  padding: 10px 15px;
}

.media-body {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

.media-body a:hover {
  text-decoration: none;
}
</style>
