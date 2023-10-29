import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SnapchatClone">
    <Container>
      <Title>
        Snapchat Clone <Badge>2021</Badge>
      </Title>
      <P>A Snapchat clone simulating the camera interface</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://snapchat-clone-e1f4b.web.app/">
            https://snapchat-clone-e1f4b.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span> React.js, Styled Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/snap_1.png" alt="Snapchat" />
      <WorkImage src="/images/projects/snap_2.png" alt="Snapchat" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
