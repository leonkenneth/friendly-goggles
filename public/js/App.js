class App extends React.Component {
  render() {
    return <Router routes={{
      "/users": () => <UserList />,
      "/users/(\\d+)": (id) => <UserProfile id={id} />
    }} defaultRoute="/users" />
  }
}
