import { Group, TextInput, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/catalog?keyword=${encodeURIComponent(query)}&page=1`);
    setQuery('');
  };

  return (
    <Group gap="xl">
      <TextInput
        radius="lg"
        size="sm"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <Anchor component={Link} to="/catalog" underline="never" c="white" fw={500} fz="xl">
        Catalog
      </Anchor>
      <Anchor component={Link} to="/social" underline="never" c="white" fw={500} fz="xl">
        Social
      </Anchor>
    </Group>
  );
}
