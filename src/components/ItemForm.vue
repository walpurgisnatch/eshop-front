<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Name">
      <el-input v-model="item.name" placeholder="" clearable />
    </el-form-item>
    <el-form-item label="Description">
      <el-input v-model="item.description" :rows="10" type="textarea" placeholder="" />
    </el-form-item>
    <el-form-item label="Pictures">
      <el-upload
        v-model:file-list="fileList"
        action="http://localhost:5000/api/items/photos"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <el-form-item label="Cost">
      <el-input-number v-model="item.cost" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import EventService from '@/services/EventService.js'
import { ref } from 'vue'

export default {
  data() {
    return {
      item: {
        name: '',
        description: '',
        cost: 0
      },
      fileList: [],
      dialogImageUrl: ref(''),
      dialogVisible: ref(false)
    }
  },
  methods: {
    submit() {
      this.item.pictures = this.fileList.map((f) => f.name).join('; ')
      EventService.createItem(this.item)
        .then((response) => {
          if (response.status == 201) {
            this.$router.push({
              name: 'Item',
              params: { id: response.data }
            })
          }
        })
        .catch((error) => {
          console.log('There was an error: ', error)
        })
    },
    handleRemove(uploadFile, uploadFiles) {
      console.log(uploadFile, uploadFiles)
    },
    handlePictureCardPreview(uploadFile) {
      this.dialogImageUrl = uploadFile.url
      this.dialogVisible = true
    }
  },
  computed: {}
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.item {
  margin: 0 25px 25px;
  height: 400px;
  width: 100%;
  border: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.item:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}
.form {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding-right: 40px;
}
</style>
