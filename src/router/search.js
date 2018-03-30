const Search = (resolve) => {
  import('@/components/search').then((module) => {
    resolve(module)
  })
}
const search = [{
  path: 'search',
  component: Search,
  name: 'search',
  meta: { title: '档案查询' }
}
]
export default search
