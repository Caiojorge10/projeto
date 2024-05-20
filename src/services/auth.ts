// src/api/auth.ts
import axios from 'axios';

interface LoginResponse {
  token: string;
}

interface LoginError {
  message: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('https://api.homologation.cliqdrive.com.br/auth/login/', {
      email,
      password,
    }, {
      headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw new Error('Network error');
    }
  }
};
