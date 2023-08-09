import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        A&T Human Resources <Badge>2023</Badge>
      </Title>
      <P>
        This is a website for a job recruitment agency that needed redesigning
        and small feature chnages for their landing and contact page. I used
        their existing codebase and added carousel features as well as addded
        the footer section to their website. Furthermore, I redesigned their
        contact page to have a more responsive structure for mobile.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.athumanresources.com/" target="_blank">
              https://www.athumanresources.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>React.js, Wordpress</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/a&t_1.png" alt="A&T" />
      <WorkImage src="/images/projects/a&t_2.png" alt="A&T" />
      <WorkImage src="/images/projects/a&t_3.png" alt="A&T" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
