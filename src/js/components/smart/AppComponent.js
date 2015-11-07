import React from 'react';

export default function AppComponent(props) {
  return (
    <div>{props.children}</div>
  );
}

AppComponent.propTypes = {
  children: React.PropTypes.object.isRequired
};
