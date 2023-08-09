import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SpotifyClone">
    <Container>
      <Title>
        Spotify Clone <Badge>2022</Badge>
      </Title>
      <P>
        A simple Spotify clone that uses the Spotify API to authenticate real
        time spotify users. Designed based on the basic layout of the spotify
        web app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://spotify-clone-ebaf8.web.app/">
            https://spotify-clone-ebaf8.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span> React.js, Firebase, Spotify API, Styled Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/spotify_auth.png" alt="Spotify" />
      <WorkImage src="/images/projects/spotify_home.png" alt="Spotify" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
