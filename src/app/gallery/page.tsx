import { Flex, Meta, Schema, Column, Row, Text, Heading } from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Estudio - Bunker Estudio",
    description: "Equipamiento técnico y visual del Bunker Estudio.",
    baseURL: baseURL,
    image: "https://bunker-estudio-web.vercel.app/images/og/home.jpg",
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l" fillWidth direction="column" gap="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Estudio"
        description="Equipamiento técnico y visual del Bunker Estudio."
        path={gallery.path}
        image={`images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Bloque de Video en Bucle 🎥 */}
      <Flex 
        fillWidth 
        radius="l" 
        overflow="hidden" 
        aspectRatio="16 / 9" 
        border="neutral-alpha-weak"
        style={{ position: 'relative' }}
      >
        <video
          src="/images/projects/project-01/videoweb.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block' 
          }}
        />
      </Flex>

      {/* Listado de Material Técnico Centrado 🛠️ */}
      <Column fillWidth gap="32" paddingX="m" marginBottom="xl" align="center">
        <Heading variant="display-strong-s" align="center">
          El Arsenal del Búnker
        </Heading>

        <Row gap="48" wrap fillWidth horizontal="center">
          {/* Columna: Previos y Conversión */}
          <Column flex={1} minWidth={240} gap="12" align="center">
            <Text variant="heading-strong-m" onBackground="neutral-medium" align="center">
              Previos y Conversión 🎛️
            </Text>
            <Text variant="body-default-m" align="center" style={{ whiteSpace: 'pre-line' }}>
              • Audient iD44{"\n"}
              • Clarett+ Octopre{"\n"}
              • Sound Skulptor MP573
            </Text>
          </Column>

          {/* Columna: Microfonos */}
          <Column flex={1} minWidth={240} gap="12" align="center">
            <Text variant="heading-strong-m" onBackground="neutral-medium" align="center">
              Microfonos 🎙️
            </Text>
            <Text variant="body-default-m" align="center" style={{ whiteSpace: 'pre-line' }}>
              • Neumann U87{"\n"}
              • sE Electronics V7X{"\n"}
              • Lewitt LCT 240 (Par){"\n"}
              • T.Bone RB100{"\n"}
              • Behringer BA-19{"\n"}
              • Audio-Technica AT2020{"\n"}
              • 2x Sennheiser e604
            </Text>
          </Column>

          {/* Columna: Bateria */}
          <Column flex={1} minWidth={240} gap="12" align="center">
            <Text variant="heading-strong-m" onBackground="neutral-medium" align="center">
              Bateria 🥁
            </Text>
            <Text variant="body-default-m" align="center">
              • Sonor Select Force
            </Text>
          </Column>
        </Row>
      </Column>
    </Flex>
  );
}
