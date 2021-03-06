import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';

import { Card, Input, Button, Label, Link } from '../components/ui';

import { signupFlow } from '../redux/modules/user';

@connect(({ user }) => ({ user }), { signupFlow })
export default class SignUp extends Component {
  static propTypes = {
    signupFlow: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.signupSubmit = this.signupSubmit.bind(this);
  }

  signupSubmit(e) {
    e.preventDefault();
    this.props.signupFlow({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  }

  render() {
    return (
      <Flex align="center" justify="center" py={3}>
        <Box w={320}>
          <Card bordered>
            <Box mb={2}>
              <h1>Sign Up</h1>
            </Box>
            <form onSubmit={this.signupSubmit}>
              <Box mb={2}>
                <Label>Name</Label>
                <Input name="name" />
              </Box>
              <Box mb={2}>
                <Label>Email</Label>
                <Input type="email" name="email" />
              </Box>
              <Box mb={2}>
                <Label>Password</Label>
                <Input type="password" name="password" />
              </Box>
              <Button primary block>Sign Up</Button>
              <Flex mt={2} justify="center">
                <Link to="/login">Login here</Link>
              </Flex>
            </form>
          </Card>
        </Box>
      </Flex>
    );
  }
}
