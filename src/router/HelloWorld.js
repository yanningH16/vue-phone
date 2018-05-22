import big from './big';
import handWork from './handWork';
import lookGlobal from './lookGlobal';
import notice from './notice';
import planning from './planning';
import search from './search';
import statistical from './statistical';
import err from './err';
const Home = resolve => {
  import('../components/HelloWorld').then(module => {
    resolve(module);
  });
};
const defaultHome = [
  {
    path: '/HelloWorld',
    redirect: {
      name: 'planning'
    }
  }
];
const home = [
  {
    path: '/',
    component: Home,
    name: 'HelloWorld',
    children: [
      ...defaultHome,
      ...big,
      ...handWork,
      ...lookGlobal,
      ...notice,
      ...planning,
      ...search,
      ...statistical,
      ...err
    ]
  }
];
export default home;
