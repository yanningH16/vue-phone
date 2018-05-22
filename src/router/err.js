const Err = (resolve) => {
  import('@/components/err').then((module) => {
    resolve(module)
  })
}
const err = [{
  path: 'err',
  component: Err,
  name: 'err',
  meta: { title: '权限限制' }
}
]
export default err
