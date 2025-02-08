<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">Input</a></li>
      <li><a href="#">Analyze</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: green;
  padding: 15px;
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar li {
  display: inline;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }
  .navbar ul {
    flex-direction: column;
    gap: 10px;
  }
}
</style>