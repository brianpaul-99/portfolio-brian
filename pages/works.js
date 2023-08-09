import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSpotify from '../public/images/projects/spotify_thumb.png'
import thumbAmazon from '../public/images/projects/amazon_thumb.png'
import thumbAT from '../public/images/projects/a&t_thumb.png'
import thumbBakery from '../public/images/projects/bakery_thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="a&t"
            thumbnail={thumbAT}
            title="A&T Human Resources"
          >
            Collaborated on a website for a job recruitment agency
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="bakery"
            thumbnail={thumbBakery}
            title="Francesca Bakery"
          >
            Local bakery selling an assortment of baked goods and catering
            services
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="spotifyClone"
            title="Spotify Clone"
            thumbnail={thumbSpotify}
          >
            A basic spotify clone integrated with the Spotify API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="amazonClone"
            title="Amazon Clone"
            thumbnail={thumbAmazon}
          >
            Amazon clone with shopping cart functionality
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
