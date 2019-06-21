{React.Children.map(this.props.children, child => {
  /* only direct children */

  /* if statements everywhere! */
  if (child.type.displayName === 'Thing') {}

  if (child.type.displayName === 'OtherThing') {}
})}
