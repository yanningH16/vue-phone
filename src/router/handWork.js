const HandWork = (resolve) => {
  import('@/components/handWork').then((module) => {
    resolve(module)
  })
}
const hand = [{
  path: 'handWork',
  component: HandWork,
  name: 'handWork',
  meta: { title: '公文办理' }
}
]
export default hand
