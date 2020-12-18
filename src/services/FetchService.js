import axios from 'axios'

export default {
  async get (url) {
    try {
      const result = await axios.get(url)
      return result.data
    } catch (err) {
      console.log(err)
    }
  }
}
