import React from 'react';

import { Image } from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignIn() {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                {/*  <Input
                style={{ marginTop: 30 }}
                icon="call"
                placeholder="digite seu nome"
            /> */}

                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="digite seu email"
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        keyboardType="email-address"
                        placeholder="sua senha secreta"
                    />

                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => {}}>
                    <SignLinkText> Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
