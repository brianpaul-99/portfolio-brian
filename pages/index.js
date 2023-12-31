import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {
  BioContainer,
  BioSection,
  BioYear,
  BoxSection,
  LineSection,
  Separator
} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, welcome to my portfolio website!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brian Paul
          </Heading>
          <p>Digital Creator ( Architect / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/brian.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelance and a full-stack developer based in Toronto with a
          passion for building digital services/stuff he wants. I have a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, I love
          hanging out at the gym and enjoying nature. Currently, I am
          enthusiastically looking to join a company to bring my skills to and
          grow alongside it.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioContainer>
          <LineSection />

          <BoxSection>
            <BioSection>
              <BioYear>2021</BioYear>
              <br /> Completed a degree in Bachelor of Science for Computer
              Science at Toronto Metropolitan University (Ryerson)
            </BioSection>
            <BioSection>
              <BioYear>2021 - 2022</BioYear>
              <br />
              Worked at LitKit as a Full-stack Software Engineer,{' '}
              <i>a Toronto based startup developing a nightlife POS platform</i>
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              <br />
              Worked at Amazon as a Software Development Engineer I,{' '}
              <i>
                where I worked as part of the Contra COGS Team that dealt with
                vendors on Amazon
              </i>
            </BioSection>
            <BioSection>
              <BioYear>2023</BioYear>
              <br />
              Worked at A&T Human Resources as a Software Developer,{' '}
              <i>
                where I contributed to their existing servers and client
                acquisition platforms
              </i>
            </BioSection>
          </BoxSection>
        </BioContainer>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Hikes, Mindfullness, Basketball, Working out, Coding
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/brianpaul-99" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @brianpaul-99
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/brian-paul-3854001a0/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Brian Paul
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Button
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            onClick={() =>
              window.open(
                'mailto:paulbrian4a@gmail.com?subject=Subject&body=Body%20goes%20here'
              )
            }
          >
            Contact Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
