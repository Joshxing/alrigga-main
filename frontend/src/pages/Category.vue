<template>

<router-link @click="scrollToTop()" to="/admin" class="category">Go back</router-link>



    <div class="admin-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" v-model="form.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" v-model="form.price" required>
        </div>
        <div class="form-group">
          <label for="number">Number</label>
          <input type="number" class="form-control" id="number" v-model="form.number" required>
        </div>
        <label for="image">Choose an image:</label>
        <input type="file" id="image" ref="image" accept="image/*">
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: null,
          number: null
        }
      }
    },
    methods: {
    async submitForm() {
      const data = {
        name: this.name,
        description: this.description,
        price: this.price,
        number: this.number,
        imageUrl: this.imageUrl,
      }
      const response = await fetch('/api/food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        alert('Food item added successfully!')
        this.name = ''
        this.description = ''
        this.price = ''
        this.number = ''
        this.imageUrl = ''
      } else {
        alert('Error adding food item')
      }
    },
  },
}
  
  </script>
  
  <style>
.category {
    background-color: #ce4641;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
}

  .admin-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea,
  input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button[type="submit"] {
    display: block;
    margin-top: 20px;
  }
  </style>
  