import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amazonClone">
    <Container>
      <Title>
        amazon clone<Badge>2022</Badge>
      </Title>
      <P>
        This is an amazon clone that has user authentication. Items on the
        homepage can be added to the shopping cart and they can be removed from
        the cart in shopping cart UI. A fake checkout functionality is also
        added using Stripe API where user can enter card number (for this
        simulation typing 4 and 2 simultaneously until the end of the card
        number will allow for valid checkout).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://clone-6d92d.web.app/">
            https://clone-6d92d.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Node.js, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/amazon_auth.png" alt="amazon" />
      <WorkImage src="/images/projects/amazon_home.png" alt="amazon" />
      <WorkImage src="/images/projects/amazon_cart.png" alt="amazon" />
      <WorkImage src="/images/projects/amazon_payment.png" alt="amazon" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
