const Statistical = (resolve) => {
  import('@/components/statistical').then((module) => {
    resolve(module)
  })
}
const statistical = [{
  path: 'statistical',
  component: Statistical,
  name: 'statistical',
  meta: { title: '档案查询' }
}
]
export default statistical
