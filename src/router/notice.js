const Notice = (resolve) => {
  import('@/components/notice').then((module) => {
    resolve(module)
  })
}
const notice = [{
  path: 'notice',
  component: Notice,
  name: 'notice',
  meta: { title: '通知公告' }
}
]
export default notice
