<template>
  <div class="select-wrapper">
    <select @change="onSelect">
      <option value="">Select Branch</option>
      <option value="branch1">Inasal</option>
      <option value="branch2">Al rigga</option>
    </select>
    <ul class="options">
      <li v-if="selectedBranch === 'branch1'">Inasal</li>
      <li v-if="selectedBranch === 'branch2'">Riqqa AI Buteen Plaza - 8 5A Street - Deira - Dubai</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBranch: "",
    };
  },
  methods: {
    onSelect(event) {
      this.selectedBranch = event.target.value;
      if (this.selectedBranch === "branch1") {
        window.location.href = "https://phrestaurantfrontend.vercel.app";
      } else if (this.selectedBranch === "branch2") {
        window.location.href = "/menu";
      }
    },
  },
};
</script>

<style>
.select-wrapper {
  position: relative;
}

select {
  background-color: #fff;
  border: none;
  color: #333;
  font-size: 16px;
  padding: 8px;
  width: 150px;
}

.options {
  position: absolute;
  top: 0;
  left: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: none;
}

.select-wrapper:hover .options {
  display: block;
}

.options li {
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
}

.options li:hover {
  background-color: #f5f5f5;
}
</style>
