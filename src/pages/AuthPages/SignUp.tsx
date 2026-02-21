import { Button, PasswordInput, Stack, TextInput, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpFormData } from './auth.schema';

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log('SIGN UP DATA:', data);
  };

  return (
    <AuthLayout height={420}>
      <Text size="lg" fw={700} ta="center" mb="md" c="white">
        Sign up to Watch Anime
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
          <TextInput
            label="Username"
            placeholder="username"
            radius="lg"
            c="white"
            {...register('username')}
            error={errors.username?.message}
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
            Sign up
          </Button>
        </Stack>
      </form>
      <Text ta="center" mt="sm" c="gray.4" size="sm">
        Already have an account?{' '}
        <Anchor component={Link} to="/login" c="blue.4">
          Login
        </Anchor>
      </Text>
    </AuthLayout>
  );
}
