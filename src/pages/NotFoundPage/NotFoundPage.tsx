import { Link } from 'react-router-dom'

import { Container } from 'layout/Container'

export const NotFoundPage = () => (
  <Container>
    <h1 className='ui-title-1 mb-4 text-center'>
      404 - NotFound
    </h1>
    <p className='text-center'>
      Page not found. Visit <Link className='ui-link' to='/'>Home page</Link>.
    </p>
  </Container>
)
