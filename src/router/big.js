const Big = (resolve) => {
  import('@/components/big').then((module) => {
    resolve(module)
  })
}
const order = [{
  path: 'big',
  component: Big,
  name: 'big',
  meta: { title: '重大事项监督' }
}
]
export default order
