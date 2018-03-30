const LookGlobal = (resolve) => {
  import('@/components/lookGlobal').then((module) => {
    resolve(module)
  })
}
const lookGlobal = [{
  path: 'lookGlobal',
  component: LookGlobal,
  name: 'lookGlobal',
  meta: { title: '纵览全局' }
}
]
export default lookGlobal
