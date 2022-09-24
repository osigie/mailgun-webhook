const globalTeardown = async () => {
  await global.mongoServer.stop()
}

export default  globalTeardown
