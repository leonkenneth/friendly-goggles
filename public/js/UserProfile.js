class UserProfile extends React.Component {
  render() {
    const { id } = this.props;

    return <div>
      <h1>User profile #{id}</h1>
    </div>
  }
}
