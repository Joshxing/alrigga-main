<template>
  <div>
    <h1>Add New Food Item</h1>
    <form @submit.prevent="addFoodItem">
      <label for="name">Name</label>
      <input type="text" v-model="name" required>

      <label for="description">Description</label>
      <textarea v-model="description" required></textarea>

      <label for="price">Price</label>
      <input type="number" v-model="price" required>

      <label for="image">Image URL</label>
      <input type="text" v-model="image" required>

      <button type="submit">Add Food Item</button>
    </form>

    <h1>Food Items</h1>
    <ul>
      <li v-for="foodItem in foodItems" :key="foodItem.id">
        <img :src="foodItem.image" alt="">
        <h2>{{ foodItem.name }}</h2>
        <p>{{ foodItem.description }}</p>
        <p>{{ foodItem.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      image: '',
      foodItems: []
    }
  },
  mounted() {
    this.fetchFoodItems();
  },
  methods: {
    fetchFoodItems() {
      axios.get('/api/foods')
        .then(response => {
          this.foodItems = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    addFoodItem() {
      axios.post('/api/foods', {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
      })
        .then(response => {
          this.foodItems.push(response.data);
          this.name = '';
          this.description = '';
          this.price = '';
          this.image = '';
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
