<template>
  <div>
    <select v-model="selectedBranch" @change="redirectToLocation">
      <option value="">Select Branch</option>
      <option value="branch1">Inasal</option>
      <option value="branch2">Al rigga</option>
    </select>
    <select v-if="selectedBranch === 'branch2'" v-model="selectedLocation" @change="redirectToSelectedLocation">
      <option value="">Select Location</option>
      <option value="location">Riqqa AI Buteen Plaza - 8 5A Street - Deira - Dubai</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBranch: '',
      selectedLocation: '',
    };
  },
  methods: {
    redirectToLocation() {
      if (this.selectedBranch === 'branch1') {
        window.location.href = '#';
      }
    },
    redirectToSelectedLocation() {
      if (this.selectedLocation === 'location') {
        window.location.href = '#';
      }
    },
  },
};
</script>

<style>
select {
  background-color: #fff;
  border: none;
  color: #333;
  font-size: 12px;
  padding: 8px;
}

option {
  font-size: 16px;
}
</style>
