import { Button, PasswordInput, Stack, TextInput, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from './auth.schema';

export function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('LOGIN DATA:', data);
  };

  return (
    <AuthLayout>
      <Text size="lg" fw={700} ta="center" mb="md" c="white">
        Login
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="sm">
          <TextInput
            label="Email"
            placeholder="you@example.com"
            radius="lg"
            c="white"
            {...register('email')}
            error={errors.email?.message}
          />
          <PasswordInput
            label="Password"
            placeholder="password"
            radius="lg"
            c="white"
            {...register('password')}
            error={errors.password?.message}
          />
          <Button type="submit" radius="lg" fullWidth mt="sm">
            Login
          </Button>
        </Stack>
      </form>
      <Text ta="center" mt="sm" c="gray.4" size="sm">
        Not registered?{' '}
        <Anchor component={Link} to="/signup" c="blue.4">
          Create an account
        </Anchor>
      </Text>
    </AuthLayout>
  );
}
