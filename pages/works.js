import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { useState } from 'react'

import thumbSpotify from '../public/images/projects/spotify_thumb.png'
import thumbAmazon from '../public/images/projects/amazon_thumb.png'
import thumbAT from '../public/images/projects/a&t_thumb.png'
import thumbBakery from '../public/images/projects/bakery_thumb.png'
import thumbSnapchat from '../public/images/projects/snap_thumb.png'

const Works = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3} setHovered={() => setHovered('a&t')} id="a&t">
            <WorkGridItem
              id="a&t"
              thumbnail={thumbAT}
              title="A&T Human Resources"
              hovered={hovered}
            >
              Collaborated on a website for a job recruitment agency
            </WorkGridItem>
          </Section>
          <Section
            delay={0.3}
            setHovered={() => setHovered('bakery')}
            id="bakery"
          >
            <WorkGridItem
              id="bakery"
              thumbnail={thumbBakery}
              title="Francesca Bakery"
              hovered={hovered}
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
          <Section
            setHovered={() => setHovered('spotifyClone')}
            id="spotifyClone"
          >
            <WorkGridItem
              id="spotifyClone"
              title="Spotify Clone"
              thumbnail={thumbSpotify}
              hovered={hovered}
            >
              A basic spotify clone integrated with the Spotify API
            </WorkGridItem>
          </Section>
          <Section
            setHovered={() => setHovered('amazonClone')}
            id="amazonClone"
          >
            <WorkGridItem
              id="amazonClone"
              title="Amazon Clone"
              thumbnail={thumbAmazon}
              hovered={hovered}
            >
              Amazon clone with shopping cart functionality
            </WorkGridItem>
          </Section>
          <Section
            setHovered={() => setHovered('snapchatClone')}
            id="snapchatClone"
          >
            <WorkGridItem
              id="snapchatClone"
              title="Snapchat Clone"
              thumbnail={thumbSnapchat}
              hovered={hovered}
            >
              A snapchat app styled clone with camera function
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
