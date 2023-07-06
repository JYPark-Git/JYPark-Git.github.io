export class Component {
  constructor(payload = {}) {
    const {
      tagName = 'div',
      state = {},
      props = {},
    } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;

    this.render();
  }
  render() {
    // ...
  }
}

function routesRender(routes) {
  if(!location.hash) {
    history.replaceState(null, '', '/#/');
  }

  const [hash, queryString = ''] = location.hash.split('?');
  const routerView = document.querySelector('router-view');

  const curRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash));

  if(!curRoute) {
    alert('존재하지 않는 페이지입니다.');
    return;
  }
  routerView.innerHTML = '';
  routerView.append(
    new curRoute.component().el
  );

  window.scrollTo(0, 0);
}
export function createRouter(routes) {
  return () => {
    window.addEventListener('popstate', () => {
      routesRender();
    });
    routesRender(routes);
  }
}