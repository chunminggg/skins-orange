import store from './store'
import component from './index.vue'
import preview from './preview.png'
console.log('this is npm link module')
export default {
  component,
  store,
  options: {
    name: '靓丽',
    code: 'orange',
    preview,
    themes: [
      {
        name: 'default',
        color: '#03a9f4'
      },
      {
        name: 'blue-light',
        color: '#e4e7ed'
      },
      {
        name: 'green',
        color: '#00a65a'
      },
      {
        name: 'green-light',
        color: '#e4e7ed'
      },
      {
        name: 'orange',
        color: '#e6a23c'
      },
      {
        name: 'orange-light',
        color: '#e4e7ed'
      },
      {
        name: 'pink',
        color: '#eac4db'
      },
      {
        name: 'pink-light',
        color: '#e4e7ed'
      }
    ]
  }
}
