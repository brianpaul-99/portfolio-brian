import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="bakery">
    <Container>
      <Title>
        bakery <Badge>2023</Badge>
      </Title>
      <P>
        Local bakery that needed some added features on their catering section
        of their website. Added multiple seemless carousels to showcase vaiours
        informations and reviews. Added dropdown menus for the cake description
        to allow users to easily view different options.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://francescabakery.com/">
            https://francescabakery.com/
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/bakery_1.png" alt="bakery" />
      <WorkImage src="/images/projects/bakery_2.png" alt="bakery" />
      <WorkImage src="/images/projects/bakery_3.png" alt="bakery" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
