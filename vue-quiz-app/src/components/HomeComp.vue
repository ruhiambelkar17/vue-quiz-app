<script setup>



</script>

<template>
   <div>
    <h1>Sign Up</h1>
    <hr>
    <form>
  <div class="mb-3">
    <label for="fullname" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="fullname" name="fullname" >
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
   </div>
    

  
</template>

<style scoped>

</style>
