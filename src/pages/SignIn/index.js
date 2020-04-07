import React, { useRef } from 'react';

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

export default function SignIn({ navigation }) {
    const passwordRef = useRef();

    function handleSubmit() {}

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
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        keyboardType="email-address"
                        placeholder="sua senha secreta"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />

                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>

                <SignLink
                    onPress={() => {
                        navigation.navigate('signUp');
                    }}
                >
                    <SignLinkText> Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
