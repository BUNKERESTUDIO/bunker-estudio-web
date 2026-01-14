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
    <Flex 
        fillWidth 
        gap="l" 
        className="mobile-column" // Añadimos esta clase personalizada
        s={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'flex-start' 
        }}
    >
        {/* Estilo local para forzar la columna en móvil sin romper el PC */}
        <style jsx>{`
            @media (max-width: 768px) {
                :global(.mobile-column) {
                    flex-direction: column !important;
                }
            }
        `}</style>

        {/* 1. Miniatura: Se adapta al ancho en móvil */}
        <Flex 
            flex={4} 
            style={{ width: '100%' }} 
            s={{ maxWidth: '200px', minWidth: '150px' }}
        >
            <Carousel
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 960px) 100vw, 200px"
                items={images.map((image) => ({
                    slide: image,
                    alt: title,
                }))}
            />
        </Flex>

        {/* 2. Contenedor de texto */}
        <Flex
            flex={8}
            fillWidth
            paddingX="s"
            gap="m"
            direction="column" // En PC el texto interno suele ir en columna
        >
        {/* Título */}
        {title && (
          <Flex flex={5}> 
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}

        {/* Descripción y Enlaces */}
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
            </Flex>
          </Column>
        )}
      </Flex>
    </Flex>
  );
};
