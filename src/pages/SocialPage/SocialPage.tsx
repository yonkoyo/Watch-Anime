import { Center, Stack, Title, Text } from '@mantine/core';
import { PageLayout } from '../AnimePage/PageLayout';

export function SocialPage() {
  return (
    <PageLayout>
      <Center h="60vh">
        <Stack align="center" gap="sm">
          <Title c="white">🚧 Social Page</Title>
          <Text c="gray.4" size="lg">
            This section is currently under maintenance.
          </Text>
          <Text c="gray.5" size="sm">
            We're working on something awesome. Stay tuned!
          </Text>
        </Stack>
      </Center>
    </PageLayout>
  );
}
