import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Anchor = glamorous.a(props => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    ':hover': {
      textDecoration: props.href ? 'underline' : 'none',
    },
  }
}, ({
  color = '#000',
  fontFamily = 'sans-serif',
}) => ({
  color,
  fontFamily
}));

const Heart = glamorous.span({
  color: 'red',
  margin: '0 6px',
});

const Avatar = glamorous.img({
  width: '30px',
  height: '30px',
  display: 'block',
  margin: '0 6px',
  borderRadius: '50%',
});

const Signo = props => (
  <Anchor
    color={ props.color }
    fontFamily={ props.fontFamily }
    href={ props.link }
    target="_blank"
    rel="noopener noreferrer"
    title={ `Link to ${props.name}'s profile` }
  >
    Made with <Heart>❤</Heart> by {props.avatarUrl && <Avatar alt={`Picture of ${props.name}`} src={ props.avatarUrl } />} { props.name }
  </Anchor>
)

Signo.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
}

Signo.defaultProps = {
  name: 'Anonymus'
}

export default Signo;
