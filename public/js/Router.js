class Router extends React.Component {
  state = {
    matchingRoute: null,
    matchingRouteRenderer: null
  }

  componentDidMount() {
    this.checkHash();
  }

  componentWillUnmount() {
    if (this.checkHashHandler)
      this.checkHashHandler();
  }

  checkHash = () => {
    const { routes, defaultRoute } = this.props;

    const currentHash = window.location.hash.substring(1);
    let anyMatch = false;
    let groups = null;

    for (let routeRegexpExpr in routes) {
      const routeRegexp = new RegExp(`^${routeRegexpExpr}$`);
      const renderer = routes[routeRegexpExpr];

      if (groups = currentHash.match(routeRegexp)) {
        this.setState({
          matchingRoute: routeRegexpExpr,
          matchingRouteRenderer: () => renderer(groups[1], groups[2], groups[3])
        });
        anyMatch = true;
        break;
      }
    }

    if (!anyMatch) {
      window.location.hash = defaultRoute;
    }

    this.checkHashHandler = setTimeout(this.checkHash, 300)
  }

  render() {
    const { matchingRouteRenderer, matchingRoute } = this.state;

    if (!matchingRoute) return null;

    window.matchingRoute = matchingRoute;
    return matchingRouteRenderer();
  }
}
