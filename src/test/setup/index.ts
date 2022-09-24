import mongoose from 'mongoose'

beforeAll(async () => {
  await mongoose.connect(global.mongoUri)
})



afterAll(async () => {
  await mongoose.disconnect()
})


