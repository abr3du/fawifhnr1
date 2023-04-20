<template>
  <div>
    <h2>Gallery</h2>
    <div class="images">
      <div v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.title" />
        <div>{{ image.title }}</div>
        <div>{{ image.description }}</div>
      </div>
    </div>
    <form @submit.prevent="addImage">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="newImage.title" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="newImage.description"></textarea>
      </div>
      <div>
        <label for="file">Image</label>
        <input type="file" id="file" @change="onFileChange" />
      </div>
      <button type="submit">Add Image</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '@/firebase'

export default {
  data() {
    return {
      images: [],
      newImage: {
        title: '',
        description: '',
        file: null,
        url: ''
      }
    }
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    async loadImages() {
      const snapshot = await db.collection('images').get()
      this.images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    },
    onFileChange(event) {
      this.newImage.file = event.target.files[0]
    },
    async addImage() {
      const storageRef = firebase.storage().ref()
      const fileRef = storageRef.child(`images/${this.newImage.file.name}`)
      const snapshot = await fileRef.put(this.newImage.file)
      const url = await snapshot.ref.getDownloadURL()
      const image = {
        title: this.newImage.title,
        description: this.newImage.description,
        url: url
      }
      await db.collection('images').add(image)
      this.images.push(image)
    }
  }
}
</script>