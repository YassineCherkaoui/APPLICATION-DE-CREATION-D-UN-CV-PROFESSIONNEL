<template>
  <div>
    <form class="container">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="desc"
        ></textarea>
      </div>

 <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="email" class="form-control" id="phone" v-model="phone" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="email"
          class="form-control"
          id="address"
          v-model="adress"
        />
      </div>
      <div class="form-group">
        <label for="github">Github</label>
        <input type="email" class="form-control" id="github" v-model="github" />
      </div>


<div class="form-group">
          <label for="company">COMPANY</label>
          <input
            type="text"
            class="form-control"
            id="company"
            v-model="company"
          />
        </div>
        <div class="form-group">
          <label for="post">POST</label>
          <input
            type="text"
            class="form-control"
            id="post"
            v-model="post"
          />
        </div>
<div class="form-group">
          <label for="postdisc">POST DESC</label>
          <input
            type="text"
            class="form-control"
            id="postdisc"
            v-model="postdisc"
          />
        </div>
         <div class="row">
          <div class="col-md">
            <div class="form-group">
              <label for="from">FROM</label>
              <input
                type="number"
                class="form-control"
                id="from"
                v-model="from"
              />
            </div>
          </div>
          <div class="col-md">
            <div class="form-group">
              <label for="TO">TO</label>
              <input
                type="number"
                class="form-control"
                id="to"
                v-model="to"
              />
            </div>
          </div>
        </div>


        <div class="form-group">
        <label for="about">about me</label>
        <textarea
          class="form-control"
          id="about"
          rows="3"
          v-model="about"
        ></textarea>
      </div>

      <button class="btn btn-warning" @click.prevent="submit">
        PERSONNEL INFORMATION
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NameAndDesc",
  data() {
    return {
      // myName: "",
      // myDesc: ""
            myName: "",
      myDesc: "",
      myEmail: "",
      myPhone: "",
      myAdress: "",
      myGitHub: "",

                company: "",
          post: "",
          postdisc: "",
          from: "",
          to: "",
    };
  },
  computed: {
    // this.$store.state.name = this.name
    // this.$store.state.desc = this.desc
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },




    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
     adress: {
      get() {
        return this.$store.state.adress;
      },
      set(value) {
        this.$store.commit("setAdress", value);
      },
    },
        github: {
      get() {
        return this.$store.state.github;
      },
      set(value) {
        this.$store.commit("setGitHub", value);
      },
    },
    desc: {
      get() {
        return this.$store.state.desc;
      },
      set(value) {
        this.$store.commit("setDesc", value);
      },
    },
    about: {
      get() {
        return this.$store.state.about;
      },
      set(value) {
        this.$store.commit("setAbout", value);
      },
    },



     company: {
      get() {
        return this.$store.state.company;
      },
      set(value) {
        this.$store.commit("setCompany", value);
      },
    },
     post: {
      get() {
        return this.$store.state.post;
      },
      set(value) {
        this.$store.commit("setPost", value);
      },
    },
        postdisc: {
      get() {
        return this.$store.state.postdisc;
      },
      set(value) {
        this.$store.commit("setPostdisc", value);
      },
    },

        from: {
      get() {
        return this.$store.state.from;
      },
      set(value) {
        this.$store.commit("setFrom", value);
      },
    },

        to: {
      get() {
        return this.$store.state.to;
      },
      set(value) {
        this.$store.commit("setTo", value);
      },
    },


  },


  methods: {
    submit: function () {
      this.myName = this.$store.state.name;
      this.myDesc = this.$store.state.desc;
      this.myEmail = this.$store.state.email;
      this.myPhone = this.$store.state.phone;
      this.myAdress = this.$store.state.adress;
      this.myGitHub = this.$store.state.github;


      this.company = this.$store.state.company;
      this.post = this.$store.state.post;
      this.postdisc = this.$store.state.postdisc;
      this.from = this.$store.state.from;
      this.to = this.$store.state.to;




      this.$router.push({ path: "cv" });
    },
  },
};
</script>

<style></style>
