"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Flex fillWidth gap="l" s={{ direction: "row", alignItems: "flex-start" }}>
      {/* 1. Columna de la miniatura (Ancho fijo máximo) */}
      <Flex flex={4} style={{ maxWidth: '200px', minWidth: '150px' }}>
        <Carousel
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 960px) 100vw, 200px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      </Flex>

      {/* 2. Contenedor principal de texto (Dividido en dos columnas) */}
      <Flex
        flex={8}
        s={{ direction: "row" }} // Alineamos Título y Datos de lado
        fillWidth
        paddingX="s"
        gap="xl"
      >
        {/* Columna A: El Título */}
        {title && (
          <Flex flex={5}> 
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}

        {/* Columna B: Descripción y Enlaces */}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}

            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Ver trabajo</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Flex>
  );
};
